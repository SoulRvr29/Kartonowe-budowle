import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";
import { NavLink } from "react-router-dom";

const OporowReport = () => {
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
                  <p>Witam w mojej pierwszej relacji.</p>
                  <p>
                    Model zamku w Oporowie jest dosyć uproszczony więc postaram
                    się dodać od siebie jak najwięcej detali. Wykonam pełne
                    oświetlenie zarówno na zewnątrz, jak i wewnątrz. Postaram
                    się też zrobić roślinność.
                  </p>
                  <p>
                    Model zacząłem składać już rok wcześniej, ale zaraz
                    wylądował w szafie, bo nie mogłem sobie poradzić ze
                    zrobieniem okien, a dokładniej z ich wnękami.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b12.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b12.webp"
                        alt="Oporow castle"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    W modelu okna są płaskie. Ostatecznie udało mi się je
                    wymodelować w programie google sketchup i rozłożyć w
                    pepakura designer.
                  </p>
                  <p>Tak wygląda gotowa część.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b13.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b13.webp"
                        alt="okna"
                      />
                    </PhotoView>
                  </div>
                  <p>A tak wyglądają gotowe okna.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b14.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b14.webp"
                        alt="okna zrobione"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Oświetlenie zrobię w taki sposób, że podzielę je na trzy
                    części: wewnętrzne, zewnętrzne wokół zamku i oświetlenie na
                    dziedzińcu. Wszystko będzie można osobno włączać i regulować
                    jasność. Z boku znajdzie się osobny włącznik i gniazdo
                    zasilania. Będzie można podłączyć także baterię 9 V, ale
                    przy tylu diodach pewnie szybko się wyczerpie.
                  </p>
                  <p>Podstawa już okablowana.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b01.webp"
                        alt="podstawa okablowana"
                      />
                    </PhotoView>

                    <PhotoView src="models/oporow/budowa/full-res/oporow-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b02.webp"
                        alt="podstawa okablowana 2"
                      />
                    </PhotoView>

                    <PhotoView src="models/oporow/budowa/full-res/oporow-b03.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b03.webp"
                        alt="podstawa okablowana 3"
                      />
                    </PhotoView>
                  </div>
                  <p>Główne ściany są już mniej więcej zrobione.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b16.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b16.webp"
                        alt="ściany 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b09.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b09.webp"
                        alt="ściany 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b08.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b08.webp"
                        alt="ściany 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b15.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b15.webp"
                        alt="ściany 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b10.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b10.webp"
                        alt="ściany 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b11.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b11.webp"
                        alt="ściany 6"
                      />
                    </PhotoView>
                  </div>
                  <p>Podłączyłem diody na dziedzińcu i przy wejściu.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b04.webp"
                        alt="diody 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b05.webp"
                        alt="diody 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b06.webp"
                        alt="diody 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b07.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b07.webp"
                        alt="diody 4"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak dziedziniec będzie wyglądał po przyklejeniu.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b17.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b17.webp"
                        alt="po przyklejeniu"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Uszczelniłem wszystkie ściany kawałkami folii aluminiowej,
                    żeby światło nie przebijało się od wewnątrz i nakleiłem na
                    to tekturę z białym kartonem.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b24.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b24.webp"
                        alt="ściany uszczelnione"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b25.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b25.webp"
                        alt="ściany uszczelnione 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b19.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b19.webp"
                        alt="ściany uszczelnione 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b20.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b20.webp"
                        alt="ściany uszczelnione 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b23.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b23.webp"
                        alt="ściany uszczelnione 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b22.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b22.webp"
                        alt="ściany uszczelnione 6"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Pomyślałem, że skoro wnętrze zamku zrobię oświetlone, to
                    można by dodać tam trochę detali, więc dorobiłem tekstury
                    podłogi.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b21.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b21.webp"
                        alt="tekstury podłogi"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wyciąłem z rzeczywistych zdjęć zamku różnego rodzaju obrazy
                    i wydrukowałem je na papierze fotograficznym, dzięki czemu
                    mimo maleńkich rozmiarów widać na nich szczegóły.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b26.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b26.webp"
                        alt="obrazy wydrukowane 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b27.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b27.webp"
                        alt="obrazy wydrukowane 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Zrobiłem trochę krzeseł oraz innych mebli.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b28.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b28.webp"
                        alt="meble 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b29.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b29.webp"
                        alt="meble 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak wyglądana ten moment całość.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b30.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b30.webp"
                        alt="całość 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b31.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b31.webp"
                        alt="całość 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b32.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b32.webp"
                        alt="całość 3"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Po dodaniu ścianek i kilku innych mebli parter jest już
                    gotowy.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b37.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b37.webp"
                        alt="parter gotowy 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b33.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b33.webp"
                        alt="parter gotowy 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b34.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b34.webp"
                        alt="parter gotowy 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b38.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b38.webp"
                        alt="parter gotowy 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b35.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b35.webp"
                        alt="parter gotowy 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b36.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b36.webp"
                        alt="parter gotowy 6"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem schody na piętro. Nie do końca zgadzają się z
                    rzeczywistością, ale i tak prawie ich nie będzie widać. W
                    ogóle to bardzo ciężko było znaleźć jakiekolwiek zdjęcia z
                    tego pomieszczenia.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b40.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b40.webp"
                        alt="schody na piętro"
                      />
                    </PhotoView>
                  </div>
                  <p>Wkleiłem sufit i podłączyłem diody.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b42.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b42.webp"
                        alt="sufit i diody 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b41.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b41.webp"
                        alt="sufit i diody 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b39.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b39.webp"
                        alt="sufit i diody 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b43.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b43.webp"
                        alt="sufit i diody 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b47.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b47.webp"
                        alt="podłogi piętro 1"
                      />
                    </PhotoView>
                  </div>
                  <p>Na piętrze dodałem podłogi z odpowiednimi teksturami.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b44.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b44.webp"
                        alt="podłogi piętro 2"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem ścianki, które znajdą się na piętrze. Na razie są
                    tylko wstawione na sucho.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b46.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b46.webp"
                        alt="ścianki na sucho 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b45.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b45.webp"
                        alt="ścianki na sucho 2"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wykonałem kolejne meble i przykleiłem jedną ze ścianek na
                    stałe.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b49.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b49.webp"
                        alt="postępy 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b48.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b48.webp"
                        alt="postępy 2"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Jadalnia i salonik zrobione, więc w końcu mogłem przykleić
                    przednią ścianę. Teraz jeszcze została główna sala, przy
                    której będzie sporo roboty oraz sypialnia.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b52.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b52.webp"
                        alt="jadalnia i salonik 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b54.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b54.webp"
                        alt="jadalnia i salonik 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b50.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b50.webp"
                        alt="jadalnia i salonik 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b51.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b51.webp"
                        alt="jadalnia i salonik 4"
                      />
                    </PhotoView>

                    <PhotoView src="models/oporow/budowa/full-res/oporow-b53.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b53.webp"
                        alt="jadalnia i salonik 6"
                      />
                    </PhotoView>
                  </div>
                  <p>Główna sala zrobiona.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b55.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b55.webp"
                        alt="kolejne pomieszczenia 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b59.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b59.webp"
                        alt="kolejne pomieszczenia 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b56.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b56.webp"
                        alt="kolejne pomieszczenia 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b58.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b58.webp"
                        alt="kolejne pomieszczenia 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b57.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b57.webp"
                        alt="kolejne pomieszczenia 5"
                      />
                    </PhotoView>
                  </div>
                </>
              )}
              {currentPage === 2 && (
                <>
                  {" "}
                  <p>Przykleiłem kolejne ściany.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b63.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b63.webp"
                        alt="przykleiłem następne ściany 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b61.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b61.webp"
                        alt="przykleiłem następne ściany 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b64.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b64.webp"
                        alt="przykleiłem następne ściany 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b65.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b65.webp"
                        alt="przykleiłem następne ściany 4"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Oto ostatnie zdjęcia pomieszczeń jeszcze przed zaklejeniem.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b60.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b60.webp"
                        alt="ostatnie zdjęcia pomieszczeń 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b68.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b68.webp"
                        alt="ostatnie zdjęcia pomieszczeń 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b62.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b62.webp"
                        alt="ostatnie zdjęcia pomieszczeń 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b69.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b69.webp"
                        alt="ostatnie zdjęcia pomieszczeń 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b67.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b67.webp"
                        alt="ostatnie zdjęcia pomieszczeń 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b66.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b66.webp"
                        alt="ostatnie zdjęcia pomieszczeń 6"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dokleiłem sufity z podłączonymi do nich diodami. Następnie
                    zabrałem się za dziedziniec i całość na ten moment wygląda
                    tak.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b70.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b70.webp"
                        alt="dziedziniec 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b71.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b71.webp"
                        alt="dziedziniec 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b72.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b72.webp"
                        alt="dziedziniec 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b73.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b73.webp"
                        alt="dziedziniec 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b74.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b74.webp"
                        alt="dziedziniec 5"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    I tu niestety zaczynają wychodzić błędy w opracowaniu. Gdy
                    zabrałem się za robienie krużganków okazało się, że są o
                    wiele wyżej niż w rzeczywistości. W modelu to będzie jakieś
                    5mm. Nie miałem jak tego poprawić bo już na takiej wysokości
                    mam drzwi.
                  </p>
                  <p>Tak to wygląda w porównaniu z rzeczywistością.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b76.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b76.webp"
                        alt="błędy w opracowaniu krużganków"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Z kolei po drugiej stronie, gdzie są dwa małe okienka
                    zasłania je murek.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b77.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b77.webp"
                        alt="małe okienka zasłania murek"
                      />
                    </PhotoView>
                  </div>
                  <p>Dziedziniec na ten moment wygląda tak.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b75.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b75.webp"
                        alt="kilka zdjęć 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b78.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b78.webp"
                        alt="kilka zdjęć 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b79.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b79.webp"
                        alt="kilka zdjęć 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b80.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b80.webp"
                        alt="kilka zdjęć 4"
                      />
                    </PhotoView>
                  </div>
                  <p>Dodałem kolejne niewielkie pomieszczenie.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b81.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b81.webp"
                        alt="nowe pomieszczenie"
                      />
                    </PhotoView>
                  </div>
                  <p>I kolejne mury wokół dziedzińca.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b82.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b82.webp"
                        alt="kolejne mury 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b83.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b83.webp"
                        alt="kolejne mury 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b85.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b85.webp"
                        alt="kolejne mury 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b84.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b84.webp"
                        alt="kolejne mury 4"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Następnie zabrałem się za wykonanie wieży w której znajduje
                    się kaplica.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b88.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b88.webp"
                        alt="wieża z kaplicą 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b87.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b87.webp"
                        alt="wieża z kaplicą 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b89.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b89.webp"
                        alt="wieża z kaplicą 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b88.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b88.webp"
                        alt="wieża z kaplicą 4"
                      />
                    </PhotoView>
                  </div>
                  <p>Zrobiłęm wnętrze kaplicy.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b91.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b91.webp"
                        alt="wnętrze kaplicy"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak wnętrze wygląda w porównaniu z rzeczywistością.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b90.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b90.webp"
                        alt="porównanie z rzeczywistością"
                      />
                    </PhotoView>
                  </div>
                  <p>Ciąg dalszy relacji wkrótce.</p>
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

export default OporowReport;
