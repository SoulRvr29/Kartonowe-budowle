import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const sitemap = new SitemapStream({
  hostname: "https://www.modelcraft.pl/",
});

const routes = [
  "/",
  "/About",
  "/Bedzin",
  "/Oporow",
  "/SandomierzRatusz",
  "/SandomierzBrama",
  "/Stilo",
  "/Darlowo",
  "/Czolpino",
  "/Gaski",
  "/Hel",
  "/Jaroslawiec",
  "/Jastarnia",
  "/Kikut",
  "/Kolobrzeg",
  "/Krynica Morska",
  "/Niechorze",
  "/Nowy Port",
  "/Port Polnocny",
  "/Rozewie",
  "/Sopot",
  "/Swinoujscie",
  "/Ustka",
  "/Curiosity",
  "/Baranow",
  "/Gryfino",
  "/Mauler",
  "/Predator",
  "/PhantomF4",
  "/StarshipSN15",
  "/Falcon9",
  "/Wang",
  "/AtlasV",
  "/Oswietlenie",
  "/Roslinnosc",
  "/Sadzarka",
  "/Okna",
  "/Arduino",
];

for (const route of routes) {
  sitemap.write({ url: route, changefreq: "daily", priority: 0.7 });
}

sitemap.end();

const sitemapStream = streamToPromise(sitemap);

sitemapStream.then((sm) => {
  fs.writeFileSync("./public/sitemap.xml", sm);
});
