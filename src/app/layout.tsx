import AppNavbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer";
import NavInfo from "@/components/navInfo";

export const metadata: Metadata = {
  title: "Aesop | Formulations for Skin, Hair & Body | Aesop Hong Kong Sar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavInfo />
        <AppNavbar />
        <div className="main-body">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
