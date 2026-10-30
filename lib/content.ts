// Darsning barcha matn va mashq ma'lumotlari shu yerda.
// Matnni o'zgartirish uchun komponentlarga tegish shart emas.

export type NavItem = {id: string; label: string; exercise?: boolean};

export const NAV_ITEMS: NavItem[] = [
  {id: 'maqsad', label: 'Dars maqsadi'},
  {id: 'standart', label: 'Standart dasturlar'},
  {id: 'xizmatchi', label: 'Xizmatchi dasturlar'},
  {id: 'saralash', label: 'Dasturlarni saralash', exercise: true},
  {id: 'malumot', label: 'Tibbiy ma’lumotlar'},
  {id: 'saqlash', label: 'Saqlash vositalari'},
  {id: 'zaxira', label: 'Zaxira rejasi', exercise: true},
  {id: 'viruslar', label: 'Zararli dasturlar'},
  {id: 'antivirus', label: 'Antivirus dasturlari'},
  {id: 'simulyator', label: 'Antivirus simulyatori', exercise: true},
  {id: 'vaziyatlar', label: 'Klinikadagi vaziyatlar', exercise: true},
  {id: 'viktorina', label: 'Viktorina', exercise: true},
  {id: 'nazorat', label: 'Nazorat savollari'},
];

/* ------------------------------ Dasturlar ------------------------------ */

export type Category = 'standart' | 'xizmatchi' | 'amaliy';

export const CATEGORY_LABELS: Record<Category, {name: string; hint: string}> = {
  standart: {name: 'Standart', hint: 'Windows bilan keladi, oddiy kundalik ish uchun'},
  xizmatchi: {name: 'Xizmatchi', hint: 'Kompyuterning o‘ziga xizmat qiladi'},
  amaliy: {name: 'Amaliy', hint: 'Foydalanuvchining kasbiy ishi uchun'},
};

export type SortItem = {id: string; name: string; note: string; category: Category; why: string};

export const SORT_ITEMS: SortItem[] = [
  {id: 'notepad', name: 'Blocknot', note: 'Notepad', category: 'standart', why: 'Windows bilan birga keladigan oddiy matn yozish dasturi.'},
  {id: 'taskmgr', name: 'Vazifalar menejeri', note: 'Task Manager', category: 'xizmatchi', why: 'Kompyuter jarayonlarini kuzatadi va qotib qolgan dasturni yopadi: bu tizimga xizmat ko‘rsatish.'},
  {id: 'word', name: 'Microsoft Word', note: 'Matn muharriri', category: 'amaliy', why: 'Hujjat tayyorlash uchun alohida o‘rnatiladigan amaliy dastur.'},
  {id: 'cleanmgr', name: 'Diskni tozalash', note: 'Disk Cleanup', category: 'xizmatchi', why: 'Windows bilan birga kelsa ham, vazifasi diskka xizmat ko‘rsatish. Guruh dasturning vazifasiga qarab aniqlanadi.'},
  {id: 'paint', name: 'Paint', note: 'Oddiy grafik muharrir', category: 'standart', why: 'Windows bilan keladigan oddiy rasm chizish dasturi.'},
  {id: 'winrar', name: 'WinRAR', note: 'Arxivator', category: 'xizmatchi', why: 'Fayllarni siqadi va arxivlaydi: ma’lumotni saqlashga xizmat qiladi.'},
  {id: 'tat', name: 'Tibbiy axborot tizimi', note: 'Bemor kartalari bazasi', category: 'amaliy', why: 'Shifokor va hamshiraning kasbiy ishi uchun yaratilgan dastur.'},
  {id: 'calc', name: 'Kalkulyator', note: 'Calculator', category: 'standart', why: 'Windows bilan keladigan oddiy hisoblash dasturi.'},
  {id: 'defender', name: 'Microsoft Defender', note: 'Antivirus', category: 'xizmatchi', why: 'Kompyuterni zararli dasturlardan himoya qiladi: bu xizmatchi vazifa.'},
  {id: 'excel', name: 'Microsoft Excel', note: 'Elektron jadval', category: 'amaliy', why: 'Bemorlar statistikasi kabi kasbiy hisob-kitoblar uchun amaliy dastur.'},
  {id: 'snip', name: 'Qaychi', note: 'Snipping Tool', category: 'standart', why: 'Ekran rasmini oladigan oddiy Windows dasturi.'},
  {id: 'dfrgui', name: 'Disklarni optimallashtirish', note: 'Optimize Drives', category: 'xizmatchi', why: 'Disk ishlashini yaxshilaydi: kompyuterning o‘ziga xizmat qiladi.'},
];

/* -------------------------- Saqlash vositalari -------------------------- */

export type Medium = {
  id: string;
  name: string;
  summary: string;
  speed: number;
  capacity: number;
  portable: number;
  plus: string;
  minus: string;
  clinic: string;
};

// Baholar 1-5 oralig'ida va vositalarni bir-biriga nisbatan solishtirish uchun taxminiy qiymat.
export const MEDIA: Medium[] = [
  {
    id: 'hdd',
    name: 'Qattiq disk (HDD)',
    summary: 'Magnit disk, ichida aylanadigan qismlar bor',
    speed: 2, capacity: 5, portable: 2,
    plus: 'Katta hajm arzon narxda',
    minus: 'Sekin ishlaydi, zarba va tebranishdan zararlanishi mumkin',
    clinic: 'Tibbiy arxiv va zaxira nusxalarni saqlash',
  },
  {
    id: 'ssd',
    name: 'Qattiq holatdagi disk (SSD)',
    summary: 'Flesh xotira, harakatlanuvchi qismlari yo‘q',
    speed: 5, capacity: 4, portable: 3,
    plus: 'Juda tez, zarbaga chidamliroq',
    minus: 'Bir xil hajmda HDD dan qimmatroq',
    clinic: 'Ishchi kompyuter va tibbiy axborot tizimi bazasi',
  },
  {
    id: 'usb',
    name: 'Fleshka',
    summary: 'Cho‘ntakka sig‘adigan USB xotira',
    speed: 3, capacity: 2, portable: 5,
    plus: 'Kichik va ko‘chirish uchun qulay',
    minus: 'Oson yo‘qoladi, virus tarqatish yo‘li bo‘lishi mumkin',
    clinic: 'Faqat shifrlangan holda, vaqtinchalik ko‘chirish uchun',
  },
  {
    id: 'ext',
    name: 'Tashqi disk',
    summary: 'USB orqali ulanadigan HDD yoki SSD',
    speed: 3, capacity: 5, portable: 4,
    plus: 'Uzib qo‘yilganda virus unga yeta olmaydi',
    minus: 'Qo‘lda ulash va tartibli saqlash talab qiladi',
    clinic: 'Haftalik zaxira nusxa, seyfda saqlanadi',
  },
  {
    id: 'optical',
    name: 'Optik disk (CD, DVD)',
    summary: 'Lazer bilan yoziladigan disk',
    speed: 1, capacity: 1, portable: 4,
    plus: 'Oddiy, bir marta yozilgan disk tasodifan o‘zgarmaydi',
    minus: 'Hajmi kichik, tirnalishdan zararlanadi',
    clinic: 'Rentgen yoki KT tasvirini bemorga berish',
  },
  {
    id: 'nas',
    name: 'Tarmoq saqlagichi va server',
    summary: 'Tarmoqqa ulangan umumiy saqlash qurilmasi',
    speed: 4, capacity: 5, portable: 1,
    plus: 'Bir nechta kompyuter yagona bazadan foydalanadi',
    minus: 'Doim tarmoqda, shifrlovchi virus unga ham yetishi mumkin',
    clinic: 'Klinika ichidagi markaziy baza',
  },
  {
    id: 'cloud',
    name: 'Bulutli saqlash',
    summary: 'Ma’lumot internet orqali masofaviy serverda turadi',
    speed: 3, capacity: 5, portable: 5,
    plus: 'Yong‘in yoki o‘g‘irlikda ham klinikadan tashqarida saqlanib qoladi',
    minus: 'Internetga bog‘liq, qonun talablariga mos xizmat tanlash kerak',
    clinic: 'Tashqi zaxira nusxa, ruxsat etilgan xizmatda',
  },
];

/* ----------------------------- Zaxira rejasi ----------------------------- */

export type BackupOption = {
  id: string;
  name: string;
  detail: string;
  mediaType: string;
  offsite: boolean;
  connected: boolean;
};

export const BACKUP_OPTIONS: BackupOption[] = [
  {id: 'ext-on', name: 'Tashqi disk, doim ulangan', detail: 'Registratura kompyuteriga ulanib turadi', mediaType: 'tashqi-disk', offsite: false, connected: true},
  {id: 'ext-off', name: 'Tashqi disk, seyfda', detail: 'Nusxa olingach uziladi va seyfga qo‘yiladi', mediaType: 'tashqi-disk', offsite: false, connected: false},
  {id: 'nas', name: 'Klinika tarmoq saqlagichi', detail: 'Binoda, doim tarmoqda', mediaType: 'tarmoq', offsite: false, connected: true},
  {id: 'cloud', name: 'Bulutli zaxira, versiyali', detail: 'Eski nusxalarni ham saqlab turadi', mediaType: 'bulut', offsite: true, connected: false},
  {id: 'branch', name: 'Filialdagi disk', detail: 'Har hafta boshqa binoga olib boriladi', mediaType: 'tashqi-disk', offsite: true, connected: false},
];

export type IncidentId = 'disk' | 'ransom' | 'fire';

export const INCIDENTS: {id: IncidentId; name: string; description: string}[] = [
  {id: 'disk', name: 'Disk buzildi', description: 'Registratura kompyuterining diski ishdan chiqdi. Faqat asl nusxa yo‘qoladi.'},
  {id: 'ransom', name: 'Shifrlovchi virus', description: 'Virus asl nusxani va tarmoqqa yoki kompyuterga ulangan hamma nusxalarni shifrladi.'},
  {id: 'fire', name: 'Binoda yong‘in', description: 'Klinika binosidagi hamma qurilma yo‘qoldi. Faqat tashqi joydagi nusxa qoladi.'},
];

export function survives(option: BackupOption, incident: IncidentId): boolean {
  if (incident === 'disk') return true;
  if (incident === 'ransom') return !option.connected;
  return option.offsite;
}

/* ---------------------------- Zararli dasturlar ---------------------------- */

export const MALWARE = [
  {name: 'Virus', how: 'O‘zini boshqa fayllarga yozib tarqaladi, fayl ochilganda ishga tushadi.', clinic: 'Bo‘lim kompyuterlaridagi hujjatlar buziladi.'},
  {name: 'Qurt', how: 'Foydalanuvchisiz, tarmoq va fleshka orqali o‘zi tarqaladi.', clinic: 'Bir kompyuterdan butun klinika tarmog‘iga yoyiladi.'},
  {name: 'Troyan', how: 'Foydali dastur yoki hujjat qiyofasida kiradi.', clinic: '"Bemorlar ro‘yxati" nomli fayl aslida dastur bo‘lib chiqadi.'},
  {name: 'Shifrlovchi', how: 'Fayllarni shifrlaydi va ochish uchun pul talab qiladi.', clinic: 'Kasallik tarixlari ochilmay, qabul to‘xtab qoladi.'},
  {name: 'Josus dastur', how: 'Parollar va bosilgan tugmalarni yashirincha yozib oladi.', clinic: 'Bemorlar bazasiga kirish paroli begonaga o‘tadi.'},
  {name: 'Reklama dasturi', how: 'Keraksiz reklama chiqaradi, brauzer sozlamasini o‘zgartiradi.', clinic: 'Ish sekinlashadi, soxta havolalarni bosish xavfi oshadi.'},
];

export const MEDICAL_ANALOGY = [
  {term: 'Zararli dastur', medical: 'Infeksiya'},
  {term: 'Antivirus bazasini yangilash', medical: 'Emlash'},
  {term: 'To‘liq skanerlash', medical: 'Profilaktik ko‘rik'},
  {term: 'Karantin', medical: 'Izolyator'},
];

/* -------------------------- Antivirus simulyatori -------------------------- */

export type ActionId = 'davolash' | 'karantin' | 'ochirish' | 'qoldirish';

export const ACTIONS: {id: ActionId; label: string}[] = [
  {id: 'davolash', label: 'Davolash'},
  {id: 'karantin', label: 'Karantinga'},
  {id: 'ochirish', label: 'O‘chirish'},
  {id: 'qoldirish', label: 'Qoldirish'},
];

export type Threat = {
  id: string;
  path: string;
  type: string;
  fullScanOnly: boolean;
  needsUpdate: boolean;
  best: ActionId[];
  feedback: string;
  missed: string;
};

export const THREATS: Threat[] = [
  {
    id: 'troyan',
    path: 'C:\\Users\\Hamshira\\Downloads\\Bemorlar_royxati.xlsx.exe',
    type: 'Troyan',
    fullScanOnly: false,
    needsUpdate: false,
    best: ['karantin', 'ochirish'],
    feedback: 'Bu jadval emas, dastur: nomi ".exe" bilan tugaydi. Ichida bemor ma’lumoti yo‘q, shuning uchun uni ajratish yoki o‘chirish to‘g‘ri.',
    missed: '',
  },
  {
    id: 'spy',
    path: 'C:\\Users\\Hamshira\\AppData\\Roaming\\SysHelper32.exe',
    type: 'Josus dastur',
    fullScanOnly: false,
    needsUpdate: true,
    best: ['karantin', 'ochirish'],
    feedback: 'Parollarni yozib oladi. Yo‘qotilgandan keyin bemor tizimi parolini ham almashtirish kerak.',
    missed: 'Yangi josus dastur eski bazada yo‘q edi: uni topish uchun baza yangilanishi kerak.',
  },
  {
    id: 'macro',
    path: 'C:\\Users\\Hamshira\\Documents\\Tahlil_natijalari.docm',
    type: 'Makrovirus',
    fullScanOnly: true,
    needsUpdate: false,
    best: ['davolash'],
    feedback: 'Hujjatda haqiqiy tahlil natijalari bor. Davolash virusni olib tashlab, faylning o‘zini saqlab qoladi.',
    missed: 'Hujjatlar papkasi tezkor skanerlashga kirmagan: to‘liq skanerlash kerak edi.',
  },
  {
    id: 'worm',
    path: 'E:\\autorun.inf',
    type: 'Qurt (fleshkada)',
    fullScanOnly: true,
    needsUpdate: false,
    best: ['ochirish'],
    feedback: 'Bu fayl fleshka ulanganda qurtni ishga tushiradi. Hujjat emas, shuning uchun o‘chiriladi.',
    missed: 'Ulangan fleshka tezkor skanerlashga kirmagan: u to‘liq skanerlashda tekshiriladi.',
  },
  {
    id: 'ransom',
    path: 'C:\\Users\\Public\\svc_update.exe',
    type: 'Shifrlovchi',
    fullScanOnly: true,
    needsUpdate: true,
    best: ['karantin', 'ochirish'],
    feedback: 'Ishga tushguncha ushlandi. Shifrlovchi ishga tushgan bo‘lsa, fayllarni faqat zaxiradan tiklash mumkin bo‘lardi.',
    missed: 'Bu yangi shifrlovchi faqat yangilangan baza va to‘liq skanerlash bilan topiladi.',
  },
  {
    id: 'suspect',
    path: 'C:\\Program Files\\LabPrint\\labprint_update.exe',
    type: 'Shubhali fayl',
    fullScanOnly: true,
    needsUpdate: false,
    best: ['karantin'],
    feedback: 'Antivirus aniq bilmaydi, xato ham bo‘lishi mumkin. Karantin faylni zararsizlantiradi va keyin tiklash imkonini qoldiradi. IT mas’ulga xabar bering.',
    missed: 'Laboratoriya dasturi papkasi tezkor skanerlashga kirmagan.',
  },
];

export const ACTION_WRONG: Record<ActionId, string> = {
  davolash: 'Bu fayl butunlay zararli: uning ichida saqlab qolinadigan foydali ma’lumot yo‘q.',
  karantin: 'Karantin bu yerda eng yaxshi tanlov emas.',
  ochirish: 'O‘chirish bu yerda shoshilinch qaror: fayl qayta tiklanmaydi.',
  qoldirish: 'Xavfni qoldirib bo‘lmaydi: u faol bo‘lib turaveradi.',
};

/* ---------------------------- Xavfli vaziyatlar ---------------------------- */

export type Scenario = {
  id: string;
  title: string;
  situation: string;
  evidence?: string[];
  options: {text: string; correct: boolean; feedback: string}[];
};

export const SCENARIOS: Scenario[] = [
  {
    id: 'phishing',
    title: 'Shoshilinch xat',
    situation: 'Ish pochtangizga shunday xat keldi. Xat ichida parolni kiritish uchun havola bor.',
    evidence: [
      'Kimdan: Vazirlik bo‘limi <info@ssv-yangilash.example>',
      'Mavzu: SHOSHILINCH! 24 soat ichida parolni tasdiqlang',
    ],
    options: [
      {text: 'Hisob bloklanmasligi uchun havolani bosib parolni kiritaman', correct: false, feedback: 'Bu fishing. Shoshiltirish va begona manzil asosiy belgilardir. Parol to‘g‘ridan-to‘g‘ri firibgarga o‘tadi.'},
      {text: 'Havolani bosmay, IT mas’ulga xabar beraman', correct: true, feedback: 'To‘g‘ri. Xabar berilsa, boshqa xodimlar ham ogohlantiriladi.'},
      {text: 'Xatoni tekshirish uchun hamkasblarimga yuboraman', correct: false, feedback: 'Xatni tarqatish xavfni kengaytiradi: hamkasblardan biri havolani bosishi mumkin.'},
    ],
  },
  {
    id: 'usb',
    title: 'Koridorda topilgan fleshka',
    situation: 'Koridorda "Bemorlar natijalari" yozuvli fleshka topdingiz. Egasini aniqlash kerak.',
    options: [
      {text: 'Ichidagi fayllarni ko‘rish uchun ish kompyuteriga ulayman', correct: false, feedback: 'Noma’lum fleshka ulanishi bilan zararli dastur ishga tushishi mumkin. Bu qasddan tashlab ketilgan bo‘lishi ham mumkin.'},
      {text: 'Uyga olib ketib, shaxsiy kompyuterda ochaman', correct: false, feedback: 'Agar unda haqiqiy bemor ma’lumoti bo‘lsa, bu tibbiy sirni klinikadan olib chiqish bo‘ladi.'},
      {text: 'Hech qayerga ulamay, IT mas’ulga topshiraman', correct: true, feedback: 'To‘g‘ri. Fleshkani xavfsiz sharoitda tekshirish mas’ul xodimning vazifasi.'},
    ],
  },
  {
    id: 'password',
    title: 'Monitordagi parol',
    situation: 'Hamkasbingiz parolini qog‘ozga yozib monitorga yopishtirgan va: "Yodda tutish oson, sen ham shunday qil", deydi.',
    evidence: ['Parol: Klinika123'],
    options: [
      {text: 'Bir xil umumiy paroldan foydalanamiz, ish tezlashadi', correct: false, feedback: 'Umumiy parol bilan kim nima qilgani aniqlanmaydi. Parol kimga tegishli bo‘lsa, javobgarlik ham o‘shanga tushadi.'},
      {text: 'Parolni klaviatura ostiga yashiraman', correct: false, feedback: 'Bu joy birinchi tekshiriladigan yerlardan biri. Parol qog‘ozda turmasligi kerak.'},
      {text: 'O‘z hisobim uchun alohida uzun parol qo‘yaman va uni hech kimga aytmayman', correct: true, feedback: 'To‘g‘ri. Parol shaxsiy, uzun va boshqa xizmatlarda takrorlanmaydigan bo‘lishi kerak.'},
    ],
  },
  {
    id: 'messenger',
    title: 'Tahlil natijasini yuborish',
    situation: 'Shifokor telefon qilib, bemorning tahlil natijasini shaxsiy Telegramiga tashlab yuborishingizni so‘radi.',
    options: [
      {text: 'Klinikaning ruxsat etilgan ichki tizimi orqali yuboraman', correct: true, feedback: 'To‘g‘ri. Tibbiy ma’lumot faqat tasdiqlangan kanal orqali uzatiladi, kirish qaydlari ham saqlanadi.'},
      {text: 'Telefon orqali suratga olib, shaxsiy Telegramga yuboraman', correct: false, feedback: 'Natija shaxsiy telefon va begona serverlarda qoladi. Tibbiy sir nazoratdan chiqadi.'},
      {text: 'Faqat bemorning familiyasini berkitib yuboraman', correct: false, feedback: 'Boshqa ma’lumotlar bo‘yicha ham bemorni aniqlash mumkin. Kanalning o‘zi baribir ruxsat etilmagan.'},
    ],
  },
  {
    id: 'lock',
    title: 'Ekranda ochiq karta',
    situation: 'Ekranda bemorning kartasi ochiq turibdi. Sizni shoshilinch boshqa palataga chaqirishdi, xonada bemorlar bor.',
    options: [
      {text: 'Tez qaytaman, kompyuterni shu holicha qoldiraman', correct: false, feedback: 'Bir daqiqada ham boshqa bemor ma’lumotni ko‘rishi yoki yozuvni o‘zgartirishi mumkin.'},
      {text: 'Win + L tugmalari bilan ekranni qulflab chiqaman', correct: true, feedback: 'To‘g‘ri. Bir soniyalik amal ma’lumotning maxfiyligini saqlaydi.'},
      {text: 'Monitorni o‘chirib ketaman', correct: false, feedback: 'Kompyuter ochiqligicha qoladi: monitorni yoqish kifoya.'},
    ],
  },
  {
    id: 'crack',
    title: 'Bepul "aktivator"',
    situation: 'Kerakli dastur pullik. Saytdan bepul "aktivator" topdingiz, u o‘rnatishdan oldin antivirusni o‘chirishni talab qilyapti.',
    options: [
      {text: 'Antivirusni vaqtincha o‘chirib o‘rnataman', correct: false, feedback: 'Antivirusni o‘chirishni so‘rash xavfli belgi. Bunday fayllar bilan troyanlar ko‘p tarqaladi.'},
      {text: 'O‘rnatmayman, kerakli dasturni IT mas’ul orqali so‘rayman', correct: true, feedback: 'To‘g‘ri. Dastur faqat rasmiy manbadan va ruxsat bilan o‘rnatiladi.'},
      {text: 'Faqat uyga ishlash uchun oladigan fleshkaga o‘rnataman', correct: false, feedback: 'Fleshka zararlansa, xavf ish kompyuteriga ham keladi.'},
    ],
  },
  {
    id: 'scareware',
    title: 'Qo‘rqituvchi oyna',
    situation: 'Brauzerda to‘satdan katta qizil oyna ochildi va ovoz chiqara boshladi.',
    evidence: ['KOMPYUTERINGIZ ZARARLANGAN!', 'Darhol shu raqamga qo‘ng‘iroq qiling va xizmat haqini to‘lang'],
    options: [
      {text: 'Ko‘rsatilgan raqamga qo‘ng‘iroq qilaman', correct: false, feedback: 'Bu soxta ogohlantirish. Firibgar pul yoki kompyuterga masofaviy kirish so‘raydi.'},
      {text: 'Oynadagi "Tozalash" tugmasini bosaman', correct: false, feedback: 'Bu tugma zararli dasturni yuklab berishi mumkin.'},
      {text: 'Hech narsani bosmay brauzerni yopaman, IT mas’ulga aytaman', correct: true, feedback: 'To‘g‘ri. Haqiqiy antivirus xabarlari brauzer oynasida pul so‘ramaydi. Yopilmasa, Vazifalar menejeridan foydalaning.'},
    ],
  },
  {
    id: 'locked',
    title: 'Fayllar ochilmayapti',
    situation: 'Ertalab fayllar ochilmayapti, ularning nomi o‘zgargan va ekranda pul talab qilingan xabar turibdi.',
    evidence: ['Kasallik_tarixi_2026.docx.locked', 'FAYLLARNI_TIKLASH.txt'],
    options: [
      {text: 'Kompyuterni tarmoqdan uzaman va darhol IT mas’ulga xabar beraman', correct: true, feedback: 'To‘g‘ri. Tarmoqdan uzish virusning boshqa kompyuterlarga o‘tishini to‘xtatadi. Fayllar zaxiradan tiklanadi.'},
      {text: 'Klinika ishi to‘xtamasligi uchun talab qilingan pulni to‘layman', correct: false, feedback: 'To‘lov fayllar qaytishiga kafolat bermaydi va jinoyatchilarni rag‘batlantiradi.'},
      {text: 'Kompyuterni ishlatishda davom etib, fayllarni birma-bir ochib ko‘raman', correct: false, feedback: 'Virus ishlashda davom etsa, tarmoqdagi yana ko‘p fayl shifrlanadi.'},
    ],
  },
];

/* --------------------------------- Viktorina --------------------------------- */

export type QuizQuestion = {question: string; options: string[]; answer: number; explain: string};

export const QUIZ: QuizQuestion[] = [
  {
    question: 'Standart dasturlarga eng to‘g‘ri ta’rif qaysi?',
    options: ['Faqat pullik dasturlar', 'Operatsion tizim bilan birga keladigan, oddiy kundalik ishlar uchun dasturlar', 'Faqat shifokorlar ishlatadigan dasturlar', 'Kompyuterni viruslardan himoyalovchi dasturlar'],
    answer: 1,
    explain: 'Blocknot, Paint, Kalkulyator va Qaychi Windows bilan birga keladi.',
  },
  {
    question: 'Quyidagilardan qaysi biri xizmatchi dastur?',
    options: ['Microsoft Word', 'Paint', 'Diskni tozalash', 'Tibbiy axborot tizimi'],
    answer: 2,
    explain: 'Diskni tozalash kompyuterning o‘ziga xizmat ko‘rsatadi.',
  },
  {
    question: 'Vazifalar menejerini qaysi tugmalar ochadi?',
    options: ['Ctrl + Shift + Esc', 'Ctrl + P', 'Alt + F4', 'Win + L'],
    answer: 0,
    explain: 'Ctrl + Shift + Esc Vazifalar menejerini to‘g‘ridan-to‘g‘ri ochadi.',
  },
  {
    question: 'Win + R oynasida Blocknotni qaysi buyruq ochadi?',
    options: ['calc', 'mspaint', 'cleanmgr', 'notepad'],
    answer: 3,
    explain: 'notepad Blocknotni, calc Kalkulyatorni, mspaint Paint dasturini ochadi.',
  },
  {
    question: 'Axborot xavfsizligida "yaxlitlik" nimani anglatadi?',
    options: ['Ma’lumot ruxsatsiz o‘zgartirilmagan va to‘g‘ri', 'Ma’lumot faqat bitta diskda turadi', 'Ma’lumot hamma uchun ochiq', 'Ma’lumot arxivlangan'],
    answer: 0,
    explain: 'Masalan, dori dozasi yozuvi ruxsatsiz o‘zgarmagan bo‘lishi kerak.',
  },
  {
    question: '3-2-1 qoidasi nimani talab qiladi?',
    options: ['3 ta parol, 2 ta login, 1 ta kompyuter', '3 kunda 2 marta 1 ta nusxa', '3 ta nusxa, 2 xil vosita, 1 tasi tashqi joyda', '3 ta antivirus, 2 ta disk, 1 ta server'],
    answer: 2,
    explain: 'Bu reja disk buzilishi, virus va yong‘inda ham ma’lumotni saqlab qoladi.',
  },
  {
    question: 'Tibbiy axborot tizimi bazasi tez ishlashi uchun qaysi disk mos?',
    options: ['Optik disk', 'SSD', 'Fleshka', 'HDD'],
    answer: 1,
    explain: 'SSD eng tez ishlaydigan keng tarqalgan disk turi.',
  },
  {
    question: 'Shifrlovchi zararli dastur nima qiladi?',
    options: ['Monitorni o‘chiradi', 'Faqat reklama ko‘rsatadi', 'Internet tezligini oshiradi', 'Fayllarni shifrlab, ochish uchun pul talab qiladi'],
    answer: 3,
    explain: 'Bunday hujumdan keyin ishonchli yo‘l faylni zaxiradan tiklashdir.',
  },
  {
    question: 'Antivirusdagi karantin nima?',
    options: ['Shubhali fayl ishlay olmaydigan ajratilgan joy', 'Kompyuterni o‘chirish rejimi', 'Fayllarni tezroq ochish usuli', 'Yangilanish xizmati'],
    answer: 0,
    explain: 'Karantindagi fayl xavfsiz turadi, kerak bo‘lsa tiklanadi.',
  },
  {
    question: 'Antivirus bazasi nega muntazam yangilanadi?',
    options: ['Dastur chiroyli ko‘rinishi uchun', 'Disk bo‘sh joyini oshirish uchun', 'Yangi zararli dasturlarni tanish uchun', 'Internet tarifini tejash uchun'],
    answer: 2,
    explain: 'Eski baza yangi chiqqan xavflarni tanimasligi mumkin.',
  },
  {
    question: 'Koridorda fleshka topib oldingiz. To‘g‘ri harakat qaysi?',
    options: ['Ish kompyuteriga ulash', 'Ulamasdan IT mas’ulga topshirish', 'Uyga olib ketish', 'Hamkasbga berish'],
    answer: 1,
    explain: 'Noma’lum fleshka zararli dastur yetkazish vositasi bo‘lishi mumkin.',
  },
  {
    question: 'O‘zbekistonda shaxsiy ma’lumotlar himoyasini asosan qaysi qonun tartibga soladi?',
    options: ['"Shaxsga doir ma’lumotlar to‘g‘risida"gi Qonun', '"Reklama to‘g‘risida"gi Qonun', '"Yo‘l harakati xavfsizligi to‘g‘risida"gi Qonun', '"Bank siri to‘g‘risida"gi Qonun'],
    answer: 0,
    explain: 'O‘RQ-547-son Qonun 2019-yilda qabul qilingan.',
  },
];

/* ------------------------------ Nazorat savollari ------------------------------ */

export const CONTROL_QUESTIONS = [
  {q: 'Standart dasturlar nima? Uchta misol keltiring.', a: 'Operatsion tizim bilan birga keladigan, oddiy kundalik ishlar uchun dasturlar: Blocknot, Paint, Kalkulyator, Qaychi.'},
  {q: 'Xizmatchi dasturlarning standart dasturlardan farqi nimada?', a: 'Xizmatchi dasturlar kompyuterning o‘ziga xizmat qiladi: diskni tozalaydi, jarayonlarni kuzatadi, ma’lumotni arxivlaydi va himoya qiladi. Standart dasturlar esa foydalanuvchining oddiy ishlari uchun.'},
  {q: 'Diskni tozalash Windows bilan birga kelsa ham, nega xizmatchi dastur hisoblanadi?', a: 'Dastur guruhi uning vazifasi bilan aniqlanadi. Diskni tozalash foydalanuvchi ishini emas, diskning holatini yaxshilaydi.'},
  {q: 'Axborot xavfsizligining uch tamoyilini tibbiy misol bilan tushuntiring.', a: 'Maxfiylik: tashxisni faqat vakolatli xodim ko‘radi. Yaxlitlik: dori dozasi ruxsatsiz o‘zgarmaydi. Mavjudlik: kerakli payt bemor kartasi ochiladi.'},
  {q: 'HDD va SSD ning asosiy farqlarini ayting.', a: 'HDD magnit diskli, sekinroq, lekin katta hajmni arzon beradi. SSD flesh xotirali, juda tez, zarbaga chidamliroq, ammo bir xil hajmda qimmatroq.'},
  {q: '3-2-1 qoidasini tushuntiring.', a: 'Ma’lumotning 3 ta nusxasi bo‘ladi, ular 2 xil turdagi vositada saqlanadi, 1 tasi esa klinikadan tashqarida turadi.'},
  {q: 'Doim kompyuterga ulangan tashqi disk nega shifrlovchi virusdan himoya qilmaydi?', a: 'Virus ulangan disklarni ham ko‘radi va ulardagi nusxalarni ham shifrlaydi. Zaxira nusxa olingach disk uzib qo‘yilishi kerak.'},
  {q: 'Virus, qurt va troyanning farqi nimada?', a: 'Virus boshqa fayllarga yozilib tarqaladi. Qurt foydalanuvchisiz o‘zi tarqaladi. Troyan foydali dastur qiyofasida kiradi.'},
  {q: 'Antivirusda davolash, karantin va o‘chirish qachon tanlanadi?', a: 'Davolash: fayl ichida kerakli ma’lumot bo‘lganda. Karantin: fayl shubhali yoki ishonch yo‘q bo‘lganda. O‘chirish: fayl butunlay zararli va kerak bo‘lmaganda.'},
  {q: 'Shifrlovchi virus kirganini sezsangiz, nima qilasiz?', a: 'Kompyuterni tarmoqdan uzaman, pul to‘lamayman, IT mas’ulga darhol xabar beraman. Fayllar tozalangandan keyin zaxiradan tiklanadi.'},
];
