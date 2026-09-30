import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART(2015) WiL | โรงเรียนในโรงงาน",
  description: "เชื่อมโยงการศึกษาเข้ากับประสบการณ์ทำงานจริง พัฒนาคนรุ่นใหม่พร้อมขับเคลื่อนอุตสาหกรรมไทย",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
