import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LunarModuleHistory = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/sls/sls-photo1.webp"];
  const photosTitle = [
    "Lądownik misji Apollo 11 na powierzchni Księżyca.",
    "Lądownik misji Apollo 14 na powierzchni Księżyca.",
    "Astronauta Alan L. Bean z misji Apollo 12 schodzący po drabinie lądownika.",
    "Człon zniżania podczas prac montażowych w zakładach firmy Grumman.",
    "Człon wznoszenia z misji Apollo 17 podczas manewru dokowania na orbicie Księżyca.",
    "Część załogowa modułu wznoszenia odwzorowana w symulatorze używanym przez astronautów do szkolenia przed misjami.",
    "Część załogowa modułu wznoszenia odwzorowana w symulatorze używanym przez astronautów do szkolenia przed misjami.",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <section id="historia">
      <SectionHeader
        sectionName="Historia"
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
              <span className="first-letter font-playfair">M</span>oduł
              księżycowy (ang. Lunar Module) był zaprojektowany i produkowany
              przez firmę Grumman na Long Island. Przeznaczony był do przewozu
              dwóch astronautów z orbity Księżyca na jego powierzchnię i z
              powrotem. Masa pojazdu wynosiła 15 065 kg, włączając astronautów,
              paliwo i inne materiały.
            </p>
            <p>
              Moduł księżycowy był zdolny do pracy wyłącznie w przestrzeni
              kosmicznej. Po wykonaniu swojego zadania moduł zniżania pozostawał
              na powierzchni Księżyca, a moduł wznoszenia porzucany był w
              przestrzeni kosmicznej i w końcu rozbijał się o powierzchnię
              Księżyca, co było wykorzystywane jako źródło fal sejsmicznych dla
              programu ALSEP[2]. Moduł księżycowy jest jak dotąd jedynym
              załogowym pojazdem kosmicznym, który wylądował na innym ciele
              niebieskim niż Ziemia.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src="models/apollo13/lunar_module-photo1.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo1.webp"
                  alt={photosTitle[0]}
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src="models/apollo13/lunar_module-photo2.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo2.webp"
                  alt={photosTitle[1]}
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src="models/apollo13/lunar_module-photo3.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo3.webp"
                  alt={photosTitle[2]}
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <h4>Człon zniżania</h4>
            <p>
              Człon zniżania (opadania) do momentu osiągnięcia powierzchni
              Księżyca stanowił całość z członem wznoszenia i był ośmiokątnym
              graniastosłupem o przekątnej 4,2 metra i 1,7 metra wysokości.
              Cztery nogi lądowania z czterema okrągłymi stopami były
              zamontowane do boków członu zniżania i po przyziemieniu
              utrzymywały moduł księżycowy 1,5 metra nad powierzchnią Księżyca.
              Na jednej z nóg była umieszczona drabina prowadząca do włazu
              poprzez małą platformę. Z dołu członu wystawał na metr długi
              stożkowy fartuch przegubowo zawieszonego silnika zniżania. Człon
              zniżania miał dwa zbiorniki paliwa „aerozine 50”, dwa zbiorniki
              utleniacza tetratlenku diazotu, wodę, tlen, zbiorniki z helem,
              kanistry z wodorotlenkiem litu. Jedna wnęka członu zawierała
              przestrzeń ładunkową dla księżycowego zestawu do eksperymentów
              naukowych ang. Apollo Lunar Surface Experiments Packages ALSEP lub
              w przypadku Apollo 15, 16, 17 księżycowy łazik. W członie zniżania
              znajdował się także radar lądowania. Człon zniżania służył jako
              platforma startowa dla członu wznoszenia. Człon zniżania nie był
              hermetyczny i panowało w nim ciśnienie równe zewnętrznemu. Na
              jednej z nóg modułu zniżania, w pobliżu drabiny, była zamocowana
              aluminiowa pamiątkowa tabliczka zawierająca numer aktualnej misji,
              nazwiska astronautów, ich podpisy, a w przypadku pierwszej i
              ostatniej misji, także podpis prezydenta Stanów Zjednoczonych R.M.
              Nixona
            </p>
            <p>
              W skład członu zniżania wchodziły cztery amortyzowane podpory
              tworzące mechanizm lądowania. Ich zadaniem było wytłumienie
              wstrząsu towarzyszącemu uderzeniu o powierzchnię Księżyca podczas
              lądowania, a w konsekwencji uniknięcia uszkodzeń lub przewrócenia
              się modułu księżycowego. Podczas transportowania modułu do orbity
              Księżyca, mechanizm lądowania pozostawał w pozycji złożonej,
              nieprzygotowanej do lądowania. Dopiero kiedy do LM przeszła załoga
              w celu uruchomienia i sprawdzenia modułu, dowódca włączał
              przełącznik LDG GEAR DEPLOY na panelu nr 8. Wtedy poprzez
              eksplozywne mechanizmy zostawała usuwana blokada sprężyn, które
              zwolnione wydłużały mechanizm lądowania i blokowały się w nowej
              pozycji. Jednocześnie na rozwiniętym mechanizmie lądowania
              zostawały odsłonięte czerwone luminescencyjne pasy widoczne w
              dzień i w nocy z odległości przynajmniej 30 metrów tak, aby z
              modułu dowodzenia można było jednoznacznie stwierdzić, że
              mechanizm lądowania został poprawnie rozłożony.
            </p>
            <div className="w-full flex">
              <PhotoView src="models/apollo13/lunar_module-photo4.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo4.webp"
                  alt={photosTitle[3]}
                  title={photosTitle[3]}
                />
              </PhotoView>
            </div>
            <h5>Parametry techniczne członu zniżania:</h5>
            <ul>
              <li>wysokość (bez sondy lądowania): 2,62 m</li>
              <li>szerokość (bez podwozia): 3,91 m</li>
              <li>szerokość (z podwoziem): 9,4 m</li>
              <li>masa (łącznie z paliwem): 10334 kg</li>
              <li>woda: 151 kg</li>
              <li>
                silnik systemu zniżania ang. Descent Propulsion System (DPS)
                <ul>
                  <li>masa paliwa: 8200 kg</li>
                  <li>
                    ciąg: 45040 N, możliwość regulacji ciągu w zakresie 10% a
                    60% wartości maksymalnej,
                  </li>
                  <li>paliwo: Aerozine 50/tetratlenek diazotu,</li>
                  <li>
                    wytwarzanie ciśnienia: 22 kg ciekłego nadkrytycznego helu w
                    zbiorniku pod ciśnieniem 10,72 MPa
                  </li>
                  <li>
                    Impuls właściwy: ciężarowy – 311 s, masowy – 3050 Ns/kg
                    (=m/s)
                  </li>
                </ul>
              </li>
              <li>Delta-v: 2500 m/s</li>
              <li>
                Baterie: cztery (Apollo 9-14) lub pięć (Apollo 15-17) 28–32 V,
                baterie srebrowo-cynkowe o pojemności 415 Ah i masie 61 kg
                każda.
              </li>
            </ul>

            <h4>Człon wznoszenia</h4>
            <p>
              Człon wznoszenia był jednostką o nieregularnym kształcie, w
              przybliżeniu 2,8 metra wysoki, 4,0 do 4,3 metra szeroki,
              zamontowany na górze członu zniżania.
            </p>
            <p>
              Załogowa część LM znajdowała się w członie wznoszenia, mieściła
              dwóch astronautów i składała się z trzech głównych części:
              przedziału załogi, części środkowej i tylnego przedziału
              wyposażenia. Przedział załogi i część środkowa tworzyły kabinę,
              która była klimatyzowana i hermetyzowana. Obszary inne niż kabina
              nie były hermetyzowane.
            </p>
            <p>
              Przedział o objętości 6,65 metrów sześciennych funkcjonował też
              jako baza dla księżycowych operacji. Podczas spacerów księżycowych
              kabina członu wznoszenia poddawana była dekompresji, była
              rozhermetyzowana, a po skończonym spacerze była hermetyzowana i
              napełniana tlenem. Był tam również właz wyjściowy z jednej strony,
              i na górze, właz do połączenia z modułem dowodzenia modułu CSM. Na
              górze była także zamontowana paraboliczna sterowalna antena radaru
              zbliżeniowego ang. Rendezvous Radar i paraboliczna antena pasma-S
              służąca do łączności z Centrum Łączności Kierowania Załogowymi
              Lotami Kosmicznymi (ang.) Manned Space Flight Network (MSFN), oraz
              antena VHF do łączności z CSM. Antena pasma S z parabolicznym
              reflektorem była rozwijana na powierzchni Księżyca, w czasie lotu
              pozostawała w stanie złożonym. Dwa trójkątne okna znajdowały się
              powyżej włazu wejściowego, po obu jego stronach. Na dole podstawy
              mieścił się silnik wznoszenia. Człon wznoszenia zawierał również
              aerozine 50 jako paliwo, zbiornik z utleniaczem, hel, płynny tlen
              i tlen gazowy.
            </p>
            <p>
              W związku z tym, że moduł LM podczas lotu miał być obsługiwany na
              stojąco, nie był on wyposażony w siedzenia dla załogi (we wnętrzu
              można było jednak siedzieć np. na pokrywie silnika członu
              wznoszenia). Konsola kontrolna była zamontowana z przodu
              przedziału załogi, powyżej włazu wejściowego i pomiędzy dwoma
              oknami, kolejne dwa panele były zamontowane na burtach.
            </p>
            <p>
              Jedyną cechą, jaka wiąże ten człon ze wznoszeniem, był silnik
              rakietowy, który pracował tylko w fazie wznoszenia. Ponadto człon
              wznoszenia był przedziałem astronautów w czasie lądowania,
              wznoszenia, jak i dokowania, był też bazą podczas spacerów
              kosmicznych wykonywanych na powierzchni Księżyca.
            </p>
            <div className="w-full flex">
              <PhotoView src="models/apollo13/lunar_module-photo5.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo5.webp"
                  alt={photosTitle[4]}
                  title={photosTitle[4]}
                />
              </PhotoView>
            </div>
            <h5>Parametry techniczne</h5>
            <ul>
              <li>Załoga: 2</li>
              <li>Objętość kabiny: 6,7 m³</li>
              <li>Wysokość: 2,83 m</li>
              <li>Szerokość: 4,29 m</li>
              <li>Długość: 4,04 m</li>
              <li>Masa łącznie z paliwem: 4700 kg</li>
              <li>Atmosfera: 100% tlenu przy ciśnieniu 33 kPa</li>
              <li>Woda: dwa zbiorniki po 19,3 kg</li>
              <li>Chłodzenie: 11 kg glikolu etylenowego</li>
              <li>
                Reakcyjny system sterowania (RCS)
                <ul>
                  <li>masa paliwa: 287 kg</li>
                  <li>
                    silniczki rakietowe: szesnaście x 440 N w czterech modułach
                  </li>
                  <li>
                    paliwo: Aerozine 50 paliwo / tetratlenek diazotu (N2O4)
                    utleniacz
                  </li>
                  <li>
                    impuls właściwy: względem ciężaru – 290 s, względem masy
                    2840 Ns/kg (=m/s)
                  </li>
                </ul>
              </li>
              <li>
                Główny system napędowy (APS)
                <ul>
                  <li>masa paliwa: 2353 kg</li>
                  <li>silnik: Rocketdyne RS-18</li>
                  <li>ciąg: 16000 N</li>
                  <li>
                    paliwo: Aerozine 50 paliwo/ utleniacz tetratlenek diazotu
                  </li>
                  <li>
                    zbiorniki ciśnieniowe: dwa 2,9 kg zbiorniki z helem pod
                    ciśnieniem 21 MPa
                  </li>
                  <li>
                    impuls właściwy: względem ciężaru – 311 sekund, względem
                    masy 3050 Ns/kg (=m/s)
                  </li>
                </ul>
              </li>
              <li>delta-v: 2220 m/s</li>
              <li>
                Współczynnik ciągu do ciężaru: 2,124 (w grawitacji Księżyca)
              </li>
              <li>
                Baterie: dwie 28–32 V, 296 Ah srebrowo-cynkowe; 57 kg każda
              </li>
              <li>Zasilanie elektryczne: 28 V DC, 115 V 400 Hz AC</li>
            </ul>
            <h4>Część załogowa</h4>
            <p>
              Załogowa część LM była częścią członu wznoszenia. Przedziałem
              załogi była przednia część członu wznoszenia o wymiarach 2,3 metra
              średnicy i 1 metr długości. Ten przedział był stanowiskiem załogi
              w czasie lotu; były tam wskaźniki kontrolne, joystick dowódcy,
              uchwyty, poręcze i miejsca leżące przeznaczone do odpoczynku.
            </p>
            <p>
              Kadłub przedziału załogi wykonany był ze stopu aluminium o
              strukturze plastra miodu. Taka konstrukcja zapewniała dużą
              sztywność ścian kadłuba, przy minimalnej wadze materiału.
              Obciążenia mechaniczne, jakie musiał wytrzymać przedział załogi,
              wynikały z różnicy ciśnienia wewnątrz przedziału napełnionego
              tlenem, a próżnią kosmosu. Maksymalne ciśnienie tlenu, jakie
              występowało w kabinie LM, wynosiło 35 kN/m2. Dopuszczalne
              przenikanie tlenu z kabiny LM do próżni kosmosu wynosiło 90 g/h,
              podczas gdy rzeczywiste przenikanie tlenu do przestrzeni
              kosmicznej wahało się w granicach od 14 g do 23 g na godzinę.
            </p>
            <p>
              Dwa trójkątne okna zapewniały dobrą widoczność podczas opadania,
              wznoszenia, lotu spotkaniowego z modułem Command/Serwis i
              dokowania. Każde z nich miało około 2 stóp kwadratowych (0,18 m²)
              powierzchni, były one pochylone w dół, co umożliwiało odpowiednią
              widzialność dookoła, a także w dół. Trzecie okno, służące do
              dokowania znajdowało się na zakrzywionej powierzchni nad głową
              dowódcy LM, a dostępna do obserwacji powierzchnia wynosiła 65 cali
              kwadratowych (419,35 cm²). Wszystkie trzy okna złożone były z dwu
              oddzielnych szyb przystosowanych do warunków panujących w
              przestrzeni kosmicznej. Zewnętrzna szyba wykonana była ze szkła z
              termiczną wielowarstwową powłoką na zewnętrznej powierzchni i z
              antyrefleksyjną powłoką na wewnętrznej powierzchni.
            </p>
            <p>
              Wszystkie trzy okna były elektrycznie ogrzewane, aby zapobiec
              zaparowaniu. Grzejniki dla frontowego okna dowódcy, pilota i okna
              dokowania pobierały prąd ze źródła 115 V. Temperatury okien nie
              były monitorowane poprzez wskaźniki i pracą grzejników sterowali
              bezpośrednio astronauci na podstawie wizualnej obserwacji szyb
              okiennych. Grzejnik włączano, kiedy na szybie pojawiała się
              skroplona para lub szron, a wyłączano po poprawieniu się
              widoczności. Przy opuszczonych roletach ogrzewanie szyb musiało
              być wyłączone.
            </p>
            <p>
              Moduł LM posiadał dwa włazy, przedni służył do realizacji zadań
              poza pojazdem (EVA), a górny służył do przemieszczania się
              pomiędzy LM i CSM.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src="models/apollo13/lunar_module-photo6.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo6.webp"
                  alt={photosTitle[5]}
                  title={photosTitle[5]}
                />
              </PhotoView>
              <PhotoView src="models/apollo13/lunar_module-photo7.webp">
                <LazyLoadImage
                  className="mx-auto"
                  src="models/apollo13/lunar_module-photo7.webp"
                  alt={photosTitle[6]}
                  title={photosTitle[6]}
                />
              </PhotoView>
            </div>

            <p className="opacity-75 m-0 mt-4">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Modu%C5%82_ksi%C4%99%C5%BCycowy_(program_Apollo)"
                target="_blank"
              >
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </section>
  );
};

export default LunarModuleHistory;
