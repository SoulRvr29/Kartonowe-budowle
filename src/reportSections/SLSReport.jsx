import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SLSReport = () => {
  const [reportState, setReportState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );
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
            <p>
              W kolejnej relacji, przedstawiam kolejny model rakiety. Tym razem
              jest to rakieta SLS od NASA. Model przeskalowałem z 1:96 na 1:100
              by pasował do reszty rakiet. Budowę zacząłem od dolnej części
              pierwszego stopnia.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b01.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b01.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b02.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b02.webp"
                  alt="SLS"
                />
              </PhotoView>
            </div>
            <p>
              Dysze głównych silników są bardzo uproszczone i jak by je nie
              spasować to wychodzą przesunięcia w grafice. Postanowiłem więc, że
              wykonam wypukłe rury na dyszach z cyny 1mm i cienkiego drutu. Po
              naklejeniu zamalowałem przestrzenie pomiędzy nimi.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b04.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b04.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b05.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b05.webp"
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
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b07.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b07.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b06.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b06.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b08.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b08.webp"
                  alt="SLS"
                />
              </PhotoView>
            </div>
            <p>
              Następnie skleiłem resztę pierwszego stopnia i dwa boczne
              boostery. Środek usztywniłem kartonem i tekturą 1,5 mm.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b10.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b10.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b09.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b09.webp"
                  alt="SLS"
                />
              </PhotoView>
            </div>
            <p>
              W dolnej części boosterów miałem problem ze sklejeniem tego
              zaokrąglenia wokół dyszy silnika. Składa się ono z 24 pasków,
              które trzeba zawinąć i pojedynczo wklejać. Podchodziłem do tego
              kilka razy i zawsze wychodzą około 0,5 mm szpary od zewnętrznej
              strony. Próbowałem trochę zmienić kształt tych pasków, ale wtedy
              nie udawało mi się ich zmieścić, więc już tak zostanie. Szpary
              wypełniłem wikolem i zamalowałem.
            </p>

            <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b03.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b03.webp"
                alt="SLS"
              />
            </PhotoView>

            <p>Dokleiłem resztę detali.</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b15.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b15.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b16.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b16.webp"
                  alt="SLS"
                />
              </PhotoView>
            </div>
            <p>
              Wzdłuż pierwszego stopnia biegną dwie długie rury. Podzieliłem je
              na mniejsze kawałki, żeby można było je łatwo zawinąć. Łączenia
              poszczególnych fragmentów zakrywają paski.
            </p>

            <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b11.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b11.webp"
                alt="SLS"
              />
            </PhotoView>

            <p>
              Górne zakończenie rur nie wyglądało zbyt dobrze po sklejeniu, więc
              poprawiłem trochę jego kształt i całość wyszlifowałem i
              pomalowałem.
            </p>

            <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b12.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b12.webp"
                alt="SLS"
              />
            </PhotoView>

            <p>
              Dolne końce rur w projekcie miały być zakończone na płasko, ale
              postanowiłem to poprawić i dodałem zaokrąglenie. Wykonałem je z
              dwóch kawałków zwiniętej ciasno rurki, sklejonych ze sobą pod
              kontem 90 stopni. Następnie element ściąłem na zagięciu i
              wyszlifowałem do gładkiego zaokrąglenia.
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b13.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b13.webp"
                alt="SLS"
              />
            </PhotoView>
            <p>
              Pod rurami dorobiłem trójwymiarowe podpory. Zrobiłem też wypukłą
              osłonę przewodów która biegnie obok rury, a w projekcie była
              płaska.
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b14.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b14.webp"
                alt="SLS"
              />
            </PhotoView>
            <p>
              Podobnie jak w moich poprzednich modelach rakiet, tak i tutaj
              wykorzystam magnesy. Boostery będą przyczepione do pierwszego
              stopnia w dwóch miejscach na dole magnesami 3mm oraz na górze
              magnesem 4mm.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b17.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b17.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b18.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b18.webp"
                  alt="SLS"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/sls/full-res/sls-b19.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/sls/thumb/sls-thumb-b19.webp"
                  alt="SLS"
                />
              </PhotoView>
            </div>
            <p>Dalszy ciąg relacji wkrótce...</p>
          </article>
        </PhotoProvider>
      )}
    </section>
  );
};

export default SLSReport;
