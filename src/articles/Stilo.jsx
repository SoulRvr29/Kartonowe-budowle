import modelsData from "../data/models-data.json";
import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

const Article = () => {
  const model = modelsData[2];
  const [sectionState, setSectionState] = useState(true);
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={2} />
      <Gallery id={2} />
      <SectionHeader
        sectionName="Historia"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState === true && (
        <article className="px-8 max-sm:px-4">
          <p>
            Latarnia została zbudowana w latach 1904–1906 na wniosek
            Niemieckiego Związku Nawigacyjnego według projektu niemieckiego
            architekta Waltera Körtego przez firmę Nordische Elektrizitäts und
            Stahlwerke AG z Gdańska. Laterna została wykonana z drewna przez
            firmę Juliusa Pintscha z Berlina, natomiast optykę wykonał Wilhelm
            Weule z Goslar. Pierwotnie zainstalowano lampę łukową zasilaną
            prądem stałym o napięciu 110 V. W 1926 roku przeprowadzono
            modernizację, wprowadzając oświetlenie żarówką o mocy 2000 W i
            instalując rezerwowe oświetlenie gazowe.
          </p>
          <img
            className="pb-8 pr-8 float-left "
            src={model.photos}
            alt="Stilo"
          />
          <p>
            Od 1975 roku latarnia posiada oświetlenie halogenowe o mocy snopu
            światła 1 200 W/12V szwedzkiej firmy AGA PRB-21 (Aktiebolaget
            Gasaccumulator AGA, ang. Gas Accumulator Company). Urządzenie
            zasilane jest bezpośrednio z sieci, a awaryjnie przez agregat
            prądotwórczy i akumulatory – 6 sztuk po 100A/h, to jest rezerwa na
            18 godzin. Zapalanie świateł odbywa się przez fotokomórkę i
            tradycyjnie – ręcznie.
          </p>
          <p>
            Wraz z latarnią zbudowano pierwszy nautofon zamontowany na żelaznej
            białej wieży z galerią i stożkowym dachem o całkowitej wysokości 21
            metrów. Ze względów technicznych buczek umiejscowiono przy plaży,
            lecz erozja brzegów groziła jego zniszczeniem. W latach 50 XX w.
            nautofon rozebrano, a jego części użyto to odbudowy latarni morskiej
            w Jastarni. W miejsce rozebranego buczka postawiono nową ceglaną
            wieżę odsuniętą od morza o 150 metrów i tam zamontowano urządzenia
            sygnalizacyjne ze starego nautofonu. W połowie lat 80, na skutek
            braku zapotrzebowania na sygnalizację akustyczną, urządzenia
            zdemontowano, a wieża, która pozostała obecnie służy, jako obiekt
            treningowy dla wspinaczy skałkowych.
          </p>
          <p>
            W 2006 roku, w stulecie otwarcia latarni, przeprowadzono remont,
            podczas którego między innymi pokryto korpus całkowicie nową warstwą
            malarską, której kolory są charakterystyczną cechą latarni Stilo.
            Przez cały okres istnienia latarnia miała tę samą kolorystykę trzech
            pasów, od góry: czerwony, biały, czarny – barwy odwróconej flagi
            państwowej z okresu Cesarstwa Niemieckiego.
          </p>
          <p>
            Ważnym dodatkowym obowiązkiem latarników, oprócz obsługi latarni i
            wszystkich związanych z nią budowli, jest nasłuch na kanale
            bezpieczeństwa UKF i utrzymywanie łączności pomiędzy statkami, a
            stacją brzegową. Informacje o zaistniałej na morzu sytuacji
            przekazuje się do stacji głównej, która uruchamia w razie potrzeby
            ratownictwo. Na przykład w 1970 roku, z powodu awarii silników, przy
            sztormie o sile 12 w skali Beauforta, na mieliznę na wysokości
            latarni Stilo wszedł statek bandery duńskiej (od sztormu Xaver z
            początku grudnia 2013 roku widoczny jest tylko jeden maszt, rufowy).
            Obsługa latarni uczestniczyła w akcji ratowniczej statku i jego
            załogi poprzez łączność radiową.
          </p>
          <p>
            Latarnia jest dozorowana. Ostatni niemiecki latarnik, P. Pruztt,
            pracował w latarni do 1945 roku. W 1948 roku latarnię objął Stefan
            Łozicki, odznaczony Krzyżem Walecznych po walkach pod Monte Cassino.
            Pracował przez 33 lata.
          </p>
          <p>
            Również długo obsługiwali latarnię Jan Liss i Longin Godula. Po
            Stefanie Łozickim kierownictwo latarni objął jego syn – Romuald
            Łozicki wraz z małżonką Weroniką (jedna z trzech kobiet –
            latarników), a następnie wnuk – Damian Łozicki.
          </p>
        </article>
      )}
    </div>
  );
};

export default Article;
