import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: [""],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: [""],
// });

export const metadata = {
  title: "CoSolar",
  description: "Empresa de energía solar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=imagesearch_roller"
        />
      </head>
      <body /*lassName={`${geistSans.variable} ${geistMono.variable}`}*/>
        {children}
      </body>
    </html>
  );
}
