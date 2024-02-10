import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const NTSomic = localFont({
  src: [
    {
      path: "../../public/fonts/NTSomic-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NTSomic-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NTSomic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: "ЭVЕРЕСТ - электрические подстанции нового поколения",
  description:
    "Электрические подстанции нового поколения. Улучшение электросетевой энергетики при строительстве и реконструкции распредустройств",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NTSomic.className}>{children}</body>
    </html>
  );
}
