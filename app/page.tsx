"use client";

import {
  ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, Coins, Factory,
  GraduationCap, House, Landmark, Mail, Menu, Phone, Search, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  ["หน้าแรก", "#home"], ["เกี่ยวกับเรา", "#about"], ["WiL โรงเรียนในโรงงาน", "#wil"],
  ["หลักสูตร", "#programs"], ["ข่าวและกิจกรรม", "#news"], ["พันธมิตร", "#partners"], ["ติดต่อเรา", "#contact"],
];

const benefits = [
  { icon: GraduationCap, title: "ค่าเล่าเรียน", detail: "ได้รับการสนับสนุนตลอดหลักสูตร" },
  { icon: House, title: "ที่พัก", detail: "ได้รับการสนับสนุนด้านที่พัก" },
  { icon: Coins, title: "รายได้ระหว่างเรียน", detail: "ค่าตอบแทนระหว่างฝึกงานตามเงื่อนไข" },
  { icon: BarChart3, title: "ประสบการณ์ทำงาน", detail: "เรียนรู้จากสถานการณ์จริงในโรงงาน" },
];

const industryPartners = [
  ["/partners/sony.webp", "Sony Technology"],
  ["/partners/continental.webp", "Continental Tyres"],
  ["/partners/goodyear.webp", "Goodyear"],
  ["/partners/shinetsu.webp", "Shin-Etsu Silicones"],
  ["/partners/singha.webp", "Singha Beverage"],
  ["/partners/cpn.webp", "Central Pattana"],
  ["/partners/stars.webp", "Stars Microelectronics"],
  ["/partners/sahafarm.webp", "Sahafarm"],
  ["/partners/asm.webp", "Asia Silicones Monomer"],
  ["/partners/lenzing.webp", "Lenzing Thailand"],
];

function Brand() {
  return <a className="brand" href="#home" aria-label="SMART 2015 หน้าแรก"><img src="/logo-smart-official.webp" alt="SMART(2015) Services Co., Ltd." /></a>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export default function Home() {
  return (
    <main id="home">
      <header className="site-header"><div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="เมนูหลัก">{navigation.map(([label, href], index) => <a className={index === 0 ? "active" : ""} key={href} href={href}>{label}</a>)}</nav>
        <div className="header-actions"><button className="icon-button desktop-only" aria-label="ค้นหา"><Search size={17} /></button><a className="button button-primary desktop-only" href="#contact">สมัครโครงการ <ArrowRight size={15} /></a>
          <Sheet><SheetTrigger asChild><Button className="mobile-menu" variant="outline" size="icon" aria-label="เปิดเมนู"><Menu /></Button></SheetTrigger><SheetContent className="mobile-sheet"><SheetHeader><SheetTitle><Brand /></SheetTitle><SheetDescription>การศึกษาที่เชื่อมกับการทำงานจริง</SheetDescription></SheetHeader><nav className="mobile-nav">{navigation.map(([label, href]) => <SheetClose key={href} asChild><a href={href}>{label}</a></SheetClose>)}</nav><SheetClose asChild><a className="button button-primary mobile-cta" href="#contact">สมัครโครงการ</a></SheetClose></SheetContent></Sheet>
        </div>
      </div></header>

      <section className="hero" aria-labelledby="hero-title"><div className="hero-media" aria-hidden="true" /><div className="hero-overlay" /><div className="container hero-content">
        <div className="hero-copy"><span className="hero-kicker">WiL–STI | โรงเรียนในโรงงาน</span><h1 id="hero-title"><span>เรียนจริง ทำงานจริง</span><br />ในภาคอุตสาหกรรม</h1><p>เชื่อมโยงการศึกษา กับโลกการทำงานจริง<br />สร้างคนรุ่นใหม่ที่พร้อมขับเคลื่อนอุตสาหกรรมไทย</p><div className="hero-actions"><a className="button button-primary" href="#wil">ดูโครงการ WiL <ArrowRight size={15} /></a><a className="button button-ghost" href="#contact">สมัครโครงการ <ArrowRight size={15} /></a></div></div>
        <blockquote>“การศึกษาที่เชื่อม<br />กับโลกการทำงานจริง<br /><strong>เพื่ออนาคตที่ยั่งยืน</strong>”</blockquote>
      </div></section>

      <section className="promise-strip" aria-label="จุดเด่น"><div className="container promise-grid">{[[Users, "เชื่อมโยง", "ภาครัฐ การศึกษา และเอกชน"], [GraduationCap, "พัฒนาคนรุ่นใหม่", "ตอบโจทย์อุตสาหกรรมไทย"], [Factory, "ลดช่องว่าง", "ระหว่างการศึกษากับงาน"], [BriefcaseBusiness, "สร้างโอกาส", "ให้นักศึกษาเติบโตในอาชีพ"]].map(([Icon, title, detail]) => { const ItemIcon = Icon as typeof Users; return <div className="promise" key={String(title)}><span><ItemIcon size={20} /></span><div><strong>{String(title)}</strong><small>{String(detail)}</small></div></div>; })}</div></section>

      <section className="section about" id="about"><div className="container about-grid">
        <div className="about-copy" id="wil"><SectionTitle title="WiL คืออะไร ?" /><p className="lead">WiL (Work-Integrated Learning) หรือ โรงเรียนในโรงงาน เป็นรูปแบบการจัดการศึกษาที่บูรณาการเรียนรู้ในสถานศึกษากับการฝึกปฏิบัติงานจริงในภาคอุตสาหกรรม</p><p>เกิดจากความร่วมมือระหว่างภาครัฐ ภาคการศึกษา และภาคเอกชน เพื่อผลิตกำลังคนที่มีทักษะตรงกับความต้องการของอุตสาหกรรมไทย</p><a className="button button-primary button-small" href="#programs">อ่านเพิ่มเติม <ArrowRight size={14} /></a></div>
        <div className="collaboration">{[[Landmark, "ภาครัฐ", "กำหนดนโยบาย\nและสนับสนุน"], [GraduationCap, "ภาคการศึกษา", "พัฒนาหลักสูตร\nและบุคลากร"], [Factory, "ภาคเอกชน", "มอบประสบการณ์จริง\nและโอกาสในการทำงาน"]].map(([Icon, title, detail], index) => { const ItemIcon = Icon as typeof Landmark; return <article key={String(title)}><span><ItemIcon size={25} /></span><strong>{String(title)}</strong><small>{String(detail).split("\n").map((line, i) => <span key={i}>{line}</span>)}</small>{index < 2 && <i><ArrowRight size={20} /></i>}</article>; })}</div>
        <aside className="about-message"><strong>ร่วมสร้าง<br />อนาคตที่ยั่งยืน</strong><span>ให้กับอุตสาหกรรมไทย</span></aside>
      </div></section>

      <section className="section programs" id="programs"><div className="container"><div className="title-inline"><SectionTitle title="เส้นทางการเรียน" /><p>เลือกเส้นทางที่ใช่ สู่อาชีพในสายงานอุตสาหกรรม</p></div><div className="program-grid">
        <article className="program-card orange-card"><div className="program-image"><img src="/images/wil-training.webp" alt="นักศึกษา ปวส. ปฏิบัติงานจริง" /></div><div className="program-content"><p className="program-for">ระดับ ปวส.</p><h3>เรียนไป ทำงานไป<br />พร้อมก้าวสู่อาชีพในอุตสาหกรรม</h3><ul><li><CheckCircle2 /> เรียนในสถานศึกษา ควบคู่การปฏิบัติงานในโรงงาน 2 ปี</li><li><CheckCircle2 /> เงินค่าแรงขั้นต่ำ เงินสนับสนุนการศึกษาและที่พัก</li><li><CheckCircle2 /> ได้รับวุฒิ ปวส. เมื่อจบหลักสูตร</li></ul><a className="button button-primary button-small" href="#contact">ดูรายละเอียด <ArrowRight size={14} /></a></div></article>
        <article className="program-card blue-card"><div className="program-image"><img src="/images/wil-hero.webp" alt="ผู้เรียนระดับปริญญาโททำงานร่วมกับวิศวกร" /></div><div className="program-content"><p className="program-for">ระดับ ปริญญาโท</p><h3>ต่อยอดความรู้ สู่การเป็นผู้นำ<br />ในอุตสาหกรรม</h3><ul><li><CheckCircle2 /> ทำงานในตำแหน่งผู้ช่วยวิศวกร / วิศวกร</li><li><CheckCircle2 /> ถ่ายทอดองค์ความรู้และเป็นพี่เลี้ยงนักศึกษา ปวส.</li><li><CheckCircle2 /> เงินเดือน 15,000 บาท พร้อมสนับสนุนค่าเล่าเรียนและที่พัก</li></ul><a className="button button-navy button-small" href="#contact">ดูรายละเอียด <ArrowRight size={14} /></a></div></article>
      </div></div></section>

      <section className="section benefits-section"><div className="container benefits-layout"><div className="benefits-copy"><div className="title-inline"><SectionTitle title="สิ่งที่ผู้เรียนได้รับ" /><p>มากกว่าการเรียน คือโอกาสในการสร้างอนาคต</p></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, detail }) => <article className="benefit-card" key={title}><span><Icon size={28} /></span><h3>{title}</h3><p>{detail}</p></article>)}</div></div><aside className="quote-panel"><img src="/images/wil-training.webp" alt="นักศึกษา WiL ในโรงงาน" /><blockquote>“โอกาสวันนี้<br />สู่อนาคตที่ดีกว่า”</blockquote></aside></div></section>

      <section className="section partners" id="partners"><div className="container"><div className="title-inline"><SectionTitle title="พันธมิตรของเรา" /><p>ความร่วมมือที่แข็งแกร่ง เพื่อพัฒนากำลังคนสู่อนาคต</p></div><div className="partner-groups"><div><h3>ภาคอุตสาหกรรม</h3><div className="partner-grid industry-grid">{industryPartners.map(([src, name]) => <div className="partner-logo" key={name}><img src={src} alt={name} /></div>)}</div></div><div><h3>ภาคการศึกษา</h3><div className="education-panel"><img src="/partners/education-panel.webp" alt="ตราสถาบันการศึกษาที่ร่วมโครงการ WiL" /></div></div></div></div></section>

      <section className="section news" id="news"><div className="container"><div className="title-row"><div className="title-inline"><SectionTitle title="ข่าวและกิจกรรม" /><p>ติดตามความเคลื่อนไหวล่าสุดของเรา</p></div><a className="text-link desktop-only" href="https://www.facebook.com/SMART2015Services" target="_blank" rel="noreferrer">ดูข่าวทั้งหมด <ArrowRight size={15} /></a></div><div className="news-grid">{[["18 ม.ค. 2567", "ร่วมพัฒนาหลักสูตรกับ มหาวิทยาลัยมหาสารคาม", "news-1.webp"], ["5 ธ.ค. 2566", "กิจกรรม Team Building ที่ Continental Tyres Thailand", "news-2.webp"], ["20 พ.ย. 2566", "เปิดรับสมัครเข้าร่วมโครงการ WiL", "news-3.webp"]].map(([date, title, image]) => <article className="news-card" key={title}><div className="news-visual"><img src={`/news/${image}`} alt={title} /></div><div><small>{date}</small><h3>{title}</h3><p>โครงการบูรณาการเรียนรู้และการทำงานในภาคอุตสาหกรรมจริง</p></div></article>)}</div></div></section>

      <section className="career-cta"><div className="career-media" /><div className="container career-inner"><div><h2>ร่วมสร้างอนาคตไปด้วยกัน</h2><p>SMART(2015) Services เปิดรับสมัครบุคลากรทั้งตำแหน่งครูพี่เลี้ยงนักศึกษา และเจ้าหน้าที่สำนักงาน</p><a className="button button-primary" href="#contact">ดูตำแหน่งงาน <ArrowRight size={15} /></a></div><blockquote>คนที่ใช่<br /><strong>อาจเป็นคุณ</strong></blockquote></div></section>

      <footer id="contact"><div className="container footer-grid"><div><Brand /><p>การศึกษาที่เชื่อมกับการทำงานจริง<br />เพื่อพัฒนาบุคลากรที่พร้อมเติบโตอย่างยั่งยืน</p></div><div><h3>เมนูหลัก</h3><a href="#wil">เกี่ยวกับเรา</a><a href="#programs">WiL โรงเรียนในโรงงาน</a><a href="#programs">หลักสูตร</a><a href="#partners">พันธมิตร</a></div><div><h3>ติดต่อเรา</h3><a href="tel:0944562221"><Phone />094-456-2221</a><a href="mailto:info@smart2015.co.th"><Mail />info@smart2015.co.th</a><a href="#contact">Facebook: SMART 2015 Services</a></div><div className="footer-cta"><a className="button button-outline" href="mailto:info@smart2015.co.th">สมัครโครงการ <ArrowRight size={15} /></a><p>เลขที่ 355 ชั้น 2 (ยูนิต 3-8)<br />ซ.ทรงสะอาด ถ.วิภาวดีรังสิต<br />แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900</p></div></div><div className="container footer-bottom"><span>© 2026 SMART(2015) Services Co., Ltd.</span><span>นโยบายความเป็นส่วนตัว · ข้อกำหนดการใช้งาน</span></div></footer>
    </main>
  );
}