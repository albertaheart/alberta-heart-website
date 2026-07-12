import { type StaticImageData } from "next/image";
import BennuLogo from "../../public/sponsors/bennu.png";
import CVSControl from "../../public/sponsors/cvs-control.png";
import ElkoLogo from "../../public/sponsors/elko-logo.png";
import HeartHackathonLogo from "../../public/sponsors/heart-hackthon-logo.png";
import UofaEnggLogo from "../../public/sponsors/uofa-engg-logo.png";

export type Sponsor = {
  name: string;
  logo: StaticImageData;
  tier: "basic" | "standard" | "premium" // basic < standard < premium
};

const SPONSORS_UNSORTED: Sponsor[] = [
  {
    name: "Bennu",
    logo: BennuLogo,
    tier: "basic",
  },
  {
    name: "CVS Control",
    logo: CVSControl,
    tier: "premium",
  },
  {
    name: "Heart Hackathon",
    logo: HeartHackathonLogo,
    tier: "basic",
  },
  {
    name: "University of Alberta Faculty of Engineering",
    logo: UofaEnggLogo,
    tier: "premium",
  },
  {
    name: "Elko",
    logo: ElkoLogo,
    tier: "basic",
  },
];

const TIER_RANK: Record<Sponsor["tier"], number> = {
  premium: 0,
  standard: 1,
  basic: 2,
};

/** Sponsors ordered premium first, then standard, then basic. */
export const SPONSORS: Sponsor[] = [...SPONSORS_UNSORTED].sort(
  (a, b) => TIER_RANK[a.tier] - TIER_RANK[b.tier]
);