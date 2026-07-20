import { type ReactNode } from "react";
import { type StaticImageData } from "next/image";
import HeartHackathonImage from "../../../public/conferences/HeartHackathon.jpg";
import ISMCSImage from "../../../public/conferences/ISMCS.jpg";
import CUBECImage from "../../../public/conferences/CUBEC.jpg";
import HeartHackathonFinalsImage from "../../../public/conferences/HeartHackathonFinals.jpg";
import LifeSciencesWeekImage from "../../../public/conferences/LifeSciencesWeek.jpg";

export type TimelineEntry = {
  date: string;
  location: string;
  name: string;
  description: ReactNode;
  image?: StaticImageData;
  aspect?: string; // Tailwind aspect-ratio class, defaults to "aspect-16/9"
};

// Events in chronological order
// Most recent events first
export const EVENTS: TimelineEntry[] = [
  {
    date: "Upcoming",
    location: "Suzhou, China",
    name: "Heart Hackathon Finals",
    description:
      "Building on our success, we are actively expanding our device capabilities to send an even larger delegation of members to compete at the next Heart Hackathon Finals.",
    image: HeartHackathonFinalsImage,
    aspect: "aspect-[4/3]",
  },
  { 
    date: "January 2026",
    location: "Calgary, Alberta",
    name: "Canadian University Biomedical Engineering Conference (CUBEC)",
    description: 
      "We headed to Calgary for CUBEC, diving into keynote presentations, student design competitions, and panel discussions with leading researchers and industry professionals. A career fair rounded things out, giving our members a shot at networking and professional development.",
    image: CUBECImage,
  },
  {
    date: "December 2025",
    location: "Vienna, Austria",
    name: "ISMCS Conference",
    description: (
      <>
        Our research abstract on the heart&apos;s pumping mechanism was selected
        for a poster presentation at the International Society for Mechanical 
        Circulatory Support (ISMCS) conference, showcasing our findings to top 
        global clinicians and industry leaders.
      </>
    ),
    image: ISMCSImage,
    aspect: "aspect-[4/3]",
  },
  {
    date: "December 2025",
    location: "Vienna, Austria",
    name: "Heart Hackathon Finals",
    description: (
      <>
        Alberta Heart sent three team members to the global finals as{" "}
        <span className="font-semibold text-dark-blue/90">
          the only Canadian team represented at the event.
        </span>{" "}
        We competed against international teams to pitch our total artificial
        heart technologies.
      </>
    ),
    image: HeartHackathonImage,
  },
  {
    date: "October 2025",
    location: "Canmore, Alberta",
    name: "Annual Biomedical Engineering Conference",
    description:
      "We brought our research closer to home, presenting our pumping mechanism innovations to regional researchers, mentors, and healthcare professionals at this student-focused interdisciplinary conference.",
  },
  {
    date: "September 2025",
    location: "Edmonton, Alberta",
    name: "Life Sciences Week Pitch Competition",
    description:
      "Former Project Manager, Saugat KC, delivered Alberta Heart's pitch at this annual event that brings together leaders, investors, and innovators from Alberta's health and life sciences community. The pitch earned Alberta Heart the 2nd Runner-Up prize, recognizing its innovation and market potential. Alberta Heart also participated as an exhibitor at the broader event, showcasing the project to Alberta's life sciences ecosystem.",
    image: LifeSciencesWeekImage,
  },
];
