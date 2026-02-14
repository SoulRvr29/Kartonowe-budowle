import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MiG29History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/p-51b_mustang/p-51b_mustang-photo1.jpg"];
  const photosTitle = ["P-51B Mustang"];
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
            <span className="first-letter font-playfair">N</span>
            <p>
              orth American P-51 Mustang – amerykański jednosilnikowy myśliwiec
              okresu drugiej wojny światowej zaprojektowany na zlecenie RAF-u,
              produkowany w zakładach North American Aviation (NAA) w Stanach
              Zjednoczonych (zakłady w Kalifornii i Teksasie) oraz w znacznie
              mniejszej liczbie przez Commonwealth Aircraft Corporation w
              Australii. Używany był przez USA i ich sojuszników zarówno podczas
              drugiej wojny światowej, jak i wojny koreańskiej (jako samolot
              szturmowy). Udana konstrukcja z 1940 roku sprawiła, że ostatni
              projekt samolotu bojowego opartego na P-51 zamknięto dopiero w
              1986 roku, kończąc tym samym 46 lat rozwoju jednej konstrukcji.
              Obecnie wiele z tych maszyn znajduje się w rękach prywatnych.
              Latają one podczas pokazów i zawodów sportowych. Ogółem
              wyprodukowano 15-16 tys. Mustangów.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto max-w-3xl max-lg:max-w-xl"
                src={photosSrc[0]}
                alt="p-51b_mustang"
                title={photosTitle[0]}
              />
            </PhotoView>
            <h4>Prototyp</h4>
            <p>
              Zaprojektowany na zamówienie brytyjskiego lotnictwa wojskowego
              Royal Air Force (RAF), stał się jednym z najlepszych myśliwców
              swojego czasu. Przed wybuchem wojny zakłady NAA w Inglewood
              produkowały na zamówienie Brytyjczyków i Francuzów samoloty
              szkoleniowe NA-16 Harvard. Ta współpraca sprawiła, że pod koniec
              1939 roku RAF zasugerował produkcję w zakładach NAA na licencji
              Curtissa części myśliwców P-40 Tomahawk zamówionych przez Wielką
              Brytanię pod oznaczeniem Hawk 81. W krótkim czasie zarząd NAA
              doszedł do wniosku, że używając tego samego silnika Allison
              V-1710-F3R można wyprodukować znacznie lepszą maszynę. Propozycja
              ta została przedstawiona Brytyjczykom w styczniu 1940 roku. Pomysł
              został zaakceptowany i po przedstawieniu ogólnego planu podpisano
              23 maja 1940 umowę na produkcję prototypu NA-73X. Prototyp
              oblatano 26 października 1940. Po kilku zmianach, w tym
              przebudowie wlotu chłodnicy i dalszych trzech lotach prototyp,
              wskutek błędu pilota, musiał awaryjnie lądować, co spowodowało
              wyłączenie go na pewien okres z dalszych prac. Jednak
              dotychczasowe wyniki wystarczyły, aby RAF złożył zamówienie na 320
              egzemplarzy NA-73, które otrzymały brytyjskie oznaczenie Mustang
              Mk. I. Zamówienie miało zostać zrealizowane do 30 września 1941.
            </p>
            <p>
              Aby rozpocząć produkcję, NAA musiało uzyskać zgodę US Army na
              rozbudowę zakładów. Uzyskano ją z prośbą o udostępnienie dwóch
              NA-73 do testów dla lotnictwa amerykańskiego (USAAF). Lotnictwo
              amerykańskie otrzymało czwarty i piąty egzemplarz serii
              produkcyjnej. Otrzymane maszyny przemianowano na XP-51.
            </p>
            <h4>Przebieg służby</h4>
            <h5>RAF</h5>
            <p>
              Pierwszym odbiorcą P-51 był RAF. Maszyna o numerze AG345 w
              brytyjskim malowaniu odbyła dziewiczy lot 23 kwietnia 1941
              (pozostała ona jednak w USA w celu przeprowadzenia dalszych prób).
              Pierwszymi jednostkami bojowymi przezbrojonymi w Mustangi Mk. I
              były podporządkowane Army Co-Operation Command dywizjony: 26. z
              Gatwick i 2. z Sawbridgeworth. Otrzymały one samoloty NA-73 w
              okresie od lutego do kwietnia 1942, a pierwsze loty bojowe na
              nowych maszynach odbyły kolejno 5 maja i 27 czerwca. Do końca 1942
              dywizjony: 4, 16, 63, 169, 238, 239, 241, 268, 309 (polski), 400
              (kanadyjski), 414 (kanadyjski), 430 (kanadyjski) i 613 (Royal
              Auxiliary Air Force).
            </p>
            <p>
              Pierwszy lot bojowy odbył pog. G. Dawson z 26. dywizjonu, który 10
              maja 1942 dokonał nalotu na Berck, gdzie zbombardował hangary i
              ostrzelał pociąg. Pierwsze zwycięstwo mustang odniósł 19 sierpnia
              1942 podczas rajdu na Dieppe. Wzięło w nim udział 39. Skrzydło
              AC-OC w którego skład wchodziły 26. i 238. dywizjony RAF oraz 400.
              i 414. RCAF. W czasie tej operacji ppor. Hollis Hills zestrzelił
              Focke-Wulf Fw 190A, zaś dwa miesiące później mustangi jako
              pierwsze alianckie myśliwskie pojawiły się na niebie III Rzeszy,
              atakując statki i śluzy na kanale Dortmund-Ems.
            </p>
            <p>
              W latach 1942–1943 wprowadzono mustangi do służby rozpoznawczej.
              Wersję Mk. IA otrzymał Dywizjon 168, a Mk. II dywizjony 2. i 268.
              Natomiast stacjonujące w Afryce Północnej dywizjony 14. i 225.
              otrzymały wypożyczone z USAAF samoloty F-6A, zaś 1457. Eskadra
              Rozpoznania Strategicznego otrzymała 6 sztuk A-36-1NA. Maszyny te
              zmodyfikowano, usuwając karabiny z kadłuba, dodając w jego tyle po
              dwie kamery, zaś zamki pod skrzydłami przystosowano do
              przenoszenia 415-litrowych zbiorników paliwa.
            </p>
            <p>
              Na przełomie 1943 i 1944 RAF otrzymał Mustangi Mk. III. Jako
              pierwsze przezbrojono w nie 19. i 65. Dywizjony. Następnie
              otrzymały je stacjonujące w Wielkiej Brytanii dywizjony: 26, 64,
              66, 118, 122, 126, 129, 165, 234, 237 (rodezyjski), 268, 306
              (polski), 309. (polski), 315. (polski), 316. (polski), 345.
              (francuski), 430. (kanadyjski), 441. (kanadyjski), 442.
              (kanadyjski), 615. (Royal Auxiliary Air Force) i 617.
              („Dambusters”) oraz stacjonujących we Włoszech dywizjonów: 93, 94,
              112, 213, 241, 249, 250. i 260.
            </p>
            <p>
              Brytyjskie mustangi brały wówczas udział w patrolowaniu Morza
              Północnego, eskortowały bombowce w nalotach na Niemcy, atakowały
              cele naziemne we Włoszech, a następnie także w Europie Zachodniej.
              Były to również podstawowe samoloty myśliwskie w systemie obrony
              „anti-diver” zwalczającym pociski V-1.
            </p>
            <p>
              W 1945 RAF otrzymał kilkadziesiąt sztuk Mustangów MK. IV i Mk.
              IVA, które trafiły do kilku dywizjonów, w tym 19, 26, 64, 65, 93,
              112,118, 122, 126, 126, 154, 165, 213, 234 i 611 oraz polski 303 i
              kanadyjskie 441 i 442, a także 5 (południowoafrykański) i 3
              (australijski).
            </p>
            <p>
              Ostatni lot bojowy brytyjskie mustangi wykonały 9 maja 1945 nad
              Austrią i Czechami. W okresie od sierpnia 1946 do stycznia 1947
              RAF zwróciła Amerykanom większość maszyn otrzymanych w ramach
              Lend-Lease, pozostawiając jedynie kilkadziesiąt Mustangów Mk. IV i
              Mk. IVA, które pozostały w służbie do maja 1947.
            </p>

            <h5>Polskie Siły Powietrzne</h5>
            <p>
              Pierwsze dwa Mustangi Mk. I trafiły do Eskadry B rozpoznawczego
              309 Dywizjonu „Ziemi Czerwińskiej” 7 czerwca 1942. Gdy eskadra
              została w pełni przezbrojona, została skierowana na lotnisko
              Crail, skąd rozpoczęła loty bojowe polegające na prowadzeniu
              patroli rozpoznawczych nad Morzem Północnym, na wschód od Wielkiej
              Brytanii. Kpt. Janusz Lewkowicz, inżynier z wykształcenia, który
              do tej pory latał na przestarzałych maszynach Westland Lysander,
              chcąc udowodnić parametry nowego samolotu samowolnie przeleciał
              swoim Mustangiem nad Norwegię, gdzie ostrzelał z broni pokładowej
              niemieckie stanowisko w pobliżu Stavanger. Polak został ukarany
              naganą, co było najniższą karą za samowolkę. Ten wyczyn jednak
              sprawił, że polskiemu pilotowi zlecono przedstawienie
              zoptymalizowanej trasy nad Norwegię, która następnie została
              zatwierdzona przez dowódcę AC-CO jako podstawa do opracowania
              instrukcji dla pozostałych dywizjonów AC-OC. W ten sposób
              zapoczątkowano niemal codzienne misje mustangów nad okupowaną
              Norwegią. Dwa tygodnie po zdaniu raportu Mustangi RAF
              zapoczątkowały też dalekie rajdy nad rdzenne ziemie niemieckie,
              atakując żeglugę w kanale Dortmund-Ems.
            </p>
            <p>
              W marcu 1943 Mustangi Mk. I otrzymała Eskadra A Dywizjonu 309. W
              związku z tym w maju 1943 cały dywizjon 309 przekwalifikowano z
              rozpoznawczego na myśliwsko-rozpoznawczy i podporządkowano go
              Fighter Command, które włączyło go do 12 Grupy Myśliwskiej. 309
              Dywizjon latał na Mustangach Mk. I aż do listopada 1944 (poza
              okresem od lutego do września 1944, gdy dywizjon działał jako
              szturmowy na samolotach Hawker Hurricane Mk. IIC i Mk. IV.
            </p>
            <p>
              Myśliwskie samoloty Mustang Mk. III jako pierwszy w Polskich
              Siłach Zbrojnych otrzymał 13 marca 1944 316 Dywizjon Myśliwski
              „Warszawski” wchodzący w skład 150 Skrzydła Myśliwskiego.
              Przezbrajanie trwało do połowy kwietnia, a pierwszy lot bojowy na
              nowych maszynach wykonano 29 kwietnia, był to lot patrolowy wzdłuż
              wschodniego wybrzeża Wielkiej Brytanii. Do 26 marca zakończono
              natomiast trwające zaledwie 12 dni przezbrajanie na Mustangi Mk.
              III 133 Skrzydła Myśliwskiego, które tworzyły dwa polskie
              Dywizjony Myśliwskie: 306 „Toruński” oraz 315 „Dębliński” oraz
              angielski 129. Pierwsze zestrzelenia na mustangach Polacy odnieśli
              podczas lądowania w Normandii, zaś w czasie od 7 do 30 czerwca 133
              skrzydło dowodzone przez mjr. Stanisława Skalskiego ustanowiło
              rekord zestrzeleń – 38, z czego tylko jednego dokonał angielski
              dywizjon.
            </p>
            <p>
              Od 1 lipca 1944 przyporządkowany do Air Defence of Great Britain
              Dywizjon 316 został włączony w system „anti-diver” mający na celu
              zwalczanie pocisków V-1. 10 lipca włączono w niego również 133
              Skrzydło. Aby jak najlepiej wykonywać te zadania, z samolotów
              zdemontowano zbędne wyposażenie oraz wygładzono wszelkie
              nierówności blach poszycia. Dodatkowo stosowano wówczas
              150-oktanowe paliwo, które co prawda skracało resurs silnika, ale
              pozwalało osiągnąć 750 km/h w locie poziomym.
            </p>
            <p>
              Począwszy od sierpnia 1944 roku spadła intensywność ataków przy
              użyciu V-1, co sprawiło, że dywizjony zaczęły wracać do
              poprzednich działań. W tym czasie 133 Skrzydło eskortowało
              bombowce 8 i 9 Floty Powietrznej USAAF podczas ich ataków na
              Rzeszę i okupowana Europę, osłaniało również desant pod Arnhem w
              ramach operacji Market-Garden. Istniał również projekt, aby
              wykorzystać 133 Skrzydło do osłony powstania warszawskiego, jednak
              nieudostępnienie lotnisk przez ZSRR sprawiło, że nie wykonano ani
              jednego takiego lotu.
            </p>
            <p>
              Począwszy od 20 października 1944 Mustangi Mk. III zaczęły
              zastępować Mustangi Mk. I w Dywizjonie 309. Sprawiło to, że 11
              grudnia 1944 ponownie przekwalifikowano jednostkę, tym razem na
              czysto myśliwską i zastąpiono nią 129 Dywizjon, sprawiając, że 133
              Skrzydło RAF składało się wyłącznie z polskich dywizjonów.
            </p>
            <p>
              W marcu 1945 w związku z odpalaniem V-1 z Heinkli He 111 H-22
              wszystkie cztery polskie dywizjony wyposażone w Mustangi Mk. III
              ponownie przesunięto do systemu „anti-diver”. Jednak pod koniec
              wojny po raz kolejny powróciły one do osłaniania wypraw bombowych.
              Podczas jednej z nich, 9 kwietnia 1945 roku 133 Skrzydło
              zestrzeliło cztery odrzutowe Messerschmitty Me 262 bez strat
              własnych. Do innych ważnych misji 133 Skrzydła należały: nalot na
              cumujące w Świnoujściu niemieckie okręty 14 kwietnia 1945 oraz na
              Berghof i Berchtesgaden 25 kwietnia 1945 roku.
            </p>
            <p>
              W międzyczasie 20 samolotów Mustang w wersjach Mk. IV i Mk. IVA
              otrzymał 303 Dywizjon Myśliwski „Kościuszkowski”.
            </p>
            <p>
              Po wojnie, w dniach od 6 grudnia 1946 do 6 stycznia 1947
              rozwiązano wszystkie pięć polskich dywizjonów wyposażonych w
              mustangi. Ogółem 80 Maszyn Mk. III oraz 20 Mk. IV i Mk. IVA
              przejęły składnice RAF-u, skąd następnie trafiły do USA.
            </p>

            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/North_American_P-51_Mustang"
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

export default MiG29History;
