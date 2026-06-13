import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Apollo13History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [""];
  const photosTitle = [
    "Załoga misji Apollo 13. Od lewej: dowódca James A. Lovell, pilot modułu dowodzenia Thomas K. Mattingly oraz pilot modułu księżycowego Fred W. Haise.",
    "Uszkodzony moduł serwisowy misji Apollo 13, sfotografowany po jego odłączeniu od modułu dowodzenia.",
    'Astronauci misji Apollo 13 konstruujący awaryjny filtr dwutlenku węgla, potocznie nazywany "mailbox".',
    "Improwizowany adapter filrów CO2, podłączony do układu podtrzymywania życia modułu księżycowego.",
    "Moduł księżycowy Aquarius po jego odrzuceniu nad Ziemią.",
    "Wodowanie modułu dowodzenia Apollo 13 w Pacyfiku.",
    "Astronauci misji Apollo 13 na pokładzie okrętu ratowniczego USS Iwo Jima, po bezpiecznym powrocie na Ziemię.",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <section id="apollo 13">
      <SectionHeader
        sectionName="Apollo 13"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />

      {historyState === true && (
        <PhotoProvider
          overlayRender={({ index }) => {
            return (
              <div
                className={
                  "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                  (!photosTitle[index] && " hidden")
                }
              >
                {photosTitle[index]}
              </div>
            );
          }}
          maskOpacity={0.5}
          maskClassName="backdrop-blur-sm"
          loadingElement={<div className="loader"></div>}
        >
          <article className="px-8">
            <p>
              <span className="first-letter font-playfair">T</span>trzecia misja
              programu Apollo z planowanym lądowaniem ludzi na powierzchni
              Księżyca. Eksplozja zbiornika z ciekłym tlenem w module serwisowym
              uniemożliwiła lądowanie na Księżycu i spowodowała rozpoczęcie
              walki o życie załogi. Lot dowodzony był przez Jamesa A. Lovella;
              pilotem modułu dowodzenia był John L. „Jack” Swigert; pilotem
              modułu księżycowego był Fred W. Haise. Swigert zastępował
              pierwotnego pilota modułu dowodzenia Thomasa K. „Kena” Mattingly,
              którego wyeliminował lekarz misji z obawy o to, że Mattingly
              nabawił się różyczki. Mattingly jednak nie zachorował na różyczkę
              i wniósł znaczną pomoc naziemnym kontrolerom, podczas walki o
              sprowadzenie załogi Apollo na Ziemię.
            </p>
            <p>
              Start misji nastąpił 11 kwietnia 1970 roku o godzinie 19:13 UTC.
              Po dwóch dniach na trasie do Księżyca, na skutek uszkodzenia,
              które powstało jeszcze na Ziemi, w module serwisowym nastąpiła
              eksplozja, która spowodowała stratę dwóch zbiorników z tlenem,
              pozbawiając moduł dowodzenia energii elektrycznej na trasie do
              Księżyca i z powrotem do granicy ziemskiej atmosfery.
            </p>
            <p>
              Moduł serwisowy był, między innymi, elektrownią (ogniwa paliwowe).
              Indywidualne bateryjne zasilanie elektryczne modułu dowodzenia
              było zaplanowane na pracę przez kilka ostatnich godzin, podczas
              wchodzenia do atmosfery, po odrzuceniu modułu serwisowego, który
              nie był przystosowany do penetracji atmosfery.
            </p>
            <p>
              Po eksplozji zbiornika z ciekłym tlenem astronauci James A.
              Lovell, John L. „Jack” Swigert i Fred W. Haise opuścili moduł
              dowodzenia i przeprowadzili się do modułu księżycowego z zamiarem
              powrotu do modułu dowodzenia na kilka godzin przed lądowaniem.
              Przed opuszczeniem modułu dowodzenia zostały wyłączone wszystkie
              urządzenia elektryczne, aby zachować energię elektryczną niezbędną
              podczas wchodzenia w atmosferę i wodowania. Moduł księżycowy
              został zaprojektowany z myślą o przebywaniu w nim dłużej niż kilka
              godzin jednakże nie dla trzech astronautów wchodzących w skład
              misji, lecz tylko dwóch mających docelowo wylądować na powierzchni
              jedynego naturalnego satelity Ziemi.
            </p>
            <p>
              Pomimo trudności spowodowanych niedoborem energii elektrycznej i
              wynikających z tego licznych konsekwencji, ciasnoty oraz kłopotów
              związanych z usuwaniem dwutlenku węgla i braku wody pitnej, 17
              kwietnia 1970 roku załoga szczęśliwie powróciła na Ziemię.
            </p>

            <h5>Podstawowe dane</h5>
            <ul>
              <li>Statek kosmiczny: CSM-109 „Odyssey”, LM-7 „Aquarius”</li>
              <li>Rakieta nośna: SA-508</li>
              <li>Stanowisko startowe: 39A</li>
              <li>Start: 11 kwietnia 1970, 19:13:00 UTC</li>
              <li>Azymut startu: 72,0°</li>
              <li>Orbita okołoziemska: 185,8 × 183,9 km</li>
              <li>Najmniejsza odległość od powierzchni Księżyca: 254,8 km</li>
              <li>Czas trwania misji: 142 godz. 54 min. 41 s</li>
              <li>Wodowanie: 17 kwietnia 1970, 18:07:41 UTC</li>
              <li>Miejsce wodowania: Środkowy Pacyfik, 21°38′S, 165°22′W</li>
              <li>Pozycja: stabilna I (wierzchołkiem do góry)</li>
              <li>Okręt ratowniczy: USS Iwo Jima (LPH-2)</li>
              <li>Podjęcie załogi: 17 kwietnia 1970, 18:53 UTC</li>
              <li>Podjęcie kapsuły: 17 kwietnia 1970, 19:36 UTC</li>
            </ul>
            <h4>Załoga</h4>
            <p>
              Misją dowodził prawdziwy weteran, Jim Lovell, który oglądał już
              Księżyc z bliska podczas lotu Apollo 8. Astronaucie nie udało się
              zakwalifikować do programu Merkury, jednak wynagrodziły mu dwa
              loty w programie Gemini (Gemini 7 i 12). Pilot LM Fred Haise był
              nowicjuszem, podobnie jak Jack Swigert, pilot modułu dowodzenia,
              który w ostatniej chwili zastąpił Thomasa Mattingly’ego.
            </p>
            <ul>
              <li>Dowódca:James A. Lovell, Jr. (CDR-commander)</li>
              <li>
                Pilot modułu dowodzenia: John L. „Jack Swigert”, Jr.
                (CMP-command module pilot)
              </li>
              <li>
                Pilot modułu księżycowego: Fred W. Haise, Jr. (LMP-lunar module
                pilot)
              </li>
            </ul>
            <div className="w-full flex">
              <PhotoView src="models/apollo13/apollo_13-photo1.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/apollo_13-photo1.webp"
                  alt={photosTitle[0]}
                  title={photosTitle[0]}
                />
              </PhotoView>
            </div>
            <h4>Nazwy</h4>
            <p>
              W przeciwieństwie do nazw misji Apollo 9 Lovell wolał nazwy
              bardziej dostojne. Dla Apollo 13 wybrał „Odyssey” („Odyseja”), a
              dla LM „Aquarius” („Wodnik”). Miano „Wodnik” zaczerpnął z
              mitologii egipskiej – to imię nosiwody, któremu dolina Nilu
              zawdzięczała żyzność i wiedzę. „Odyseja” podobała się astronaucie,
              bo lubił brzmienie tego słowa, poza tym słownik definiował ją jako
              „długą wędrówkę obfitującą w szczęśliwe i nieszczęśliwe przygody”.
              Prasa błędnie poinformowała, że miał to być hołd dla musicalu
              Hair, którego Lovell nie widział i nie zamierzał oglądać.
            </p>
            <h4>Start i podróż do orbity okołoksiężycowej</h4>
            <p>
              Misja rozpoczęła się mało znanym epizodem: podczas pracy silnika
              rakietowego drugiego członu, centralny silnik wyłączył się o 132
              sekundy za wcześnie, co było spowodowane wystąpieniem w tym
              stopniu drgań o niskiej częstotliwości. Cztery zewnętrzne silniki
              pracowały 35 sekund dłużej, co skompensowało niedobory energii i
              statek kosmiczny dotarł na orbitę. Jednak po zakończeniu pracy
              S-II prędkość rakiety była o 68 m/s mniejsza niż zakładano. W
              rezultacie pierwsze odpalenie trzeciego stopnia musiało być
              wydłużone o dziewięć sekund. Po wejściu na orbitę okołoziemską
              prędkość zestawu (CSM/S-IVB/IU) różniła się tylko o 0,6 m/s od
              założonej. Podczas całego lotu na orbitę silniki rakiety pracowały
              w sumie o 44 sekundy dłużej, niż zakładano. Drugie odpalenie
              trzeciego stopnia, które umieściło statek na trajektorii lotu w
              kierunku Księżyca (TLI), przebiegło zgodnie z planem. Również
              manewr kierujący S-IVB/IU na kurs kolizyjny z Księżycem został
              wykonany prawidłowo. Planowane miejsce upadku znajdowało się w
              odległości około 200 kilometrów od sejsmometru pozostawionego
              przez astronautów Apollo 12. Rzeczywiste miejsce upadku znajdowało
              się 65,6 km od zakładanego i 135 km od sejsmometru. Systemy statku
              funkcjonowały prawidłowo do 55 godz. 53 min. i 20 sekundy lotu.
            </p>
            <p>
              Przedwczesne wyłączenie centralnego silnika drugiego członu
              spowodowało niebezpieczne wzdłużne drgania, które mogły rozerwać
              drugi człon na strzępy. Silnik doznał przeciążeń 68 g w formie
              wibracji o częstotliwości 14–16 Hz, co spowodowało wygięcie
              konstrukcji silnika o 76 mm. Słabsze wibracje wzdłużne były
              obserwowane już we wcześniejszych lotach rakiet Titan i Saturn, a
              szczególnie w misji Apollo 6, lecz w misji Apollo 13 zjawisko
              wystąpiło we wzmocnionej formie poprzez interakcję silników
              rakietowych z konstrukcją statku kosmicznego w zjawisku nazywanym
              kawitacją. W późniejszych misjach wprowadzono modyfikacje
              przeciwko wibracjom wzdłużnym, które opracowywane były już
              wcześniej, m.in. dodatkowy zbiornik płynnego helu do centralnego
              silnika, instalacja płynnego tlenu do tłumienia drgań silnika
              rakietowego, dodatkowe automatyczne odcinanie mocy, i uproszczenie
              konstrukcji zaworów paliwowych we wszystkich silnikach II członu
              rakiety Saturn V.
            </p>
            <h4>Eksplozja</h4>
            <p>
              Na trajektorii do Księżyca, w odległości 320 000 km od Ziemi,
              Kontrola Misji poprosiła załogę o włączenie mieszacza w
              zbiornikach ciekłego tlenu i płynnego wodoru. Operacja ta była
              potrzebna do wyrównania gęstości ich zawartości, co z kolei było
              konieczne do dokładnego odczytu ich stanu ilościowego. Po
              włączeniu silnika mieszacza astronauci usłyszeli głośny huk z
              towarzyszeniem wahania mocy elektrycznej i szumem pracy silników
              RCS, które zareagowały na zmianę położenia CSM w przestrzeni.
              Załoga początkowo myślała, że to meteoroid uderzył w moduł
              księżycowy, który w tej fazie trajektorii był połączony z modułem
              dowodzenia włazami dokowania. W rzeczywistości uszkodzona izolacja
              na kablu doprowadzającym zasilanie do mieszacza płynnego tlenu
              wewnątrz zbiornika przyczyniła się do spowodowania zwarcia i
              zapłonu izolacji. W rezultacie wzrostu temperatury wzrosło
              ciśnienie w zbiorniku poza jego dopuszczalny limit i eksplodował
              zbiornik tlenu nr 2, jeden spośród dwóch w module serwisowym.
              Zbiornik tlenu nr 1 nie został uszkodzony wybuchem, jednak ze
              zbiornikiem nr 2 łączyły go liczne przewody. Eksplozja rozerwała
              rurki i zawartość zbiornika wyciekła w przestrzeń kosmiczną.
              Równocześnie wstrząs zatrzasnął zawory zasilające części
              silniczków korekcyjnych i całkowicie je unieruchomił. W czasie
              kiedy statek kołysał się w wyniku wybuchu jak i wycieku tlenu,
              autopilot włączył silniki korekcyjne, by ustabilizować statek.
              Ponieważ działały tylko niektóre dysze, zadanie było niewykonalne.
              Gdy Lovell przeszedł na ręczne sterowanie, również nie
              ustabilizował statku. Po dwóch godzinach statek bezwładnie
              dryfował w przestrzeni kosmicznej. Z wnęki nr 4 została odrzucona
              pokrywa. Zapasy tlenu z modułu serwisowego ulotniły się w
              przestrzeń kosmiczną. Eksplozja miała miejsce 25 godzin po
              wprowadzeniu Apollo 13 na trajektorię hybrydową. Statek znajdował
              się w połowie drogi do Księżyca. Nie można go było po prostu
              zawrócić. Należało jak najszybciej ponownie wprowadzić Apollo 13
              na trajektorię swobodnego powrotu.
            </p>
            <div className="w-full flex">
              <PhotoView src="models/apollo13/apollo_13-photo2.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/apollo_13-photo2.webp"
                  alt={photosTitle[1]}
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <h4>Przerwanie misji</h4>
            <p>
              Uszkodzenie modułu serwisowego spowodowało, że lądowanie na
              Księżycu stało się niemożliwe, tak więc kierownik misji Gene Kranz
              przerwał misję. Aktualny plan przerwania misji, napisany jeszcze w
              1966 roku, zakładał użycie silnika modułu serwisowego do znacznej
              zmiany prędkości (wyhamowanie), tak aby stała się możliwa zmiana
              (o 180°) kierunku lotu statku kosmicznego. Ten sposób powrotu na
              Ziemię wydawał się najszybszy, jednak z przynajmniej trzech
              powodów był niepraktyczny:
              <ul>
                <li>
                  był on użyteczny we wcześniejszej fazie misji, zanim statek
                  kosmiczny wszedł w grawitacyjną sferę wpływu Księżyca,
                </li>
                <li>nie było energii elektrycznej do sterowania silnikiem,</li>
                <li>
                  istniała obawa, że w eksplozji zbiornika z tlenem powstały
                  inne nieprzewidziane uszkodzenia.
                </li>
              </ul>
            </p>
            <p>
              Po wyłączeniu się ogniw paliwowych modułu serwisowego, moduł
              dowodzenia automatycznie przełączył się na zasilanie z baterii
              srebrno-cynkowych. Dwie osoby z załogi przeniosły się do modułu
              księżycowego z zamiarem powrotu do modułu dowodzenia na krótko
              przed wejściem w atmosferę i zasilanie modułu dowodzenia zostało
              wyłączone. Do zmiany kierunku lotu wykorzystano grawitację
              Księżyca i silnik rakietowy członu opadania modułu księżycowego, a
              nie silnika napędowego CSM.
            </p>
            <p>
              Manewr umieszczenia statku kosmicznego na trajektorii swobodnego
              powrotu na Ziemię został wykonany, z użyciem silnika członu
              opadania modułu księżycowego 14 kwietnia 1970 roku o godz. 08:43
              UTC. Powrót uwzględniał wykorzystanie grawitacji Księżyca i Ziemi
              do powrotu na Ziemię, poprzez wykonanie oblotu Księżyca. Manewr
              ten przewidywał wodowanie na Oceanie Indyjskim 18 kwietnia 1970
              roku o godz. 03:13 UTC. Po okrążeniu Księżyca, w odległości 255
              km, 15 kwietnia 1970 roku o godz. 02:40 została wykonana druga
              faza pracy silnika członu opadania, która trwała 263,4 sekundy i
              przyspieszyła szacowany czas powrotu na 17 kwietnia 1970 roku
              godz. 18:06, z wodowaniem na środkowym Pacyfiku, skracając drogę
              powrotną z 74 do 64 godzin. W drodze na Ziemię wykonano jeszcze
              dwie korekty trajektorii: pierwsza w 105 godz. 18 min. lotu za
              pomocą silnika DPS i drugą w 137 godz. 40 min. – za pomocą
              silników RCS lądownika. Moduł silnikowy został odrzucony w 138
              godz. 2 min. lotu. Załoga mogła wreszcie zobaczyć uszkodzenia SM i
              wykonała dokumentację fotograficzną. Lądownik został odrzucony na
              godzinę przed wejściem statku w atmosferę ziemską. Operacja
              przebiegła bez problemów, pod kontrolą komputera pokładowego
              lądownika. Niepotrzebny człon S-IVB został skierowany na Księżyc.
              Siedemdziesiąt cztery godziny później, w 77 godz. 56 min. i 40
              sekundzie lotu, (Ground Elapsed Time, GET), uderzył w
              powierzchnię, wywołując efekt porównywalny z wybuchem 11,5 tony
              trotylu. Uderzenie zostało zarejestrowane przez sejsmometr
              ustawiony przez astronautów z misji Apollo 12. Był on 20–30 razy
              mocniejszy i czterokrotnie dłuższy niż spowodowany uderzeniem w
              powierzchnię Księżyca stopnia startowego LM Apolla 12. Był to
              jedyny zrealizowany eksperyment naukowy. Moduł księżycowy był
              przeznaczony do utrzymania dwóch astronautów przez dwa dni, a nie
              trzech przez cztery dni. Zapas tlenu w module księżycowym był
              wystarczający, gdyż przed każdym spacerem księżycowym przewidziana
              była dekompresja i ponowne napełnienie wnętrza członu wznoszenia
              mieszanką do oddychania po spacerze. Inaczej było z wodą, która w
              CSM otrzymywana była z ogniw paliwowych przy produkcji energii
              elektrycznej, jako produkt uboczny spalania wodoru. Natomiast
              moduł księżycowy, zasilany z baterii srebrno-cynkowych, miał
              ograniczony zapas wody, czyli konkretnie dla dwóch astronautów na
              dwa dni. W celu zaoszczędzenia energii obciążenie elektryczne
              modułu księżycowego zostało obniżone do koniecznego poziomu,
              zachowując sterowanie klimatyzacją, komunikację, telemetrię.
            </p>
            <p>
              Ograniczona ilość wodorotlenku litu, potrzebna do usuwania
              dwutlenku węgla, stała się poważnym problemem. Wewnętrzne zapasy
              LiOH modułu księżycowego były niewystarczające, a zewnętrzne
              zapasy dla modułu księżycowego znajdowały się w członie opadania,
              wtedy niedostępnego. Moduł dowodzenia miał wystarczający zapas
              kanistrów z wodorotlenkiem litu, ale były one niekompatybilne z
              armaturą modułu księżycowego. Inżynierowie na Ziemi zaplanowali
              sposób połączenia kanistrów z modułu dowodzenia z gniazdami w
              module księżycowym, a astronauci ten plan zrealizowali w kosmosie.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src="models/apollo13/apollo_13-photo3.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/apollo_13-photo3.webp"
                  alt={photosTitle[2]}
                  title={photosTitle[2]}
                />
              </PhotoView>
              <PhotoView src="models/apollo13/apollo_13-photo4.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/apollo_13-photo4.webp"
                  alt={photosTitle[3]}
                  title={photosTitle[3]}
                />
              </PhotoView>
            </div>
            <p>
              16 kwietnia 1970 roku o godz. 04:32 UTC, na 15 sekund z 10% mocą,
              został włączony silnik członu opadania w celu zmniejszenia
              prędkości, a to z kolei służyło do zwiększenia kąta wejścia w
              atmosferę do −6,52°. Włączono też częściowo zasilanie modułu
              dowodzenia (z baterii). 17 kwietnia 1970 roku o godz. 12:53 UT
              22,4 sekundowy czas pracy silnika członu opadania modułu
              księżycowego ustalił kąt wejścia w atmosferę na −6,49°.
            </p>
            <h4>Wejście w atmosferę i wodowanie</h4>
            <p>
              Kiedy statek kosmiczny 17 kwietnia o godz. 13:15:06 UTC zbliżył
              się do Ziemi, załoga odrzuciła moduł serwisowy i sfotografowała
              go. Wtedy po raz pierwszy zobaczyła uszkodzenia spowodowane
              eksplozją zbiornika z tlenem. Zasilanie elektryczne modułu
              dowodzenia włączono o godz. 16:43:02 UTC, odrzucono wtedy moduł
              księżycowy.{" "}
              <div className="w-full flex">
                <PhotoView src="models/apollo13/apollo_13-photo7.webp">
                  <LazyLoadImage
                    className="mx-auto"
                    src="models/apollo13/apollo_13-photo7.webp"
                    alt={photosTitle[4]}
                    title={photosTitle[4]}
                  />
                </PhotoView>
              </div>
              Wszystkie elementy modułu księżycowego, które przetrwały wejście w
              atmosferę, a szczególnie generator SNAP-27, planowo mający służyć
              do zasilania aparatury ALSEP na powierzchni Księżyca i zawierający
              3,9 kg plutonu, wpadły do Oceanu Spokojnego na północny wschód od
              Nowej Zelandii. Zasilacz izotopowy zatonął w Rowie Tonga.
              Zatopiony pluton będzie radioaktywny przez 2000 lat; nic nie
              wskazuje na to, że wystąpiło jakiekolwiek skażenie. Apollo 13
              wodował na Pacyfiku 17 kwietnia 1970 roku o godz. 18:17:41 UTC, po
              misji trwającej 142 godziny, 54 minuty i 41 sekund. Wodowanie
              nastąpiło na współrzędnych 21°38′S, 165°22′W na południowy zachód
              od Amerykańskiego Samoa i 6,5 km od okrętu ratowniczego dla tej
              misji, którym był USS Iwo Jima (LPH-2).
            </p>
            <div className="w-full flex">
              <PhotoView src="models/apollo13/apollo_13-photo6.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/apollo_13-photo6.webp"
                  alt={photosTitle[5]}
                  title={photosTitle[5]}
                />
              </PhotoView>
            </div>
            <h4>Przyczyny eksplozji zbiornika z ciekłym tlenem</h4>
            <p>
              Przyczyną rozerwania zbiornika z ciekłym tlenem, jak wykazało
              długotrwałe dochodzenie, był nieprawdopodobny zbieg okoliczności.
              Zbiorniki zawierające produkty o niskiej temperaturze, wymagają
              zarówno zaworów bezpieczeństwa, jak i wyjątkowo dobrej izolacji
              termicznej w celu uniknięcia nadmiernego wzrostu ciśnienia
              związanego z parowaniem. Zbiorniki ciekłego tlenu i wodoru modułu
              serwisowego były tak dobrze izolowane termicznie, że mogły
              bezpiecznie przechowywać nadkrytyczny wodór i ciekły tlen przez
              lata. Każdy zbiornik zawierał 145 kilogramów tlenu do produkcji
              powietrza, prądu i wody.
            </p>
            <p>
              Zbiornik zawierał kilka elementów mających związek z wypadkiem,
              oto one:
              <ul>
                <li>
                  przetwornik ilościowej zawartości zbiornika z ciekłym tlenem
                </li>
                <li>
                  turbinka we wnętrzu zbiornika do mieszania ciekłego tlenu, aby
                  uzyskać jednakową gęstość w całym zbiorniku w celu dokładnego
                  pomiaru stanu ilościowego
                </li>
                <li>
                  grzejnik do odparowywania ciekłego tlenu (zamiany ciekłego
                  tlenu na lotny)
                </li>
                <li>termostat współpracujący z grzejnikiem</li>
                <li>czujnik temperatury</li>
                <li>zawory i instalacja rurowa</li>
              </ul>
            </p>
            <p>
              Grzejnik i współpracujący z nim termostat były oryginalnie
              zaprojektowane dla szyny zasilania 28 V DC modułu dowodzenia.
              Dokumentacja grzejnika i termostatu była później zmieniona, aby
              umożliwić zastosowanie 65 V do szybszego opróżnienia zbiornika na
              Ziemi. Analizując możliwość zastosowania 65 V DC do zasilania
              grzejnika, producent zbiornika nie uwzględnił elektrycznych styków
              termostatu. Stało się to na skutek przeoczenia. Na domiar złego
              czujnik temperatury wnętrza zbiornika nie odczytywał wyższych
              temperatur niż 38 °C. Nie powinno to stanowić problemu, ponieważ
              styki termostatu rozwierały się przy 28 °C, a grzejnik był
              wyłączany, dzięki czemu temperatura we wnętrzu zbiornika nie
              powinna rosnąć dalej. Z tego powodu nikt nie spodziewał się pożaru
              w zbiorniku z ciekłym tlenem, więc nie instalowano tam urządzenia
              ostrzegającego przed wysoką temperaturą.
            </p>
            <p>
              Platforma nośna zbiorników z tlenem była oryginalnie zainstalowana
              w module serwisowym Apollo 10, lecz została usunięta w związku z
              potencjalnym problemem związanym z interferencją
              elektromagnetyczną. Podczas demontażu platforma spadła z wysokości
              5 cm. Zbiornik nie wyglądał na uszkodzony i zbiornik ten później
              zainstalowano w Apollo 13. Raport przeglądu Apollo 13 ujął wypadek
              ze zbiornikiem w następujący sposób: prawdopodobieństwo
              uszkodzenia zbiornika podczas incydentu jest „raczej niewielkie”.
              Po napełnieniu zbiornika ciekłym tlenem podczas naziemnego testu,
              nie mógł on być opróżniony w sposób prawidłowy, prawdopodobnie z
              powodu uszkodzonej armatury wejściowej podczas upadku
              demontowanego zbiornika (jest to jeden z niejasnych elementów
              wypadku). Grzejnik ze współpracującym z nim termostatem podłączono
              do naziemnej instalacji 65 V, aby przyspieszyć wypompowywanie
              ciekłego tlenu. Operacja ta powinna zająć kilka dni przy
              termostacie rozwierającym styki zasilania grzejnika przy
              temperaturze 28 °C. Jednakże kiedy na początku wypompowywania
              styki termostatu zostały zwarte, aby zasilić grzejnik, 65 V
              zasilanie stopiło i zwarło styki termostatu na stałe, wskutek
              czego grzejnik pozostał włączony tak długo, jak długo było
              przyłożone napięcie do termostatu, zamiast wyłączać się po
              osiągnięciu 28 °C.
            </p>
            <p>
              Taka awaria termostatu spowodowała wzrost temperatury do około 540
              °C. Ponieważ czujnik temperatury nie był zaprojektowany do odczytu
              tak dużych temperatur, wyposażenie ostrzegawcze nie ostrzegło o
              prawdziwej temperaturze we wnętrzu zbiornika. Po pewnym czasie
              utrzymująca się wysoka temperatura stopiła elektryczną izolację
              instalacji zasilającej silnik mieszacza, odsłaniając gołe druty.
              Kiedy ponownie napełniono go ciekłym tlenem, a stało się to przed
              misją Apollo 13, zbiornik stał się bombą czekającą na impuls
              inicjujący. Impuls ten pojawił się w 56 godzinie misji Apollo 13,
              gdy włączono mieszacz ciekłego tlenu w zbiorniku nr 2 i prąd
              popłynął przez gołe, zwarte druty zasilające silnik mieszacza,
              które zaczęły iskrzyć i rozgrzewać się, zapalając resztki
              izolacji. Towarzyszący temu wzrost temperatury, spowodował
              powstanie dużej ilości gazowego tlenu, którego zawory nadmiarowe
              nie były w stanie wydalić. Na skutek wzrostu ciśnienia zbiornik nr
              2 eksplodował, a zbiornik nr 1 został uszkodzony. Po trzech
              godzinach moduł serwisowy nie był w stanie wytwarzać ani energii
              elektrycznej, ani wody, ponadto nie miał zapasu tlenu do produkcji
              mieszanki do oddychania, stracił możliwość użycia silnika
              napędowego i RCS, przez co stał się bezużyteczny.
            </p>
            <div className="w-full flex">
              <PhotoView src="models/apollo13/apollo_13-photo5.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/apollo_13-photo5.webp"
                  alt={photosTitle[6]}
                  title={photosTitle[6]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0 mt-4">
              Źródło:{" "}
              <a href="https://pl.wikipedia.org/wiki/Apollo_13" target="_blank">
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </section>
  );
};

export default Apollo13History;
