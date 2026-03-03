import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StarshipS30Report = ({ id }) => {
  const [reportState, setReportState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/atlasV/atlasV-photo1.webp"];
  const photosTitle = ["Start rakiety Atlas V"];
  /////////////////////////////////////////////////////////////////
  return (
    <section id="relacja">
      <SectionHeader
        sectionName="Relacja z budowy"
        sectionState={reportState}
        setSectionState={setReportState}
      />

      {reportState === true && (
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
              Sklejanie zacząłem od noska Starshipa. Poszczególne segmenty
              najlepiej łączyć ze sobą, patrząc na linie z przodu noska, bo gdy
              sklejałem je równo z łączeniami, wychodziły przesunięcia. Niektóre
              paski musiałem skrócić o 1 mm. Ogólnie modele z tej strony nie są
              idealnie spasowane i trzeba brać pod uwagę to, że nieraz coś
              będzie do poprawy.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d02.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d02.webp"
                  alt="Start rakiety Atlas V."
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d03.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d03.webp"
                  alt="Start rakiety Atlas V."
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d11.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d11.webp"
                  alt="Start rakiety Atlas V."
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <p>
              Tak wygląda wnętrze noska Starshipa z dodatkowymi zbiornikami na
              paliwo (środek) oraz zbiornikami COPV (czarne zbiorniki po
              bokach). Można by się pokusić o wycięcie otworów w kratownicach,
              ale zdecydowałem, że we wnętrzu rakiety, którego i tak normalnie
              nie widać, nie będę dodawał detali. Kratownice też średnio do
              siebie pasują i musiałem je w kilku miejscach wyginać i dociskać.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d06.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d06.webp"
                  alt="Wnętrze Starshipa"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d05.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d05.webp"
                  alt="Wnętrze Starshipa"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d10.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d10.webp"
                  alt="Wnętrze Starshipa"
                />
              </PhotoView>
            </div>
            <p>
              Dolną sekcję Starshipa usztywniłem grubszym kartonem i wkleiłem w
              środek kilka krążków z tektury 1,5 mm. Od góry wkleiłem kopułę
              głównego zbiornika, a od dołu podstawę pod silniki.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d04.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d04.webp"
                  alt="Dolna sekcja Starshipa"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d08.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d08.webp"
                  alt="Dolna sekcja Starshipa"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d09.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d09.webp"
                  alt="Dolna sekcja Starshipa"
                />
              </PhotoView>
            </div>
            <p>
              Obie sekcje Starshipa będą połączone magnesami wklejonymi w
              pierścienie na końcach. Użyłem do tego magnesów 4 mm na 1,5 mm.
              Początkowo chciałem dać po cztery magnesy, ale dla pewności
              dodałem jeszcze po dwa kolejne po bokach.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d07.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d07.webp"
                  alt="Magnesy"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d14.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d14.webp"
                  alt="Magnesy"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d15.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d15.webp"
                  alt="Magnesy"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d25.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d25.webp"
                  alt="Magnesy"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d26.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d26.webp"
                  alt="Magnesy"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d27.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d27.webp"
                  alt="Magnesy"
                />
              </PhotoView>
            </div>
            <p>Na nosku rakiety dodałem od siebie kilka drobnych detali.</p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d28.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d28.webp"
                  alt="Detale noska"
                />
              </PhotoView>
            </div>
            <p>
              Następnie wkleiłem sześć silników Raptor. Niestety dopiero wtedy
              zauważyłem, że ta podstawa pod nie powinna być wklejona płycej, bo
              wewnętrzna oklejka była dłuższa dla druku 3d, w którym można było
              wydrukować i wkleić całą podstawę z silnikami. Więc musiałem
              wkleić tę podstawę ponownie, a jako że miałem już przyklejone
              elementy na ściankach to podstawę rozciąłem na trzy części i tak
              po kawałku wklejałem.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d12.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d12.webp"
                  alt="Silniki Raptor"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d23.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d23.webp"
                  alt="Silniki Raptor"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d24.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d24.webp"
                  alt="Silniki Raptor"
                />
              </PhotoView>
            </div>
            <p>
              We wnętrzu Starshipa są ruchome drzwi ładowni. Można je podnosić i
              opuszczać, przykładając do nich magnes. Wewnętrzny otwór na drzwi
              był za szeroki o jakieś 5 mm, więc musiałem tę część poprawić i
              ponownie wydrukować.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d42.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d42.webp"
                  alt="Drzwi ładowni"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d43.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d43.webp"
                  alt="Drzwi ładowni"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d41.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d41.webp"
                  alt="Drzwi ładowni"
                />
              </PhotoView>
            </div>
            <p>
              Następnie skleiłem górne i dolne skrzydełka (flapy), które będą
              ruchome. Zamocowałem je na prostym zawiasie - jedna rurka jest
              wsunięta w drugą.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d13.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d13.webp"
                  alt="Skrzydełka"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d52.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d52.webp"
                  alt="Skrzydełka"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d53.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d53.webp"
                  alt="Skrzydełka"
                />
              </PhotoView>
            </div>
            <p>
              Górne skrzydełka musiałem wklejać trochę 'na oko', bo nie ma
              dokładnych oznaczeń, w którym miejscu mają się znajdować.
              Przesunięcia w grafice między poszczególnymi segmentami też nie
              ułatwiają sprawy.
            </p>
            <div className="flex max-sm:justify-center -ml-2 flex-wrap">
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d54.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d54.webp"
                  alt="Górne skrzydełka"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/starship_s30/full-res/starship_s30-d55.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/starship_s30/thumb/starship_s30-thumb-d55.webp"
                  alt="Górne skrzydełka"
                />
              </PhotoView>
            </div>
            <p>Dalsza część relacji wkrótce...</p>
          </article>
        </PhotoProvider>
      )}
    </section>
  );
};

export default StarshipS30Report;
