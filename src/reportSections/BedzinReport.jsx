import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";

const WangReport = () => {
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
                    Kolejny zamek, tym razem w Będzinie. Model ma trochę
                    nietypową skalę 1:160, większość budowli tego typu jest
                    raczej w 1:150. Na plus w modelu to na pewno dodatkowe
                    części na wykonanie wnęk na okna i drzwi, odjęło mi to
                    trochę roboty. Podobają mi się też tekstury ścian, są ładnie
                    wykonane i realistyczne. Z minusów to rozciągnięte tekstury
                    na murach zewnętrznych. Wolałbym żeby po prostu powtarzał
                    się ten sam wzór. Są też drobne różnice w odcieniach
                    poszczególnych ścian, ale raczej nie powinno się to rzucać w
                    oczy. Podobnie jak w modelu zamku w Oporowie z poprzedniej
                    relacji, także i tu zrobię wnętrza pomieszczeń i całe
                    oświetlenie. Powiększyłem sporo podstawę, żeby objęła
                    wszystkie murki dookoła i podwyższyłem ją o 1 cm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b01.webp"
                        alt="Bedzin castle"
                      />
                    </PhotoView>
                  </div>
                  <p>Główne ściany już zrobione...</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b04.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b07.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b07.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b05.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b06.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                  </div>
                  <p>...i tutaj część już przyklejona.</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b02.webp"
                        alt="Part glued"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b08.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b08.webp"
                        alt="Part glued"
                      />
                    </PhotoView>
                  </div>
                  <p>Następnie zabrałem się za wnętrza na parterze...</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b09.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b09.webp"
                        alt="Ground floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b10.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b10.webp"
                        alt="Ground floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b11.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b11.webp"
                        alt="Ground floor interiors"
                      />
                    </PhotoView>
                  </div>
                  <p>...i pierwsze piętro.</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b12.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b12.webp"
                        alt="First floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b15.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b15.webp"
                        alt="First floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b16.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b16.webp"
                        alt="First floor interiors"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wnętrza wykonuję na podstawie zdjęć jakie udało mi się
                    znaleźć. Niektóre elementy najpierw robię w photoshopie, a
                    inne po prostu wycinam na oko. Tak to wygląda w porównaniu z
                    rzeczywistością.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b14.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b14.webp"
                        alt="Interiors based on photos"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b13.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b13.webp"
                        alt="Comparison with reality"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Gabloty które znajdują się na ścianach wycinam ze zdjęć z
                    internetu, potem prostuję i poprawiam w photoshopie.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b17.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b17.webp"
                        alt="Interiors based on photos"
                      />
                    </PhotoView>
                  </div>
                  <p>Drugie piętro zrobione.</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b20.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b20.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b21.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b21.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b18.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b18.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b19.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b19.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b25.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b25.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b22.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b22.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b23.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b23.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b24.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b24.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dokończyłem resztę pięter. Całe wnętrze jest już gotowe.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b26.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b26.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b30.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b30.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b31.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b31.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b40.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b40.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b28.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b28.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b27.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b27.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b29.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b29.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak prezentuje się oświetlenie:</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b36.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b36.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b39.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b39.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b35.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b35.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>

                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b38.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b38.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>
                  </div>
                  <p>Nagrałem krótki filmik:</p>
                  <div className="flex justify-center pb-8">
                    <div className="w-full max-w-4xl px-0">
                      <div className="relative pb-[56.25%]">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/98O2UpxcMB0"
                          title="YouTube video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <p>A tak wygląda ścianka, którą zamknę całość.</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b41.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b41.webp"
                        alt="Closing wall"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b48.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b48.webp"
                        alt="Closing wall"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Co do oświetlenia, to tym razem zdecydowałem się na użycie
                    diod smd 3528, które o wiele łatwiej jest mi umieścić w
                    modelu niż zwykłe ledy 3mm jakie wcześniej używałem. Z kolei
                    diody smd 0805 użyję do oświetlenia na wieży i w latarni
                    przed wejściem do zamku.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b33.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b33.webp"
                        alt="Closing wall"
                      />
                    </PhotoView>
                  </div>
                  <p>Całe oświetlenie podzielę na 6 części:</p>
                  <ol className="list-decimal pl-4 pb-4">
                    <li>Wewnątrz pomieszczeń</li>
                    <li>Na dziedzińcu</li>
                    <li>Na wieży</li>
                    <li>Wokół murów wewnętrznych</li>
                    <li>Wokół murów zewnętrznych</li>
                    <li>W latarni przy wejściu</li>
                  </ol>
                  <p>
                    Jasność każdej części będzie osobno regulowana
                    potencjometrem.
                  </p>
                  <p>Tak wygląda to w rzeczywistości:</p>
                  <div className="report-photo-group">
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b87.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b87.webp"
                        alt="Lighting in reality"
                      />
                    </PhotoView>
                    <PhotoView src="public/models/bedzin/build/full-res/bedzin-b86.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="public/models/bedzin/build/thumb/bedzin-thumb-b86.webp"
                        alt="Lighting in reality"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Nad tym niebieskim oświetleniem jeszcze się zastanawiam, ale
                    prawdopodobnie zrobię je w taki sposób, że będę umieszczał
                    po dwie diody - niebieską i białą i potem dodam jakiś
                    przełącznik żeby można to było przestawiać z jednego na
                    drugie.
                  </p>
                  <p>Ciąg dalszy relacji wkrótce...</p>
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

export default WangReport;
