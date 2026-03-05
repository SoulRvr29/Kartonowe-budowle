import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WangReport = ({ id }) => {
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
              Model wykonam od podstaw. Początkowo planowałem go zrobić na
              podstawie wycinanki od GPM, ale po dokładniejszym zapoznaniu się,
              stwierdziłem, że zbyt dużo odbiega od oryginału. Przede wszystkim
              świątynia jest tam za szeroka i w wielu miejscach wymiary są
              przekłamane. Gdy szukałem zdjęć w internecie natknąłem się na
              rysunki, których skany w wysokiej rozdzielczości znalazłem na
              stronie Muzeum architektury w Berlinie:{" "}
              <a
                href="https://architekturmuseum.ub.tu-berlin.de/index.php?p=51&SID=15841926317451"
                target="_blank"
                rel="noopener noreferrer"
              >
                architekturmuseum
              </a>
              .
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b01.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b01.webp"
                  alt="Wang temple drawing 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b02.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b02.webp"
                  alt="Wang temple drawing 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b03.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b03.webp"
                  alt="Wang temple drawing 3"
                />
              </PhotoView>
            </div>
            <p>
              Na podstawie tych trzech rysunków i zdjęć z internetu postaram się
              wykonać cały model. Będę wszystko przerysowywał w photoshopie. Tak
              wygląda porównanie podstawy GPM (po lewej) z rysunkiem powyżej:
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b04.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b04.webp"
                alt="GPM base comparison"
              />
            </PhotoView>
            <p>
              Model z GPM przedstawia budowlę w ciemniejszej, starszej wersji,
              ja zrobię ją w wersji jaśniejszej, czyli takiej jak wygląda teraz.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b05.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b05.webp"
                  alt="Wang temple light version 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b06.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b06.webp"
                  alt="Wang temple light version 2"
                />
              </PhotoView>
            </div>
            <p>
              Sporą część modelu postanowiłem wykonać z drewna balsowego, więc
              kupiłem kilka listewek i kołków różnego rodzaju...
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b07.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b07.webp"
                alt="Balsa wood materials"
              />
            </PhotoView>
            <p>... i oto kilka gotowych ścianek:</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b08.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b08.webp"
                  alt="Finished wall 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b12.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b12.webp"
                  alt="Finished wall 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b09.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b09.webp"
                  alt="Finished wall 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b10.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b10.webp"
                  alt="Finished wall 4"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b11.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b11.webp"
                  alt="Finished wall 5"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b13.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b13.webp"
                  alt="Finished wall 6"
                />
              </PhotoView>
            </div>
            <p>
              Żeby wykonać fakturę gontu na ścianach, do kawałka balsy
              doklejałem na obrzeżach wydrukowaną na kartce siatkę, potem
              przykładałem linijkę i nacinałem jedną linię po drugiej. Później
              dociskałem każdy fragment po kolei małym dłutkiem, które
              spiłowałem do odpowiedniego kąta.
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b14.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b14.webp"
                alt="Shingle texture process"
              />
            </PhotoView>
            <p>Następnie odcinałem środek i miałem gotowy taki oto fragment.</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b15.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b15.webp"
                  alt="Fragment finished 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b16.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b16.webp"
                  alt="Fragment finished 2"
                />
              </PhotoView>
            </div>
            <p>
              Narożne kolumny wykonywałem w podobny sposób, tylko wzór musiałem
              już przykleić do całości i nacinać linie od ręki.
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b30.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b30.webp"
                alt="Corner columns"
              />
            </PhotoView>
            <p>
              Całość malowałem dwiema warstwami ochry żółtej, później bardzo
              rozwodnioną umbrą paloną i na koniec wycierałem rozjaśnioną ochrą
              żółtą. Niestety po pomalowaniu wgłębienia trochę odskakują i
              musiałem po wyschnięciu wszystko ponownie docisnąć. Okna są
              wydrukowane na papierze fotograficznym, a parapety są z paska
              papieru, który nasączyłem CA. Tak wygląda całość po przyklejeniu
              do podstawy. Wymiary podstawy to 32/33cm.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b17.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b17.webp"
                  alt="Final assembly 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b20.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b20.webp"
                  alt="Final assembly 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b18.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b18.webp"
                  alt="Final assembly 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b19.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b19.webp"
                  alt="Final assembly 4"
                />
              </PhotoView>
            </div>
            <p>
              Główne wejście do świątyni, jeszcze bez drzwi i wszystkich detali.
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b21.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b21.webp"
                alt="Main entrance"
              />
            </PhotoView>

            <p>Kolejne ścianki w budowie...</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b36.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b36.webp"
                  alt="Walls in construction 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b28.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b28.webp"
                  alt="Walls in construction 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b29.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b29.webp"
                  alt="Walls in construction 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b37.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b37.webp"
                  alt="Walls in construction 4"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b31.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b31.webp"
                  alt="Walls in construction 5"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b32.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b32.webp"
                  alt="Walls in construction 6"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b38.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b38.webp"
                  alt="Walls in construction 7"
                />
              </PhotoView>
            </div>
            <p>
              ... i kolejne ścianki gotowe. Przed doklejeniem do reszty modelu
              wszystko dokładnie usztywniłem tekturą.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b40.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b40.webp"
                  alt="Finished walls 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b39.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b39.webp"
                  alt="Finished walls 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b33.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b33.webp"
                  alt="Finished walls 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b34.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b34.webp"
                  alt="Finished walls 4"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b35.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b35.webp"
                  alt="Finished walls 5"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b46.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b46.webp"
                  alt="Finished walls 6"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b44.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b44.webp"
                  alt="Finished walls 7"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b45.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b45.webp"
                  alt="Finished walls 8"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b43.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b43.webp"
                  alt="Finished walls 9"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b41.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b41.webp"
                  alt="Finished walls 10"
                />
              </PhotoView>
            </div>
            <p>
              Zrobiłem główne wejście do świątyni. Najtrudniejsze było
              wystruganie dwóch lwów po bokach. Nad wejściem będzie jeszcze
              daszek, który dodam w późniejszym etapie.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b22.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b22.webp"
                  alt="Main entrance detail 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b23.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b23.webp"
                  alt="Main entrance detail 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b26.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b26.webp"
                  alt="Main entrance detail 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b24.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b24.webp"
                  alt="Main entrance detail 4"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b27.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b27.webp"
                  alt="Main entrance detail 5"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b25.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b25.webp"
                  alt="Main entrance detail 6"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b48.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b48.webp"
                  alt="Main entrance detail 7"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b47.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b47.webp"
                  alt="Main entrance detail 8"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b42.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b42.webp"
                  alt="Main entrance detail 9"
                />
              </PhotoView>
            </div>
            <p>
              Zabrałem się za sklejanie kolejnych ścianek, tych bardziej
              wysuniętych. Pionowe słupki skleiłem z dwóch kawałów balsy,
              grubszego i cieńszego, a w górnej części wyciąłem żyletką rowek.
              Tak wygląda wszystko luzem:
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b49.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b49.webp"
                alt="Assembly process 1"
              />
            </PhotoView>
            <p>
              Następnie górną część lekko przykleiłem do wydrukowanego szablonu
              i dokleiłem słupki, które dociąłem do odpowiedniej długości i
              dokleiłem u dołu szersze kawałki balsy. Do wszystkiego dokleiłem
              poziomą belkę, podklejoną u dołu paskiem kartonu, żeby była
              bardziej wysunięta.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b50.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b50.webp"
                  alt="Assembly process 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b51.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b51.webp"
                  alt="Assembly process 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b52.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b52.webp"
                  alt="Assembly process 4"
                />
              </PhotoView>
            </div>
            <p>
              Odciąłem całość od szablonu i nakleiłem na tekturę. Pionowych
              desek nie naklejałem z osobna, tylko wytłaczałem rowki igłą. U
              dołu dokleiłem dolne belki.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b53.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b53.webp"
                  alt="Assembly process 5"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b54.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b54.webp"
                  alt="Assembly complete"
                />
              </PhotoView>
            </div>
            <p>
              Następnie pomalowałem wszystko ochrą żółtą, później rozwodnioną
              umbrą paloną i na koniec wycierałem jaśniejszym kolorem.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b55.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b55.webp"
                  alt="Painting process 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b56.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b56.webp"
                  alt="Painting process 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b57.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b57.webp"
                  alt="Painting final"
                />
              </PhotoView>
            </div>
            <p>Dokleiłem okna i parapety.</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b58.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b58.webp"
                  alt="Windows and sills 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b59.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b59.webp"
                  alt="Windows and sills 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b60.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b60.webp"
                  alt="Windows and sills 3"
                />
              </PhotoView>
            </div>
            <p>W ten sam sposób wykonałem kolejne ścianki.</p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b61.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b61.webp"
                alt="More walls"
              />
            </PhotoView>
            <p>
              Zrobiłem kilka narożnych kolumn, każda jest sklejona z trzech
              kawałków balsy.
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b62.webp">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b62.webp"
                alt="Corner columns assembly"
              />
            </PhotoView>
            <p>
              Połączyłem kolumny ze ścianami i przykleiłem wszystko do modelu.
              Miałem trochę problemów ze spasowaniem i niektóre elementy
              musiałem odrywać i ponownie przyklejać. Ścianki z 8 oknami okazały
              się za krótkie o ok. 2mm i musiałem dorobić kawałek. Cofnąłem też
              segment z głównym wejściem o 1,5mm bo za bardzo wystawał.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b63.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b63.webp"
                  alt="Assembly with columns 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b64.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b64.webp"
                  alt="Assembly with columns 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b65.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b65.webp"
                  alt="Assembly with columns 3"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b66.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b66.webp"
                  alt="Assembly with columns 4"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b68.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b68.webp"
                  alt="Assembly with columns 5"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b69.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b69.webp"
                  alt="Assembly with columns 6"
                />
              </PhotoView>
            </div>
            <p>Prawa strona świątyni zrobiona.</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b72.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b72.webp"
                  alt="Right side complete 1"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b70.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b70.webp"
                  alt="Right side complete 2"
                />
              </PhotoView>
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b75.webp">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b75.webp"
                  alt="Right side complete 3"
                />
              </PhotoView>
            </div>
            <p>Dalszy opis budowy wkrótce...</p>
          </article>
        </PhotoProvider>
      )}
    </section>
  );
};

export default WangReport;
