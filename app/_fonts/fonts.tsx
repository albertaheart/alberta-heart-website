import localFont from 'next/font/local';

// need to get the font files from our local files
const norwester = localFont({
  src: "./norwester/norwester.otf",
  variable: "--font-norwester",
  display: "swap",
})

const dmSans = localFont({
  src: [
    { path: "./_fonts/dmsans/DMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/dmsans/DMSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/dmsans/DMSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/dmsans/DMSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/dmsans/DMSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/dmsans/DMSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-dm-sans",
});

const glacialIndifference = localFont({
  src: [
    { path: "./_fonts/glacialindifference/GlacialIndifference-Regular.otf", weight: "400", style: "normal" },
    { path: "./_fonts/glacialindifference/GlacialIndifference-Italic.otf", weight: "400", style: "italic" },
    { path: "./_fonts/glacialindifference/GlacialIndifference-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-glacial",
});

export { norwester, dmSans, glacialIndifference }