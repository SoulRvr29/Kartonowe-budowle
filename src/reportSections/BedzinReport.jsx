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
                    Kolejny zamek, tym razem w Będzinie. Model ma trochę
                    nietypową skalę 1:160 - większość budowli tego typu jest
                    raczej w skali 1:150. Na plus w modelu na pewno można
                    zaliczyć dodatkowe części do wykonania wnęk okien i drzwi,
                    co odjęło mi to trochę pracy. Podobają mi się też tekstury
                    ścian - są ładnie wykonane i realistyczne.
                  </p>
                  <p>
                    Z minusów można wymienić rozciągnięte tekstury na murach
                    zewnętrznych. Wolałbym żeby po prostu powtarzał się ten sam
                    wzór. Są też drobne różnice w odcieniach poszczególnych
                    ścian, ale raczej nie powinno się to rzucać w oczy.
                  </p>
                  <p>
                    Podobnie jak w modelu zamku w Oporowie, także i tutaj
                    wykonam wnętrza pomieszczeń i całe oświetlenie. Powiększyłem
                    też podstawę, żeby objęła wszystkie murki dookoła i
                    podwyższyłem ją o 1 cm.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b01.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b01.webp"
                        alt="Bedzin castle"
                      />
                    </PhotoView>
                  </div>
                  <p>Wykonałem kilka pierwszych ścianek.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b04.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b04.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b07.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b07.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b05.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b05.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b06.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b06.webp"
                        alt="Main walls assembled"
                      />
                    </PhotoView>
                  </div>
                  <p>Przykleiłem ścianę od strony dziedzińca.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b02.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b02.webp"
                        alt="Part glued"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b08.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b08.webp"
                        alt="Part glued"
                      />
                    </PhotoView>
                  </div>
                  <p>Następnie zabrałem się za wykonanie wnętrz na parterze.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b09.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b09.webp"
                        alt="Ground floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b10.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b10.webp"
                        alt="Ground floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b11.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b11.webp"
                        alt="Ground floor interiors"
                      />
                    </PhotoView>
                  </div>
                  <p>I za wnętza na pierwszym piętrze.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b12.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b12.webp"
                        alt="First floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b15.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b15.webp"
                        alt="First floor interiors"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b16.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b16.webp"
                        alt="First floor interiors"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wnętrza wykonuję na podstawie zdjęć, jakie udało mi się
                    znaleźć. Niektóre elementy najpierw robię w Photoshopie, a
                    inne po prostu wycinam "na oko". Tak to wygląda w porównaniu
                    z rzeczywistością.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b14.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b14.webp"
                        alt="Interiors based on photos"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b13.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b13.webp"
                        alt="Comparison with reality"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Gabloty które znajdują się na ścianach wycinam ze zdjęć z
                    internetu, następnie prostuję i poprawiam w photoshopie.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b17.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b17.webp"
                        alt="Interiors based on photos"
                      />
                    </PhotoView>
                  </div>
                  <p>Drugie piętro zrobione.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b20.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b20.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b21.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b21.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <p>
                      Wykonałem takie gabloty ze zbrojami wewnątrz. Przeszklenie
                      zrobyłem z przezroczystej folii, którą tylko lekko
                      skleiłem ze sobą na rogach.
                    </p>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b18.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b18.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b19.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b19.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b25.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b25.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b22.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b22.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b23.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b23.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b24.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b24.webp"
                        alt="Second floor progress"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Dokończyłem resztę pięter i klatkę schodową. Całe wnętrze
                    jest już gotowe. Podłączyłem też oświetlenie. Przewody są z
                    cienkiego drutu nawojowego, który łatwo można ukryć w modelu
                    i przeprowadzić nawet pomiędzy warstwami tektury.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b26.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b26.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b30.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b30.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b31.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b31.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b40.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b40.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b28.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b28.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b27.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b27.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b29.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b29.webp"
                        alt="Model update"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak prezentuje się oświetlenie:</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b36.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b36.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b39.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b39.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b35.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b35.webp"
                        alt="Lighting preview"
                      />
                    </PhotoView>

                    <PhotoView src="models/bedzin/build/full-res/bedzin-b38.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b38.webp"
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
                  <p>Tak wygląda ścianka, którą zamknę całość.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b41.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b41.webp"
                        alt="Closing wall"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b48.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b48.webp"
                        alt="Closing wall"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Co do oświetlenia, to tym razem zdecydowałem się na użycie
                    diod smd 3528, które o wiele łatwiej jest mi umieścić w
                    modelu niż zwykłe ledy 3mm jakich wcześniej używałem. Z
                    kolei diody smd 0805 użyję do oświetlenia na wieży i w
                    latarni przed wejściem do zamku.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b33.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b33.webp"
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
                  <p>Tak w rzeczywistości zamek wygląda nocą.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b87.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b87.webp"
                        alt="Model lighting in reality"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b86.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b86.webp"
                        alt="Model lighting in reality"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Nad tym niebieskim oświetleniem jeszcze się zastanawiam, ale
                    prawdopodobnie zrobię je w taki sposób, że umieszczę po dwie
                    diody - niebieską i białą - a potem dodam przełącznik, żeby
                    można było zmieniać kolor z jednego na drugi.
                  </p>
                  <p>Zabudowałem wnętrza i tak teraz prezentuje się całość:</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b49.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b49.webp"
                        alt="Completed interior of the model"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b50.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b50.webp"
                        alt="Completed interior of the model"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Na dziedzińcu nakleiłem nową teksturę, bardziej
                    realistyczną, tak samo na daszku z prawej.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b45.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b45.webp"
                        alt="New courtyard texture"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b46.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b46.webp"
                        alt="New courtyard texture"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b63.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b63.webp"
                        alt="New courtyard texture"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b64.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b64.webp"
                        alt="New courtyard texture"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Z tym pomieszczeniem było trochę problemów, bo nie znalazłem
                    żadnych zdjęć z wnętrza, więc musiałem coś sam wykombinować,
                    ale w sumie i tak przez te dwa małe okienka nie będzie tam
                    wiele widać.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b44.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b44.webp"
                        alt="Interior detail with small windows"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b43.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b43.webp"
                        alt="Interior detail with small windows"
                      />
                    </PhotoView>
                  </div>
                  <p>Murki które będą wokół dziedzińca są już prawie gotowe.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b70.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b70.webp"
                        alt="Courtyard walls progress"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b69.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b69.webp"
                        alt="Courtyard walls progress"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Ławeczki, barierki i inne detale jakie będą na dziedzińcu.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b51.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b51.webp"
                        alt="Courtyard benches and railings"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Te ławeczki zrobiłem z pasków papieru i cienkiego drutu.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b52.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b52.webp"
                        alt="Paper and wire benches"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Te ławeczki wyciąłem ze styroduru, dodałem żłobienia i
                    pomalowałem.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b53.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b53.webp"
                        alt="Styrofoam benches with grooves"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Tak wygląda dziedziniec po przyklejeniu wszystkich detali:
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b54.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b54.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                    <PhotoView src="models\bedzin\build\full-res\bedzin-b59.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b59.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b55.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b55.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b58.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b58.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b54.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b54.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b56.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b56.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b57.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b57.webp"
                        alt="Courtyard after adding details"
                      />
                    </PhotoView>
                  </div>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <p>
                    Podłączyłem elektronikę: włącznik główny, 6 potencjometrów
                    do regulacji, 11 włączników (do każdego z pomieszczeń),
                    przełącznik na niebieskie diody i gniazdo na zasilacz.
                    Podstawę podniosłem o 2cm, żeby zmieścić wszystkie przewody
                    i elementy elektroniczne.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b47.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b47.webp"
                        alt="Wiring and electronics setup"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b67.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b67.webp"
                        alt="Wiring and electronics setup"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b153.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b153.webp"
                        alt="Wiring and electronics setup"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Regulację wykonałem na podstawie tego prostego układu, który
                    powtórzyłem sześć razy na płytce drukowanej - dla każdej
                    sekcji z osobna.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b34.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b34.webp"
                        alt="Electronic circuit board"
                      />
                    </PhotoView>
                  </div>
                  <p>Na dziedzińcu dodałem trochę roślinności:</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b60.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b60.webp"
                        alt="Added vegetation to courtyard"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Następnie zabrałem się za sklejanie wieży zamkowej.
                    Wystające fragmenty muru zrobiłem ze styroduru, a kamyczki
                    po prawej stronie są z korka.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b65.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b65.webp"
                        alt="Castle tower assembly detail"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b61.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b61.webp"
                        alt="Castle tower construction detail"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b62.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b62.webp"
                        alt="Castle tower and cork stones"
                      />
                    </PhotoView>
                  </div>
                  <p>Tak wygląda przód wieży w rzeczywistości.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b66.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b66.webp"
                        alt="Actual front of the tower reference"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Wykonałem górną część wieży i schodki które wkleję w środek.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b80.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b80.webp"
                        alt="Top of the tower and stairs"
                      />
                    </PhotoView>
                  </div>
                  <p>Dorobiłem jeszcze takie detale na jednym z murów.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b68.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b68.webp"
                        alt="Wall detail on the model"
                      />
                    </PhotoView>
                  </div>
                  <p>Następnie złożyłem wszystko w całość.</p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b71.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b71.webp"
                        alt="Assembled model overview"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b72.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b72.webp"
                        alt="Assembled model detail"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b73.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b73.webp"
                        alt="Assembled model close-up"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b78.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b78.webp"
                        alt="Assembled model with tower"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b79.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b79.webp"
                        alt="Assembled model detail"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem jeden z dachów. Dachówki są trójwymiarowe.
                    Przyklejałem je całymi paskami, a przerwy pomiędzy
                    dachówkami natłoczyłem igłą.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b74.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b74.webp"
                        alt="Completed roof with 3D tiles"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Zrobiłem dach baszty, dodałem od siebie komin, którego
                    niestety brakowało w wycinance. Wykonałem też dach nad
                    zejściem do piwnicy i zabudowałem dziedziniec od wewnątrz.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b75.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b75.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b84.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b84.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b76.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b76.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b91.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b91.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b82.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b82.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b77.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b77.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b83.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b83.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b85.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b85.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    {" "}
                    Tak wygląda oświetlenie, na zdjęciach wyszło trochę ciemniej
                    niż w rzeczywistości.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b88.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b88.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b89.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b89.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b90.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b90.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Schodki na dziedziniec i reszta muru gotowe. Droga wokół
                    zamku przyklejona. Mur okazał się za krótki o 1,5mm i trzeba
                    było dokleić pasek, ale po retuszu prawie tego nie widać.
                    Schody niezbyt pasują do podłoża, ale to wszystko i tak
                    będzie przykryte trawnikiem, a samą drogę planuję usypać z
                    ziemi i pomalować. Dodałem też brakujące przejście z baszty
                    na mury.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b95.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b95.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b93.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b93.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b92.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b92.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b96.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b96.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b97.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b97.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b94.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b94.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Droga wokół zamku jest prawie gotowa. Dodam jeszcze tylko
                    kilka krzaczków, ławek i pocieniuję trawę bo na razie
                    jeszcze dosyć sztucznie to wygląda. Trawniki wyciąłem z maty
                    trawiastej.
                  </p>
                  <p>
                    Drogę przyklejałem używając technik pokazanych na tych dwóch
                    poradnikach:{" "}
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=8j-pl2uoWOg&t=47s"
                    >
                      filmik 1
                    </a>
                    ,{" "}
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=rphfWlU_elk"
                    >
                      filmik 2
                    </a>
                    .
                  </p>
                  <p>
                    Po usypaniu ścieżki najpierw nasączyłem wszystko wodą z
                    odrobiną płynu do mycia naczyń, a potem zalałem to matowym
                    klejem Mod Podge rozcieńczonym z wodą w proporcji 1:3.
                    Wcześniej przykleiłem jedną warstwę bezpośrednio na wikol,
                    żeby druga warstwa miała do czego chwycić. Po wyschnięciu
                    pomalowałem drogę na szaro techniką suchego pędzla.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b107.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b107.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b99.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b99.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b98.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b98.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b102.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b102.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b103.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b103.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    Droga wokół zamku ukończona. Krzaczki zrobiłem swoją
                    tradycyjną metodą, czyli najpierw przyklejałem gałązki z{" "}
                    <a
                      target="_blank"
                      href="https://materialy-modelarskie.pl/mech-chrobotek-brazowy"
                    >
                      mchu
                    </a>
                    , a potem na to przyklejałem specjalną posypkę na{" "}
                    <a
                      target="_blank"
                      href="https://materialy-modelarskie.pl/krzaczki-premium-zielen"
                    >
                      krzaczki
                    </a>
                    , którą na koniec pomalowałem z wierzchu żółtą farbą.
                  </p>

                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b100.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b100.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b105.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b105.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b101.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b101.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b104.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b104.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b108.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b108.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b110.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b110.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b107.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b107.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>
                  <p>
                    Ławki są zrobione z pasków kartonu i tektury, a następnie
                    pomalowane. Pojedyncze kamienie są z korka.{" "}
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b109.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b109.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b106.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b106.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>

                  <p>
                    Zrobiłem segment z głównym wejściem na zamek. Dodałem
                    tabliczki oraz cegły ze styroduru. Drzwi zrobiłem po swojemu
                    inaczej niż w wycinance.
                  </p>
                  <div className="report-photo-group">
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b118.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b118.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b113.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b113.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b116.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b116.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b117.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b117.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                    <PhotoView src="models/bedzin/build/full-res/bedzin-b115.webp">
                      <LazyLoadImage
                        className="report-photo"
                        src="models/bedzin/build/thumb/bedzin-thumb-b115.webp"
                        alt="Build progress image"
                      />
                    </PhotoView>
                  </div>

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
