# 4-Dars: Klaviatura va Sichqoncha bilan professional ishlash

Tibbiyot texnikumi 1-kurs, **Axborot texnologiyalari** fani.
Asosiy fayl: **`dars.html`** — proyektorga chiqarib dars o'tish uchun mo'ljallangan,
internetsiz ham to'liq ishlaydigan bitta HTML sahifa (CSS va JS ichida).

---

## Darsning maqsadi

Dars oxirida talaba:
1. Klaviatura klavishalarining 6 ta guruhini va asosiy tugmalar vazifasini biladi;
2. Klaviaturaga qaramasdan, aniqlik bilan yozish ko'nikmasini boshlaydi;
3. Tezkor klaviaturalar (qisqartmalar) nima uchun kerakligini tushuntira oladi va kamida
   4 tasini amalda doimiy qo'llaydi;
4. Sichqoncha amallarini (tanlash, sudrash, ramka, Ctrl/Shift + bosish) bajaradi.

> **Eslatma:** barmoqlarni klavishalarga joylashtirish (10 barmoq usuli) bu darsda o'rgatilmaydi.

---

## Sahifa tarkibi (4 ta bo'lim)

| Tab | Mavzu | Ko'rgazmali qism | Ichidagi amaliyot |
|---|---|---|---|
| 1 | Klaviatura tuzilishi **+ tezkor klaviaturalar nazariyasi** | **104 klavishali rangli klaviatura xaritasi** | Guruh filtri + **jonli klavisha detektori** (bosilgan tugma sxemada sariq rangda yonadi) |
| 2 | Tez yozish va teztype.uz | Tezlik ko'rsatkichlari kartalari | **Oflayn yozuv trenajyori** — 60 s, WPM, aniqlik, xatolar |
| 3 | Tezkor klaviaturalar | Klavisha ko'rinishidagi belgilar | **Viktorina** — 12 ta savol, ball avtomatik |
| 4 | Sichqoncha bilan aniq ishlash | **Sichqoncha chizmasi** (6 ta raqamlangan qism) | **Kursor namunalari** (ustiga borsangiz kursor o'zgaradi) + tashqi mashq saytlari |

### Doskada ko'rsatish uchun eng qulay joylar

1. **Klaviatura xaritasi (1-tab).** Rang tugmalarini bosib guruhlarni birma-bir ko'rsating.
   Sxemani sichqoncha bilan bosib, so'ng klaviaturadan tugma bossangiz — u xaritada yonadi.
   Talabalarni chaqirib "Ctrl qayerda?", "Funksional klavishalar qaysi rangda?" deb so'rang.
2. **Sichqoncha chizmasi (4-tab)** — 6 ta raqam bo'yicha qismlarni tushuntiring.
3. **Kursor namunalari (4-tab)** — kursorni kataklar ustiga olib borib, shakli o'zgarishini ko'rsating.

---

## 45 daqiqalik taqsimot

| Vaqt | Bosqich | Nima qilinadi |
|---|---|---|
| 0–5 daq | Tashkiliy qism | Mavzu e'lon qilinadi, `dars.html` proyektorga chiqariladi |
| 5–14 daq | 1-tab: Klaviatura tuzilishi | Klaviatura xaritasi, guruhlar, Caps/Num Lock. **Klavisha detektori** doskada |
| 14–21 daq | 1-tab: Tezkor klaviaturalar | Nima uchun kerakligi, qanday bosilishi, 6 ta sabab, o'rganish usuli |
| 21–26 daq | 3-tab: Viktorina | 12 ta savol sinf bilan birga yechiladi |
| 26–37 daq | 2-tab: Tez yozish | teztype.uz/play, 60 soniyalik test **3 marta**, natijalar jadvalga yoziladi |
| 37–45 daq | 4-tab: Sichqoncha | Chizma bo'yicha qismlar, kursor namunalari, mouseaccuracy.com da 1 daqiqalik mashq, uyga vazifa |

Internet sekin bo'lsa: 2-tabdagi **oflayn yozuv trenajyori** bilan davom eting — u
internetsiz ham ishlaydi.

---

## Kerakli jihozlar

- Har bir talabaga kompyuter (klaviatura + sichqoncha);
- Proyektor yoki interaktiv doska;
- Internet (teztype.uz va sichqoncha mashq saytlari uchun) — shart emas, lekin tavsiya etiladi;
- Talabalar natijani yozib borishi uchun daftar.

## Foydalaniladigan tashqi resurslar

| Sayt | Nima uchun |
|---|---|
| <https://www.teztype.uz/play> | O'zbek tilida yozuv tezligi mashqi (bepul, ro'yxatdan o'tishsiz) |
| <https://mouseaccuracy.com/> | Sichqoncha aniqligi testi |
| <https://humanbenchmark.com/tests/aim> | Nishonga tez bosish testi |
| <https://www.aimtrainer.io/> | Sichqoncha sezgirligini sozlash mashqi |

---

## Baholash mezoni (5 ballik)

| Ball | Mezon |
|---|---|
| 5 | Viktorinada 10+ to'g'ri javob, teztype'da 3 ta urinishni bajardi va natijani yozdi, tezkor klaviaturalar nima uchun kerakligini to'liq tushuntirdi |
| 4 | Viktorinada 8–9 to'g'ri, mashqni bajardi, savollarga asosan javob berdi |
| 3 | Viktorinada 6–7 to'g'ri, mashqni qisman bajardi |
| 2 | Viktorinada 6 tadan kam to'g'ri javob, mashq bajarilmadi |

## Uyga vazifa

1. teztype.uz'da uch kun davomida har kuni **10 daqiqa** mashq qilib, har kungi WPM va
   aniqlikni daftarga yozib borish.
2. O'zi tanlagan **4 ta tezkor klaviaturani** bir hafta davomida faqat klaviatura orqali
   qo'llash va qaysi biri qulay bo'lganini yozib kelish.
3. "Tezkor klaviaturalar nima uchun kerak?" mavzusida qisqa (yarim bet) yozma javob tayyorlash.

---

## Texnik izoh

`dars.html` mustaqil fayl — hech qanday kutubxona yoki server talab qilmaydi.
Brauzerda ikki marta bosib ochish kifoya. Chop etishda (`Ctrl + P`) tab tugmalari va
trenajyorlar chiqmaydi, faqat nazariy matn va jadvallar bosiladi.
