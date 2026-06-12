/**
 * EkgTrace
 *
 * The brand's EKG waveform as an SVG path. Self-draws then erases, looping
 * forever (pure SMIL, server-safe). Stroke follows `currentColor`.
 *
 * @param className - Classes for the `<svg>` wrapper (sizing, margins).
 * @param colorClassName - Text-color class that drives the stroke. Defaults to `text-light-red`.
 * @param strokeWidth - Stroke width in screen pixels (non-scaling). Defaults to 1.5.
 * @param duration - One draw-and-erase cycle length. Defaults to "3s".
 * @param animated - When false, renders the trace static and fully drawn. Defaults to true.
 * @param vertical - When true, renders the waveform top-to-bottom instead of left-to-right.
 * @returns An SVG element drawing the EKG waveform.
 */
const EkgTrace = ({
  className,
  colorClassName = "text-light-red",
  strokeWidth = 1.5,
  duration = "3s",
  animated = true,
  vertical = false,
}: {
  className?: string;
  colorClassName?: string;
  strokeWidth?: number;
  duration?: string;
  animated?: boolean;
  vertical?: boolean;
}) => {
  const horizontalPath =
    "M0 40 L120 40 L140 40 L150 30 L160 50 L170 10 L180 70 L190 40 L210 40 L290 40 L310 40 L320 30 L330 50 L340 10 L350 70 L360 40 L380 40 L600 40";
  // x and y axes swapped from the horizontal path; baseline at x=40 in an 80x600 viewBox.
  const verticalPath =
    "M40 0 L40 120 L40 140 L30 150 L50 160 L10 170 L70 180 L40 190 L40 210 L40 290 L40 310 L30 320 L50 330 L10 340 L70 350 L40 360 L40 380 L40 600";

  return (
    <svg
      className={className}
      viewBox={vertical ? "0 0 80 600" : "0 0 600 80"}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={vertical ? verticalPath : horizontalPath}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className={colorClassName}
        pathLength={1}
        strokeDasharray={animated ? "1" : undefined}
      >
        {animated && (
          <animate
            attributeName="stroke-dashoffset"
            from="1"
            to="-1"
            dur={duration}
            repeatCount="indefinite"
          />
        )}
      </path>
    </svg>
  );
};

export default EkgTrace;
