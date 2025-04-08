import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NowyWisniczHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/nowy_wisnicz/nowy_wisnicz-photo1.webp",
    "models/nowy_wisnicz/nowy_wisnicz-photo2.webp",
    "models/nowy_wisnicz/nowy_wisnicz-photo3.webp",
  ];
  const photosTitle = [
    "Zamek w latach 1892-1897",
    "Zamek współcześnie",
    "Zamek współcześnie",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Historia"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState === true && (
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
          {" "}
          <article className="px-8 max-sm:px-4">
            {" "}
            <p>
              <span className="first-letter font-playfair">O</span>biekt
              położony na zalesionym wzgórzu nad rzeką Leksandrówką, wzniesiony
              przez Jana Kmitę herbu Szreniawa w drugiej połowie XIV w. Po raz
              pierwszy istnienie zamku („castrum”) poświadczają rachunki żup
              bocheńskich z 1396.
            </p>
            <p>
              Wczesnobarokowy korpus zamku z elementami renesansowymi zbudowano
              na planie czworoboku z wewnętrznym dziedzińcem. Zwieńczono go
              czterema basztami w narożach. Od północno-wschodniej strony
              dobudowano kaplicę z kryptą grobową Lubomirskich, a od
              południowo-wschodniej wolno stojącą tzw. Kmitówkę. Na drugim
              piętrze, przy Sali Rycerskiej mieści się galeria widokowa. Budowla
              otoczona jest fortyfikacjami bastionowymi na pięcioboku z bramą
              wjazdową w formie łuku triumfalnego z 1621.
            </p>
            <p>
              Miejsce związane z polską tradycją sztuki kulinarnej. Od XVII w.
              popularne wśród szlachty stało się tzw. zebranie potraw w
              Compendium kuchmistrza księcia Lubomirskiego Stanisława
              Czernieckiego spisane na zamku w Wiśniczu i wydane w Krakowie w
              1682, które do XIX w. doczeka się dwudziestu wydań. Gdy w Polsce
              pojawiły się po raz pierwszy ziemniaki po zwycięskiej odsieczy
              wiedeńskiej w 1683, darowane Sobieskiemu przez cesarza Leopolda I
              z ogrodów cesarskich w Wiedniu, Czerniecki opracował dla dworu
              pierwsze potrawy z tertofelli, smażone i pieczone, jak nazywano
              wówczas kartofle lub ziemniaki.
            </p>
            <h4>Historia powstania zamku</h4>
            <p>
              Zamek ma nieregularny kształt. Na przełomie XV i XVI w. był już
              czteroskrzydłowy i miał trzy wieże oraz otaczające go fortyfikacje
              ziemne z dwiema bramami. Po 1516 Piotr Kmita rozbudował zamek. Po
              jego śmierci w 1553, zamek przeszedł na własność Barzów w 1566 po
              zrzeczeniu się praw do niego przez Stadnickich. W 1593 posiadłość
              kupił Sebastian Lubomirski. W latach 1615–1621 rozbudowy
              rezydencji podjął się jego syn Stanisław. Projekt barokowej
              przebudowy i umocnień bastionowych opracował dla niego Maciej
              Trapola. W efekcie przebudowy wiśnicki zamek stał się jedną z
              najokazalszych wczesnobarokowych rezydencji obronnych
              Rzeczypospolitej.
            </p>
            <p>
              W czasie potopu szwedzkiego zamek poddał się bez walki Szwedom,
              ponieważ zabrakło dowódcy zgromadzonego w nim wojska. Wojska
              szwedzkie ogołociły zamek z całego wyposażenia i zniszczyły
              zabudowania. Po wycofaniu się najeźdźcy zamek ponownie był
              własnością Lubomirskich, jednak mimo prowadzonych prac nie został
              w pełni odrestaurowany.
            </p>
            <p>
              W połowie XVIII w. przeszedł na własność Sanguszków, a potem
              Potockich i Zamoyskich. Po przejęciu przez zaborcę zamek zaczął
              podupadać, a w 1831 uległ pożarowi i został ostatecznie
              opuszczony. W 1901 został wykupiony od prof. Maurycego
              Straszewskiego przez Zjednoczenie Rodowe Lubomirskich, którzy
              rozpoczęli remont rezydencji. Od 1928 pracami kierował Adolf
              Szyszko-Bohusz, ale zostały one przerwane po wybuchu II wojny
              światowej. Po wojnie zamek przejęło państwo, a od 1949 prowadzone
              były prace przez Alfreda Majewskiego mające przywrócić mu
              całkowicie dawny wygląd.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[0]}
                alt="Baranów"
                title={photosTitle[0]}
              />
            </PhotoView>
            <h4>Architektura</h4>
            <p>
              Wzniesiony z kamienia na planie czworoboku XV-wieczny zamek
              pierwotny miał mur obronny z jedną (poch. z XIV w.), a później z
              dwiema wieżami. Dziedziniec od strony południowo-zachodniej
              zamykał piętrowy, jednotraktowy dom mieszkalny, z którym połączona
              była wieża zbudowana na planie kwadratu. Druga kwadratowa baszta,
              wysunięta poza mury obronne, broniła narożnika
              południowo-wschodniego. Twierdza zajmowała ok. 1500 m²
              powierzchni. W wyniku przebudowy dokonanej w XVI w. modernizacji i
              rozbudowie uległy pomieszczenia w części mieszkalnej oraz
              obwarowania. Postawiono dwie cylindryczne baszty narożne („Bona” –
              na narożniku zachodnim, „Nad Fontanną” – na narożniku północnym),
              pomiędzy którymi znajdował się wjazd do zamku. W latach 1615-1621
              nastąpiła gruntowna przebudowa zamku. W jej wyniku budowla
              uzyskała niewielki dziedziniec wewnętrzny z piętrową loggią,
              otoczony trzykondygnacyjnymi budynkami mieszkalnymi stanowiącymi
              pałac zamkowy. Okna otrzymały ciosowe obramienia, a ponad 50
              pałacowych wnętrz ozdobiły marmurowe i piaskowcowe portale,
              profilowane belki stropowe, polichromie ścienne, drewniane
              boazeria oraz marmurowe posadzki i glazurowane podłogi. Od strony
              północno-zachodniej umieszczono bramę wjazdową ozdobioną portalem.
              Budynek pałacowy stał na wzniesieniu, kilka metrów powyżej
              dziedzińca zewnętrznego. Narożne baszty podwyższono, aby górowały
              nad bryłą zamku. Przy wieży czworobocznej stanęła kaplica zamkowa
              zwieńczona kopułą. Obok bramy zbudowano nową wieżę na planie
              prostokąta. Natomiast od strony południowo-wschodniej powstał
              niski budynek kuchenny. Całość została otoczona fortyfikacjami
              bastionowymi w kształcie pięcioboku (bok o dł. 98 m). Rezydencję
              otaczał obszerny park ze zwierzyńcem i ogrody. Przebudowany obiekt
              reprezentował nowoczesną magnacką twierdzę typu „palazzo in
              fortezza”.
            </p>
            <h4>Stan obecny</h4>
            <p>
              Sąd Okręgowy w Tarnowie wyrokiem z dnia 24 stycznia 2019
              podtrzymał orzeczenie Sądu Rejonowego w Bochni uznając, że Skarb
              Państwa nabył prawo własności zamku w Wiśniczu przez zasiedzenie.
              Skarb Państwa od lat toczył o zamek spór ze Zjednoczeniem Rodowym
              Książąt Lubomirskich. Zjednoczenie zapowiadało chęć złożenia
              skargi kasacyjnej do Sądu Najwyższego, niemniej wyrok sądu drugiej
              instancji jest prawomocny.
            </p>
            <p>
              Mimo że zamek był doszczętnie zniszczony, obecnie jest w bardzo
              dobrym stanie. W jego wnętrzu wystawione są fotografie obrazujące
              wygląd zamku sprzed lat, oprócz tego w jego salach znajdują się
              XIX- i XX-wieczne meble, makiety różnych zamków oraz prace
              plastyczne uczniów nowowiśnickiego Liceum Sztuk Plastycznych. Do
              zwiedzania udostępniona jest również ogromna sala balowa, sala
              plafonowa z pozłacanym sufitem, sala akustyczna wykorzystywana
              kiedyś jako miejsce spowiedzi, kaplica zamkowa oraz krypta z
              ekspozycją sześciu sarkofagów (w tym Stanisława Lubomirskiego).
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              {" "}
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className=""
                  src={photosSrc[1]}
                  alt="Baranów"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className=""
                  src={photosSrc[2]}
                  alt="Baranów"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Zamek_w_Wi%C5%9Bniczu"
                target="_blank"
              >
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default NowyWisniczHistory;
