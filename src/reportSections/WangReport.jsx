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
              <PhotoView src="https://i.postimg.cc/yNVv2xJ6/0002.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/yNVv2xJ6/0002.jpg"
                  alt="Wang temple drawing 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/rwGfhxwY/0001.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/rwGfhxwY/0001.jpg"
                  alt="Wang temple drawing 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/YSbb77g6/0000.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/YSbb77g6/0000.jpg"
                  alt="Wang temple drawing 3"
                />
              </PhotoView>
            </div>
            <p>
              Na podstawie tych trzech rysunków i zdjęć z internetu postaram się
              wykonać cały model. Będę wszystko przerysowywał w photoshopie. Tak
              wygląda porównanie podstawy GPM (po lewej) z rysunkiem powyżej:
            </p>
            <PhotoView src="https://i.postimg.cc/qvpwk653/000.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/qvpwk653/000.jpg"
                alt="GPM base comparison"
              />
            </PhotoView>
            <p>
              Model z GPM przedstawia budowlę w ciemniejszej, starszej wersji,
              ja zrobię ją w wersji jaśniejszej, czyli takiej jak wygląda teraz.
            </p>
            <PhotoView src="https://i.postimg.cc/xC8LXKvX/Vu6-DOCn7a5ajsyv-Js-X.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/xC8LXKvX/Vu6-DOCn7a5ajsyv-Js-X.jpg"
                alt="Wang temple light version 1"
              />
            </PhotoView>
            <PhotoView src="https://i.postimg.cc/s2wpfnhF/141-145389538118.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/s2wpfnhF/141-145389538118.jpg"
                alt="Wang temple light version 2"
              />
            </PhotoView>
            <p>
              Sporą część modelu postanowiłem wykonać z drewna balsowego, więc
              kupiłem kilka listewek i kołków różnego rodzaju...
            </p>
            <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b04.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b04.jpg"
                alt="Balsa wood materials"
              />
            </PhotoView>
            <p>... i oto kilka gotowych ścianek:</p>
            <div className="report-photo-group">
              <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b01.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b01.jpg"
                  alt="Finished wall 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/tCpLCqY8/SS853255.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/tCpLCqY8/SS853255.jpg"
                  alt="Finished wall 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/x1xr4wjh/SS853189.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/x1xr4wjh/SS853189.jpg"
                  alt="Finished wall 3"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/jSKdTYbj/SS853213.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/jSKdTYbj/SS853213.jpg"
                  alt="Finished wall 4"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/gcZY62cJ/SS853184.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/gcZY62cJ/SS853184.jpg"
                  alt="Finished wall 5"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/50Hfgxws/SS853209.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/50Hfgxws/SS853209.jpg"
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
            <PhotoView src="https://i.postimg.cc/66nXpbz4/SS853279.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/66nXpbz4/SS853279.jpg"
                alt="Shingle texture process"
              />
            </PhotoView>
            <p>Następnie odcinałem środek i miałem gotowy taki oto fragment.</p>
            <div className="report-photo-group">
              <PhotoView src="https://i.postimg.cc/V67vbpfw/SS853286.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/V67vbpfw/SS853286.jpg"
                  alt="Fragment finished 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/1Xk9GZbk/SS853293.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/1Xk9GZbk/SS853293.jpg"
                  alt="Fragment finished 2"
                />
              </PhotoView>
            </div>
            <p>
              Narożne kolumny wykonywałem w podobny sposób, tylko wzór musiałem
              już przykleić do całości i nacinać linie od ręki.
            </p>
            <PhotoView src="https://i.postimg.cc/kXHFYw3w/SS853365.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/kXHFYw3w/SS853365.jpg"
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
              <PhotoView src="https://i.postimg.cc/Nj0Smd84/SS853335.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/Nj0Smd84/SS853335.jpg"
                  alt="Final assembly 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/ZnF2FgDf/SS853356.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/ZnF2FgDf/SS853356.jpg"
                  alt="Final assembly 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/RVd2Wkth/SS853351.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/RVd2Wkth/SS853351.jpg"
                  alt="Final assembly 3"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/XJ5TXXK6/SS853346.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/XJ5TXXK6/SS853346.jpg"
                  alt="Final assembly 4"
                />
              </PhotoView>
            </div>
            <p>
              Główne wejście do świątyni, jeszcze bez drzwi i wszystkich detali.
            </p>
            <PhotoView src="https://i.postimg.cc/zXkYnLsJ/5646.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/zXkYnLsJ/5646.jpg"
                alt="Main entrance"
              />
            </PhotoView>

            <p>Kolejne ścianki w budowie...</p>
            <div className="report-photo-group">
              <PhotoView src="https://i.postimg.cc/VLjh98j1/SS853319.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/VLjh98j1/SS853319.jpg"
                  alt="Walls in construction 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/FstqJRkD/SS853340.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/FstqJRkD/SS853340.jpg"
                  alt="Walls in construction 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/4dLjFHy7/SS853351.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/4dLjFHy7/SS853351.jpg"
                  alt="Walls in construction 3"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/9fB6ZnjB/SS853353.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/9fB6ZnjB/SS853353.jpg"
                  alt="Walls in construction 4"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/RFLpLc8v/SS853362.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/RFLpLc8v/SS853362.jpg"
                  alt="Walls in construction 5"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/N0YhywZM/SS853369.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/N0YhywZM/SS853369.jpg"
                  alt="Walls in construction 6"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/3RJPBF8Q/SS853376.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/3RJPBF8Q/SS853376.jpg"
                  alt="Walls in construction 7"
                />
              </PhotoView>
            </div>
            <p>
              ... i kolejne ścianki gotowe. Przed doklejeniem do reszty modelu
              wszystko dokładnie usztywniłem tekturą.
            </p>
            <div className="report-photo-group">
              <PhotoView src="https://i.postimg.cc/yxLMGVXd/SS853411.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/yxLMGVXd/SS853411.jpg"
                  alt="Finished walls 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/RCGxhR5B/SS853408.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/RCGxhR5B/SS853408.jpg"
                  alt="Finished walls 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/sDXdhhsZ/SS853390.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/sDXdhhsZ/SS853390.jpg"
                  alt="Finished walls 3"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/mgzvdWcL/SS853386.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/mgzvdWcL/SS853386.jpg"
                  alt="Finished walls 4"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/BQVWcnn7/SS853387.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/BQVWcnn7/SS853387.jpg"
                  alt="Finished walls 5"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/nzZNcs3r/SS853448.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/nzZNcs3r/SS853448.jpg"
                  alt="Finished walls 6"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/mr70s3NK/SS853442.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/mr70s3NK/SS853442.jpg"
                  alt="Finished walls 7"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/g2CfQtRv/SS853444.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/g2CfQtRv/SS853444.jpg"
                  alt="Finished walls 8"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/qRLStkFL/SS853423.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/qRLStkFL/SS853423.jpg"
                  alt="Finished walls 9"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/Wz1KgBLP/SS853425.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/Wz1KgBLP/SS853425.jpg"
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
              <PhotoView src="https://i.postimg.cc/jjZqr5wb/2520.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/jjZqr5wb/2520.jpg"
                  alt="Main entrance detail 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/gc5JJnMc/16530609302_727bf16433_o.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/gc5JJnMc/16530609302_727bf16433_o.jpg"
                  alt="Main entrance detail 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/NfSrWNh4/SS853421.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/NfSrWNh4/SS853421.jpg"
                  alt="Main entrance detail 3"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/J4Gk6fF0/SS853381.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/J4Gk6fF0/SS853381.jpg"
                  alt="Main entrance detail 4"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/L8PZRz2M/SS853400.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/L8PZRz2M/SS853400.jpg"
                  alt="Main entrance detail 5"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/bvjSvswS/SS853410.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/bvjSvswS/SS853410.jpg"
                  alt="Main entrance detail 6"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/0j3b1N4Q/SS853475.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/0j3b1N4Q/SS853475.jpg"
                  alt="Main entrance detail 7"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/FKgdkNYW/SS853474.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/FKgdkNYW/SS853474.jpg"
                  alt="Main entrance detail 8"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/sf0Bhn2r/SS853468.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/sf0Bhn2r/SS853468.jpg"
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
            <PhotoView src="https://i.postimg.cc/Z5snDHyx/SS853485.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/Z5snDHyx/SS853485.jpg"
                alt="Assembly process 1"
              />
            </PhotoView>
            <p>
              Następnie górną część lekko przykleiłem do wydrukowanego szablonu
              i dokleiłem słupki...
            </p>
            <PhotoView src="https://i.postimg.cc/1twzXZ7v/SS853491.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/1twzXZ7v/SS853491.jpg"
                alt="Assembly process 2"
              />
            </PhotoView>
            <p>
              ... które dociąłem do odpowiedniej długości i dokleiłem u dołu
              szersze kawałki balsy.
            </p>
            <PhotoView src="https://i.postimg.cc/3wPR3w1y/SS853504.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/3wPR3w1y/SS853504.jpg"
                alt="Assembly process 3"
              />
            </PhotoView>
            <p>
              Do wszystkiego dokleiłem poziomą belkę, podklejoną u dołu paskiem
              kartonu, żeby była bardziej wysunięta.
            </p>
            <PhotoView src="https://i.postimg.cc/NG8MwBHM/SS853508.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/NG8MwBHM/SS853508.jpg"
                alt="Assembly process 4"
              />
            </PhotoView>
            <p>
              Odciąłem całość od szablonu i nakleiłem na tekturę. Pionowych
              desek nie naklejałem z osobna, tylko wytłaczałem rowki igłą.
            </p>
            <PhotoView src="https://i.postimg.cc/4x0413r8/SS853513.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/4x0413r8/SS853513.jpg"
                alt="Assembly process 5"
              />
            </PhotoView>
            <p>Dokleiłem dolne belki i tak wygląda całość:</p>
            <PhotoView src="https://i.postimg.cc/HspLYRwt/SS853520.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/HspLYRwt/SS853520.jpg"
                alt="Assembly complete"
              />
            </PhotoView>
            <p>Następnie pomalowałem wszystko ochrą żółtą...</p>
            <PhotoView src="https://i.postimg.cc/D0cyQPTs/SS853532.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/D0cyQPTs/SS853532.jpg"
                alt="Painting process 1"
              />
            </PhotoView>
            <p>...później rozwodnioną umbrą paloną...</p>
            <PhotoView src="https://i.postimg.cc/Hnmk7Pfd/SS853537.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/Hnmk7Pfd/SS853537.jpg"
                alt="Painting process 2"
              />
            </PhotoView>
            <p>... i na koniec wycierałem jaśniejszym kolorem.</p>
            <PhotoView src="https://i.postimg.cc/5Nn26gpW/SS853547.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/5Nn26gpW/SS853547.jpg"
                alt="Painting final"
              />
            </PhotoView>
            <p>Dokleiłem okna i parapety.</p>
            <div className="report-photo-group">
              <PhotoView src="https://i.postimg.cc/ZRtT1MYp/SS853702.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/ZRtT1MYp/SS853702.jpg"
                  alt="Windows and sills 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/HsZTpxsp/SS853693.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/HsZTpxsp/SS853693.jpg"
                  alt="Windows and sills 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/fLcwZfkF/SS853699.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/fLcwZfkF/SS853699.jpg"
                  alt="Windows and sills 3"
                />
              </PhotoView>
            </div>
            <p>W ten sam sposób wykonałem kolejne ścianki.</p>
            <PhotoView src="https://i.postimg.cc/T1TTP5DP/SS853687.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/T1TTP5DP/SS853687.jpg"
                alt="More walls"
              />
            </PhotoView>
            <p>
              Zrobiłem kilka narożnych kolumn, każda jest sklejona z trzech
              kawałków balsy.
            </p>
            <PhotoView src="https://i.postimg.cc/HWtphzq8/SS853711.jpg">
              <LazyLoadImage
                className="report-photo"
                src="https://i.postimg.cc/HWtphzq8/SS853711.jpg"
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
              <PhotoView src="https://i.postimg.cc/L5h8bHb8/SS853773.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/L5h8bHb8/SS853773.jpg"
                  alt="Assembly with columns 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/DfYZbXSJ/SS853775.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/DfYZbXSJ/SS853775.jpg"
                  alt="Assembly with columns 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/x1LT7ptM/SS853787.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/x1LT7ptM/SS853787.jpg"
                  alt="Assembly with columns 3"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/zXbfwGhd/SS853794.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/zXbfwGhd/SS853794.jpg"
                  alt="Assembly with columns 4"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/cCjLqVpM/SS853818.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/cCjLqVpM/SS853818.jpg"
                  alt="Assembly with columns 5"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/rmwVDVcN/SS853825.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/rmwVDVcN/SS853825.jpg"
                  alt="Assembly with columns 6"
                />
              </PhotoView>
            </div>
            <p>Prawa strona świątyni zrobiona.</p>
            <div className="report-photo-group">
              <PhotoView src="https://i.postimg.cc/Pxb6b9Md/SS853887.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/Pxb6b9Md/SS853887.jpg"
                  alt="Right side complete 1"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/65pHRH4N/SS853880.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/65pHRH4N/SS853880.jpg"
                  alt="Right side complete 2"
                />
              </PhotoView>
              <PhotoView src="https://i.postimg.cc/2jFh3bpg/SS853890_copy.jpg">
                <LazyLoadImage
                  className="report-photo"
                  src="https://i.postimg.cc/2jFh3bpg/SS853890_copy.jpg"
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
