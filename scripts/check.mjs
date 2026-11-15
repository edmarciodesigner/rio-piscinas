import { data } from "../src/data.js";
import { access, readFile, readdir } from "node:fs/promises";
import assert from "node:assert/strict";
assert.equal(data.models.length, 7);
assert.equal(data.luxModels.length, 5);
assert.equal(data.catalogs.length, 3);
for (const k of ["logo", "map", "hero", "lux"]) assert.ok(data.media[k], k);
const refs = new Set();
function scan(x) {
  if (typeof x === "string" && x.startsWith("assets/")) refs.add(x);
  else if (Array.isArray(x)) x.forEach(scan);
  else if (x && typeof x === "object") Object.values(x).forEach(scan);
}
scan(data);
for (const p of refs) await access("public/" + p);
for (const m of data.models) {
  assert.ok(m.image && m.technical && m.banner);
  assert.ok(m.gallery.length);
  assert.ok(m.source.startsWith("https://riopiscinas.com.br/"));
  for (const pdf of m.pdfs) assert.ok(pdf.url.endsWith(".pdf"));
}
const app = await readFile("src/app.js", "utf8");
assert.ok(!app.includes("albacete.com.br"));
assert.ok(!app.includes("innerHTML=message"));
assert.ok(app.includes("encodeURIComponent(message)"));
assert.ok(app.includes("prefers-reduced-motion"));
for (const m of data.luxModels) assert.ok(m.image, m.name);
console.log(
  `Verificado: 7 linhas, 5 modelos Lux, 3 catálogos e ${refs.size} imagens locais.`,
);
