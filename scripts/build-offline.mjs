// Next.js eksportini bitta mustaqil HTML faylga jamlaydi.
// Natija: offline/index.html — server va internetsiz, ikki marta bosib ochiladi.
import {spawnSync} from 'node:child_process';
import {existsSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const exportDir = join(root, 'out');
const offlineDir = join(root, 'offline');

const nextBin = join(root, 'node_modules', 'next', 'dist', 'bin', 'next');
const build = spawnSync(process.execPath, [nextBin, 'build'], {cwd: root, stdio: 'inherit'});

if (build.error || build.status !== 0) {
  console.error('\nBuild muvaffaqiyatsiz: offline/ o‘zgartirilmadi.');
  process.exit(build.status ?? 1);
}

const readAsset = (href) => {
  const file = join(exportDir, decodeURIComponent(href.split('?')[0]));
  if (!existsSync(file)) throw new Error(`Fayl topilmadi: ${href}`);
  return readFileSync(file, 'utf8');
};

const escapeScript = (code) => code.replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\!--');

let html = readFileSync(join(exportDir, 'index.html'), 'utf8');

html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>/g, (tag) => {
  const href = tag.match(/href="([^"]+)"/)?.[1];
  return href ? `<style>${readAsset(href)}</style>` : tag;
});

// Skriptlar sahifa oxirida ishlaydi: shunda hydrate paytida DOM to'liq bo'ladi.
// main-app oxirida turadi, chunki u ishga tushganda qolgan bo'laklar tayyor bo'lishi kerak.
const scripts = [];
html = html.replace(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/g, (tag, src) => {
  if (!/\bnoModule\b/i.test(tag)) scripts.push({src, code: readAsset(src)});
  return '';
});
scripts.sort((a, b) => Number(a.src.includes('main-app')) - Number(b.src.includes('main-app')));
html = html.replace(/<link[^>]+rel="preload"[^>]*>/g, '');
html = html.replace(
  '</body>',
  () => `${scripts.map(({code}) => `<script>${escapeScript(code)}</script>`).join('')}</body>`,
);

// RSC ma'lumotlarida CSS manzili qoladi. React uni qayta yuklamasligi uchun bo'sh CSS bilan almashtiriladi.
html = html.replace(/\/_next\/static\/css\/[\w.-]+\.css/g, 'data:text/css,');

const leftovers = html.match(/(?:src|href)="\/_next[^"]*"/g);
if (leftovers) throw new Error(`Tashqi fayllar qoldi: ${leftovers.join(', ')}`);

rmSync(offlineDir, {recursive: true, force: true});
mkdirSync(offlineDir, {recursive: true});
writeFileSync(join(offlineDir, 'index.html'), html, 'utf8');

console.log(`\noffline/index.html tayyor (${Math.round(Buffer.byteLength(html) / 1024)} KB).`);
