import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";

const StarshipS30Report = () => {
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
        <PhotoProvider loadingElement={<div className="loader"></div>}>
          <article>
            <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            {currentPage === 1 && (
              <>
                <p>
                  Sklejanie zacząłem od noska Starshipa. Poszczególne segmenty
                  najlepiej łączyć ze sobą, patrząc na linie z przodu noska, bo
                  gdy sklejałem je równo z łączeniami, wychodziły przesunięcia.
                  Niektóre paski musiałem skrócić o 1 mm. Ogólnie modele z tej
                  strony nie są idealnie spasowane i trzeba brać pod uwagę to,
                  że nieraz coś będzie do poprawy.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b02.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b02.webp"
                      alt="Nosek Starshipa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b03.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b03.webp"
                      alt="Nosek Starshipa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b11.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b11.webp"
                      alt="Nosek Starshipa"
                    />
                  </PhotoView>
                </div>
                <p>
                  Tak wygląda wnętrze noska Starshipa z dodatkowymi zbiornikami
                  na paliwo (środek) oraz zbiornikami COPV (czarne zbiorniki po
                  bokach). Można by się pokusić o wycięcie otworów w
                  kratownicach, ale zdecydowałem, że we wnętrzu rakiety, którego
                  i tak normalnie nie widać, nie będę dodawał detali. Kratownice
                  też średnio do siebie pasują i musiałem je w kilku miejscach
                  wyginać i dociskać.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b06.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b06.webp"
                      alt="Wnętrze Starshipa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b05.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b05.webp"
                      alt="Wnętrze Starshipa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b10.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b10.webp"
                      alt="Wnętrze Starshipa"
                    />
                  </PhotoView>
                </div>
                <p>
                  Dolną sekcję Starshipa usztywniłem grubszym kartonem i
                  wkleiłem w środek kilka krążków z tektury 1,5 mm. Od góry
                  wkleiłem kopułę głównego zbiornika, a od dołu podstawę pod
                  silniki.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b04.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b04.webp"
                      alt="Dolna sekcja Starshipa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b08.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b08.webp"
                      alt="Dolna sekcja Starshipa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b09.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b09.webp"
                      alt="Dolna sekcja Starshipa"
                    />
                  </PhotoView>
                </div>
                <p>
                  Obie sekcje Starshipa będą połączone magnesami wklejonymi w
                  pierścienie na końcach. Użyłem do tego magnesów 4 mm na 1,5
                  mm. Początkowo chciałem dać po cztery magnesy, ale dla
                  pewności dodałem jeszcze po dwa kolejne po bokach.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b07.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b07.webp"
                      alt="Magnesy"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b14.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b14.webp"
                      alt="Magnesy"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b15.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b15.webp"
                      alt="Magnesy"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b25.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b25.webp"
                      alt="Magnesy"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b26.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b26.webp"
                      alt="Magnesy"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b27.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b27.webp"
                      alt="Magnesy"
                    />
                  </PhotoView>
                </div>
                <p>Na nosku rakiety dodałem od siebie kilka drobnych detali.</p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b28.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b28.webp"
                      alt="Detale noska"
                    />
                  </PhotoView>
                </div>
                <p>
                  Następnie wkleiłem sześć silników Raptor. Niestety dopiero
                  wtedy zauważyłem, że ta podstawa pod nie powinna być wklejona
                  płycej, bo wewnętrzna oklejka była dłuższa dla druku 3d, w
                  którym można było wydrukować i wkleić całą podstawę z
                  silnikami. Więc musiałem wkleić tę podstawę ponownie, a jako
                  że miałem już przyklejone elementy na ściankach to podstawę
                  rozciąłem na trzy części i tak po kawałku wklejałem.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b12.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b12.webp"
                      alt="Silniki Raptor"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b23.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b23.webp"
                      alt="Silniki Raptor"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b24.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b24.webp"
                      alt="Silniki Raptor"
                    />
                  </PhotoView>
                </div>
                <p>
                  We wnętrzu Starshipa są ruchome drzwi ładowni. Można je
                  podnosić i opuszczać, przykładając do nich magnes. Wewnętrzny
                  otwór na drzwi był za szeroki o jakieś 5 mm, więc musiałem tę
                  część poprawić i ponownie wydrukować.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b42.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b42.webp"
                      alt="Drzwi ładowni"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b43.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b43.webp"
                      alt="Drzwi ładowni"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b41.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b41.webp"
                      alt="Drzwi ładowni"
                    />
                  </PhotoView>
                </div>
                <p>
                  Następnie skleiłem górne i dolne skrzydełka (flapy), które
                  będą ruchome. Zamocowałem je na prostym zawiasie - jedna rurka
                  jest wsunięta w drugą.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b13.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b13.webp"
                      alt="Skrzydełka"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b52.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b52.webp"
                      alt="Skrzydełka"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b53.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b53.webp"
                      alt="Skrzydełka"
                    />
                  </PhotoView>
                </div>
                <p>
                  Górne skrzydełka musiałem wklejać trochę 'na oko', bo nie ma
                  dokładnych oznaczeń, w którym miejscu mają się znajdować.
                  Przesunięcia w grafice między poszczególnymi segmentami też
                  nie ułatwiają sprawy.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b54.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b54.webp"
                      alt="Górne skrzydełka"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b55.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b55.webp"
                      alt="Górne skrzydełka"
                    />
                  </PhotoView>
                </div>
                <p>
                  Nad flapami Starshipa wkleiłem osłony. W projekcie te elementy
                  były za małe i musiałem je powiększyć o jakieś 10% i trochę
                  zmienić kształt by pasowały.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b56.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b56.webp"
                      alt="Osłony flapów"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b57.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b57.webp"
                      alt="Osłony flapów"
                    />
                  </PhotoView>
                </div>
              </>
            )}
            {currentPage === 2 && (
              <>
                <p>
                  Pomiędzy Starshipem a boosterem jest łączący je pierścień do
                  separacji (hot staging ring). Musiałem więc wykonać kolejne
                  dwie pary pierścieni z magnesami. Jako że łączą całego
                  Starshipa z boosterem, postanowiłem użyć do tego więcej
                  magnesów - po 12 z każdej strony (na zdjęciu w górnej parze
                  jest 10, ale potem dodałem jeszcze po dwa). Magnesy wklejałem
                  jeszcze przed całkowitym wycięciem elementów z tektury.
                  Stronę, która będzie widoczna wyrównywałem szpachlą.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b16.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b16.webp"
                      alt="Pierścień separacyjny z magnesami"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b17.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b17.webp"
                      alt="Pierścień separacyjny z magnesami"
                    />
                  </PhotoView>
                </div>
                <p>
                  Wyciąłem kratki, które będą na ściankach pierścienia
                  separacyjnego.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b19.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b19.webp"
                      alt="Kratki pierścienia separacyjnego"
                    />
                  </PhotoView>
                </div>
                <p>
                  Tak wygląda gotowy element z wklejonymi magnesami. Na jego
                  ściankach będzie opierał się cały ciężar Starshipa, więc dla
                  wzmocnienia po wewnętrznej stronie wkleiłem w kilku miejscach
                  niewielkie prostokąty z tektury.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b37.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b37.webp"
                      alt="Gotowy pierścień separacyjny"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b38.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b38.webp"
                      alt="Gotowy pierścień separacyjny"
                    />
                  </PhotoView>
                </div>
                <p>
                  Skleiłem główną część boostera. Ma długość 66cm i jest
                  połączona z trzech segmentów. Następnie w górnej części
                  wkleiłem pierścień z magnesami.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b21.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b21.webp"
                      alt="Główna część boostera"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b22.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b22.webp"
                      alt="Główna część boostera"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b31.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b31.webp"
                      alt="Główna część boostera"
                    />
                  </PhotoView>
                </div>
                <p>
                  Tak wygląda połączenie Starshipa (jeszcze bez skrzydełek) z
                  boosterem poprzez pierścień do separacji.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b40.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b40.webp"
                      alt="Połączenie Starshipa z boosterem"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b39.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b39.webp"
                      alt="Połączenie Starshipa z boosterem"
                    />
                  </PhotoView>
                </div>
                <p>
                  Następnie zabrałem się za sklejanie sterów kratowych (grid
                  fins). Ich dolna, kwadratowa część łączy się bezproblemowo.
                  Górną część musiałem rozcinać w kilku miejscach i poprawiać.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b29.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b29.webp"
                      alt="Stery kratowe"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b30.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b30.webp"
                      alt="Stery kratowe"
                    />
                  </PhotoView>
                </div>
                <p>
                  Skleiłem resztę elementów, które znajdować się będą na górze
                  boostera i pomalowałem stery kratowe.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b32.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b32.webp"
                      alt="Góra boostera"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b36.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b36.webp"
                      alt="Góra boostera"
                    />
                  </PhotoView>
                </div>
                <p>
                  Tak wygląda gotowa górna część boostera. Stery kratowe
                  trzymają się na magnesach i można nimi obracać.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b33.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b33.webp"
                      alt="Gotowa górna część boostera"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b34.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b34.webp"
                      alt="Gotowa górna część boostera"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b35.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b35.webp"
                      alt="Gotowa górna część boostera"
                    />
                  </PhotoView>
                </div>
                <p>
                  W dolnej części boostera, sekcja silnikowa sprawiła mi trochę
                  problemów. Wewnętrzny pasek jest za długi o kilka milimetrów.
                  Po zewnętrznej stronie osłony silników musiałem wklejać "na
                  oko", bo pola pod nie narysowane są krzywo i nie pasują
                  kształtem. Te "kostki" nad osłonami to już w ogóle nie pasują
                  i musiałem je rozcinać na trzy fragmenty i jakoś dopasować.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b48.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b48.webp"
                      alt="Dolna część boostera - sekcja silnikowa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b47.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b47.webp"
                      alt="Dolna część boostera - sekcja silnikowa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b46.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b46.webp"
                      alt="Dolna część boostera - sekcja silnikowa"
                    />
                  </PhotoView>
                </div>
                <p>
                  Następnie skleiłem 33 dysze silników Raptor i osłony
                  wewnętrznych silników. Wewnętrzną stronę dysz pomalowałem (tak
                  samo jak stery kratowe) kolorem gunmetal.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b44.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b44.webp"
                      alt="Dysze silników Raptor"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b45.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b45.webp"
                      alt="Dysze silników Raptor"
                    />
                  </PhotoView>
                </div>
                <p>
                  Sekcja silnikowa gotowa. Przed przyklejeniem jej do boostera
                  wkleiłem jeszcze obciążenie, żeby model stał stabilniej.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b49.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b49.webp"
                      alt="Sekcja silnikowa"
                    />
                  </PhotoView>
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b50.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b50.webp"
                      alt="Sekcja silnikowa"
                    />
                  </PhotoView>
                </div>
                <p>I tak prezentuje się gotowa dolna część boostera.</p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b51.webp">
                    <LazyLoadImage
                      className="report-photo"
                      src="https://www.modelcraft.pl/models/starship_s30/build/thumb/starship_s30-thumb-b51.webp"
                      alt="Gotowa dolna część boostera"
                    />
                  </PhotoView>
                </div>
                <p>
                  Na tym mógłbym już zakończyć budowę, ale zdecydowałem, że
                  dodam od siebie więcej elementów. Wykonałem więc rury z drutu
                  cynowego 1 mm, które biegną wzdłuż boostera po obu stronach (w
                  sumie około 2m długości). Dodałem też wypukłe usztywnienia
                  boostera w formie pasków oraz różnego rodzaju włazy, rury i
                  inne drobne detale.
                </p>
                <p>
                  Tak prezentuje się gotowy model. Aby zdjęcie całego modelu
                  było w większej rozdzielczości, zmontowałem je z kilku ujęć za
                  pomocą programu do składania panoram.
                </p>
                <div className="report-photo-group">
                  <PhotoView src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b58.webp">
                    <LazyLoadImage
                      className="max-h-[80rem]"
                      src="https://www.modelcraft.pl/models/starship_s30/build/full-res/starship_s30-b58.webp"
                      alt="Gotowy model Starship S30"
                    />
                  </PhotoView>
                </div>
              </>
            )}
            <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </article>
        </PhotoProvider>
      )}
    </section>
  );
};

export default StarshipS30Report;
