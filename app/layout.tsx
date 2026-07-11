import type { Metadata } from "next";
// @ts-ignore: side-effect CSS import without type declarations
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { norwester, dmSans, glacialIndifference } from "./_fonts/fonts";

export const metadata: Metadata = {
	title: "Alberta Heart",
	description:
		"Alberta Heart (AB) is a student team competing in the Heart Hackathon, designing innovations for a Total Artificial Heart.",
	icons: {
		icon: "/brand/AB.svg",
	},
};

// define our root layout
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${norwester.variable} ${dmSans.variable} ${glacialIndifference.variable}`}
		>
			<body>
				<Header />

				{children}

				<Footer />
			</body>
		</html>
	);
}
