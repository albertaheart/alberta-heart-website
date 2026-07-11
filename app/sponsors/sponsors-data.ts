import { type StaticImageData } from "next/image";
import BennuLogo from "../../public/sponsors/bennu.png";
import CVSControl from "../../public/sponsors/cvs-control.png";
import ElkoLogo from "../../public/sponsors/elko-logo.png";
import HeartHackathonLogo from "../../public/sponsors/heart-hackthon-logo.png";
import UofaEnggLogo from "../../public/sponsors/uofa-engg-logo.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
};

export const SPONSORS: Sponsor[] = [
  {
    name: "Bennu",
    logo: BennuLogo,
  },
  {
    name: "CVS Control",
    logo: CVSControl,
  },
  {
    name: "Heart Hackathon",
    logo: HeartHackathonLogo,
  },
  {
    name: "University of Alberta Faculty of Engineering",
    logo: UofaEnggLogo,
  },
  {
    name: "Elko",
    logo: ElkoLogo,
  },
];