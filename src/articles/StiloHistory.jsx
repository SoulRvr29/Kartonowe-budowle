import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";

const StiloHistory = () => {
  const [sectionState, setSectionState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const src = (nr) => {
    return "models/stilo/stilo-photo-" + nr + ".jpg";
  };
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Informacje"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
      {sectionState === true && (
        <article className="px-8 max-sm:px-4">
          <p>
            <span className="first-letter font-playfair">W</span>ieża latarni
            położona jest na wierzchołku wydmy 41 m n.p.m., odległej około 1000
            m od morza. Latarnia zbudowana została przez Niemców na fundamencie
            z granitu i betonu. Wieża latarni, szesnastokątna, u podstawy o
            średnicy 7,3 m, natomiast u nasady laterny zwęża się do 3,9 m
            średnicy. Korpus jest wykonany z żeliwnych płyt, w kształcie
            trapezu, większe u dołu, lecz o tej samej wysokości, 95 cm, każda
            łączonych śrubami i uszczelnianych ołowiem. Pomiędzy parterem i
            górną galerią znajduje się 10 kondygnacji, przez które przechodzą
            prawoskrętne schody.
          </p>
          <h4>Dane techniczne</h4>
          <div className="flex justify-center gap-8 max-md:flex-col">
            <img
              className="pr-8 float-left"
              src={src(1)}
              alt="Stilo"
              onClick={(e) => {
                setProp(e);
                setFullScreen(true);
              }}
              title="Obecny wygląd."
            />
            <ul className="list-disc pl-6 marker:text-accent mt-10 max-md:mt-0 max-md:mb-4 max-sm:text-left font-bold">
              <li>
                Położenie:{" "}
                <span className="li-span">54°47'12" N 17°44'02" E</span>
              </li>
              <li>
                Wysokość wydmy: <span className="li-span">41 m n.p.m.</span>
              </li>
              <li>
                Wysokość wieży:<span className="li-span"> 33,40 m</span>
              </li>
              <li>
                Wysokość światła:{" "}
                <span className="li-span">75,00 m n.p.m.</span>
              </li>
              <li>
                Zasięg nominalny światła:{" "}
                <span className="li-span">23,50 Mm (43,522 km)</span>
              </li>
              <li>
                Charakterystyka światła:{" "}
                <span className="li-span">Błyskowe grupowe</span>
                <ul className="list-disc pl-6 pt-2">
                  <li>
                    Błysk: <span className="li-span">0,3 s</span>
                  </li>
                  <li>
                    Przerwa: <span className="li-span">2,2 s</span>
                  </li>
                  <li>
                    Błysk: <span className="li-span">0,3 s</span>
                  </li>
                  <li>
                    Przerwa: <span className="li-span">2,2 s</span>
                  </li>
                  <li>
                    Błysk: <span className="li-span">0,3 s</span>
                  </li>
                  <li>
                    Przerwa: <span className="li-span">6,7 s</span>
                  </li>
                  <li>
                    Okres (pełny cykl): <span className="li-span">12,0 s</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h4>Historia</h4>
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
            className="pr-8 float-left"
            src={src(3)}
            alt="Stilo"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
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
          <img
            className="pr-8 mx-auto"
            src={src(2)}
            alt="Stilo"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
        </article>
      )}
    </>
  );
};

export default StiloHistory;
