import type { Metadata } from "next";
import "@fontsource/noto-sans-thai/400.css";
import "@fontsource/noto-sans-thai/500.css";
import "@fontsource/noto-sans-thai/600.css";
import "@fontsource/noto-sans-thai/700.css";
import "@fontsource/noto-sans-thai/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART(2015) WiL | โรงเรียนในโรงงาน",
  description: "เชื่อมโยงการศึกษาเข้ากับประสบการณ์ทำงานจริง พัฒนาคนรุ่นใหม่พร้อมขับเคลื่อนอุตสาหกรรมไทย",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
