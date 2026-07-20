import { type StaticImageData } from "next/image";
import ArykaGordonImg from "../../public/team_members/project_leads/Aryka_Gordon.png";
import HendrikDuvenhageImg from "../../public/team_members/project_leads/Hendrik_Duvenhage.png";
import MatthewPierceImg from "../../public/team_members/electrical_and_embedded_systems_leads/Matthew_Pierce.png";
import KiraJordanImg from "../../public/team_members/electrical_and_embedded_systems_leads/Kira_Jordan.png";
import MatteaKrugImg from "../../public/team_members/pumping_mechanism_leads/Mattea_Krug.png";
import ZohanChanImg from "../../public/team_members/mcl_leads/Zohan_Chan.png";
import DanielMorozovImg from "../../public/team_members/mcl_leads/Daniel_Morozov.png";
import CohenChanImg from "../../public/team_members/alberta_bot_leads/Cohen_Chan.png";
import NatalieHuImg from "../../public/team_members/clinical_assurance_leads/Natalie_Hu.png";
import KrishChahalImg from "../../public/team_members/clinical_assurance_leads/Krish_Chahal.png";

export type Person = {
  name: string;
  imageLabel: string;
  blurb?: string;
  /** Real photo. Falls back to Placeholder when omitted. */
  image?: StaticImageData;
};

export type Team = {
  index: string;
  name: string;
  /** Short descriptor shown as an eyebrow under the index. */
  tagline: string;
  description: string;
  bullets: { label: string; text: string }[];
  /** Head(s) of this subteam. */
  leads: Person[];
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

/** Org-wide leadership, not tied to a single subteam. */
export const LEADERSHIP: Person[] = [
  {
    name: "Aryka Gordon",
    imageLabel: "Portrait of Aryka Gordon, Project Manager",
    blurb: "Project Manager",
    image: ArykaGordonImg,
  },
  {
    name: "Henju Duvenhage",
    imageLabel: "Portrait of Henju Duvenhage, Project Advisor",
    blurb: "Project Advisor",
    image: HendrikDuvenhageImg,
  },
];

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
    leads: [
      {
        name: "Matthew Pierce",
        imageLabel: "Portrait of Matthew Pierce, Electrical Team Lead",
        image: MatthewPierceImg,
      },
      {
        name: "Kira Jordan",
        imageLabel: "Portrait of Kira Jordan, Electrical Team Lead",
        image: KiraJordanImg,
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
    name: "Pumping Mechanism",
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
    ],
    leads: [
      { 
        name: "Mattea Krug", 
        imageLabel: "Portrait of Mattea Krug, Pumping Mechanism Team Lead", 
        image: MatteaKrugImg 
      },
    ],
    imageLabel: "Pump prototype on the workbench",
    imageBgClass: "bg-pumping-mechanism-light",
    accentTextClass: "text-pumping-mechanism",
    accentTextLightClass: "text-pumping-mechanism/40",
    accentBgClass: "bg-pumping-mechanism",
    accentBgLightClass: "bg-pumping-mechanism/30",
  },
  {
    index: "03",
    name: "Mock Circulatory Loop",
    tagline: "Testing & Validation",
    description:
      "Builds and runs the mock circulatory loop, a benchtop platform that mimics human circulation, to test and validate the pump under realistic physiological conditions.",
    bullets: [
      {
        label: "Loop Design",
        text: "Builds and maintains the benchtop circulatory loop used to simulate physiological flow.",
      },
      {
        label: "Validation",
        text: "Runs pump prototypes through the loop to validate performance against design targets.",
      },
      {
        label: "Data Acquisition",
        text: "Collects and analyzes pressure, flow, and washout data from test runs.",
      },
    ],
    leads: [
      {
        name: "Zohan Chan",
        imageLabel: "Portrait of Zohan Chan, Mock Circulatory Loop Team Lead",
        image: ZohanChanImg,
      },
      {
        name: "Daniel Morozov",
        imageLabel: "Portrait of Daniel Morozov, Mock Circulatory Loop Team Lead",
        image: DanielMorozovImg,
      },
    ],
    imageLabel: "Mock circulatory loop test rig running a pump prototype",
    imageBgClass: "bg-mock-circulatory-loop-light",
    accentTextClass: "text-mock-circulatory-loop",
    accentTextLightClass: "text-mock-circulatory-loop/40",
    accentBgClass: "bg-mock-circulatory-loop",
    accentBgLightClass: "bg-mock-circulatory-loop/30",
  },
  {
    index: "04",
    name: "Alberta Heart Bot",
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
    leads: [
      {
        name: "Cohen Chan",
        imageLabel: "Portrait of Cohen Chan, Alberta Bot Team Lead",
        image: CohenChanImg,
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
    index: "05",
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
    leads: [
      {
        name: "Natalie Hu",
        imageLabel: "Portrait of Natalie Hu, Clinical Assurance Team Lead",
        image: NatalieHuImg,
      },
      {
        name: "Krish Chahal",
        imageLabel: "Portrait of Krish Chahal, Clinical Assurance Team Lead",
        image: KrishChahalImg,
      },
    ],
    imageLabel: "Clinical assurance team reviewing risk and validation documents",
    imageBgClass: "bg-clinical-assurance-light",
    accentTextClass: "text-clinical-assurance",
    accentTextLightClass: "text-clinical-assurance/40",
    accentBgClass: "bg-clinical-assurance",
    accentBgLightClass: "bg-clinical-assurance/30",
  },
];
