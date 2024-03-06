import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RozewieHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie morskie/rozewie/rozewie-photo1.jpg",
    "models/latarnie morskie/rozewie/rozewie-photo2.jpg",
    "models/latarnie morskie/rozewie/rozewie-photo3.jpg",
    "models/latarnie morskie/rozewie/rozewie-photo4.jpg",
    "models/latarnie morskie/rozewie/rozewie-photo5.jpg",
    "models/latarnie morskie/rozewie/rozewie-photo6.jpg",
  ];
  const photosTitle = [
    "Nowa, nieczynna latarnia z 1875 roku",
    "Stara, czynna latarnia z 1822 roku",
    "Nowa, nieczynna latarnia w 1930 roku",
    "Latarnia morska Rozewie około 1934-1936 roku",
    "Latarnia morska Rozewie w 1970 roku",
    "Latarnia morska Rozewie obecnie",
  ];

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
          <article className="px-8 max-sm:px-4">
            <p>
              <span className="first-letter">N</span>a Rozewiu istnieją dwie
              latarnie: stara i nowa. Nazwy: stara i nowa nie są jednoznaczne i
              są błędnie używane zamiennie dla obu rozewskich latarni.
              Przyczyniła się do tego historia ich budowy i modernizacji oraz
              okres w którym świeciły równocześnie.
            </p>
            <p>
              „Stara latarnia” – to czynna do dziś latarnia z 1822 roku, poddana
              dwóm istotnym modernizacjom w 1910 i 1978 roku. „Nowa latarnia” –
              uruchomiona w 1875 i do 1910 funkcjonowała równocześnie ze „starą
              latarnią” rozewską. Została wyłączona z eksploatacji w 1910 roku
              po modernizacji „starej”, którą wyposażono w światło elektryczne o
              unikalnej charakterystyce świecenia.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="max-h-[20rem]"
                  src={photosSrc[0]}
                  alt="Rozewie"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[20rem]"
                  src={photosSrc[1]}
                  alt="Rozewie"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <p>
              Przylądek Rozewie od dawna stanowił ważny punkt nawigacyjny na
              mapach południowego Bałtyku. W XV wieku w Locji (Flamandia)
              wspominane jest Rozewie pod nazwą Pasehoned. Latarnia na przylądku
              Rozewie pierwszy raz umieszczona została na szwedzkiej mapie
              Zatoki Puckiej z 1696 roku.
            </p>
            <p>
              Decyzję o budowie nowoczesnej latarni podjęto w 1807, gdy statki
              francuskie płynące z zaopatrzeniem dla Wielkiej Armii
              napoleońskiej do portu gdańskiego, często myliły w nocy latarnię
              rozewską z helską i zmieniając kurs na Zatokę Gdańską za Rozewiem,
              kończyły rejs na mieliznach przy plażach Mierzei Helskiej.
            </p>
            <p>
              W 1821 roku rozpoczęto budowę latarni murowanej. Okrągła 13,3
              metrowa, czterokondygnacyjna wieża zwężająca się ku górze
              zbudowana została z kamieni narzutowych, otynkowana i pomalowana
              na biało. Na szczycie kamiennej wieży dzisiejszej (czynnej)
              latarni, umieszczono sześciokątną laternę w kolorze ciemnobrązowym
              ze stożkowym dachem, którego szczyt znajdował się na wysokości
              21,3 m. Zaświeciła ona 15 listopada 1822. Zapalono 15 lamp na olej
              rzepakowy Arganda ustawionych półkoliście w dwóch rzędach: na
              wyższym (6 lamp) i niższym (7 lamp). Na trzeciej kondygnacji
              umieszczono pozostałe dwie lampy. Latarnia świeciła białym stałym
              światłem na odległość 21,7 Mm. Po 44 latach eksploatacji lampy
              wymieniono na aparat Fresnela I klasy, lecz charakterystyka
              światła pozostała niezmieniona. Lampę zapalano 15 minut przed
              zachodem słońca, a gaszono o świcie. Zasięg latarni wynosił 21,7
              Mm.
            </p>
            <PhotoView src={photosSrc[2]}>
              <LazyLoadImage
                className="float-left mr-8 max-h-[16rem] mt-2"
                src={photosSrc[2]}
                alt="Rozewie"
                title={photosTitle[2]}
              />
            </PhotoView>
            <p>
              Wzrost intensywności żeglugi w drugiej połowie XIX w., skutkował
              częstymi pomyłkami nawigacyjnymi przechodzących w nocy koło
              Rozewia statków, kierujących się na Zatokę Gdańską, a mylących
              Rozewie z Helem, czego efektem było utknięcie na mieliznach między
              Chałupami a Jastarnią. By temu zapobiec, zbudowano drugą latarnię
              (dziś: nieczynna latarnia), czyli zdublowano światła latarni na
              Rozewiu w celu łatwego odróżnienia świateł latarni rozewskich od
              sąsiednich latarni (m.in. w Czołpinie i na Helu). Druga latarnia
              na Rozewiu (nieczynna latarnia), świeciła od 1875 r. do 1910 r.
              Była wyposażona w aparat Fresnela I klasy na naftę. Obie latarnie
              świeciły światłem białym stałym i miały taki sam zasięg. „Nowa
              latarnia” przestała być potrzebna po modernizacji pierwszej
              latarni (czynna/stara latarnia), m.in. wyposażeniu jej w
              oświetlenie elektryczne o większym zasięgu i unikalnej
              charakterystyce świecenia. Do ok. 1990 wieża nieczynnej latarni
              była eksploatowana jako wieża obserwacyjna i miejsce lokalizacji
              anteny radaru strażnicy WOP.
            </p>
            <p>
              W 1910 roku „pierwszą” latarnię (czynna latarnia), z uwagi na
              rosnący las bukowy, zasłaniający światło latarni od strony morza,
              podwyższono o 5 metrów, używając tak zwanych tubingów i
              zmodernizowano, zmieniając oświetlenie na elektryczne. Dobudowano
              na szczycie kamiennej wieży stożkową konstrukcję stalową i na jej
              szczycie zamontowano nową laternę.
            </p>
            <p>
              W okresie międzywojennym wykonano kilka inwestycji dotyczących
              latarni m.in. przebudowano syrenownię, zainstalowano urządzenia
              automatycznej radiostacji, wzniesiono maszt antenowy a górną wieżę
              pomalowano na kolor czerwony. Uhonorowano wtedy również dokonania
              Stefana Żeromskiego, którego imieniem, 29 czerwca 1933, nazwano
              rozewską latarnię. 1 lipca 1933 odsłonięto tablicę ku pamięci
              pisarza, która została zniszczona podczas II wojny światowej. Po
              wojnie Rozewie było pierwszą latarnią, której blask oświecił drogę
              żeglarzom.
            </p>{" "}
            <div className="article-div">
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className="max-h-[20rem]"
                  src={photosSrc[3]}
                  alt="Rozewie"
                  title={photosTitle[3]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[4]}>
                <LazyLoadImage
                  className="max-h-[20rem]"
                  src={photosSrc[4]}
                  alt="Rozewie"
                  title={photosTitle[4]}
                />
              </PhotoView>
            </div>
            <p>
              Od 1945 roku latarnia jest także radiolatarnią o znaku RO (• – • –
              – – według alfabetu Morse’a). Po 1998 sygnał ten był nadawany na
              życzenie, z uwagi na ograniczenie prac radiolatarni i powszechność
              GPS – IALA. Obecnie radiolatarnia Rozewie nie figuruje w wykazie
              polskich radiolatarń.
            </p>
            <p>
              W czerwcu 1978 roku latarnię podwyższono o 8 metrów (przez
              wstawienie 8-metrowego walca metalowego – nie mylić z tubingiem –
              przy pomocy dźwigu samojezdnego), ponieważ rosnące drzewa
              (rezerwat – las bukowy), zaczęły zasłaniać światło od strony
              morza. Zainstalowano nowe źródło światła. Jest to jeden panel
              dwustronny na obrotowym stole, który po każdej stronie posiada po
              20 reflektorów halogenowych. Pozostawiono stary reflektor i
              wyposażenie elektryczne z lat 20. XX w. na swoim miejscu: wewnątrz
              nowego walca metalowego z 1978 r., w celach muzealnych (Muzeum
              Latarni Morskich w Rozewiu).
            </p>
            <p>
              W 1994 roku zamontowano stację referencyjną GPS pozwalającą
              określić pozycję w pobliżu latarni z dokładnością do 5-10 metrów.
              Ponadto na latarni Rozewie znajduje się jedna z jedenastu stacji
              brzegowych polskiego wybrzeża systemu AIS-PL projektu HELCOM.
              System umożliwia automatyczne monitorowanie ruchu statków w
              strefie przybrzeżnej. Antena stacji na Rozewiu ma wysokość 85 m.
              n.p.m.
            </p>
            <p>
              Przy czynnej latarni znajduje się siłownia oraz sprężarki służące
              do uruchamiania sygnału mgłowego („buczka mgłowego”
              zainstalowanego w 1877 roku, połączonego rurami pneumatycznymi ze
              sprężarkami), zlokalizowanego w lesie na cyplu, koło zabudowań
              latarni. Zmiana przepisów IALA, rozwój GPS i powszechne
              wyposażanie statków w radary nawigacyjne, spowodowało, że od 1991
              roku sygnały mgłowe nie są nadawane.
            </p>
            <PhotoView src={photosSrc[5]}>
              <LazyLoadImage
                className="max-w-2xl mx-auto"
                src={photosSrc[5]}
                alt="Rozewie"
                title={photosTitle[5]}
              />
            </PhotoView>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default RozewieHistory;
