"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, Coins, Factory,
  GraduationCap, House, Landmark, Mail, Menu, Phone, Send, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

const educationPartners = [
  ["/partners/education/chula.webp", "จุฬาลงกรณ์มหาวิทยาลัย"],
  ["/partners/education/msu.webp", "มหาวิทยาลัยมหาสารคาม"],
  ["/partners/education/kmutnb.webp", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ"],
  ["/partners/education/ku.webp", "มหาวิทยาลัยเกษตรศาสตร์"],
  ["/partners/education/ubu.webp", "มหาวิทยาลัยอุบลราชธานี"],
  ["/partners/education/rmutt.webp", "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี"],
  ["/partners/education/rmutl.webp", "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา"],
];

function Brand() {
  return <a className="brand" href="#home" aria-label="SMART 2015 หน้าแรก"><img src="/logo-smart-official.webp" alt="SMART(2015) Services Co., Ltd." /></a>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

type ApplicationType = "student" | "career";

export default function Home() {
  const [applicationType, setApplicationType] = useState<ApplicationType>("student");

  const openApplication = (type: ApplicationType) => {
    setApplicationType(type);
    requestAnimationFrame(() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const handleApplicationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const typeLabel = applicationType === "career" ? "สมัครงานของบริษัท" : "สมัครเป็นนักเรียนในโครงการ";
    const details = [
      `ประเภทการสมัคร: ${typeLabel}`,
      `ชื่อ-นามสกุล: ${form.get("fullName") ?? ""}`,
      `เบอร์โทรศัพท์: ${form.get("phone") ?? ""}`,
      `อีเมล: ${form.get("email") ?? ""}`,
      `${applicationType === "career" ? "ตำแหน่ง / บริษัทปัจจุบัน" : "สถานศึกษา"}: ${form.get("organization") ?? "-"}`,
      "",
      "ข้อมูลเพิ่มเติม:",
      String(form.get("message") || "-")
    ];
    window.location.href = `mailto:info@smart2015.co.th?subject=${encodeURIComponent(`[เว็บไซต์] ${typeLabel}`)}&body=${encodeURIComponent(details.join("\n"))}`;
  };

  return (
    <main id="home">
      <header className="site-header"><div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="เมนูหลัก">{navigation.map(([label, href], index) => <a className={index === 0 ? "active" : ""} key={href} href={href}>{label}</a>)}</nav>
        <div className="header-actions"><a className="button button-primary desktop-only" href="#apply">สมัครเข้าร่วม</a>
          <Sheet><SheetTrigger asChild><Button className="mobile-menu" variant="outline" size="icon" aria-label="เปิดเมนู"><Menu /></Button></SheetTrigger><SheetContent className="mobile-sheet"><SheetHeader><SheetTitle><Brand /></SheetTitle><SheetDescription>การศึกษาที่เชื่อมกับการทำงานจริง</SheetDescription></SheetHeader><nav className="mobile-nav">{navigation.map(([label, href]) => <SheetClose key={href} asChild><a href={href}>{label}</a></SheetClose>)}</nav><SheetClose asChild><a className="button button-primary mobile-cta" href="#apply">สมัครเข้าร่วม</a></SheetClose></SheetContent></Sheet>
        </div>
      </div></header>

      <section className="hero" aria-labelledby="hero-title"><div className="hero-media" aria-hidden="true" /><div className="hero-overlay" /><div className="container hero-content">
        <div className="hero-copy"><span className="hero-kicker">WiL–STI | โรงเรียนในโรงงาน</span><h1 id="hero-title"><span>เรียนจริง ทำงานจริง</span><br />ในภาคอุตสาหกรรม</h1><p>เชื่อมโยงการศึกษากับโลกการทำงานจริง<br />สร้างคนรุ่นใหม่ที่พร้อมขับเคลื่อนอุตสาหกรรมไทย</p><div className="hero-actions"><a className="button button-primary" href="#wil">ดูโครงการ WiL</a><button className="button button-ghost" type="button" onClick={() => openApplication("student")}>สมัครเป็นนักเรียน</button></div></div>
      </div></section>

      <section className="promise-strip" aria-label="จุดเด่น"><div className="container promise-grid">{[[Users, "เชื่อมโยง", "ภาครัฐ การศึกษา และเอกชน"], [GraduationCap, "พัฒนาคนรุ่นใหม่", "ตอบโจทย์อุตสาหกรรมไทย"], [Factory, "ลดช่องว่าง", "ระหว่างการศึกษากับงาน"], [BriefcaseBusiness, "สร้างโอกาส", "ให้นักศึกษาเติบโตในอาชีพ"]].map(([Icon, title, detail]) => { const ItemIcon = Icon as typeof Users; return <div className="promise" key={String(title)}><span><ItemIcon size={20} /></span><div><strong>{String(title)}</strong><small>{String(detail)}</small></div></div>; })}</div></section>

      <section className="section about" id="about"><div className="container about-grid">
        <div className="about-copy" id="wil"><SectionTitle title="WiL คืออะไร?" /><p className="lead">WiL (Work-Integrated Learning) หรือโรงเรียนในโรงงาน เป็นรูปแบบการจัดการศึกษาที่บูรณาการการเรียนรู้ในสถานศึกษากับการฝึกปฏิบัติงานจริงในภาคอุตสาหกรรม</p><p>เกิดจากความร่วมมือระหว่างภาครัฐ ภาคการศึกษา และภาคเอกชน เพื่อผลิตกำลังคนที่มีทักษะตรงกับความต้องการของอุตสาหกรรมไทย</p><a className="button button-primary button-small" href="#programs">อ่านเพิ่มเติม</a></div>
        <div className="collaboration">{[[Landmark, "ภาครัฐ", "กำหนดนโยบาย\nและสนับสนุน"], [GraduationCap, "ภาคการศึกษา", "พัฒนาหลักสูตร\nและบุคลากร"], [Factory, "ภาคเอกชน", "มอบประสบการณ์จริง\nและโอกาสในการทำงาน"]].map(([Icon, title, detail], index) => { const ItemIcon = Icon as typeof Landmark; return <article key={String(title)}><span><ItemIcon size={25} /></span><strong>{String(title)}</strong><small>{String(detail).split("\n").map((line, i) => <span key={i}>{line}</span>)}</small>{index < 2 && <i><ArrowRight size={20} /></i>}</article>; })}</div>
        <aside className="about-message"><strong>ร่วมสร้าง<br />อนาคตที่ยั่งยืน</strong><span>ให้กับอุตสาหกรรมไทย</span></aside>
      </div></section>

      <section className="section programs" id="programs"><div className="container"><div className="title-inline"><SectionTitle title="เส้นทางการเรียน" /><p>เลือกเส้นทางที่ใช่ สู่อาชีพในสายงานอุตสาหกรรม</p></div><div className="program-grid">
        <article className="program-card orange-card"><div className="program-image"><img src="/images/wil-training.webp" alt="นักศึกษา ปวส. ปฏิบัติงานจริง" /></div><div className="program-content"><p className="program-for">ระดับ ปวส.</p><h3>เรียนไป ทำงานไป<br />พร้อมก้าวสู่อาชีพในอุตสาหกรรม</h3><ul><li><CheckCircle2 /> เรียนในสถานศึกษา ควบคู่การปฏิบัติงานในโรงงาน 2 ปี</li><li><CheckCircle2 /> เงินค่าแรงขั้นต่ำ เงินสนับสนุนการศึกษาและที่พัก</li><li><CheckCircle2 /> ได้รับวุฒิ ปวส. เมื่อจบหลักสูตร</li></ul><button className="button button-primary button-small" type="button" onClick={() => openApplication("student")}>สมัครเรียนหลักสูตรนี้</button></div></article>
        <article className="program-card blue-card"><div className="program-image"><img src="/images/wil-hero.webp" alt="ผู้เรียนระดับปริญญาโททำงานร่วมกับวิศวกร" /></div><div className="program-content"><p className="program-for">ระดับ ปริญญาโท</p><h3>ต่อยอดความรู้ สู่การเป็นผู้นำ<br />ในอุตสาหกรรม</h3><ul><li><CheckCircle2 /> ทำงานในตำแหน่งผู้ช่วยวิศวกร / วิศวกร</li><li><CheckCircle2 /> ถ่ายทอดองค์ความรู้และเป็นพี่เลี้ยงนักศึกษา ปวส.</li><li><CheckCircle2 /> เงินเดือน 15,000 บาท พร้อมสนับสนุนค่าเล่าเรียนและที่พัก</li></ul><button className="button button-navy button-small" type="button" onClick={() => openApplication("student")}>สมัครเรียนหลักสูตรนี้</button></div></article>
      </div></div></section>

      <section className="section benefits-section"><div className="container benefits-layout"><div className="benefits-copy"><div className="title-inline"><SectionTitle title="สิ่งที่ผู้เรียนได้รับ" /><p>มากกว่าการเรียน คือโอกาสในการสร้างอนาคต</p></div><div className="benefit-grid">{benefits.map(({ icon: Icon, title, detail }) => <article className="benefit-card" key={title}><span><Icon size={28} /></span><h3>{title}</h3><p>{detail}</p></article>)}</div></div><aside className="quote-panel"><img src="/images/wil-training.webp" alt="นักศึกษา WiL ในโรงงาน" /></aside></div></section>

      <section className="section partners" id="partners"><div className="container"><div className="title-inline"><SectionTitle title="พันธมิตรของเรา" /><p>ความร่วมมือที่แข็งแกร่ง เพื่อพัฒนากำลังคนสู่อนาคต</p></div><div className="partner-groups">
        <article className="partner-panel industry-panel"><div className="partner-panel-heading"><span><Factory size={19} /></span><div><h3>ภาคอุตสาหกรรม</h3><p>องค์กรชั้นนำที่ร่วมพัฒนากำลังคนผ่านโครงการ WiL</p></div></div><div className="partner-grid industry-grid">{industryPartners.map(([src, name]) => <div className="partner-logo" key={name}><img src={src} alt={name} /><span>{name}</span></div>)}</div></article>
        <article className="partner-panel education-partners"><div className="partner-panel-heading"><span><GraduationCap size={20} /></span><div><h3>ภาคการศึกษา</h3><p>มหาวิทยาลัยและสถาบันการศึกษาที่ร่วมโครงการ</p></div></div><div className="education-grid">{educationPartners.map(([src, name]) => <div className="education-logo" key={name}><img src={src} alt={`ตรา${name}`} /><span>{name}</span></div>)}<div className="education-logo technical-colleges"><GraduationCap size={38} /><span>วิทยาลัยเทคนิคในเครือทั่วประเทศ</span></div></div></article>
      </div></div></section>

      <section className="section news" id="news"><div className="container"><div className="title-row"><div className="title-inline"><SectionTitle title="ข่าวและกิจกรรม" /><p>ติดตามความเคลื่อนไหวล่าสุดของเรา</p></div><a className="text-link desktop-only" href="https://www.facebook.com/SMART2015Services" target="_blank" rel="noreferrer">ดูข่าวทั้งหมด</a></div><div className="news-grid">{[["18 ม.ค. 2567", "ร่วมพัฒนาหลักสูตรกับมหาวิทยาลัยมหาสารคาม", "news-1.webp"], ["5 ธ.ค. 2566", "กิจกรรม Team Building ที่ Continental Tyres Thailand", "news-2.webp"], ["20 พ.ย. 2566", "เปิดรับสมัครเข้าร่วมโครงการ WiL", "news-3.webp"]].map(([date, title, image]) => <article className="news-card" key={title}><div className="news-visual"><img src={`/news/${image}`} alt={title} /></div><div><small>{date}</small><h3>{title}</h3><p>โครงการบูรณาการเรียนรู้และการทำงานในภาคอุตสาหกรรมจริง</p></div></article>)}</div></div></section>

      <section className="career-cta"><div className="career-media" /><div className="container career-inner"><div><h2>ร่วมสร้างอนาคตไปด้วยกัน</h2><p>SMART(2015) Services เปิดรับสมัครบุคลากรทั้งตำแหน่งครูพี่เลี้ยงนักศึกษาและเจ้าหน้าที่สำนักงาน</p><button className="button button-primary" type="button" onClick={() => openApplication("career")}>สมัครงานกับบริษัท</button></div></div></section>

      <section className="application-section" id="apply"><div className="container application-layout">
        <div className="application-intro"><span className="eyebrow">JOIN SMART(2015)</span><h2>เลือกเส้นทางที่เหมาะกับคุณ</h2><p>กรอกข้อมูลเบื้องต้นเพื่อติดต่อทีมงาน ไม่ว่าจะสนใจเข้าร่วมโครงการในฐานะนักเรียน หรือต้องการสมัครงานกับบริษัท</p><div className="application-options"><button type="button" className={applicationType === "student" ? "active" : ""} onClick={() => setApplicationType("student")}><span><GraduationCap /></span><div><strong>สมัครเป็นนักเรียน</strong><small>เข้าร่วมหลักสูตร WiL และเรียนรู้จากการทำงานจริง</small></div></button><button type="button" className={applicationType === "career" ? "active" : ""} onClick={() => setApplicationType("career")}><span><BriefcaseBusiness /></span><div><strong>สมัครงานของบริษัท</strong><small>สมัครตำแหน่งครูพี่เลี้ยงหรือเจ้าหน้าที่สำนักงาน</small></div></button></div></div>
        <form className="application-form" onSubmit={handleApplicationSubmit}>
          <div className="form-field form-full"><label htmlFor="applicationType">ประเภทการสมัคร</label><Select value={applicationType} onValueChange={(value) => setApplicationType(value as ApplicationType)}><SelectTrigger className="application-select" id="applicationType"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="student">สมัครเป็นนักเรียนในโครงการ</SelectItem><SelectItem value="career">สมัครงานของบริษัท</SelectItem></SelectContent></Select></div>
          <div className="form-field"><label htmlFor="fullName">ชื่อ-นามสกุล <span>*</span></label><input id="fullName" name="fullName" autoComplete="name" required /></div>
          <div className="form-field"><label htmlFor="phone">เบอร์โทรศัพท์ <span>*</span></label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required /></div>
          <div className="form-field"><label htmlFor="email">อีเมล <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          <div className="form-field"><label htmlFor="organization">{applicationType === "career" ? "ตำแหน่ง / บริษัทปัจจุบัน" : "สถานศึกษา"}</label><input id="organization" name="organization" autoComplete="organization" /></div>
          <div className="form-field form-full"><label htmlFor="message">ข้อมูลเพิ่มเติม</label><textarea id="message" name="message" rows={4} placeholder={applicationType === "career" ? "ตำแหน่งที่สนใจ ประสบการณ์ หรือช่วงเวลาที่สะดวกให้ติดต่อกลับ" : "ระดับการศึกษา สาขาที่สนใจ หรือคำถามเกี่ยวกับโครงการ"} /></div>
          <div className="form-actions form-full"><button className="button button-primary" type="submit"><Send size={17} />ส่งข้อมูลการสมัคร</button><p>เมื่อกดส่ง ระบบจะเปิดแอปอีเมลของคุณเพื่อส่งข้อมูลไปยังทีม SMART(2015)</p></div>
        </form>
      </div></section>

      <footer id="contact"><div className="container footer-grid"><div><Brand /><p>การศึกษาที่เชื่อมกับการทำงานจริง<br />เพื่อพัฒนาบุคลากรที่พร้อมเติบโตอย่างยั่งยืน</p></div><div><h3>เมนูหลัก</h3><a href="#wil">เกี่ยวกับเรา</a><a href="#programs">WiL โรงเรียนในโรงงาน</a><a href="#programs">หลักสูตร</a><a href="#partners">พันธมิตร</a></div><div><h3>ติดต่อเรา</h3><a href="tel:0944562221"><Phone />094-456-2221</a><a href="mailto:info@smart2015.co.th"><Mail />info@smart2015.co.th</a><a href="https://www.facebook.com/SMART2015Services" target="_blank" rel="noreferrer">Facebook: SMART 2015 Services</a></div><div className="footer-cta"><a className="button button-outline" href="#apply">สมัครเข้าร่วม</a><p>เลขที่ 355 ชั้น 2 (ยูนิต 3-8)<br />ซ.ทรงสะอาด ถ.วิภาวดีรังสิต<br />แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900</p></div></div><div className="container footer-bottom"><span>© 2026 SMART(2015) Services Co., Ltd.</span><span>นโยบายความเป็นส่วนตัว · ข้อกำหนดการใช้งาน</span></div></footer>
    </main>
  );
}
