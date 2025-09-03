import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Inter, Roboto, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights
  variable: "--font-poppins",
});

export const metadata = {
  title: "Blue Gobi Tours Admin Panel",
  description: "Admin panel for managing Blue Gobi Tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gray-50">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
