import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BaranowHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/baranow/baranow-photo1.jpg",
    "models/baranow/baranow-photo2.jpg",
    "models/baranow/baranow-photo3.jpg",
  ];
  const photosTitle = ["Zamek około 1900-1904 roku", "", ""];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Historia"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState === true && (
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
          {" "}
          <article className="px-8 max-sm:px-4">
            <p>
              <span className="first-letter font-playfair">P</span>erła
              architektury renesansowej – forteca w Baranowie Sandomierskim
              położona jest w nizinie dolnej Wisły. Pierwotny rycerski dwór
              obronny w miejscu dzisiejszego dziedzińca, o którym Długosz pisał,
              że w XV stuleciu należał do rodziny Baranowskich herbu Grzymała. U
              schyłku wieku dwór ten, lub wieża mieszkalna, przeszedł na
              własność Kurozwęckich herbu Poraj, najbogatszego wówczas rodu w
              Małopolsce Następnymi właścicielami był ród Górków z Wielkopolski.
              W 1568 roku Stanisław Górka sprzedał dobra baranowskie Rafałowi
              Leszczyńskiemu herbu Wieniawa który wybudował tu dwór renesansowy
              na planie prostokąta stanowiący dziś część zachodnią zamku Według
              innej teorii parter zamku ma pochodzić z czasów Rafała
              Leszczyńskiego, zaś piętro z czasów Andrzeja Leszczyńskiego.
            </p>
            <p>
              Andrzej Leszczyński – wojewoda brzeskokujawski rozbudował zamek
              dobudowując dziedziniec z renesansowymi krużgankami wokół nowych
              budynków i założył bibliotekę. Zamek odwiedzał prawdopodobnie król
              Stefan Batory. Około 1620 roku murowany zamek został otoczony
              niezachowanymi ziemnymi fortyfikacjami bastionowymi. Ostatnim
              właścicielem z rodu Leszczyńskich był Rafał – ojciec Stanisława
              Leszczyńskiego – króla Polski.
            </p>
            <p>
              Kolejnym właścicielem był Dymitr Jerzy Wiśniowiecki (w latach
              1677–1682), później książę Józef Karol Lubomirski herbu Śreniawa
              (1683–1720) Pod koniec XVII wieku dobudowano do zewnętrznej części
              skrzydła zachodniego barokową galerię zdobioną stiukami.
            </p>
            <p>
              Następnymi właścicielami byli książę Paweł Sanguszko, Jacek
              Małachowski, Józef Potocki, Jan Krasicki. Krasiccy jako
              właściciele zamku przeprowadzili prace remontowo-adaptacyjne
              wskutek których zamek częściowo utracił swoją dotychczasową formę
              fortyfikacji. Według tradycji zamek przed śmiercią odwiedził
              Ignacy Krasicki. Krasiccy powiększyli także zamkową bibliotekę i
              umieścili w zamku wiele dzieł sztuki, prawdopodobnie przechowywali
              na zamku także część pamiątek po Ignacym Krasickim. Po pożarze w
              1849 roku, Krasiccy, ze względu na wysokie koszty, nie byli w
              stanie wyremontować zamku. Zrujnowaną budowlę kupił w 1867 roku
              Feliks Dolański herbu Korab z Grębowa. W roku 1898 zamek ponownie
              płonął. Odbudowę powierzono Tadeuszowi Stryjeńskiemu. W kaplicy
              zamkowej zaznaczony został przez niego styl krakowskiej secesji.
              Witraże zaprojektowane zostały przez Józefa Mehoffera, a autorem
              obrazu ołtarzowego „Matka Boska Niepokalana” był Jacek Malczewski.
              W ramach odbudowy zamek pokryto nową dachówką, zlikwidowano
              ogródek znajdujący się na dziedzińcu i położono tam kamienną
              posadzkę. Oprócz tego odnowiono zamkowe wnętrza. W czasie I wojny
              światowej zamek był wykorzystywany przez wojska rosyjskie jako
              siedziba sztabu jednej z armii. Po wojnie Dolańscy wyposażyli
              zamek w wodociągi i go zelektryfikowali.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto max-w-2xl max-lg:max-w-lg "
                src={photosSrc[0]}
                alt="Baranów"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              Ostatnim właścicielem był Roman Dolański (zm.1956) który stracił
              zamek w wyniku reformy rolnej z 1945 roku.
            </p>
            <p>
              W czasie II wojny światowej w zamku znajdował się niemiecki zarząd
              powierniczy. Na początku 1944 roku zamek został zajęty przez
              Wermacht, a część jego pomieszczeń zamieniono w magazyn sprzętu
              wojskowego i broni. Zamek i znajdujące się w nim składy broni
              ochraniała 14. dywizja Wafen SS-Galizien. W czerwcu 1944 roku
              lokalne oddziały Batalionów Chłopskich pod dowództwem Stanisława
              Ordyka planowały zdobycie zamku i znajdującego się w nim sprzętu
              wojskowego (do tego celu w pobliżu Baranowa Sandomierskiego
              zebrano około trzystu żołnierzy Batalionów Chłopskich). Akcje
              odwołano, ponieważ odkryto, że Niemcy zaplanowali atak Batalionów
              na zamek oraz postawili w stan gotowości okoliczne oddziały
              Wermachtu, ogłosili alarm w stacjonującej w Nagnajowie jednostce
              artylerii i sprowadzili dodatkowe oddziały żandarmerii.
            </p>
            <p>
              Czasy drugiej wojny światowej i krótki okres po jej zakończeniu w
              tragiczny sposób odbiły swoje piętno na stanie technicznym zamku.
              Nie dbali o niego ani hitlerowcy, ani tym bardziej Sowieci, którzy
              zdewastowali jego wnętrza paląc w nich ogniska z posadzek i
              zabytkowych mebli. Po zakończeniu działań wojennych, ówczesna
              władza ludowa, przeznaczyła kaplicę na cele społeczne. Budynek
              zamku zamieniono na stajnie i magazyn GS. Przechowywano w nim
              zboża i nawozy sztuczne, na potrzeby miejscowej ludności.
            </p>
            <p>
              W latach 1959-1968 zamek został odnowiony i odrestaurowany pod
              kierunkiem profesora Alfreda Majewskiego. W styczniu 1968 roku
              przekazano zamek Kopalniom i Zakładom Przetwórczym Siarki
              „Siarkopol” w Tarnobrzegu. Do 1995 istniało w zamku muzeum
              Zagłębia Siarkowego. Od lipca 1997 roku właścicielem zamku jest
              Agencja Rozwoju Przemysłu SA w Warszawie.
            </p>
            <p>
              Od lat 60. XX w. prowadzone były prace przy zagospodarowaniu
              terenu wokół zamku, zmodyfikowano układ drożny, budynki
              gospodarcze przebudowano na hotel, wprowadzono nową kompozycję
              parkową wg. projektów prof. Gerarda Antoniego Ciołka i Alfreda
              Majewskiego, do przetrzebionego drzewostanu wprowadzono wiele
              nowych nasadzeń.
            </p>
            <p>
              Część pomieszczeń jest udostępniona zwiedzającym. W zamkowych
              podziemiach znajduje się największe w Europie czółno wydłubane z
              pnia drzewa, wystawa ćmielowskiej porcelany oraz fotografii.
              Możliwe jest wynajęcie restauracji zamkowej na imprezy
              okolicznościowe (sympozja, wesela). W pobliżu zamku znajduje się
              hotel i basen. W zamkowych salach, krużgankach i dziedzińcu
              kręcony był serial Czarne chmury oraz filmy: Barbara
              Radziwiłłównai Klejnot wolnego sumienia. W podziemiach
              baranowskiego zamku znajduje się udostępniona dla zwiedzających
              zbrojownia rycerska, w której odbywają się często wystawy czasowe.
              W zamkowych wnętrzach znajduje się Restauracja Magnacka oraz sale
              biesiadne. Na terenie zamku oraz zamkowego hotelu znajdują się
              specjalne sale konferencyjne. W okresie wakacyjnym na terenie
              zamku odbywają się kolonie tematyczne dla dzieci i młodzieży z
              całej Polski.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              {" "}
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className=""
                  src={photosSrc[1]}
                  alt="Baranów"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className=""
                  src={photosSrc[2]}
                  alt="Baranów"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default BaranowHistory;
