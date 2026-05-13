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
  const totalPages = 3;

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
                    Model zamku w Oporowie z wydawnictwa GPM jest dosyć
                    uproszczony, więc postaram się dodać od siebie jak najwięcej
                    detali. Wykonam pełne oświetlenie zarówno na zewnątrz, jak i
                    wewnątrz. Postaram się też zrobić roślinność.
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
                  <p>Zrobiłem segment z wnętrzem kaplicy.</p>
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
                  <p>
                    Następnie wkleiłem ten segment do reszty zamykając kaplicę.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b92.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b92.webp"
                        alt="Wieża z kaplicą zrobiona 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b93.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b93.webp"
                        alt="Wieża z kaplicą zrobiona 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b97.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b97.webp"
                        alt="Wieża z kaplicą zrobiona 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b102.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b102.webp"
                        alt="Wieża z kaplicą zrobiona 4"
                      />
                    </PhotoView>
                  </div>
                  <p>Dokleiłem kilka poziomych pasków na ścianach zamku.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b96.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b96.webp"
                        alt="Dokleiłem kilka pasków na ścianach zamku"
                      />
                    </PhotoView>
                  </div>
                  <p>I tak samo z drugiej strony.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b100.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b100.webp"
                        alt="Paski po drugiej stronie"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem ostatnie pomieszczenie w zamku. Nie udało mi się
                    znaleźć żadnych jego zdjęć, więc sam wykombinowałem, jak
                    mogłoby to wyglądać.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b95.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b95.webp"
                        alt="Ostatnie pomieszczenie 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b94.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b94.webp"
                        alt="Ostatnie pomieszczenie 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Przy wieży od strony dziedzińca dokleiłem daszek.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b101.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b101.webp"
                        alt="Przy wieży dokleiłem brakujący daszek"
                      />
                    </PhotoView>
                  </div>
                  <p>Na ten moment tak prezentuje się całość.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b99.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b99.webp"
                        alt="Całość wygląda tak 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b98.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b98.webp"
                        alt="Całość wygląda tak 2"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zabrałem się za składanie dachów. W okienkach pod szarym
                    dachem po prawej stronie odpuściłem już robienie oświetlenia
                    i zamalowałem je od wewnątrz na czarno. Reszta okienek
                    będzie podświetlona.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b103.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b103.webp"
                        alt="Składanie dachów 1"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak dach wygląda od środka.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b104.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b104.webp"
                        alt="Dach od środka"
                      />
                    </PhotoView>
                  </div>
                  <p>W środku wkleiłem pasek z diodą.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b105.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b105.webp"
                        alt="Dodałem jeszcze diodę 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b106.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b106.webp"
                        alt="Dodałem jeszcze diodę 2"
                      />
                    </PhotoView>
                  </div>
                  <p>I zakleiłem spód.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b107.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b107.webp"
                        alt="Zakleiłem spód"
                      />
                    </PhotoView>
                  </div>
                  <p>Na krawędziach dachów dokleiłem jeszcze paski.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b108.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b108.webp"
                        alt="Dokleiłem jeszcze kilka pasków 1"
                      />
                    </PhotoView>
                  </div>
                  <p>Przylutowałem przewody do reszty.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b110.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b110.webp"
                        alt="Dolutowałem do reszty"
                      />
                    </PhotoView>
                  </div>
                  <p>I tak prezentuje się gotowy dach.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b111.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b111.webp"
                        alt="no i jest 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b112.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b112.webp"
                        alt="no i jest 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b113.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b113.webp"
                        alt="no i jest 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b116.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b116.webp"
                        alt="no i jest 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b115.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b115.webp"
                        alt="no i jest 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b114.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b114.webp"
                        alt="no i jest 6"
                      />
                    </PhotoView>
                  </div>
                </>
              )}
              {currentPage === 3 && (
                <>
                  <p>
                    Zdecydowałem, że jednak zrobię regulację oświetlenia w inny
                    sposób, bo kręcenie małymi potencjometrami od spodu byłoby
                    niewygodne. Kupiłem duże potencjometry i gałki, a następnie
                    zamontowałem wszystko z przodu. Gałki będą wystawać mniej
                    więcej do połowy, bo całą podstawę obkleję jeszcze dookoła
                    tekturą.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b131.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b131.webp"
                        alt="Regulacja oświetlenia 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b133.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b133.webp"
                        alt="Regulacja oświetlenia 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b132.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b132.webp"
                        alt="Regulacja oświetlenia 3"
                      />
                    </PhotoView>
                  </div>
                  <p>Każdy potencjometr podłączyłem pod ten układ.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b118.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b118.webp"
                        alt="Układ potencjometru"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zmiana potencjometrów niestety zmusiła mnie do rozgrzebania
                    całego spodu modelu, żeby dostać się do kabli. Narobiłem tam
                    już takiego bałaganu, że ledwo dałem radę się w tym połapać.
                    Dodatkowo musiałem wyciąć kolejną dziurę w podstawie, bo
                    jedna z diod na dziedzińcu nie była dobrze przylutowana -
                    raz świeciła, a raz nie - i trzeba było to poprawić.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b119.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b119.webp"
                        alt="Spód z kablami 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b136.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b136.webp"
                        alt="Spód z kablami 2"
                      />
                    </PhotoView>
                  </div>
                  <p>Zrobiłem taki balkon.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b125.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b125.webp"
                        alt="Balkon i detale 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b124.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b124.webp"
                        alt="Balkon i detale 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b127.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b127.webp"
                        alt="Balkon i detale 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b130.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b130.webp"
                        alt="Balkon i detale 4"
                      />
                    </PhotoView>
                  </div>
                  <p>Dodałem rynny.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b129.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b129.webp"
                        alt="Balkon i detale 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b128.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b128.webp"
                        alt="Balkon i detale 6"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b126.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b126.webp"
                        alt="Balkon i detale 7"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b117.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b117.webp"
                        alt="Balkon i detale 8"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Postanowiłem zrobić dwie latarnie stojące przed zamkiem.
                    Kupiłem do nich jak najmniejsze diody – mają około 1 mm na 2
                    mm, licząc z nóżkami. Do każdej latarni dałem po dwie
                    zlutowane ze sobą diody. Klosze wykonałem z przezroczystej
                    folii, a następnie pomalowałem ich krawędzie na czarno
                    markerem.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b122.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b122.webp"
                        alt="Latarnie przed zamkiem 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b121.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b121.webp"
                        alt="Latarnie przed zamkiem 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b120.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b120.webp"
                        alt="Latarnie przed zamkiem 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b134.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b134.webp"
                        alt="Latarnie przed zamkiem 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b135.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b135.webp"
                        alt="Latarnie przed zamkiem 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b123.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b123.webp"
                        alt="Latarnie przed zamkiem 6"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem resztę oświetlenia wokół zamku. W sumie wyszło
                    równo 40 diod led. 17 wewnątrz, 6 na dziedzińcu, 13 wokół
                    zamku i 4 w latarniach.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b138.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b138.webp"
                        alt="Oświetlenie wokół zamku 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b137.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b137.webp"
                        alt="Oświetlenie wokół zamku 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b141.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b141.webp"
                        alt="Oświetlenie wokół zamku 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b139.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b139.webp"
                        alt="Oświetlenie wokół zamku 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b140.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b140.webp"
                        alt="Oświetlenie wokół zamku 5"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dodałem imitację wody w fosie wokół zamku. Nakleiłem
                    trawniki wycięte z maty trawiastej. Przykleiłem dach na
                    wieży, kominy i kilka kolejnych rynien.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b142.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b142.webp"
                        alt="Woda i trawniki 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b144.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b144.webp"
                        alt="Woda i trawniki 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b143.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b143.webp"
                        alt="Woda i trawniki 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b146.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b146.webp"
                        alt="Woda i trawniki 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b145.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b145.webp"
                        alt="Woda i trawniki 5"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wodę robiłem w taki sposób: najpierw pomalowałem dno na
                    ciemny brąz, a potem nakładałem pędzelkiem lekko
                    rozcieńczony klej Wikol, od razu formując fale. Gdy wszystko
                    wyschło, nałożyłem jeszcze jedną warstwę.
                  </p>
                  <p>
                    Nie każdy Wikol się do tego nadaje - ja używałem takiego:
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b147.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b147.webp"
                        alt="Klej Wikol"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem most. Wykonałem go inaczej niż w wycinance,
                    wzorując się na aktualnych zdjęciach.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b156.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b156.webp"
                        alt="Most 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b155.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b155.webp"
                        alt="Most 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b154.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b154.webp"
                        alt="Most 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b153.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b153.webp"
                        alt="Most 4"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b152.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b152.webp"
                        alt="Most 5"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b148.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b148.webp"
                        alt="Most 6"
                      />
                    </PhotoView>
                  </div>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b149.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b149.webp"
                        alt="Most 7"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b151.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b151.webp"
                        alt="Most 8"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b150.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b150.webp"
                        alt="Most 9"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem barierki wokół placu przed zamkiem i dodałem
                    drzewka.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b160.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b160.webp"
                        alt="Barierki i drzewka 1"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b159.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b159.webp"
                        alt="Barierki i drzewka 2"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b157.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b157.webp"
                        alt="Barierki i drzewka 3"
                      />
                    </PhotoView>
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b158.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b158.webp"
                        alt="Barierki i drzewka 4"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Model jest już gotowy. Na koniec dodałem jeszcze kilka
                    krzaczków i pocieniowałem trawę różnymi odcieniami zieleni i
                    brązu.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/oporow/budowa/full-res/oporow-b161.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/oporow/budowa/thumb/oporow-thumb-b161.webp"
                        alt="Barierki i drzewka 1"
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

export default OporowReport;
