import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";

const OporowHistory = () => {
  const [historyState, setHistoryState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const src = (nr) => {
    return "models/oporow/oporow-photo-" + nr + ".jpg";
  };
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
      {historyState === true && (
        <article className="px-8">
          <h4>Budowa i zniszczenie pierwszego dworu</h4>
          <p>
            <span className="first-letter font-playfair">O</span>porów po raz
            pierwszy wymieniono w źródłach w 1363 roku. Budowę pierwszego dworu
            około roku 1350 przypisuję się Stefanowi, pierwszemu znanemu
            przedstawicielowi rodu, który był chorążym i sędzią łęczyckim.
            Grunty w okolicy Oporowa otrzymał prawdopodobnie od Kazimierza
            Wielkiego. Syn Stefana – Bogusław (kanonik gnieźnieński i
            archidiakon) przedstawiał się już w dokumentach jako Bogusław z
            Oporowa, co może świadczyć o tym, iż miejscowość była już w tym
            czasie siedzibą rodu.
          </p>
          <img
            className="pr-8 mx-auto"
            src={src(2)}
            alt="Oporów"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
            title="Wizerunek zamku z litografii Wincentego Kasprzyckiego, 1844 rok."
          />
          <h4>Nowy i okazalszy dwór</h4>
          <p>
            Powstanie budowli przypisuje Mikołajowi Oporowskiemu, który już w
            1392 roku pełnił ważny urząd, był podczaszym łęczyckim. Kolejny dwór
            także wybudowano z drewna (w miejscu, gdzie obecnie stoi tzw. domek
            szwajcarski), jednakże był on znacznie większy, posadowiony na
            szerszym fundamencie, a także podniesiony (około 0,8 m powyżej
            gruntu), by zapobiec dostawaniu się wilgoci do budynku. Szerokość
            budynku wyniosła 8 m, a wokół ustawiono drewniany plot, poza tym nie
            znaleziono śladów charakteru obronnego budowli. Dwór posiadał
            prawdopodobnie dwie kondygnacje naziemne oraz ogromny piec
            centralnego ogrzewania, zwany hypocaustum. Podobne piece posiadały
            później również pobliski kościół i klasztor. Budowa takiego pieca
            była w owym czasie bardzo kosztowna.
          </p>
          <p>
            Dokument z 1428 roku potwierdza istnienie „curie” z zabudowaniami
            gospodarczymi i ogrodem. Owa curia stanowiła w tym czasie
            reprezentacyjną, okazałą siedzibę.
          </p>
          <p>
            W budynku tym mieszkali również goście Oporowskich, a w późniejszych
            latach także służba. Dwór funkcjonował, gdy stał już zamek. Mogli
            tam przebywać goście Władysława Oporowskiego – arcybiskupa
            gnieźnieńskiego, który miał wokół siebie liczne grono duchownych,
            orszak zbrojny, krewnych oraz urzędników i służbę.
          </p>
          <h4>Dalsze losy Oporowskich</h4>
          <p>
            Oporowscy byli związani z wsią od jej początku, bo jak wiadomo,
            pierwsza wzmianka o wsi padła w 1363 roku. Dziedzic Oporowa,
            Bogusław (kanonik i archidiakon gnieźnieński), syn Stefana, „pojawił
            się jako świadek na dokumencie wystawionym przez Kazimierza
            Wielkiego”. To właśnie z ojcem Bogusława, Stefanem (chorążym i
            sędzią łęczyckim), łączy się wybudowanie pierwszego dworu
            Oporowskich. Z kolei Bogusław pojawił się też jako scholastyk w
            dokumencie notarialnym z 1376 i w 1396, w dokumencie wydanym przez
            arcybiskupa Dobrogosta. Miasto miało zostać założone na gruntach
            dawnej wsi. Autorzy nie są zgodni co do tego, kiedy założony
            „pierwotny” Oporów, mogło to być przed połową XII stulecia, lub też
            później.
          </p>
          <p>
            Kolejne siedziby rodowe wznosili już najznamienitsi przedstawiciele
            rodziny. Mikołaj Oporowski był bratankiem i spadkobiercą Bogusława,
            synem Włodzimierza (podstolego i sędziego łęczyckiego). Za jego
            życia powstała prawdopodobnie jedynie wieża zamkowa. Budowę
            rezydencji rodzinnej dokończył Władysław Oporowski. Karierę w
            duchowieństwie zaczynał po studiach na uniwersytetach w Wiedniu i
            Bolonii od funkcji kanonika wrocławskiego, by w 1428 zostać
            podkanclerzym koronnym, a w 1449 – arcybiskupem gnieźnieńskim i
            prymasem Polski.
          </p>
          <h4>Sołłohubowie</h4>
          <p>
            W 1725 roku w posiadanie zamku wszedł Jan Sołłohub herbu Prawdzic,
            nabywszy dobra oporowskie za 41550 zł polskich (AGAD, ŁGRel. 244A,
            k. 443v) od Michała Stanisława Tarnowskiego, kasztelana
            sieradzkiego, który pozbył się części swych ziem po 11 latach od ich
            nabycia, ze względu na ich zadłużenie. Nowy właściciel był
            podkomorzym gostynińskim, następnie podskarbim wielkim litewskim i
            wojewodą brzesko-litewskim. Jan Sołłohub był przedstawicielem
            rodziny szlachty litewskiej, pierwszym z rodu, który osiadł na
            Mazowszu. Według Marcina Matuszewicza, wyglądał następująco: „z ojca
            swego był małej substancji, szlachcic żmudzki, człek serca mężnego,
            w naukach nie był biegły, a rozumu naturalnego czystego".
          </p>
          <p>
            Do 1740 roku dobrami oporowskimi władał Jan Sołłohub, kiedy to
            przekazał część majątku synom z małżeństwa z Heleną Szamowską –
            Józefowi, staroście sannickiemu oraz Antoniemu, staroście
            jezierzyskiemu. Józef od 1748 tytułował się kasztelanem witebskim, a
            od 1752 – wojewodą witebskim. W 1737 wziął ślub z Antoniną Teresą
            Ogińską, córką Karola, starosty dorsuńskiego. Córki Jana nie
            uczestniczyły w podziale majątku, a były to: Anna (zm. 1756),
            małżonka Tomasza Szczawińskiego, starosty gąbińskiego oraz Katarzyna
            (1708-1778), od 1729 w klasztorze benedyktynek. Akt ten określono
            jako zapis „dyspozycyjny i dokumentacyjny”, do ksiąg miejskich w
            Grodnie wniesiony 15 marca 1740. Dobra koronne Sołłohubów miały w
            tym czasie wartość około 300000 zł polskich, zarządzał nimi Józef,
            natomiast Antoni otrzymał ziemie na Litwie. Majątek był oddłużony,
            co stało się dzięki działaniom Jana Sołłohuba, podczas jego władania
            okolicznymi terenami.
          </p>
          <p>
            Po śmierci Jana Sołłohuba w 1748, dwaj bracia zdecydowali o innym
            podziale ziem, niż ten, o którym zdecydował ich ojciec. Każdy z nich
            wziął część terenów zarówno z terenu Korony, jak i z Litwy. Dla
            zachowania zasady równego działu, Józef miał wypłacić Antoniemu
            10272 zł polskich 10 gr. Józef Sołłohub dążył do zwiększania
            majątku, w 1752 nabył wieś Wola Owsiana, w 1754 „dwie części” w
            Żychlinie, natomiast w 1762 – Dobrzewy. W 1777 roku kupił ostatni
            swój nabytek – wsie Świechów i Kurów.
          </p>
          <p>
            Przeprowadzono także w tym czasie remont kościoła i klasztora w
            Oporowie, co pozwala sądzić, że dokonano w tym okresie również
            renowacji zamku. Powstał budynek w bramnej części zamku, łączący
            komnatę wieży zachodniej z komnatami domu mieszkalnego. Zlikwidowano
            most zwodzony, w miejsce którego powstał zapewne nasyp ziemny,
            połączony mostem stałym z przeciwległym brzegiem fosy. Miały zostać
            wtedy powiększone otwory okienne na piętrze, zamurowano arkadę
            ostrołukową w przedsionku kaplicy, by zamontować tam nieduże okno.
            Prawdopodobnie rozebrano wtedy również budynek dobudowany przez
            Tarnowskich, ponadto wzniesiono fundament pod schody, prowadzące do
            ganku na piętro.
          </p>
          <p>
            W 1781 roku, w akcie darowizny, dobra oporowskie otrzymał Jan
            Sołłohub, pułkownik i bratanek Józefa. Jan już po kilku dniach od
            nabycia majątku zastawił go, w 1786 roku ów majątek przejął posesor
            zastawny, Adam Wodzyński – łowczy orłowski, który władał Oporowem do
            około 1790 roku. W 1792 roku dobra oporowskie przeszły w posiadanie
            Kajetana Korzeniowskiego herbu Lis, pisarza litewskiego.
          </p>
          <img
            className="pr-8 mx-auto"
            src={src(3)}
            alt="Oporów"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
            title="Zamek w latach 60. XX wieku."
          />
          <h4>Kolejni właściciele</h4>
          <p>
            Kajetan Korzeniowski herbu Lis nabył Oporów i okoliczne ziemie w
            1792 roku za 384000 zł polskich. W kilka lat cały teren przejęła
            jego córka, Anna, w 1796 wyszła za mąż w miejscowym kościele za
            Aleksandra Pocieja, Oboźnego Wielkiego Litewskiego. Pociejowie
            przebywali prawdopodobnie na zamku, o czym świadczy choćby zapis w
            księdze parafialnej informacji o śmierci ich syna, Alturnusa. Anna
            zmarła w 1815, przez kolejne 11 lat (do 1826) majątkiem dysponował
            jej mąż, który opiekował się także ich dziećmi: Idalią i Teodorem.
            Ów syn – Teodor Pociej (1801-1856) sprzedał oporowskie ziemie
            Petroneli Oborskiej z Ossowskich (zm. 1832), wdowie po kasztelanie
            ciechanowskim.
          </p>
          <p>
            Za czasów Pociejów prace remontowe zostały najprawdopodobniej
            przeprowadzone na piętrze, włącznie ze zmianą wystroju na modny w
            owym czasie klasycyzm. Z tego okresu mogły pochodzić resztki tynków,
            pokrywające do 1962 roku część elewacji zamku oraz kanelowane
            pilastry, nałożone na gotyckie arkadowanie zachodniej elewacji
            baszty, które łączyło kamienne kroksztyny. W tym czasie przebywał w
            Oporowie mistrz murarski z warszawy, Marcin Lewicki, zmarł on z
            powodu „oberwania”.
          </p>
          <p>
            Petronela Oborska niedługo po zakupie majątku wzięła pożyczkę na
            100000 zł polskich, zdaniem Grażyny Kin-Rzymkowskiej, była ona
            przeznaczona na remont zamku, o którym pisał już W.H. Gawarecki w
            1844 roku. Wspomniał o naprawie wieży, która „...cała prawie część
            spodnia murów wieży zapadła się w ziemię, i z tego powodu nową wieżę
            pomurowano, co dotąd znać widoczne”. Piwnica stała się znacznie
            płytsza, pokryto ją sklepieniem żagielkowym na gurtach, zniknęły
            „obszerne lochy”. Być może wzmocniono w tym czasie również mury
            zamku, przez dostawienie dwóch skarp narożnych w dwóch narożnikach i
            przesklepienie dwóch piwnic domu mieszkalnego, podobnie, jak w
            wieży.
          </p>
          <p>
            Po śmierci matki, majątkiem dysponował jej syn, Aleksander Oborski,
            były pułkownik wojsk polskich, oddawszy dobra oporowskie w
            dzierżawę. Zamek i okolice przejął w roku 1839 Tomasz Orsetii
            (1798-1851) herbu Złotokłos, wraz z małżonką, Aleksandrą z
            Linowskich (1811-1854). Tomasz wykupywał zadłużone ziemie
            oporowskie, już w 1834 był współwłaścicielem majątku.
          </p>
          <h4>Zamek współcześnie</h4>
          <p>
            Od roku 1949 na zamku mieści się również muzeum, w którym
            przedstawione są zbiory z różnych epok, gromadzone, przez wiele lat.
            Niewielka część z nich dotyczy bezpośrednio byłych właścicieli zamku
            (to głównie obrazy i inne cenne przedmioty). Większość ze zbiorów
            także udostępniona dla zwiedzających.
          </p>
          <img
            className="pr-8 mx-auto"
            src={src(1)}
            alt="Oporów"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
            title="Zamek współcześnie"
          />
        </article>
      )}
    </>
  );
};

export default OporowHistory;
