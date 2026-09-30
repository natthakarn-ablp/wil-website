"use client";

import {
  BadgeCheck, BarChart3, BookOpenCheck, BriefcaseBusiness, Building2,
  CalendarDays, CheckCircle2, Coins, Factory, GraduationCap, House,
  Landmark, Mail, Menu, Phone, Search, Users, Wrench,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  ["หน้าแรก", "#home"], ["เกี่ยวกับเรา", "#about"], ["WiL โรงเรียนในโรงงาน", "#wil"],
  ["หลักสูตร", "#programs"], ["ข่าวและกิจกรรม", "#news"], ["พันธมิตร", "#partners"], ["ติดต่อเรา", "#contact"],
];

const partnerNames = [
  "SONY Technology Thailand", "Shin-Etsu Silicones Thailand", "Continental Tyres Thailand",
  "Singha Beverage", "Khon Kaen Brewery", "Cal-Comp Electronics", "Goodyear Thailand",
  "Central Pattana", "Stars Microelectronics", "Sahafarms", "Asia Silicones Monomer",
];

const benefits = [
  { icon: Coins, title: "สนับสนุนค่าเล่าเรียน", detail: "ลดภาระค่าใช้จ่ายระหว่างเรียนตามเงื่อนไขของโครงการ" },
  { icon: House, title: "สนับสนุนที่พัก", detail: "ดูแลความพร้อม เพื่อให้ผู้เรียนโฟกัสกับการเรียนรู้ได้เต็มที่" },
  { icon: BriefcaseBusiness, title: "รายได้ระหว่างเรียน", detail: "ได้รับค่าตอบแทนตามรูปแบบและระดับการศึกษาที่เข้าร่วม" },
  { icon: BarChart3, title: "ประสบการณ์ทำงานจริง", detail: "ฝึกกับโจทย์ เครื่องมือ และผู้เชี่ยวชาญในสถานประกอบการ" },
];

const faqs = [
  ["WiL เหมาะกับใคร?", "เหมาะกับผู้ที่ต้องการเรียนรู้ควบคู่กับการทำงานจริง ทั้งระดับ ปวส. และผู้จบปริญญาตรีที่ต้องการต่อยอดสู่ระดับปริญญาโท โดยคุณสมบัติเฉพาะขึ้นอยู่กับแต่ละหลักสูตรและสถานประกอบการ"],
  ["ต้องเสียค่าใช้จ่ายในการสมัครหรือไม่?", "เงื่อนไขค่าใช้จ่ายและการสนับสนุนอาจแตกต่างกันในแต่ละรอบรับสมัคร โปรดตรวจสอบประกาศฉบับจริงก่อนยื่นใบสมัคร"],
  ["เรียนจบแล้วได้วุฒิอะไร?", "ผู้เรียนจะได้รับวุฒิการศึกษาจากสถาบันการศึกษาที่ร่วมโครงการตามหลักสูตรที่สมัคร"],
  ["สามารถทำงานไปด้วยและเรียนไปด้วยได้จริงหรือไม่?", "ได้ โครงสร้างหลักสูตรถูกออกแบบให้เชื่อมการเรียนในสถาบันกับการฝึกปฏิบัติในสถานประกอบการอย่างเป็นระบบ"],
];

function Brand() {
  return <a className="brand" href="#home" aria-label="SMART 2015 หน้าแรก"><span className="brand-mark" aria-hidden="true">S</span><span><strong>SMART(2015)</strong><small>SERVICES CO., LTD.</small></span></a>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export default function Home() {
  return (
    <main id="home">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="เมนูหลัก">
            {navigation.map(([label, href], index) => <a className={index === 0 ? "active" : ""} key={href} href={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button className="icon-button desktop-only" aria-label="ค้นหา"><Search size={19} /></button>
            <a className="button button-primary desktop-only" href="#apply">สมัครโครงการ</a>
            <Sheet>
              <SheetTrigger asChild><Button className="mobile-menu" variant="outline" size="icon" aria-label="เปิดเมนู"><Menu /></Button></SheetTrigger>
              <SheetContent className="mobile-sheet">
                <SheetHeader><SheetTitle><Brand /></SheetTitle><SheetDescription>การศึกษาที่เชื่อมกับการทำงานจริง</SheetDescription></SheetHeader>
                <nav className="mobile-nav" aria-label="เมนูมือถือ">{navigation.map(([label, href]) => <SheetClose key={href} asChild><a href={href}>{label}</a></SheetClose>)}</nav>
                <SheetClose asChild><a className="button button-primary mobile-cta" href="#apply">สมัครโครงการ</a></SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true" /><div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-kicker">WiL–STI | โรงเรียนในโรงงาน</span>
            <h1 id="hero-title"><span>เรียนจริง ทำงานจริง</span><br />ในภาคอุตสาหกรรม</h1>
            <p>เชื่อมโยงการศึกษา กับโลกการทำงานจริง<br />สร้างคนรุ่นใหม่ที่พร้อมขับเคลื่อนอุตสาหกรรมไทย</p>
            <div className="hero-actions"><a className="button button-primary button-large" href="#wil">ดูโครงการ WiL</a><a className="button button-ghost button-large" href="#apply">สมัครโครงการ</a></div>
          </div>
          <blockquote>“การศึกษาที่เชื่อม<br />กับโลกการทำงานจริง<br /><strong>เพื่ออนาคตที่ยั่งยืน</strong>”</blockquote>
        </div>
      </section>

      <section className="promise-strip" aria-label="จุดเด่นของโครงการ"><div className="container promise-grid">
        {[[Users, "เชื่อมโยง", "ภาครัฐ การศึกษา และภาคเอกชน"], [GraduationCap, "พัฒนาคนสู่อนาคต", "ตอบโจทย์อุตสาหกรรมไทย"], [Factory, "ลดช่องว่างทักษะ", "ระหว่างการศึกษาและการทำงาน"], [BriefcaseBusiness, "สร้างโอกาส", "เรียนรู้และเติบโตในสายอาชีพ"]].map(([Icon, title, detail]) => { const ItemIcon = Icon as typeof Users; return <div className="promise" key={String(title)}><span><ItemIcon size={24} /></span><div><strong>{String(title)}</strong><small>{String(detail)}</small></div></div>; })}
      </div></section>

      <section className="section about" id="wil"><div className="container about-grid">
        <div><SectionTitle eyebrow="ABOUT WiL" title="WiL คืออะไร ?" /><p className="lead">WiL (Work-Integrated Learning) หรือ โรงเรียนในโรงงาน คือรูปแบบการศึกษาที่ผสานการเรียนรู้ในสถาบันเข้ากับการฝึกปฏิบัติงานจริงในภาคอุตสาหกรรม</p><p>ผู้เรียนได้พัฒนาทักษะจากสถานการณ์จริง ทำงานร่วมกับผู้เชี่ยวชาญ และเตรียมความพร้อมก่อนเข้าสู่ตลาดแรงงาน ขณะที่สถานประกอบการมีส่วนร่วมพัฒนากำลังคนให้ตรงกับความต้องการ</p><div className="stat-row"><div><strong>12+</strong><span>บริษัทพันธมิตร</span></div><div><strong>100+</strong><span>ผู้เรียนในโครงการ</span></div><div><strong>10+</strong><span>ปีแห่งประสบการณ์</span></div></div></div>
        <figure className="about-photo"><img src="/images/wil-training.jpg" alt="ผู้เรียนโครงการ WiL ฝึกปฏิบัติงานกับเครื่องจักรในโรงงาน" /><figcaption>“ประสบการณ์จริง คือการเรียนรู้ที่ดีที่สุด”</figcaption></figure>
      </div></section>

      <section className="section sectors" id="about"><div className="container">
        <SectionTitle title="ความร่วมมือ 3 ภาคส่วน" description="พลังสำคัญที่ทำให้การศึกษาเชื่อมโยงกับความต้องการของอุตสาหกรรมได้จริง" />
        <div className="sector-grid">{[[Landmark, "ภาครัฐ", "กำหนดนโยบาย สนับสนุน และประสานความร่วมมือเพื่อพัฒนากำลังคนของประเทศ"], [GraduationCap, "ภาคการศึกษา", "พัฒนาหลักสูตร จัดการเรียนการสอน และดูแลผู้เรียนตลอดเส้นทาง"], [Factory, "ภาคอุตสาหกรรม", "เปิดพื้นที่เรียนรู้ ถ่ายทอดองค์ความรู้ และร่วมพัฒนาบุคลากรคุณภาพ"]].map(([Icon, title, description], index) => { const ItemIcon = Icon as typeof Landmark; return <article className={`sector-card sector-${index + 1}`} key={String(title)}><span className="sector-icon"><ItemIcon /></span><h3>{String(title)}</h3><p>{String(description)}</p><span className="sector-number">0{index + 1}</span></article>; })}</div>
      </div></section>

      <section className="section programs" id="programs"><div className="container">
        <SectionTitle title="เส้นทางการเรียนรู้ในโครงการ WiL" description="เลือกเส้นทางที่เหมาะกับพื้นฐานและเป้าหมายในสายอาชีพของคุณ" />
        <div className="program-grid">
          <article className="program-card orange-card"><div className="program-image"><img src="/images/wil-training.jpg" alt="นักศึกษา ปวส. ฝึกปฏิบัติงานในโรงงาน" /><span>ระดับ ปวส.</span></div><div className="program-content"><p className="program-for">สำหรับผู้จบ ม.6 / ปวช.</p><h3>เรียนไป ทำงานไป<br />พร้อมก้าวสู่สายอาชีพ</h3><ul><li><CheckCircle2 /> เรียนควบคู่การฝึกปฏิบัติงานจริง ระยะเวลาโดยทั่วไป 2 ปี</li><li><CheckCircle2 /> ได้รับการสนับสนุนตามเงื่อนไขของโครงการ</li><li><CheckCircle2 /> สะสมประสบการณ์และเครือข่ายก่อนจบการศึกษา</li></ul><a className="text-link" href="#apply">ตรวจสอบคุณสมบัติ</a></div></article>
          <article className="program-card blue-card"><div className="program-image"><img src="/images/wil-hero.jpg" alt="ผู้เรียนระดับปริญญาโททำงานร่วมกับทีมวิศวกร" /><span>ระดับ ปริญญาโท</span></div><div className="program-content"><p className="program-for">สำหรับผู้จบปริญญาตรี</p><h3>ต่อยอดองค์ความรู้<br />สู่การเป็นผู้นำในอุตสาหกรรม</h3><ul><li><CheckCircle2 /> ทำงานในตำแหน่งผู้ช่วยวิศวกรหรือวิศวกร</li><li><CheckCircle2 /> เชื่อมงานจริงเข้ากับการเรียนและงานวิจัย</li><li><CheckCircle2 /> พัฒนาทักษะการสอนและการเป็นพี่เลี้ยง</li></ul><a className="text-link" href="#apply">ดูแนวทางการสมัคร</a></div></article>
        </div>
      </div></section>

      <section className="section benefits-section"><div className="container benefits-layout">
        <div><SectionTitle title="สิ่งที่ผู้เรียนได้รับ" description="มากกว่าการเรียน คือโอกาสในการสร้างอนาคตบนประสบการณ์จริง" /><div className="benefit-grid">{benefits.map(({ icon: Icon, title, detail }) => <article className="benefit-card" key={title}><Icon /><h3>{title}</h3><p>{detail}</p></article>)}</div></div>
        <aside className="quote-panel"><img src="/images/wil-hero.jpg" alt="ผู้เรียน WiL แลกเปลี่ยนความรู้ในโรงงาน" /><blockquote>“โอกาสวันนี้<br />สู่อนาคตที่ดีกว่า”</blockquote></aside>
      </div></section>

      <section className="section application" id="apply"><div className="container">
        <SectionTitle eyebrow="APPLICATION" title="เริ่มต้นเส้นทาง WiL ใน 5 ขั้นตอน" description="ขั้นตอนอาจปรับตามประกาศของแต่ละหลักสูตรและสถานประกอบการ" />
        <ol className="steps">{[[BookOpenCheck, "เลือกหลักสูตร", "ตรวจสอบเส้นทางที่ตรงกับคุณ"], [CalendarDays, "เตรียมเอกสาร", "ดูรายการจากประกาศรับสมัคร"], [Building2, "สมัครออนไลน์", "กรอกข้อมูลผ่านช่องทางบริษัท"], [BadgeCheck, "ตรวจสอบคุณสมบัติ", "ยืนยันข้อมูลและเข้าสู่การคัดเลือก"], [Wrench, "เริ่มเรียนรู้", "เตรียมพร้อมสู่ประสบการณ์จริง"]].map(([Icon, title, detail], index) => { const ItemIcon = Icon as typeof BookOpenCheck; return <li key={String(title)}><span className="step-number">{index + 1}</span><ItemIcon /><strong>{String(title)}</strong><small>{String(detail)}</small></li>; })}</ol>
        <div className="notice"><strong>หมายเหตุ:</strong> เว็บไซต์เวอร์ชันนี้ใช้ข้อความตัวอย่างในส่วนประกาศรับสมัคร กรุณายืนยันรอบ วันที่ และคุณสมบัติจากเอกสารทางการก่อนเผยแพร่สู่สาธารณะ</div>
      </div></section>

      <section className="section partners" id="partners"><div className="container"><SectionTitle title="องค์กรที่เคยเข้าร่วม" description="เครือข่ายความร่วมมือที่ช่วยให้ผู้เรียนได้สัมผัสโลกการทำงานจริง" /><div className="partner-grid">{partnerNames.map((name) => <div className="partner-logo" key={name}>{name}</div>)}</div></div></section>

      <section className="section news" id="news"><div className="container">
        <div className="title-row"><SectionTitle title="ข่าวและกิจกรรม" description="พื้นที่สำหรับอัปเดตความเคลื่อนไหวของโครงการ" /><span className="sample-label">ตัวอย่างเนื้อหา</span></div>
        <div className="news-grid">{[["ประกาศรับสมัคร", "เปิดรับสมัครนักศึกษาโครงการ WiL รอบใหม่", "ตรวจสอบคุณสมบัติ สาขา และกำหนดการจากประกาศฉบับจริง"], ["กิจกรรม", "เยี่ยมชมสถานประกอบการและพบผู้เชี่ยวชาญ", "เรียนรู้บรรยากาศการทำงานจริงและเส้นทางอาชีพในอุตสาหกรรม"], ["ความร่วมมือ", "สถาบันการศึกษาและภาคอุตสาหกรรมร่วมพัฒนาหลักสูตร", "ยกระดับทักษะของผู้เรียนให้สอดคล้องกับเทคโนโลยีและการทำงานยุคใหม่"]].map(([tag, title, description], index) => <article className="news-card" key={title}><div className={`news-visual visual-${index + 1}`}><span>{tag}</span></div><div><small>เนื้อหาสำหรับวางข้อมูลจริง</small><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </div></section>

      <section className="section faq-section"><div className="container faq-grid">
        <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" description="คำตอบเบื้องต้นสำหรับผู้สนใจโครงการ WiL" />
        <Accordion className="faq" type="single" collapsible>{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion>
      </div></section>

      <section className="career-cta"><div className="career-media" aria-hidden="true" /><div className="container career-inner"><div><span>SMART(2015) SERVICES</span><h2>ร่วมสร้างอนาคตไปด้วยกัน</h2><p>เปิดพื้นที่ให้คนรุ่นใหม่ได้เรียนรู้ เติบโต และสร้างคุณค่าให้ภาคอุตสาหกรรมไทย</p></div><a className="button button-primary button-large" href="#contact">ติดต่อทีมงาน</a></div></section>

      <footer id="contact"><div className="container footer-grid">
        <div><Brand /><p>เชื่อมโยงการศึกษา กับโลกการทำงานจริง<br />สร้างคนรุ่นใหม่พร้อมขับเคลื่อนอุตสาหกรรมไทย</p></div>
        <div><h3>เมนูหลัก</h3><a href="#wil">WiL โรงเรียนในโรงงาน</a><a href="#programs">หลักสูตร</a><a href="#news">ข่าวและกิจกรรม</a><a href="#partners">พันธมิตร</a></div>
        <div><h3>ติดต่อเรา</h3><a href="tel:0944562221"><Phone />094-4562221</a><a href="tel:0952483586"><Phone />095-2483586</a><a href="mailto:info@smart2015.co.th"><Mail />info@smart2015.co.th</a></div>
        <div className="footer-cta"><span>สนใจเข้าร่วมโครงการ?</span><a className="button button-outline" href="#apply">ดูขั้นตอนการสมัคร</a></div>
      </div><div className="container footer-bottom"><span>© 2026 SMART(2015) Services Co., Ltd.</span><span>เว็บไซต์ต้นแบบเพื่อทบทวนเนื้อหาและการออกแบบ</span></div></footer>
    </main>
  );
}
