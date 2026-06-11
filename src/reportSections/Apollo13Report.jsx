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
                    W kolejnej relacji, przedstawiam model lądownika
                    księżycowego LM-7 Aquarius. Model ma bardzo dużo drobnych
                    elementów więc przeskalowałem go z 1:48 na 1:33.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/apollo13/build/full-res/apollo13-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/apollo13/build/thumb/apollo13-thumb-b01.webp"
                        alt="Apollo 13"
                      />
                    </PhotoView>
                    <PhotoView src="models/apollo13/build/full-res/apollo13-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/apollo13/build/thumb/apollo13-thumb-b02.webp"
                        alt="Apollo 13"
                      />
                    </PhotoView>
                    <PhotoView src="models/apollo13/build/full-res/apollo13-b03.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/apollo13/build/thumb/apollo13-thumb-b03.webp"
                        alt="Apollo 13"
                      />
                    </PhotoView>
                  </div>
                  <p>Pierwsze elementy modelu są gotowe.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/apollo13/build/full-res/apollo13-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/apollo13/build/thumb/apollo13-thumb-b04.webp"
                        alt="Apollo 13"
                      />
                    </PhotoView>
                    <PhotoView src="models/apollo13/build/full-res/apollo13-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/apollo13/build/thumb/apollo13-thumb-b05.webp"
                        alt="Apollo 13"
                      />
                    </PhotoView>
                    <PhotoView src="models/apollo13/build/full-res/apollo13-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/apollo13/build/thumb/apollo13-thumb-b06.webp"
                        alt="Apollo 13"
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

export default Apollo13Report;
