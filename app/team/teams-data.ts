export type Team = {
  index: string;
  name: string;
  /** Short descriptor shown as an eyebrow under the index. */
  tagline: string;
  description: string;
  bullets: { label: string; text: string }[];
  imageLabel: string;
  /** Light wash behind the image (the team's -light token). */
  imageBgClass: string;
  /** Team color applied to the name heading. */
  accentTextClass: string;
  /** Muted team color for the index number. */
  accentTextLightClass: string;
  /** Solid team color for the accent rule. */
  accentBgClass: string;
  /** Muted team color for the accent rule. */
  accentBgLightClass: string;
};

export const TEAMS: Team[] = [
  {
    index: "01",
    name: "Electrical and Embedded Systems",
    tagline: "Infrastructure & Intelligence",
    description:
      "Develops the sensing, control, power, and communication infrastructure required to keep the Total Artificial Heart running reliably under physiological conditions.",
    bullets: [
      {
        label: "Design & Programming",
        text: "Electronics, circuits, sensors, microcontrollers, and wireless energy transfer.",
      },
      {
        label: "System Integration",
        text: "Actuators, power supplies, and real-time monitoring tools.",
      },
      {
        label: "Safety & Control",
        text: "Feedback-based control systems, power management, and safety redundancy.",
      },
      {
        label: "Cross-Team Collaboration",
        text: "Works closely with mechanical, simulation, and testing teams.",
      },
    ],
    imageLabel: "Electrical team working on control hardware and circuits",
    imageBgClass: "bg-electrical-light",
    accentTextClass: "text-electrical",
    accentTextLightClass: "text-electrical/40",
    accentBgClass: "bg-electrical",
    accentBgLightClass: "bg-electrical/30",
  },
  {
    index: "02",
    name: "Pumping Mechanism & Mock Circulatory",
    tagline: "Architecture & Fluid Dynamics",
    description:
      "Designs, develops, and fabricates the core physical components of the heart, ensuring optimal fluid dynamics and structural integrity.",
    bullets: [
      {
        label: "Core Mechanics",
        text: "Component design for chambers, valves, and actuation architecture.",
      },
      {
        label: "Analysis & Modeling",
        text: "CAD modeling, stress analysis, and Computational Fluid Dynamics (CFD) to optimize washout.",
      },
      {
        label: "Fabrication",
        text: "Prototype manufacturing and integration with biocompatible materials and sensors.",
      },
      {
        label: "Validation",
        text: "Testing and validating builds using the mock circulatory loop.",
      },
    ],
    imageLabel: "Pump prototype and mock circulatory loop on the test bench",
    imageBgClass: "bg-mechanical-light",
    accentTextClass: "text-mechanical",
    accentTextLightClass: "text-mechanical/40",
    accentBgClass: "bg-mechanical",
    accentBgLightClass: "bg-mechanical/30",
  },
  {
    index: "03",
    name: "Alberta Bot",
    tagline: "Software & Automation",
    description:
      "Builds the internal software tools and automation pipelines that streamline operations and accelerate innovation across the entire club.",
    bullets: [
      {
        label: "Automation",
        text: "Eliminates manual effort by building workflow management tools and internal utilities.",
      },
      {
        label: "Data Systems",
        text: "Creates data-processing pipelines to handle testing and project data.",
      },
      {
        label: "Club Support",
        text: "Acts as a universal support team, optimizing processes for every other department.",
      },
    ],
    imageLabel: "Bot team members building internal software tooling",
    imageBgClass: "bg-admin-light",
    accentTextClass: "text-admin",
    accentTextLightClass: "text-admin/40",
    accentBgClass: "bg-admin",
    accentBgLightClass: "bg-admin/30",
  },
  {
    index: "04",
    name: "Clinical Assurance",
    tagline: "Safety, Compliance & Patient Focus",
    description:
      "Translates complex medical needs and anatomical constraints into engineering requirements, ensuring the device remains safe and clinically relevant.",
    bullets: [
      {
        label: "Design Inputs",
        text: "Defines physiological limits, anatomical space constraints, and surgical requirements.",
      },
      {
        label: "Risk Management",
        text: "Maintains the clinical risk profile, risk matrix, Clinical Interface Log, and failsafe requirements.",
      },
      {
        label: "Human Factors",
        text: "Oversees human-factors engineering, regulatory awareness, and validation criteria.",
      },
      {
        label: "Bridging the Gap",
        text: "Leads cross-team communication to keep engineering decisions grounded in patient safety.",
      },
    ],
    imageLabel: "Clinical assurance team reviewing risk and validation documents",
    imageBgClass: "bg-bio-light",
    accentTextClass: "text-bio",
    accentTextLightClass: "text-bio/40",
    accentBgClass: "bg-bio",
    accentBgLightClass: "bg-bio/30",
  },
];
