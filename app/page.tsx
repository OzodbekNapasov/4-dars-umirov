import {
  Archive,
  ArrowDown,
  Calculator,
  CircleCheck,
  Cloud,
  DatabaseBackup,
  FileLock2,
  FileText,
  Gauge,
  HardDrive,
  KeyRound,
  ListChecks,
  Lock,
  Paintbrush,
  RefreshCw,
  Scan,
  Scissors,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import {LessonProvider} from '@/components/LessonProvider';
import {SideNav} from '@/components/SideNav';
import {SortGame} from '@/components/SortGame';
import {MediaExplorer} from '@/components/MediaExplorer';
import {BackupPlanner} from '@/components/BackupPlanner';
import {AntivirusSim} from '@/components/AntivirusSim';
import {ScenarioDrill} from '@/components/ScenarioDrill';
import {Quiz} from '@/components/Quiz';
import {MALWARE, MEDICAL_ANALOGY, CONTROL_QUESTIONS} from '@/lib/content';

const STANDARD_APPS: {name: string; en: string; cmd: string; icon: LucideIcon; use: string}[] = [
  {name: 'Blocknot', en: 'Notepad', cmd: 'notepad', icon: FileText, use: 'Navbatchilik uchun tezkor qayd yozish'},
  {name: 'Paint', en: 'Oddiy grafik muharrir', cmd: 'mspaint', icon: Paintbrush, use: 'Rasm ustiga oddiy belgi qo‘yish'},
  {name: 'Kalkulyator', en: 'Calculator', cmd: 'calc', icon: Calculator, use: 'Tana massasi indeksi kabi oddiy hisoblar'},
  {name: 'Qaychi', en: 'Snipping Tool', cmd: 'snippingtool', icon: Scissors, use: 'Dastur xatosini ekran rasmi qilib olish'},
];

const UTILITIES: {name: string; how: string; icon: LucideIcon; job: string}[] = [
  {name: 'Diskni tozalash', how: 'Win + R, cleanmgr', icon: Sparkles, job: 'Vaqtinchalik va keraksiz fayllarni olib tashlaydi.'},
  {name: 'Disklarni optimallashtirish', how: 'Win + R, dfrgui', icon: Gauge, job: 'HDD ni defragmentatsiya qiladi, SSD ga tegishli xizmatni bajaradi.'},
  {name: 'Vazifalar menejeri', how: 'Ctrl + Shift + Esc', icon: ListChecks, job: 'Jarayonlarni ko‘rsatadi va qotib qolgan dasturni yopadi.'},
  {name: 'Arxivatorlar', how: 'WinRAR, 7-Zip', icon: Archive, job: 'Fayllarni siqadi, arxivga parol qo‘yish imkonini beradi.'},
  {name: 'Zaxira dasturlari', how: 'Fayllar tarixi, Acronis', icon: DatabaseBackup, job: 'Fayl nusxalarini avtomatik saqlaydi va tiklaydi.'},
  {name: 'Antivirus dasturlari', how: 'Defender, Kaspersky, ESET', icon: ShieldCheck, job: 'Zararli dasturlarni topadi va zararsizlantiradi.'},
];

const TRIAD = [
  {name: 'Maxfiylik', question: 'Kim ko‘ra oladi?', text: 'Bemor tashxisini faqat vakolatli xodim ko‘radi.'},
  {name: 'Yaxlitlik', question: 'To‘g‘rimi?', text: 'Dori dozasi yozuvi ruxsatsiz o‘zgarmaydi.'},
  {name: 'Mavjudlik', question: 'Kerak paytda bormi?', text: 'Shoshilinch holatda bemor kartasi darhol ochiladi.'},
];

const AV_STEPS: {title: string; text: string; icon: LucideIcon}[] = [
  {title: 'Bazani yangilash', text: 'Antivirus yangi xavflar haqida ma’lumot oladi.', icon: RefreshCw},
  {title: 'Skanerlash', text: 'Tezkor skanerlash tizim joylarini, to‘liq skanerlash hamma fayllarni ko‘radi.', icon: Scan},
  {title: 'Qaror', text: 'Topilgan xavf davolanadi, karantinga olinadi yoki o‘chiriladi.', icon: ShieldCheck},
  {title: 'Tekshirish', text: 'Hisobot ko‘riladi, kerak bo‘lsa IT mas’ulga xabar beriladi.', icon: CircleCheck},
];

const AV_METHODS = [
  {name: 'Imzo bo‘yicha', text: 'Faylni ma’lum zararli dasturlar bazasi bilan solishtiradi.'},
  {name: 'Evristik tahlil', text: 'Faylning shubhali tuzilishi va belgilariga qaraydi.'},
  {name: 'Xatti-harakat nazorati', text: 'Dastur ishlayotganda nima qilayotganini kuzatadi.'},
  {name: 'Real vaqt himoyasi', text: 'Faylni ochilishi yoki yuklanishi paytida tekshiradi.'},
];

const PROTECTION = [
  {title: 'Kirishni cheklash', text: 'Har bir xodimga alohida hisob va faqat kerakli huquq beriladi.', icon: KeyRound},
  {title: 'Shifrlash', text: 'Fleshka yo‘qolsa ham, kalitsiz ma’lumotni o‘qib bo‘lmaydi.', icon: FileLock2},
  {title: 'Qulflash', text: 'Win + L bilan ekran ish joyidan ketishda qulflanadi.', icon: Lock},
  {title: 'Zaxira nusxa', text: 'Muntazam olinadi va tiklab ko‘rib tekshiriladi.', icon: HardDrive},
];

function SectionHead({part, title, lead}: {part: string; title: string; lead?: string}) {
  return (
    <header className="section-head">
      <p className="eyebrow">{part}</p>
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </header>
  );
}

function Pulse() {
  return (
    <svg className="pulse" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        className="pulse-line"
        d="M0 70 H250 l24 -10 22 10 h46 l14 12 26 -72 28 96 18 -36 h60 l28 -12 30 12 H780 l24 -10 22 10 h46 l14 12 26 -72 28 96 18 -36 h60 l28 -12 30 12 H1200"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <LessonProvider>
      <section className="cover">
        <div className="cover-inner">
          <p className="cover-subject">Tibbiyotda axborot texnologiyalari</p>
          <h1>Standart va xizmatchi dasturlar</h1>
          <p className="cover-sub">
            Tibbiy ma’lumotlarni saqlash vositalari va antivirus dasturlari yordamida himoyalash
          </p>
          <dl className="cover-meta">
            <div>
              <dt>O‘qituvchi</dt>
              <dd>Zafar Umirov</dd>
            </div>
            <div>
              <dt>Davomiyligi</dt>
              <dd>2 soat</dd>
            </div>
            <div>
              <dt>Amaliy mashqlar</dt>
              <dd>5 ta</dd>
            </div>
          </dl>
          <a className="btn btn-primary cover-cta" href="#maqsad">
            Darsni boshlash <ArrowDown size={20} aria-hidden="true" />
          </a>
        </div>
        <Pulse />
      </section>

      <div className="shell">
        <SideNav />
        <main className="content">
          <section id="maqsad" className="section">
            <SectionHead
              part="Kirish"
              title="Bir kunlik klinika: kompyuter ishdan chiqsa nima bo‘ladi?"
              lead="2017-yil may oyida WannaCry shifrlovchi virusi Buyuk Britaniya sog‘liqni saqlash tizimiga ham zarar yetkazdi. Rasmiy hisobotga ko‘ra, 19 mingdan ortiq tibbiy qabul bekor qilingan."
            />
            <div className="callout">
              <Stethoscope size={24} aria-hidden="true" />
              <p>
                Hamshira uchun kompyuter himoyasi faqat IT bo‘limining ishi emas. Bugungi dars xavfni
                kundalik ish joyida qanday kamaytirishni o‘rgatadi.
              </p>
            </div>
            <h3>Dars oxirida siz:</h3>
            <ol className="goals">
              <li>Standart, xizmatchi va amaliy dasturlarni vazifasiga qarab ajratasiz.</li>
              <li>Vaziyatga mos saqlash vositasini tanlaysiz va 3-2-1 zaxira rejasini tuzasiz.</li>
              <li>Antivirus bilan kompyuterni tekshirib, topilgan xavf bo‘yicha to‘g‘ri qaror qabul qilasiz.</li>
              <li>Klinikadagi xavfli vaziyatlarda to‘g‘ri harakat qilasiz.</li>
            </ol>
          </section>

          <section id="standart" className="section">
            <SectionHead
              part="1-qism. Dasturlar"
              title="Standart dasturlar"
              lead="Standart dasturlar operatsion tizim bilan birga keladi va oddiy kundalik ishlarni bajaradi. Ularni alohida o‘rnatish shart emas."
            />
            <div className="app-grid">
              {STANDARD_APPS.map(({name, en, cmd, icon: Icon, use}) => (
                <article className="app-card" key={cmd}>
                  <Icon size={26} aria-hidden="true" />
                  <h3>{name}</h3>
                  <p className="muted">{en}</p>
                  <p>{use}</p>
                  <p className="run">
                    Win + R, <code>{cmd}</code>
                  </p>
                </article>
              ))}
            </div>
            <div className="callout callout-warn">
              <Siren size={24} aria-hidden="true" />
              <p>
                Dori dozasini Kalkulyatorda hisoblaganda ham natijani ikkinchi marta tekshiring. Bemorning
                shaxsiy ma’lumotini esa oddiy Blocknot faylida saqlamang: u parol bilan himoyalanmagan.
              </p>
            </div>
          </section>

          <section id="xizmatchi" className="section">
            <SectionHead
              part="1-qism. Dasturlar"
              title="Xizmatchi dasturlar"
              lead="Xizmatchi dasturlar (utilitalar) foydalanuvchining ishini emas, kompyuterning o‘zini parvarish qiladi. Klinikada tozalash va texnik xizmat qanday zarur bo‘lsa, kompyuterga ham bular shunday zarur."
            />
            <div className="utility-list">
              {UTILITIES.map(({name, how, icon: Icon, job}) => (
                <article className="utility" key={name}>
                  <Icon size={24} aria-hidden="true" />
                  <div>
                    <h3>{name}</h3>
                    <p>{job}</p>
                  </div>
                  <code>{how}</code>
                </article>
              ))}
            </div>
          </section>

          <section id="saralash" className="section exercise">
            <SectionHead
              part="1-mashq"
              title="Dasturlarni saralang"
              lead="Dasturni tanlang, so‘ng mos guruhni bosing. Kartani sudrab olib borish ham mumkin. Windows bilan kelishi emas, dasturning vazifasi muhim."
            />
            <SortGame />
          </section>

          <section id="malumot" className="section">
            <SectionHead
              part="2-qism. Saqlash"
              title="Tibbiy ma’lumotlar nega alohida himoya talab qiladi?"
              lead="Kasallik tarixi, tahlil natijalari, tibbiy tasvirlar, retseptlar va bemorning shaxsiy ma’lumotlari tibbiy ma’lumotlar hisoblanadi. Ular yo‘qolsa yoki o‘zgarsa, davolash xavf ostida qoladi."
            />
            <div className="triad">
              {TRIAD.map((item) => (
                <article key={item.name}>
                  <h3>{item.name}</h3>
                  <p className="triad-q">{item.question}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <h3>Huquqiy asos</h3>
            <ul className="law-list">
              <li>
                <strong>"Shaxsga doir ma’lumotlar to‘g‘risida"gi Qonun</strong> (O‘RQ-547, 2019-yil).
                Axborot texnologiyalari, jumladan internet orqali qayta ishlanadigan fuqarolar ma’lumotlari
                O‘zbekiston hududidagi texnik vositalarda saqlanishi talab etiladi (27-1-modda).
              </li>
              <li>
                <strong>"Kiberxavfsizlik to‘g‘risida"gi Qonun</strong> (O‘RQ-764, 2022-yil).
              </li>
            </ul>
            <p className="muted small">
              Qonunlarga o‘zgartirish kiritilishi mumkin. Amaldagi matnni lex.uz saytidan tekshiring.
            </p>
          </section>

          <section id="saqlash" className="section">
            <SectionHead
              part="2-qism. Saqlash"
              title="Saqlash vositalari"
              lead="Har bir vosita o‘z ishiga mos. Vositani tanlang va uning xususiyatlarini ko‘ring. Baholar vositalarni solishtirish uchun taxminiy berilgan."
            />
            <MediaExplorer />
          </section>

          <section id="zaxira" className="section exercise">
            <SectionHead
              part="2-mashq"
              title="Registratura uchun zaxira rejasini tuzing"
              lead="3-2-1 qoidasi: 3 ta nusxa, 2 xil vosita, 1 tasi tashqi joyda. Nusxalarni tanlang va rejani uchta falokatda sinang."
            />
            <BackupPlanner />
          </section>

          <section id="viruslar" className="section">
            <SectionHead
              part="3-qism. Himoya"
              title="Zararli dasturlar"
              lead="Zararli dastur egasining ruxsatisiz kompyuterga zarar yetkazadi yoki ma’lumotni o‘g‘irlaydi. Odatda bu turlarning barchasini umumiy qilib 'virus' deyishadi, lekin ular turlicha ishlaydi."
            />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Turi</th>
                    <th scope="col">Qanday ishlaydi</th>
                    <th scope="col">Klinikada nima bo‘ladi</th>
                  </tr>
                </thead>
                <tbody>
                  {MALWARE.map((row) => (
                    <tr key={row.name}>
                      <th scope="row">{row.name}</th>
                      <td>{row.how}</td>
                      <td>{row.clinic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3>Zararlanish belgilari</h3>
            <ul className="chips">
              <li>Kompyuter sababsiz sekinlashdi</li>
              <li>Fayl nomlari o‘zgardi</li>
              <li>Notanish oynalar chiqyapti</li>
              <li>Antivirus o‘chib qoldi</li>
              <li>Fleshkada notanish fayllar paydo bo‘ldi</li>
            </ul>
          </section>

          <section id="antivirus" className="section">
            <SectionHead
              part="3-qism. Himoya"
              title="Antivirus dasturlari"
              lead="Antivirus xizmatchi dastur bo‘lib, zararli dasturlarni topadi va zararsizlantiradi. Windows’da Microsoft Defender o‘rnatilgan. Kaspersky, ESET NOD32, Bitdefender va Avast ham keng tarqalgan."
            />
            <div className="analogy">
              <p className="analogy-title">Tibbiyot tilida</p>
              <dl>
                {MEDICAL_ANALOGY.map((row) => (
                  <div key={row.term}>
                    <dt>{row.term}</dt>
                    <dd>{row.medical}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <h3>Antivirus xavfni qanday aniqlaydi?</h3>
            <div className="method-grid">
              {AV_METHODS.map((m) => (
                <article key={m.name}>
                  <h4>{m.name}</h4>
                  <p>{m.text}</p>
                </article>
              ))}
            </div>
            <h3>Ish tartibi</h3>
            <ol className="steps">
              {AV_STEPS.map(({title, text, icon: Icon}) => (
                <li key={title}>
                  <Icon size={24} aria-hidden="true" />
                  <h4>{title}</h4>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <h3>Antivirus yetarli emas</h3>
            <div className="protect-grid">
              {PROTECTION.map(({title, text, icon: Icon}) => (
                <article key={title}>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="simulyator" className="section exercise">
            <SectionHead
              part="3-mashq"
              title="Antivirus simulyatori"
              lead="Hamshira kompyuteri sekinlashib qoldi. Skanerni sozlang, ishga tushiring va har bir topilgan xavf bo‘yicha qaror qabul qiling. Bu mashq faqat namuna: haqiqiy kompyuteringiz tekshirilmaydi."
            />
            <AntivirusSim />
          </section>

          <section id="vaziyatlar" className="section exercise">
            <SectionHead
              part="4-mashq"
              title="Klinikadagi xavfli vaziyatlar"
              lead="Har bir vaziyatda o‘zingizni shu ish joyida deb tasavvur qiling va to‘g‘ri harakatni tanlang."
            />
            <ScenarioDrill />
          </section>

          <section id="viktorina" className="section exercise">
            <SectionHead
              part="5-mashq"
              title="Viktorina"
              lead="12 ta savol. Natija faqat shu ekranda ko‘rinadi va hech qayerga yuborilmaydi."
            />
            <Quiz />
          </section>

          <section id="nazorat" className="section">
            <SectionHead
              part="Yakun"
              title="Nazorat savollari"
              lead="Avval og‘zaki javob bering, keyin savolni bosib javobni tekshiring."
            />
            <div className="control-list">
              {CONTROL_QUESTIONS.map((item, index) => (
                <details key={item.q}>
                  <summary>
                    <span className="control-num">{index + 1}</span>
                    {item.q}
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <footer className="lesson-foot">
              <Cloud size={18} aria-hidden="true" />
              Bu darslik internetsiz ishlaydi. Fan: Tibbiyotda axborot texnologiyalari. O‘qituvchi: Zafar Umirov.
            </footer>
          </section>
        </main>
      </div>
    </LessonProvider>
  );
}
