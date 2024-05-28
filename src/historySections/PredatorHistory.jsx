import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhantomF4History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/predator/Predator-1987.webp",
    "models/predator/Predator-game.png",
  ];
  const photosTitle = [
    "Predator w filmie z 1987 roku",
    "Model Predatora w grze Aliens vs Predator 1999",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {historyState === true && (
        <PhotoProvider
          overlayRender={({ index }) => {
            return (
              <div
                className={
                  "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                  (!photosTitle[index] && " hidden")
                }
              >
                {photosTitle[index]}
              </div>
            );
          }}
          maskOpacity={0.5}
          maskClassName="backdrop-blur-sm"
          loadingElement={<div className="loader"></div>}
        >
          <article className="px-8">
            {" "}
            <span className="first-letter font-playfair">P</span>
            <p>
              o raz pierwszy pojawił się w filmie Predator z 1987 r., jako
              główny przeciwnik grupy komandosów, później powrócił w Predatorze
              2 (1990) i Predators (2010). W 2004 r., w filmie Obcy kontra
              Predator został skonfrontowany ze swoim najbardziej znanym
              adwersarzem – Obcym, a w 2007 r. ukazała się część druga ich
              zmagań. Jego popularność sprawiła, że stał również bohaterem
              licznych książek, gier wideo i komiksów, w tym wielu cross-overów
              z Obcym. Chociaż w filmach nigdy nie podano nazwy jego gatunku, to
              w tzw. rozszerzonym wszechświecie alternatywnie nazywany jest
              Yautja lub Hish-Qu-Ten.
            </p>
            <h4>Pomysł i wykonanie</h4>
            <p>
              Predatora wymyślili bracia Jim i John Thomas. W ich wizji było to
              duże, inteligentne i humanoidalne stworzenie, dysponujące wysoko
              zaawansowaną technologią, zdolną do międzygwiezdnych podróży.
            </p>
            <p>
              Do zaprojektowania jego wyglądu wynajęto artystę i speca od
              efektów specjalnych, Stana Winstona. W trakcie podróży do Japonii,
              w której towarzyszył mu James Cameron, zajął się opracowywaniem
              koncepcji artystycznej. Cameron widząc jego rysunki powiedział, że
              „zawsze chciał zobaczyć coś z żuwaczkami”. Winston przychylił się
              do tej sugestii i włączył ją do swojego projektu.
            </p>
            <p>
              W pierwotnych założeniach Predator miał mieć długą szyję, głowę
              jak pies i jedno oko. Pomysł jednak porzucono, kiedy stało się
              jasne, że nakręcenie zdjęć w dżungli z tak złożoną postacią będzie
              zbyt trudne. Zmieniono więc jego wygląd, a firmie Richard Edlund’s
              Boss Film Creature Shop powierzono przygotowanie odpowiedniego
              kostiumu. Jednakże z powodu problemów z charakteryzacją, która
              utrudniała nagrywanie zdjęć, po sześciu tygodniach postanowiono
              wstrzymać produkcję, a do wykonania nowego Predatora zaangażować
              studio Stana Winstona. Po ośmiu miesiącach prac powstał nowy
              kostium, a filmowcy mogli w końcu rozpocząć pięciotygodniowe
              zdjęcia, które zakończono w lutym 1987. Studio Winstona zajęło się
              również charakteryzacją i efektami specjalnymi.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="max-h-[500px]"
                  src={photosSrc[0]}
                  alt="photo"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[500px]"
                  src={photosSrc[1]}
                  alt="photo"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <h4>Filmowi odtwórcy</h4>
            <p>
              Początkowo w rolę Predatora miał wcielić się Jean-Claude Van
              Damme, który ze względu na swoje wojskowe umiejętności, miał nadać
              postaci zwinność i cechy łowcy. Kiedy jednak porównano go z
              aktorami występującymi w filmie, Schwarzeneggerem, Carlem
              Weathersem i Jesse’em Venturą (znanymi ze swojej muskulatury)
              stwierdzono, że potrzebny jest człowiek, który wyróżniałby się
              swoją posturą, żeby budzić większą grozę. Postanowiono więc
              zamiast Van Damme’a zatrudnić Kevina Petera Halla, znanego z roli
              Wielkiej Stopy z serialu Harry i Hendersonowie. Peter Cullen z
              kolei zajął się stworzeniem odgłosów wydawanych przez Predatora.
              Później powiedział, że inspirował się dźwiękami końskiej podkowy.
            </p>
            <p>
              W drugiej części tytułową rolę także zagrał Hall, który choć
              szkolił się w sztuce pantomimicznej, to świetnie potrafił
              wykorzystać swoje umiejętności ruchowe podczas walki. Problemem
              okazali się za to statyści, którzy mieli się wcielić w innych
              Predatorów. Z powodu braku odpowiednich ludzi Danny Glover
              zasugerował żeby role te zagrali zawodnicy Los Angeles Lakers.
              Filmowcy na to przystali, a Hall osobiście zdołał przekonać kilku
              graczy, by wzięli udział w produkcji. Niedługo po premierze filmu
              aktor Kevin Peter Hall zmarł na zapalenie płuc wywołane chorobą
              AIDS.
            </p>
            <p>
              W filmie Obcy kontra Predator, drapieżnego myśliwego zagrał
              walijski aktor, a prywatnie również jego fan, Ian Whyte. Później
              pojawił się jeszcze w drugiej części.
            </p>
            <p>
              Z kolei w filmie Predators, Brian Steele i Carey Jones wcielili
              się w nowy typ drapieżnika znanego jako „Black Super Predators”,
              który umieszcza ludzi na swojej planecie, po to by prowadzić z
              nimi grę o przetrwanie. Twórcy tego obrazu zrobili też ukłon w
              stronę pierwszego filmu i pokazali tzw. „ klasycznego Predatora”
              (Derek Mears) znanego z oryginału.
            </p>{" "}
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default PhantomF4History;
