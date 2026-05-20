import { useId } from "react";

/**
 * Capillaries
 *
 * Procedurally generated SVG capillary network with a "blood pulse" glow that
 * radiates outward through the vessels.
 *
 * Two stacked visual layers:
 *
 *   1. Baseline capillaries: faint red strokes, always visible, give the
 *      page a static anatomical background.
 *
 *   2. Glow wave: an animated radial gradient (a narrow band of bright red
 *      that travels outward from a chosen origin) which is MASKED to the
 *      exact shape of the capillaries. The mask hides the gradient
 *      everywhere except where a vessel sits, so only the capillaries
 *      themselves "light up" as the wave passes through them. Visually it
 *      reads as a pulse of blood flushing outward from the heart.
 *
 * Determinism
 *   A seeded PRNG (mulberry32) means the server and client generate the same
 *   paths, so there's no React hydration mismatch and no flash.
 *
 * Tweakability
 *   - `seed`         re-rolls the network
 *   - `density`      how aggressively branches subdivide (0..1)
 *   - `glow`         disable the glow wave entirely
 *   - `glowDuration` how long one pulse takes to travel out
 *   - `glowOriginX`  X coordinate (in viewBox units) where the pulse starts.
 *                    0 puts it at the SVG's left edge, useful when the SVG
 *                    is positioned on the right half of the page and you
 *                    want the pulse to appear to come from screen center.
 */

/**
 * mulberry32: small, fast, deterministic PRNG.
 * Math.random() can't be used here because it would produce different paths
 * on the server vs the client and trigger a hydration mismatch.
 */
function mulberry32(seed: number): () => number {
  let state = seed;
  return function () {
    let t = (state += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type CapillaryPath = {
  d: string;
  width: number;
};

/**
 * Recursive branch generator.
 *
 * Each call draws one curved segment from (x, y) in direction `angle`, then
 * recursively spawns 1–3 child branches from the endpoint with slightly
 * perturbed angles, shorter length, and thinner stroke. Recursion stops
 * when depth is exhausted or the stroke gets too thin.
 */
function generatePaths(
  seed: number,
  width: number,
  height: number,
  density: number,
): CapillaryPath[] {
  const rng = mulberry32(seed);
  const paths: CapillaryPath[] = [];

  const branch = (
    x: number,
    y: number,
    angle: number,
    length: number,
    thickness: number,
    depth: number,
  ) => {
    if (depth <= 0 || thickness < 0.2) return;

    // Endpoint of this segment.
    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    // Quadratic bezier control point: midpoint pushed perpendicular by a
    // small random amount. Gives each branch a gentle organic curve.
    const midX = (x + endX) / 2;
    const midY = (y + endY) / 2;
    const perpAngle = angle + Math.PI / 2;
    const curve = (rng() - 0.5) * length * 0.45;
    const ctrlX = midX + Math.cos(perpAngle) * curve;
    const ctrlY = midY + Math.sin(perpAngle) * curve;

    paths.push({
      d: `M ${x.toFixed(1)} ${y.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`,
      width: thickness,
    });

    // Spawn children. `density` (0..1) controls branch count per node.
    const childCount = 1 + Math.floor(rng() * (1 + density * 2));
    for (let i = 0; i < childCount; i++) {
      const spread = Math.PI / 3; // ~60° fan
      const newAngle = angle + (rng() - 0.5) * spread;
      const newLength = length * (0.55 + rng() * 0.3);
      const newThickness = thickness * (0.65 + rng() * 0.15);
      branch(endX, endY, newAngle, newLength, newThickness, depth - 1);
    }
  };

  // Trunks: only spawn from the right edge, top-right corner, and
  // bottom-right corner. Never from the left edge or the left portion of
  // the top/bottom edges. When the SVG is positioned over the right half of
  // the page, the SVG's left edge sits at screen center, and any trunk
  // there would look like a capillary "starting magically" in the middle of
  // the page. Constraining the spawn points to the right-side perimeter
  // makes every vessel appear to grow from the page edges inward toward the
  // logo, which is anatomically correct (thick trunks at the periphery,
  // fine tips near the heart).
  const trunks = [
    // Right edge: fan of trunks pointing leftward across the network.
    { x: width + 40, y: height * 0.15, angle: Math.PI - 0.3 },
    { x: width + 40, y: height * 0.4, angle: Math.PI - 0.1 },
    { x: width + 40, y: height * 0.6, angle: Math.PI + 0.1 },
    { x: width + 40, y: height * 0.85, angle: Math.PI + 0.3 },

    // Top edge, right portion: pointing down-left into the network.
    { x: width * 0.6, y: -40, angle: (3 * Math.PI) / 4 + 0.1 },
    { x: width * 0.85, y: -40, angle: Math.PI / 2 + 0.4 },

    // Bottom edge, right portion: pointing up-left into the network.
    { x: width * 0.65, y: height + 40, angle: (-3 * Math.PI) / 4 - 0.1 },
    { x: width * 0.85, y: height + 40, angle: -Math.PI / 2 - 0.4 },
  ];

  for (const t of trunks) {
    // Initial trunk length 200 and recursion depth 7 give roughly 50% more
    // reach than the defaults. Branches now extend deep into the network
    // toward the screen center instead of staying clustered near the right
    // edge.
    branch(t.x, t.y, t.angle, 200, 4, 7);
  }

  return paths;
}

type CapillariesProps = {
  /** Change to re-roll the network. */
  seed?: number;
  /** 0..1. How aggressively branches subdivide. */
  density?: number;
  /** SVG viewBox width. */
  width?: number;
  /** SVG viewBox height. */
  height?: number;
  /** Tailwind classes for positioning + sizing the wrapping <svg>. */
  className?: string;
  /** Enable the traveling glow wave. */
  glow?: boolean;
  /** Duration of one pulse, e.g. "3s". */
  glowDuration?: string;
  /**
   * X origin of the pulse, in viewBox units. Defaults to 0 (the SVG's left
   * edge). When the SVG is positioned on the right half of the page, 0
   * places the origin at screen center.
   */
  glowOriginX?: number;
  /** Y origin of the pulse. Defaults to vertical center of the viewBox. */
  glowOriginY?: number;
};

const Capillaries = ({
  seed = 7,
  density = 0.6,
  width = 900,
  height = 900,
  className = "",
  glow = true,
  glowDuration = "3s",
  glowOriginX,
  glowOriginY,
}: CapillariesProps) => {
  /*
    SVG-internal IDs need to be unique on the page so multiple <Capillaries />
    instances don't reference each other's mask/gradient. useId() gives a
    server-stable id; the regex strips colons because some SVG resolvers
    choke on them inside url(#...).
  */
  const rawId = useId().replace(/:/g, "");
  const maskId = `cap-mask-${rawId}`;
  const gradId = `cap-glow-${rawId}`;

  const paths = generatePaths(seed, width, height, density);

  // Default the pulse origin to (0, height/2): left edge, vertically
  // centered. This is the "screen center" anchor when the SVG covers the
  // right half of a page.
  const originX = glowOriginX ?? 0;
  const originY = glowOriginY ?? height / 2;

  // The gradient's radius is sized to reach diagonally across the rect from
  // the origin, so offset=1.0 lands at the far corner regardless of where
  // the origin sits.
  const gradientRadius = Math.hypot(
    Math.max(originX, width - originX),
    Math.max(originY, height - originY),
  );

  return (
    <svg
      className={`pointer-events-none text-light-red ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/*
          MASK: the capillary shapes as a white-on-black stencil.

          A mask in SVG: white = reveal, black = hide. We draw the entire
          rect black (hide everything by default), then redraw the capillary
          paths in white so the masked layer only shows where vessels are.
          The masked layer below is the moving glow gradient.
        */}
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={width}
          height={height}
        >
          <rect x={0} y={0} width={width} height={height} fill="black" />
          <g stroke="white" strokeLinecap="round" fill="none">
            {paths.map((p, i) => (
              <path key={i} d={p.d} strokeWidth={p.width} />
            ))}
          </g>
        </mask>

        {glow && (
          /*
            GLOW WAVE: a radial gradient with three animated stops forming
            a narrow band of bright red that travels outward from the
            origin point. Visualised on a 1D offset line:

                opacity:  0 ──── 1 ──── 0
                offset:   t-0.15  t     t+0.15        (band centered at t)

            All three stops animate their `offset` in lockstep over
            `glowDuration`. `t` starts at -0.2 (band is just left of origin,
            invisible) and travels to 1.2 (band has moved off the far edge,
            invisible). The brief gap between cycles gives the heartbeat a
            "pulse, pause, pulse" rhythm.

            gradientUnits="userSpaceOnUse" so cx/cy/r are interpreted in
            viewBox coordinates, not normalized to bounding box.
          */
          <radialGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            cx={originX}
            cy={originY}
            r={gradientRadius}
          >
            <stop offset="-0.2" stopColor="#bc1823" stopOpacity="0">
              <animate
                attributeName="offset"
                values="-0.3; 1.1"
                dur={glowDuration}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="-0.05" stopColor="#bc1823" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-0.15; 1.25"
                dur={glowDuration}
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.1" stopColor="#bc1823" stopOpacity="0">
              <animate
                attributeName="offset"
                values="0; 1.4"
                dur={glowDuration}
                repeatCount="indefinite"
              />
            </stop>
          </radialGradient>
        )}
      </defs>

      {/*
        Layer 1: baseline capillaries. Faint and always visible so the
        network reads even when the glow wave isn't passing through it.
      */}
      <g
        opacity="0.22"
        stroke="currentColor"
        strokeLinecap="round"
        fill="none"
      >
        {paths.map((p, i) => (
          <path key={i} d={p.d} strokeWidth={p.width} />
        ))}
      </g>

      {/*
        Layer 2: glow wave, masked to capillary shapes. A full-rect fill
        with the animated gradient, but the mask hides every pixel that
        isn't on a capillary, so the wave only appears as it illuminates
        the vessels.
      */}
      {glow && (
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={`url(#${gradId})`}
          mask={`url(#${maskId})`}
        />
      )}
    </svg>
  );
};

export default Capillaries;
