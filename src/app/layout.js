import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Quiz Academia",
  description: "A best online quiz platform for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="quizAcademia">
      <AuthProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
