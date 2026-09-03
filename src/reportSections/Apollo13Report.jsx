import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";

const Apollo13Report = () => {
  const [reportState, setReportState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  return (
    <section id="relacja">
      <SectionHeader
        sectionName="Relacja z budowy"
        sectionState={reportState}
        setSectionState={setReportState}
      />

      {reportState === true && (
        <div className="pt-2 pb-6 max-lg:py-0 max-lg:-my-2 ">
          <PhotoProvider loadingElement={<div className="loader"></div>}>
            {/* <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            /> */}
            <article>
              {currentPage === 1 && (
                <>
                  <p>
                    Witam w nowej relacji. Model lądownika, który wykonam jest
                    bardzo szczegółowy, zawiera całe wnętrze i wiele drobnych
                    detali. Długo zastanawiałem się, czy w ogóle podjąć się tej
                    budowy, bo skomplikowanie modelu i ilość drobnicy trochę
                    odstrasza. Model postanowiłem powiększyć, przeskalowując go
                    z 1:48 na 1:33. Po powiększeniu całość będzie liczyć około
                    40 stron z częściami.
                  </p>

                  <p>
                    Prawdopodobnie będę musiał zrobić dwie wersje modelu - jedną
                    "gołą", bez obudowy, z widocznymi wszystkimi elementami,
                    oraz drugą wersję z obudową, w której nie będę już robił
                    elementów wewnętrznych. Ze względu na skomplikowany kształt
                    lądownika raczej ciężko byłoby zrobić zdejmowalną obudowę.
                    Gotowy model ma wyglądać tak:
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b14.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b14.webp"
                        alt="gotowy model bez obudowy"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b15.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b15.webp"
                        alt="gotowy model z obudową"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    Arkusze drukuję na drukarce atramentowej Epson L355.
                    Drukarka ma już swoje lata i coraz częściej pojawiają się
                    problemy z przerywaniem czarnego tuszu. Po wielokrotnym
                    czyszczeniu głowicy (musiałem nawet użyć płynu do
                    udrażniania) udało się przywrócić prawidłowe drukowanie. Tak
                    wyglądają pierwsze arkusze:
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b01.webp"
                        alt="pierwszy arkusz"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b02.webp"
                        alt="drugi arkusz"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b03.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b03.webp"
                        alt="zbliżenie na arkusz"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    Skleiłem pierwszą ściankę lądownika. Na jej przykładzie
                    dobrze widać, jak dużo dają te szczegółowe tekstury. Mimo że
                    jest to płaski element z kilkoma naklejonymi pudełkami, już
                    wygląda na dość skomplikowany. Finalnie i tak wiele z tych
                    detali nie będzie widocznych.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b04.webp"
                        alt="sklejona ścianka lądownika - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b05.webp"
                        alt="sklejona ścianka lądownika - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b06.webp"
                        alt="sklejona ścianka lądownika - widok 3"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    Ten element stanowi pierwszą połowę kabiny, którą później
                    połączę z drugą.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b07.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b07.webp"
                        alt="pierwsza połowa kabiny - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b08.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b08.webp"
                        alt="pierwsza połowa kabiny - widok 2"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b09.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b09.webp"
                        alt="pierwsza połowa kabiny - widok 3"
                      />
                    </PhotoView>
                  </div>

                  <p>Przymierzyłem tylną ściankę, na razie na sucho.</p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b10.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b10.webp"
                        alt="tylna ścianka lądownika"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    To urządzenie jest jedną z ważniejszych części lądownika -
                    ECS (Environmental Control System), czyli system
                    podtrzymywania życia, który dostarczał tlen do kabiny,
                    regulował ciśnienie, utrzymywał odpowiednią temperaturę itd.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b11.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b11.webp"
                        alt="ECS - system podtrzymywania życia"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    Kolejne elementy, które znajdą się w tej części kabiny. Ten
                    prostokątny element na środku to przenośny system
                    podtrzymywania życia, który astronauci nosili na plecach
                    podczas pobytu na powierzchni Księżyca. Jeden taki plecak
                    będzie zamocowany na ścianie, a drugi będzie leżał na
                    podłodze.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b12.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b12.webp"
                        alt="elementy kabiny - widok 1"
                      />
                    </PhotoView>
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b16.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b16.webp"
                        alt="elementy kabiny - widok 2"
                      />
                    </PhotoView>
                  </div>

                  <div className="report-photo-group">
                    <PhotoView src="https://www.modelcraft.pl/models/apollo13/build/full-res/apollo13-b13.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="https://www.modelcraft.pl/models/apollo13/build/thumb/apollo13-thumb-b13.webp"
                        alt="elementy kabiny - widok 3"
                      />
                    </PhotoView>
                  </div>
                  <p>Ciąg dalszy relacji wkrótce...</p>
                </>
              )}
            </article>
            {/* <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            /> */}
          </PhotoProvider>
        </div>
      )}
    </section>
  );
};

export default Apollo13Report;
