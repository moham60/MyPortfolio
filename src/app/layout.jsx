import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import "react-loadly/styles.css";
import ThemeProvider from "./_components/ThemeProvider";
import Navbar from "./_components/navbar/Navbar";
import Cursor from "./_components/Cursor/Cursor";
import SocialContact from "./_components/SocialContact/SocialContact";
import Footer from "./_components/footer/Footer";
import BackgroundShapes from "./_components/BackgroundShapes/BackgroundShapes";


// 🧠 Fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// 📝 Metadata (Server-side only)
export const metadata = {
  title: {
    default: "Mohamed Abdelwahab | MERN Stack Developer",
    template: "%s | Mohamed Abdelwahab",
  },
  description:
    "Mohamed Abdelwahab is a passionate MERN Stack Developer building modern, responsive web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Mohamed Abdelwahab",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Front-End Developer",
    "Full-Stack Developer",
    "Portfolio",
    "Web Developer",
    "JavaScript",
    "TailwindCSS",
  ],
  authors: [{ name: "Mohamed Abdelwahab" }],
  creator: "Mohamed Abdelwahab",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohamed Abdelwahab Portfolio",
    title: "Mohamed Abdelwahab | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer building modern web apps with React, Next.js, Node.js, and MongoDB.",
    images: [
      {
        url: "/icon/profile.png",
        width: 800,
        height: 600,
        alt: "Mohamed Abdelwahab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Abdelwahab | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer building modern web apps with React, Next.js, Node.js, and MongoDB.",
    images: ["/icon/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon/profile.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${roboto.variable} relative antialiased bg-background text-text-primary`}>
        <ThemeProvider>
          
          <Navbar />
          <Cursor />
          <SocialContact />
          <BackgroundShapes />
          <main className="relative z-10 overflow-hidden bg-transparent">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
