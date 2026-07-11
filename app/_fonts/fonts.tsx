import localFont from 'next/font/local';

// need to get the font files from our local files
const norwester = localFont({
  src: "./norwester/norwester.otf",
  variable: "--font-norwester",
  display: "swap",
})

const dmSans = localFont({
  src: [
    { path: "./dmsans/DMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./dmsans/DMSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-dm-sans",
});

const glacialIndifference = localFont({
  src: [
    { path: "./glacialindifference/GlacialIndifference-Regular.otf", weight: "400", style: "normal" },
    { path: "./glacialindifference/GlacialIndifference-Italic.otf", weight: "400", style: "italic" },
    { path: "./glacialindifference/GlacialIndifference-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-glacial",
});

export { norwester, dmSans, glacialIndifference }