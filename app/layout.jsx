import Header from "@/components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata = {
  title: "Pick A Pile",
  description: "Create hma by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50`}>
        <Header />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
