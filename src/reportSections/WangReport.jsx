import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaginationNav from "../components/PaginationNav";

const articleContent = [
  <>
    <p>
      Model wykonam od podstaw. Początkowo planowałem zrobić go na podstawie
      wycinanki od GPM, ale po dokładniejszym zapoznaniu się z nią stwierdziłem,
      że zbyt mocno odbiega ona od oryginału. Przede wszystkim świątynia jest
      tam za szeroka, a w wielu miejscach wymiary są przekłamane. Gdy szukałem
      zdjęć w internecie, natknąłem się na rysunki, których skany w wysokiej
      rozdzielczości znalazłem na stronie Muzeum Architektury w Berlinie:{" "}
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
      Na podstawie tych trzech rysunków i zdjęć z internetu, postaram się
      wykonać cały model. Będę wszystko przerysowywał w photoshopie. Tak wygląda
      porównanie podstawy GPM (po lewej) z rysunkiem na stronie muzeum.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b04.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b04.webp"
        alt="GPM base comparison"
      />
    </PhotoView>
    <p>
      Model z GPM przedstawia budowlę w ciemniejszej, wcześniejszej wersji, a ja
      wykonam ją w wersji jaśniejszej, aktualnej.
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
      Sporą część modelu postanowiłem wykonać z drewna balsowego, więc kupiłem
      kilka listewek i kołków różnego rodzaju.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b07.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b07.webp"
        alt="Balsa wood materials"
      />
    </PhotoView>
    <p>Oto kilka gotowych ścianek:</p>
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
      Żeby wykonać fakturę gontu na ścianach, do kawałka balsy doklejałem na
      obrzeżach wydrukowaną na kartce siatkę, potem przykładałem linijkę i
      nacinałem jedną linię po drugiej. Później dociskałem każdy fragment po
      kolei małym dłutkiem, spiłowanym do odpowiedniego kąta.
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
      przykleić do całości i nacinać linie od ręki.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b30.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b30.webp"
        alt="Corner columns"
      />
    </PhotoView>
    <p>
      Ściany malowałem dwiema warstwami ochry żółtej, później bardzo rozwodnioną
      umbrą paloną i na koniec wycierałem rozjaśnioną ochrą żółtą. Niestety po
      pomalowaniu wgłębienia trochę odskakują i musiałem po wyschnięciu niekture
      miejsca ponownie docisnąć. Okna są wydrukowane na papierze fotograficznym,
      a parapety są z paska papieru, który nasączyłem CA. Tak wygląda całość po
      przyklejeniu do podstawy. Wymiary podstawy to 32/33cm.
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
      Oto główne wejście do świątyni, jeszcze bez drzwi i wszystkich detali.
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
      ... i gotowe. Przed doklejeniem do reszty modelu wszystko dokładnie
      usztywniłem tekturą.
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
      Zrobiłem główne wejście do świątyni. Najtrudniejsze było wystruganie dwóch
      lwów po bokach. Nad wejściem będzie jeszcze daszek, który dodam w
      późniejszym etapie.
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
  </>,
  <>
    <p>
      Zabrałem się za sklejanie kolejnych ścianek, tych bardziej wysuniętych.
      Pionowe słupki skleiłem z dwóch kawałów balsy, grubszego i cieńszego, a w
      górnej części słupków wyciąłem żyletką rowek.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b49.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b49.webp"
        alt="Assembly process 1"
      />
    </PhotoView>
    <p>
      Następnie górną część lekko przykleiłem do wydrukowanego szablonu i
      dokleiłem słupki, które dociąłem do odpowiedniej długości i dokleiłem u
      dołu szersze kawałki balsy. Do wszystkiego dokleiłem poziomą belkę,
      podklejoną u dołu paskiem kartonu, żeby była bardziej wystająca.
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
      Odciąłem całość od szablonu i nakleiłem na tekturę. Pionowych desek nie
      naklejałem z osobna, tylko wytłaczałem rowki igłą. U dołu dokleiłem dolne
      belki.
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
      Następnie pomalowałem wszystko ochrą żółtą, później rozwodnioną umbrą
      paloną i na koniec przecierałem jaśniejszym kolorem.
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
      Zrobiłem kilka narożnych kolumn, każda jest sklejona z trzech kawałków
      odpowiednio uformowanej balsy.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b62.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b62.webp"
        alt="Corner columns assembly"
      />
    </PhotoView>
    <p>
      Połączyłem kolumny ze ścianami i przykleiłem wszystko do modelu. Miałem
      trochę problemów ze spasowaniem i niektóre elementy musiałem odrywać i
      ponownie przyklejać. Ścianki z 8 oknami okazały się za krótkie o ok. 2mm i
      musiałem dorobić kawałek. Cofnąłem też segment z głównym wejściem o 1,5mm
      bo za bardzo wystawał.
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
    <p>Zrobiłem prawą stronę świątyni.</p>
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
    </div>
    <p>
      Tak wygląda boczne wejście do świątyni w porównaniu z rzeczywistym
      wyglądem.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b75.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b75.webp"
        alt="Right side complete 3"
      />
    </PhotoView>
    <p>
      Skleiłem absydę - półokrągłe pomieszczenie z tyłu świątyni. Deski
      wykonałem z jednego paska balsy który ponacinałem. Zauważyłem na
      zdjęciach, że deski są trochę wklęsłe, więc spiłowałem środek każdej deski
      papierem ściernym.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b79.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b79.webp"
          alt="Apse assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b78.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b78.webp"
          alt="Apse assembly 2"
        />
      </PhotoView>
    </div>
    <p>
      Górną część z wyciętymi łukami wykonałem na podstawie starych fotografii,
      aktualnie chyba już tego nie ma, ciężko stwierdzić bo to miejsce
      przysłaniają rynny.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b76.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b76.webp"
          alt="Apse detail 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b77.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b77.webp"
          alt="Apse detail 2"
        />
      </PhotoView>
    </div>
    <p>Wykonałem resztę ścianek i kolejne boczne wejście do świątyni.</p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b80.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b80.webp"
          alt="Walls assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b85.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b85.webp"
          alt="Walls assembly 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b82.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b82.webp"
          alt="Walls assembly 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b83.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b83.webp"
          alt="Walls assembly 4"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b84.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b84.webp"
          alt="Walls assembly 5"
        />
      </PhotoView>
    </div>
    <p>
      Zabrałem się za sklejanie dachów w dolnej części świątyni. Najpierw
      wkleiłem tekturę i wyrównałem wszystko szpachlówką. W dolnej części dachów
      wkleiłem paski 1.5 mm, by wyrównać ściany z kolumnami. Pobrudziłem też
      ściany świątyni różnymi odcieniami, żeby nie wyglądały tak idealnie jak
      nowe.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b86.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b86.webp"
        alt="Roof assembly"
      />
    </PhotoView>
    <p>
      Następnie przygotowałem sobie teksturę dachu, którą wyciąłem z tego
      zdjęcia i wyprostowałem w photoshopie. Złączyłem ze sobą cztery fragmenty
      w jedną dużą teksturę.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b125.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b125.webp"
          alt="Roof tiles"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b126.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b126.webp"
          alt="Roof tiles"
        />
      </PhotoView>
    </div>
    <p>
      Dachówki wycinałem i naklejałem paskami od dołu do góry, przerwy pomiędzy
      dachówkami wytłoczyłem igłą. Wcześniej jeszcze nakleiłem karton z teksturą
      dachu, żeby mieć jakiś punkt odniesienia przy naklejaniu pasków.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b87.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b87.webp"
        alt="Roof tiles"
      />
    </PhotoView>
    <p>
      Na zaokrągleniach docinałem i wklejałem pojedyncze fragmenty, co okazało
      się bardzo żmudnym procesem.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b88.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b88.webp"
          alt="Curved roof detail 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b99.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b99.webp"
          alt="Curved roof detail 2"
        />
      </PhotoView>
    </div>
    <p>
      Tak prezentuje się całość, chociaż teraz żałuję, że przed wycięciem
      dachówek nie podkleiłem ich jeszcze kartonem, bo wyszły trochę za płasko.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b90.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b90.webp"
          alt="Roof complete 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b91.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b91.webp"
          alt="Roof complete 2"
        />
      </PhotoView>
    </div>
    <p>
      Zakleiłem główny dach. Najpierw wkleiłem 2mm tekturę i na nią odpowiednio
      przygotowaną tekturę 0.5 mm. Tak samo zrobiłem z mniejszym dachem, który
      pokryłem już gontem.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b92.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b92.webp"
          alt="Main roof 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b93.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b93.webp"
          alt="Main roof 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b94.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b94.webp"
          alt="Main roof 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b98.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b98.webp"
          alt="Main roof 4"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b123.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b123.webp"
          alt="Main roof 5"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b122.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b122.webp"
          alt="Main roof 6"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b96.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b96.webp"
          alt="Main roof 7"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b100.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b100.webp"
          alt="Main roof 8"
        />
      </PhotoView>
    </div>
  </>,
  <>
    <p>
      Skleiłem kopułę nad absydą. Kształt wyrysowałem w google sketchup i
      rozłożyłem w programie pepekura. Po sklejeniu wyciąłem po jednym
      prostokącie w dolnej części i wkleiłem okienka.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b101.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b101.webp"
        alt="Dome assembly"
      />
    </PhotoView>
    <p>
      Pomyślałem, że spróbuję zrobić imitację blachy jaką pokryty jest dach,
      więc zacząłem oklejać kopułę kawałkami papieru, które naklejałem kolejno
      na zakładkę. Okleiłem tak całą kopułę od dołu do góry, oraz przykleiłem
      paski nad oknami. Następnie przykleiłem druciki w miejscu łączenia blach.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b102.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b102.webp"
          alt="Dome metal effect"
        />
      </PhotoView>
      <p></p>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b103.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b103.webp"
          alt="Dome strips"
        />
      </PhotoView>
      <p></p>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b105.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b105.webp"
          alt="Dome wires"
        />
      </PhotoView>
    </div>
    <p>
      Pomalowałem całość kolorem, następnie wszystkie zagłębienia zamalowałem
      czarną farbą i ponownie pomalowałem kolorem, tylko teraz przecierając
      prawie suchym pędzlem.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b106.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b106.webp"
          alt="Dome painted"
        />
      </PhotoView>
      <p></p>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b107.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b107.webp"
          alt="Dome darkening"
        />
      </PhotoView>
      <p></p>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b108.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b108.webp"
          alt="Dome dry brush"
        />
      </PhotoView>
    </div>
    <p>Na koniec dodałem jeszcze trochę zabrudzeń.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b109.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b109.webp"
        alt="Dome weathering"
      />
    </PhotoView>
    <p>
      W taki sam sposób wykonałem mniejszą kopułkę. Nie będę jej na razie
      przyklejał, bo krzyżyk można by łatwo ułamać.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b111.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b111.webp"
          alt="Small dome"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b110.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b110.webp"
          alt="Small dome"
        />
      </PhotoView>
    </div>
    <p>
      Tak prezentuje się całość, chociaż teraz widzę, że nie do końca trafiłem z
      odcieniem, bo powinien być bardziej zielonkawy.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b112.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b112.webp"
          alt="Full model 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b113.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b113.webp"
          alt="Full model back"
        />
      </PhotoView>
    </div>
    <p>
      Następnie zabrałem się za sklejanie wieży na głównym dachu. Miałem sporo
      problemów z wykonaniem narożnych kolumn, mają średnicę raptem 4mm i ciągle
      rozpadały mi się przy nacinaniu, lub przy malowaniu. Trochę pomogło
      nasączanie ich klejem cyjanoakrylowym przed pomalowaniem.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b117.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b117.webp"
        alt="Tower columns"
      />
    </PhotoView>
    <p>
      Na ściankach wieży są takie oto wzorki. Początkowo chciałem je zrobić
      tylko płaską teksturą, ale jednak udało mi się je powycinać.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b116.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b116.webp"
          alt="Tower pattern reference"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b114.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b114.webp"
          alt="Tower pattern 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b115.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b115.webp"
          alt="Tower pattern 2"
        />
      </PhotoView>
    </div>
    <p>Po złożeniu i pomalowaniu wieża prezentuje się następująco:</p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b118.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b118.webp"
          alt="Tower final 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b119.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b119.webp"
          alt="Tower final 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b120.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b120.webp"
          alt="Tower final 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b121.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b121.webp"
          alt="Tower final 4"
        />
      </PhotoView>
    </div>
    <p>
      Właściwie miałem jeszcze zrobiony górny segment wieży, ale nie byłem z
      niego zadowolony, poprawiałem go kilka razy, a i tak zawsze gdzieś było
      krzywo, więc zrobiłem go od nowa.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b124.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b124.webp"
        alt="Tower top segment"
      />
    </PhotoView>
    <p>
      Pokryłem resztę dachów gontem i na krawędziach dachów nakleiłem paski.
      Przykleiłem też górną część wieży.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b128.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b128.webp"
          alt="Tower assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b127.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b127.webp"
          alt="Tower assembly 2"
        />
      </PhotoView>
    </div>
    <p>
      Zabrałem się za składanie przykościelnej dzwonnicy. Podzieliłem ją na trzy
      segmenty. Najpierw sklejałem środek z tektury i potem na ścianki
      naklejałem styrodur o grubości 2 mm. Na styrodurze wyryłem igłą wzór
      kamieni. W górnej części dzwonnicy gdzie kamień jest bardziej nierówny,
      dociskałem do syroduru papier ścierny o różnych gradacjach.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b132.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b132.webp"
          alt="Bell tower assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b133.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b133.webp"
          alt="Bell tower assembly 2"
        />
      </PhotoView>
    </div>
    <p>Tak będzie wyglądać cała dzwonnica, na razie postawiona na sucho.</p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b135.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b135.webp"
          alt="Bell tower complete 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b136.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b136.webp"
          alt="Bell tower complete 2"
        />
      </PhotoView>
    </div>
    <p>
      Ze styroduru wykonałem też fundamenty kościoła, doklejając w dolnej części
      paski. W ten sam sposób wykonałem kamienne przejście między kościołem a
      dzwonnicą.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b131.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b131.webp"
          alt="Stone passage 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b130.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b130.webp"
          alt="Stone passage 2"
        />
      </PhotoView>
    </div>
    <p>
      Dzwonnica pomalowana. Wkleiłem też okna i drzwi. Zegary dorobię później,
      bo będzie przy nich więcej pracy.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b144.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b144.webp"
          alt="Bell tower painted 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b143.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b143.webp"
          alt="Bell tower painted 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b140.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b140.webp"
          alt="Bell tower painted 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b139.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b139.webp"
          alt="Bell tower painted 4"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b138.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b138.webp"
          alt="Bell tower painted 5"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b137.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b137.webp"
          alt="Bell tower painted 6"
        />
      </PhotoView>
    </div>
    <p>
      Zbudowałem zadaszenie w przejściu między kościołem, a dzwonnicą. Tym razem
      kolumny zwinąłem z papieru. Pod daszkiem wkleiłem diodę smd.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b152.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b152.webp"
          alt="Canopy assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b153.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b153.webp"
          alt="Canopy assembly 2"
        />
      </PhotoView>
    </div>
    <p>
      Po kilku testach z oświetleniem okazało się, że diody które planuję
      umieścić wokół budowli, powinny być dalej, niż początkowo myślałem, żeby
      ładnie podświetlały dachy. Powiększyłem więc podstawę, dodając po bokach
      3cm i 1cm z przodu i z tyłu.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b141.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b141.webp"
        alt="Extended base"
      />
    </PhotoView>
    <p>
      Zrobiłem zegary, które będą na dzwonnicy. Na wydrukowany szablon
      naklejałem druciki o średnicy 0.2 i 0.3 mm. i całość przeszlifowałem z
      wierzchu papierem ściernym.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b150.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b150.webp"
          alt="Clock assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b149.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b149.webp"
          alt="Clock assembly 2"
        />
      </PhotoView>
    </div>
    <p>
      Po dodaniu wskazówek i pomalowaniu tak się prezentują, na razie nie będę
      ich jeszcze przyklejał.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b151.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b151.webp"
        alt="Clocks final"
      />
    </PhotoView>
    <p>Zrobiłem dach na dzwonnicy.</p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b145.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b145.webp"
          alt="Bell tower roof 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b146.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b146.webp"
          alt="Bell tower roof 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b147.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b147.webp"
          alt="Bell tower roof 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b148.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b148.webp"
          alt="Bell tower roof 4"
        />
      </PhotoView>
    </div>
    <p>
      Zrobiłem kolejne daszki, krzyże, paski ze wzorkami, które będą wzdłuż
      krawędzi dachów oraz rzeźby smoków, które będą na ich końcach. To już
      wszystkie brakujące elementy samej budowli, na razie jeszcze ich nie
      przyklejam.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b154.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b154.webp"
          alt="Elements assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b157.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b157.webp"
          alt="Elements assembly 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b158.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b158.webp"
          alt="Elements assembly 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b155.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b155.webp"
          alt="Elements assembly 4"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b159.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b159.webp"
          alt="Elements assembly 5"
        />
      </PhotoView>
    </div>

    <p>
      Następnie zabrałem się za kostkę brukową wokół kościoła, którą wykonam ze
      styroduru.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b161.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b161.webp"
        alt="Elements assembly 6"
      />
    </PhotoView>
    <p>
      Elementy kostki brukowej zrobione. Nie jestem do końca zadowolony z
      efektu, bo wyszły trochę za duże szpary pomiędzy kamieniami. Mogłem wyryć
      ten wzorek cieńszą igłą, albo zrobić odrobinę większe kamienie, ale tak
      już zostawię. Przed końcowym malowaniem całość przeszlifowałem papierem
      ściernym.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b160.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b160.webp"
          alt="Paving stones 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b162.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b162.webp"
          alt="Paving stones 2"
        />
      </PhotoView>
    </div>
    <p>
      Zrobiłem kratki ściekowe, sklejając ze sobą naprzemiennie paski o
      szerokości 1mm i 2mm. Na koniec na górze nakleiłem ramkę.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b163.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b163.webp"
        alt="Drainage grates"
      />
    </PhotoView>
    <p>Przykleiłem też wszystkie brakujące schodki.</p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b164.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b164.webp"
          alt="Steps assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b165.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b165.webp"
          alt="Steps assembly 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b166.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b166.webp"
          alt="Steps assembly 3"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b167.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b167.webp"
          alt="Steps assembly 4"
        />
      </PhotoView>
    </div>
  </>,
  <>
    <p>
      Kilka lat temu nauczyłem się podstaw programowania płytek Arduino i
      pomyślałem, że wykorzystam to w modelu do sterowania oświetleniem. Użyję
      do tego płytki Arduino Nano. Sterowanie oświetleniem podzielę na trzy
      części: diody wokół budowli, diodę nad wejściem oraz diodę pod daszkiem
      między kościołem a wieżą.
    </p>
    <p>
      Na początek złożyłem do testów układ na płytce stykowej i nie obyło się
      bez kilku problemów. Planuję zrobić sterowanie pilotem i gdy testowałem
      jego działanie, pilot czasem działał, czasem nie, albo działał tylko z
      bliska. Wymieniałem baterię, sprawdzałem, czy wszystko łączy, ale nie było
      poprawy.
    </p>
    <p>
      Długo szukałem przyczyny problemu, aż w końcu okazało się, że winny jest
      stabilizator, do którego podłączyłem odbiornik. Odbiornik musi dostawać
      napięcie równe 5 V, a mój stabilizator podawał tylko 4,7 V. Po wymianie
      wszystko działa.
    </p>
    <p>
      Taki pilot RF ma bardzo dobry zasięg, więc spokojnie mogę ukryć odbiornik
      we wnętrzu modelu. Nie trzeba też celować pilotem w odbiornik, żeby złapał
      sygnał.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b168.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b168.webp"
        alt="Final assembly with electronics"
      />
    </PhotoView>
    <p>Pilot i odbiornik RF.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b169.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b169.webp"
        alt="RF receiver"
      />
    </PhotoView>
    <p>Następnie zabrałem się za podłączanie wszystkiego do modelu.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b170.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b170.webp"
        alt="Connections assembly"
      />
    </PhotoView>
    <p>
      Na wypadek gdyby jakiś układ zawiódł i trzeba by go wymienić, wlutowałem
      najpierw gniazda do których mogę wpinać arduino i odbiornik RF.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b172.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b172.webp"
          alt="Sockets detail 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b173.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b173.webp"
          alt="Sockets detail 2"
        />
      </PhotoView>
    </div>
    <p>
      Po uporządkowaniu kabli tak to wygląda. Oczywiście tych kabelków będzie
      więcej. Na razie podłączyłem diodę nad wejściem i obok wieży.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b171.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b171.webp"
        alt="Cables organized"
      />
    </PhotoView>
    <p>Oświetleniem będzie można również sterować przyciskami na modelu.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b174.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b174.webp"
        alt="Control buttons 1"
      />
    </PhotoView>
    <p>
      <strong>Przyciski od lewej:</strong> główny włącznik, przycisk
      zmniejszania jasności, przycisk zwiększania jasności, przycisk zmiany
      trybu, diody oznaczające aktywny tryb. <br />
      <strong>Prawa strona:</strong> przycisk resetu arduino, gniazdo micro USB,
      gniazdo DC zasilania.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b175.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b175.webp"
        alt="Control buttons 2"
      />
    </PhotoView>
    <p>
      Podłączyłem oświetlenie wokół budowli, w sumie 10 diod led. Uporządkowałem
      kabelki i dodałem kilka opisów, żeby łatwiej się w tym połapać, gdyby
      trzeba było coś poprawić. Spód modelu zasłonię tekturą, która będzie
      trzymać się na magnesach.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b176.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b176.webp"
          alt="Final assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b177.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b177.webp"
          alt="Final assembly 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b178.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b178.webp"
          alt="Final assembly 3"
        />
      </PhotoView>
    </div>
    <p>
      Wymyśliłem, że zrobię podświetlaną nazwę modelu. Wyciąłem w przedniej
      części podstawy wnękę i umieściłem w niej 6 diod led. Później nakleję na
      to wydrukowany biały napis na czarnym tle.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b179.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b179.webp"
        alt="Illuminated nameplate detail"
      />
    </PhotoView>
    <p>
      Następnie zabrałem się za przyklejenie trawnika. Najpierw przygotowałem
      podłoże, smarując je wikolem i posypując wysuszoną ziemią.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b184.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b184.webp"
          alt="Grass preparation 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b185.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b185.webp"
          alt="Grass preparation 2"
        />
      </PhotoView>
    </div>
    <p>
      Do wykonania trawnika użyłem jasnej trawki 2.5mm, zmieszanej z niewielką
      ilością ciemnej.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b186.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b186.webp"
        alt="Grass materials"
      />
    </PhotoView>
    Do posiania trawki użyłem elektrosadzarki, którą zrobiłem kiedyś na
    podstawie tego poradnika:{" "}
    <a
      href="https://youtu.be/ZO1jrUL_PLU"
      target="_blank"
      rel="noopener noreferrer"
    >
      link
    </a>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b181.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b181.webp"
          alt="Grass seeder 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b182.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b182.webp"
          alt="Grass seeder 2"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b183.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b183.webp"
          alt="Grass seeder 3"
        />
      </PhotoView>
    </div>
    <p>
      W sadzarce, do wytwarzania wysokiego napięcia, umieściłem generator jonów
      ujemnych. Taki generator można kupić na AliExpress za około 30 zł.
      Wcześniej próbowałem użyć układu z elektrycznej łapki na owady, ale tam
      moc była zdecydowanie za słaba. Generator pracuje na 12 V, ja zasilam go 9
      V i działa bez problemu.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b180.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b180.webp"
        alt="Ion generator"
      />
    </PhotoView>
    <p>
      Trawkę przykleiłem na wikol i po wyschnięciu utrwaliłem ją dodatkowo,
      spryskując mocno rozcieńczonym klejem <strong>mod podge</strong>, jedną
      część kleju na trzy części wody. Po utrwaleniu trawka trochę ciemnieje,
      więc wziąłem to wcześniej pod uwagę i nie przyciemniałem jej za bardzo.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b187.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b187.webp"
          alt="Grass fixing 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b188.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b188.webp"
          alt="Grass fixing 2"
        />
      </PhotoView>
    </div>
    <p>
      Obok kościoła znajduje się wysokie drzewo. Wykonałem dwa takie drzewka,
      ponieważ z pierwszego nie byłem do końca zadowolony. W pierwszym (po
      lewej) dałem więcej trawki na gałęziach, co sprawiło, że wyglądało trochę
      jakby „puchate”. W drugim drzewku zrobiłem więcej gałęzi, posypałem mniej
      trawki i z tego drzewka jestem bardziej zadowolony.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b189.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b189.webp"
        alt="Trees detail"
      />
    </PhotoView>
    <p>
      Drzewa wykonałem w podobny sposób jak na tym filmiku:{" "}
      <a
        href="https://youtu.be/TGlTTOuTGBc"
        target="_blank"
        rel="noopener noreferrer"
      >
        link
      </a>
    </p>
    <p>
      Do kołka z balsy wbiłem kilkadziesiąt drucików, które formowałem i
      skracałem w górnej części. Pień posmarowałem wikolem i posypałem ziemią,
      by uzyskać fakturę kory. Następnie gałęzie zagęściłem, przyklejając do
      nich włosie ze starego pędzla, pocięte na około 7mm kawałki (nie miałem
      trawki o tej długości). Całość pomalowałem brązową farbą w spreju.
      Spryskałem drzewko klejem i posypałem zieloną trawką 2.5mm.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b190.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b190.webp"
          alt="Trees assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b191.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b191.webp"
          alt="Trees assembly 2"
        />
      </PhotoView>
    </div>
    <p>
      Obok kościoła znajduje się cmentarz, więc wykonałem kilka nagrobków.
      Kamienne nagrobki zrobiłem ze styroduru, drugi w dolnym rzędzie z balsy, a
      resztę z papieru.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b192.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b192.webp"
          alt="Gravestones 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b193.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b193.webp"
          alt="Gravestones 2"
        />
      </PhotoView>
    </div>
    <p>
      Wokół trawników będzie płotek, który wykonałem z pasków papieru
      nasączonych klejem <strong>CA</strong>. Musiałem zrobić w sumie ponad 60cm
      takiego płotka.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b194.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b194.webp"
        alt="Fence assembly 1"
      />
    </PhotoView>
    <p>Płotek przycinałem i wklejałem pomiędzy słupki z drutu.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b195.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b195.webp"
        alt="Fence assembly 2"
      />
    </PhotoView>
    <p>Przykleiłem nagrobki.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b201.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b201.webp"
        alt="Gravestones placed"
      />
    </PhotoView>
    <p>
      W poprzednich modelach krzaczki i drzewka wykonywałem ze skręconego drutu,
      z którego formowałem gałęzie. Tym razem postanowiłem wykorzystać do tego{" "}
      <strong>komosę ciernistą</strong> (inaczej pianę morską). Na allegro pod
      nazwą <strong>seafoam trees</strong>, można kupić za około 45 zł pudełko
      takiej komosy. W środku jest kilkanaście dużych i małych gałązek. Te
      największe mają ponad 20 cm długości.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b196.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b196.webp"
        alt="Seafoam materials"
      />
    </PhotoView>
    <p>Tak wygląda cała zawartość po rozłożeniu.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b197.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b197.webp"
        alt="Seafoam unpacked"
      />
    </PhotoView>
    <p>
      Z kilku mniejszych gałązek uformowałem krzaczki i pomalowałem je brązową
      farbą w spreju.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b198.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b198.webp"
        alt="Bushes painted"
      />
    </PhotoView>
    <p>
      Jako posypki użyłem zwykłych trocin, które przesiałem przez drobne sitko i
      zabarwiłem na kilka różnych odcieni zieleni.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b202.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b202.webp"
        alt="Grass fibers sorted"
      />
    </PhotoView>
    <p>
      By przykleić posypkę, najpierw nakładałem pędzelkiem na końcówki gałęzi{" "}
      <strong>wikol</strong> i posypywałem ciemniejszą zielenią. Potem
      spryskiwałem całość rozcieńczonym wikolem i ostrożnie posypywałem
      jaśniejszym odcieniem zieleni, tak by nie nasypać na pień. Na koniec
      posypałem jeszcze górną część krzaczka najjaśniejszym odcieniem zieleni.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b199.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b199.webp"
          alt="Foliage assembly 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b200.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b200.webp"
          alt="Foliage assembly 2"
        />
      </PhotoView>
    </div>
    <p>
      Dodałem kolejne drzewka przy nagrobkach i z prawej strony dorobiłem
      jeszcze jeden nagrobek, który wcześniej przeoczyłem. Z lewej strony w rogu
      dodałem diodę, która będzie to miejsce podświetlać, więc wokół modelu jest
      teraz w sumie 11 diod LED.
    </p>
    <div className="report-photo-group">
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b207.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b207.webp"
          alt="Final details 1"
        />
      </PhotoView>
      <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b208.webp">
        <LazyLoadImage
          className="report-photo"
          src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b208.webp"
          alt="Final details 2"
        />
      </PhotoView>
    </div>
    <p>
      W kilku miejscach umieściłem diody na słupkach, żeby świeciły znad płotka.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b203.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b203.webp"
        alt="LED poles"
      />
    </PhotoView>
    <p>
      Zrobiłem okrągły krzaczek, którego kształt wyciąłem ze styroduru i
      posypałem liśćmi z trocin.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b204.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b204.webp"
        alt="Round bush"
      />
    </PhotoView>
    <p>Przykleiłem na dachach świątyni krzyże i rzeźby smoków.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b205.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b205.webp"
        alt="Crosses and dragons"
      />
    </PhotoView>
    <p>Przykleiłem wieżę ze wszystkimi detalami.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b206.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b206.webp"
        alt="Tower installed"
      />
    </PhotoView>
    <p>
      Okleiłem podstawę czarnym kartonem i dodałem oznaczenia przycisków i
      gniazd.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b209.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b209.webp"
        alt="Base with labels"
      />
    </PhotoView>
    <p>
      Tak jak wcześniej pisałem zrobiłem podświetlany napis z przodu modelu.
    </p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b210.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b210.webp"
        alt="Illuminated nameplate"
      />
    </PhotoView>
    <p>I tym sposobem dotarłem do końca budowy.</p>
    <PhotoView src="https://www.modelcraft.pl/models/wang/build/full-res/wang-b211.webp">
      <LazyLoadImage
        className="report-photo"
        src="https://www.modelcraft.pl/models/wang/build/thumb/wang-thumb-b211.webp"
        alt="Build complete"
      />
    </PhotoView>
  </>,
];

const WangReport = ({ id }) => {
  const [reportState, setReportState] = useState(
    JSON.parse(localStorage.getItem("sections")),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = articleContent.length;

  console.log(articleContent.length);
  return (
    <section id="relacja">
      <SectionHeader
        sectionName="Relacja z budowy"
        sectionState={reportState}
        setSectionState={setReportState}
      />

      {reportState === true && (
        <div className="pt-2 pb-4">
          <PhotoProvider loadingElement={<div className="loader"></div>}>
            <PaginationNav
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            <article>{articleContent[currentPage - 1]}</article>
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
