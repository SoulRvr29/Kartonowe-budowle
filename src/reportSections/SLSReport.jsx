import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";

const SLSReport = () => {
  const [reportState, setReportState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <section id="relacja">
      <SectionHeader
        sectionName="Relacja z budowy"
        sectionState={reportState}
        setSectionState={setReportState}
      />

      {reportState === true && (
        <div className="pt-2 pb-6">
          <PhotoProvider loadingElement={<div className="loader"></div>}>
            <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            <article>
              {currentPage === 1 && (
                <>
                  <p>
                    W kolejnej relacji, przedstawiam kolejny model rakiety. Tym
                    razem jest to rakieta SLS od NASA. Model przeskalowałem z
                    1:96 na 1:100 by pasował do reszty rakiet. Budowę zacząłem
                    od dolnej części pierwszego stopnia.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b01.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b02.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dysze głównych silników są bardzo uproszczone i jak by je
                    nie spasować to wychodzą przesunięcia w grafice.
                    Postanowiłem więc, że wykonam wypukłe rury na dyszach z cyny
                    1mm i cienkiego drutu. Po naklejeniu zamalowałem
                    przestrzenie pomiędzy nimi.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b04.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b05.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Całość prezentuje się o wiele lepiej niż w płaskiej wersji,
                    chociaż teraz widzę, że te rury powinny być trochę cieńsze.
                    Niepotrzebnie zasugerowałem się ich grubością w projekcie.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b07.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b07.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b06.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b08.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b08.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Następnie skleiłem resztę pierwszego stopnia i dwa boczne
                    boostery. Środek usztywniłem kartonem i tekturą 1,5 mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b10.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b10.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b09.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b09.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    W dolnej części boosterów miałem problem ze sklejeniem tego
                    zaokrąglenia wokół dyszy silnika. Składa się ono z 24
                    pasków, które trzeba zawinąć i pojedynczo wklejać.
                    Podchodziłem do tego kilka razy i zawsze wychodzą około 0,5
                    mm szpary od zewnętrznej strony. Próbowałem trochę zmienić
                    kształt tych pasków, ale wtedy nie udawało mi się ich
                    zmieścić, więc już tak zostanie. Szpary wypełniłem wikolem i
                    zamalowałem.
                  </p>
                  <PhotoView src="models/sls/build/full-res/sls-b03.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="models/sls/build/thumb/sls-thumb-b03.webp"
                      alt="SLS"
                    />
                  </PhotoView>
                  <p>Dokleiłem resztę detali.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b15.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b15.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b16.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b16.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wzdłuż pierwszego stopnia biegną dwie długie rury.
                    Podzieliłem je na mniejsze kawałki, żeby można było je łatwo
                    zawinąć. Łączenia poszczególnych fragmentów zakrywają paski.
                  </p>
                  <PhotoView src="models/sls/build/full-res/sls-b11.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="models/sls/build/thumb/sls-thumb-b11.webp"
                      alt="SLS"
                    />
                  </PhotoView>
                  <p>
                    Górne zakończenie rur nie wyglądało zbyt dobrze po
                    sklejeniu, więc poprawiłem trochę jego kształt i całość
                    wyszlifowałem i pomalowałem.
                  </p>
                  <PhotoView src="models/sls/build/full-res/sls-b12.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="models/sls/build/thumb/sls-thumb-b12.webp"
                      alt="SLS"
                    />
                  </PhotoView>
                  <p>
                    Dolne końce rur w projekcie miały być zakończone na płasko,
                    ale postanowiłem to poprawić i dodałem zaokrąglenie.
                    Wykonałem je z dwóch kawałków zwiniętej ciasno rurki,
                    sklejonych ze sobą pod kontem 90 stopni. Następnie element
                    ściąłem na zagięciu i wyszlifowałem do gładkiego
                    zaokrąglenia.
                  </p>
                  <PhotoView src="models/sls/build/full-res/sls-b13.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="models/sls/build/thumb/sls-thumb-b13.webp"
                      alt="SLS"
                    />
                  </PhotoView>
                  <p>
                    Pod rurami dorobiłem trójwymiarowe podpory. Zrobiłem też
                    wypukłą osłonę przewodów która biegnie obok rury, a w
                    projekcie była płaska.
                  </p>
                  <PhotoView src="models/sls/build/full-res/sls-b14.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="models/sls/build/thumb/sls-thumb-b14.webp"
                      alt="SLS"
                    />
                  </PhotoView>
                  <p>
                    Podobnie jak w moich poprzednich modelach rakiet, tak i
                    tutaj wykorzystam magnesy. Boostery będą przyczepione do
                    pierwszego stopnia w dwóch miejscach na dole magnesami 3mm
                    oraz na górze magnesem 4mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b17.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b17.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b18.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b18.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b19.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b19.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wykonałem rury, które biegną wzdłuż pierwszego stopnia z
                    drutu cynowego. Trochę psują efekt te narysowane paski pod
                    nimi. Mogłem je wymazać przed wydrukowaniem.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b23.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b23.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b24.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b24.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Złożyłem do końca boczne boostery. Musiałem pomniejszyć
                    noski i wykonać je ponownie, bo w projekcie mają trochę za
                    dużą średnicę i wystawały poza resztę.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b26.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b26.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b27.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b27.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    W dolnej części rakiety dodałem detale w formie wypukłych
                    pasków, prostokątów itp.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b22.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b22.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b25.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b25.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>Pierwszy stopień rakiety jest już prawie gotowy.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b20.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b20.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b21.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b21.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <p>
                    Postanowiłem zmodyfikować górną część pierwszego stopnia.
                    Usunąłem wcześniej wklejony pierścień i dodałem kopułę
                    zbiornika oraz kilka innych elementów, których nie było w
                    wycinance. Musiałem trochę zgadywać, jak to wygląda, bo
                    ciężko znaleźć zdjęcia tej części rakiety. To wszystko i tak
                    nie będzie zbyt widoczne, bo na to nakleję jeszcze stożek.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b28.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b28.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b29.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b29.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b30.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b30.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Ze stożkiem będzie się łączyć drugi stopień poprzez cztery
                    magnesy 2mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b31.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b31.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b32.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b32.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Następnie zabrałem się za sklejanie kapsuły Orion. Miałem
                    spore problemy z wklejeniem wnęki ze środkowymi okienkami.
                    Musiałem ten element rozciąć na mniejsze fragmenty i trochę
                    zmodyfikować, żeby pasował. Okienka podkleiłem przezroczystą
                    folią, którą zamalowałem od wewnątrz. Dodatkowo wyciąłem też
                    sześć podłużnych wnęk w górnej części kapsuły.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b33.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b33.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b34.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b34.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Osłonę kapsuły postanowiłem wykonać trochę inaczej niż w
                    projekcie, w którym jej boczna część jest paskiem połączonym
                    z kapsułą. Musiałbym ten pasek rozcinać, zawijać i sklejać
                    na zakładkę.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/orion1.jpg">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/orion1.jpg"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Pasek odciąłem i podzieliłem go na pojedyncze fragmenty,
                    które kolejno wklejałem. Wcześniej między kapsułę a dolną
                    część osłony wkleiłem krążki z tektury, żeby mieć
                    kilkumilimetrowy odstęp pomiędzy nimi.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b35.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b35.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b36.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b36.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    W górnej części kapsuły wkleiłem jeden magnes 10mm, a w
                    dolnej części cztery magnesy 3mm. Kapsuła będzie się łączyć
                    z modułem serwisowym, który też ma wklejone cztery magnesy
                    3mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b38.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b38.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b39.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b39.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Autor tego modelu udostępnił niedawno nową wersję z misji
                    Artemis II. Wykorzystałem z niej elementy górnej części
                    drugiego stopnia, których brakowało w poprzedniej wersji. Te
                    małe kostki to satelity CubeSat.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b40.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b40.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Tak na ten moment wygląda drugi stopień, moduł serwisowy i
                    kapsuła Orion - złożone na razie na sucho.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b41.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b41.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Skleiłem moduł LAS (Launch Abort System), który będzie się
                    łączyć z kapsułą Orion na górze rakiety. Kopułę trochę
                    wzmocniłem. Skleiłem ją dwa razy i wsunąłem jedną część w
                    drugą, odcinając wystający nadmiar.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b42.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b42.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b43.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b43.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b44.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b44.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dodałem resztę detali ma module serwisowym. Wkleiłem sześć
                    magnesów 2 mm, którymi moduł serwisowy będzie się łączyć z
                    drugim stopniem rakiety.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b45.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b45.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b46.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b46.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b47.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b47.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Na module serwisowym będą przyczepione na magnesach panele
                    słoneczne. Zrobię je jeszcze w drugiej wersji - rozłożonej.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b49.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b49.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b50.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b50.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Następnie zabrałem się za sklejanie dolnej części drugiego
                    stopnia. Dodałem osłony z folii aluminiowej, którą
                    formowałem i wycinałem na wcześniej przygotowanych
                    szablonach. Dojdzie tu jeszcze dysza silnika i różne drobne
                    detale.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b51.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b51.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b52.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b52.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                    <PhotoView src="models/sls/build/full-res/sls-b53.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b53.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Postanowiłem dodać więcej magnesów, więc teraz drugi stopień
                    łączy się ze stożkiem na ośmiu magnesach 2 mm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b54.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b54.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak teraz wygląda górna część rakiety.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b48.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b48.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                  <p>A tak wygląda po rozłożeniu.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/sls/build/full-res/sls-b55.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/sls/build/thumb/sls-thumb-b55.webp"
                        alt="SLS"
                      />
                    </PhotoView>
                  </div>
                </>
              )}
            </article>
            <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </PhotoProvider>
        </div>
      )}
    </section>
  );
};

export default SLSReport;
