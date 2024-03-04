import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BedzinHistory = ({ id }) => {
  const [historyState, setHistoryState] = useState(true);

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/bedzin/bedzin-photo1.jpg",
    "models/bedzin/bedzin-photo2.jpg",
    "models/bedzin/bedzin-photo3.jpg",
    "models/bedzin/bedzin-photo4.jpg",
    "models/bedzin/bedzin-photo5.jpg",
    "models/bedzin/bedzin-photo6.jpg",
    "models/bedzin/bedzin-photo8.jpg",
  ];
  const photosTitle = [
    "Najstarszy znany wizerunek zamku, Matthias Gerung 1536",
    "Drzeworyt według rysunku Dymitrowicza 1867",
    "Litografia Napoleona Ordy 1880",
    "Ruiny zamku na fotografii z początku XX wieku",
    "Ruiny zamku na fotografii z początku XX wieku",
    "Odbudowany zamek na zdjęciu z 1965 roku",
    "Porównanie ruin zamku z lat 30 ze stanem obecnym",
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
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 float-left hover:cursor-pointer"
                src={photosSrc[0]}
                alt={photosTitle[0] || "photo"}
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">H</span>istoria
              fortyfikacji w Będzinie sięga IX wieku. Już wtedy na Górze
              Zamkowej wzniesiono gród, prawdopodobnie należący do plemienia
              Wiślan lub jego zachodniego odłamu. Gród był kilkakrotnie
              rozbudowywany: m.in. w miejsce pierwotnej palisady wzniesiono
              istniejący do dziś zewnętrzny wał podgrodzia, a wewnętrzny wał
              podgrodzia zniwelowano celem założenia cmentarza
              wczesnochrześcijańskiego (XII wiek). Osadnictwo podgrodowe
              rozwijało się na południowym stoku wzgórza (obecne podejście pod
              zamek i teren parafii Św. Trójcy). Wbrew rozpowszechnionym opiniom
              Tatarzy nie zdobyli grodu – ślady spalenizny odkryte w wale grodu
              w świetle najnowszych badań archeologicznych (m.in. metodą
              dendrochronologii) pochodzą z lat wcześniejszych.
            </p>
            <p>
              W 2 połowie XIII wieku, prawdopodobnie za panowania Bolesława
              Wstydliwego, w obrębie grodu wzniesiono kamienny stołp – wieżę,
              istniejącą do dziś. W 1349 Kazimierz Wielki dobudował do niej
              zamek, który składał się początkowo z zamku górnego (ta część – po
              przebudowach – istnieje do dziś) otoczonego dwoma pierścieniami
              murów, oraz dolnego, z bramą wjazdową od strony północnej (do dziś
              zachowane dolne partie murów). W 1349 wymieniony jest pierwszy
              burgrabia będziński Wiernko (Vernco), co wskazuje jednoznacznie,
              że w tym czasie zamek musiał już stać. Także przywilej lokacyjny
              (1358) zawiera słowa, że miasto lokowane jest „pod zamkiem
              naszym”. Budowa zamku związana była ściśle z utratą Śląska i jego
              przejściem pod panowanie czeskie (1348) – granica między Koroną
              Polską, a Czeską przebiegała wówczas po linii Czarnej Przemszy, a
              więc u samego podnóża zamku.
            </p>
            <p>
              W 1458 tenutariuszem zamku był Stanisław z Pogórzyc, w latach
              1462-70 Szczepan Pogórski z Pogórzyc, a w latach 1492-9 Benedykt
              alias Bieniasz Pogórski. W 1502 król polski Aleksander
              Jagiellończyk zezwolił Stanisławowi Jarockiemu z Jaroszyna
              staroście sławkowskiemu wykupić zamek oraz miasto królewskie
              Będzin wraz z wsiami z rąk Bieniasza Pogórskiego. Według lustracji
              z 1564 zamek był częściowo opustoszały i popadał w ruinę.
            </p>{" "}
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="pl-8 float-right mt-2 "
                src={photosSrc[1]}
                alt={photosTitle[1] || "photo"}
                title={photosTitle[1]}
              />
            </PhotoView>
            <p>
              W sierpniu 1588 zamek stał się miejscem pertraktacji, prowadzonych
              przez pełnomocników cesarza Rudolfa II z Polską, o zwolnienie
              uwięzionego po bitwie pod Byczyną (24 I 1588) Maksymiliana
              Habsburga, pretendenta do korony polskiej. W będzińskiej warowni
              stanęli więc – pełnomocnicy Polski: Jan Zamoyski – wielki kanclerz
              z 400 husarzami i 100 strzelcami, Andrzej Opaliński – marszałek
              wielki koronny, Hieronim Rozdrażewski – biskup kujawski, książę
              ostrógski, Jan Gostomski – wojewoda rawski oraz Krzysztof
              Zienowicz – wojewoda ruski; stronę przeciwną reprezentowali:
              książę Sobioneta Ursini Wilhelm von Rosenberg – delegat cesarski,
              Mikołaj Istvanfi – biskup Raab i Jetwansi von Kissenfalva,
              delegaci węgierscy: Krzyszot Lobkowitz i Jan Kurzbach, delegaci
              czescy: baron Ryszard Strein von Schwarzenau i Jan Kobentzel,
              delegaci austriaccy: baron Zygfryd Promnitz z Pszczyny, delegat
              śląski oraz przedstawiciel Stanisława Pawłowskiego – biskupa
              ołomunieckiego – Kasper Rogoyski. Pełnomocnikiem papieskim był
              kardynał Hipolit Aldobrandini (1536–1605), od 1592 papież Klemens
              VIII. Po dość długich pisemnych pertraktacjach wstępnych,
              delegacja cesarska przeniosła się do Bytomia, a delegat papieski
              zamieszkał w Olkuszu. W rezultacie obrad dzięki mediacji
              Aldobrandiniego na ratuszu Czeladzi 9 marca 1589 podpisano tzw.
              pakta będzińskie (układ bytomsko-będziński). Po załatwieniu
              wszelkich formalności Maksymiliana przewieziono 6 września 1589 do
              Będzina, skąd w towarzystwie biskupa Wawrzyńca Goślickiego,
              Mikołaja Zebrzydowskiego i pocztu husarii polskiej odesłany został
              na graniczny most na Brynicy pod Czeladzią.
            </p>
            <p>
              W 1616 zamek wraz z częścią miasta spłonął. Warownię na własny
              koszt odbudował starosta będziński Andrzej Dębiński – podstoli
              krakowski. Jednak już w czasie tzw. potopu szwedzkiego w latach
              1655–1656 zamek znów został spalony i częściowo zburzony przez
              wojska Hartfelda, Montecuculliego i Sporka. Gdy w 1660 lustratorzy
              królewscy zjechali do Będzina, rozkazali zamek odbudować co
              nastąpiło w 1665.
            </p>
            <PhotoView src={photosSrc[2]}>
              <LazyLoadImage
                className="pr-8 float-left mt-2"
                src={photosSrc[2]}
                alt={photosTitle[2] || "photo"}
                title={photosTitle[2]}
              />
            </PhotoView>
            <p>
              19 lub 20 sierpnia 1683 według tradycji zamek gościł Jana III
              Sobieskiego z żoną Marysieńką oraz poselstwo cesarza Leopolda I
              Habsburga z generałem hr. Antonem Caraffą (zm. 1693) na czele.
              Sobieski właśnie zmierzał z odsieczą pod Wiedeń (do wydarzenia
              tego nawiązuje przechodzący pod zamkiem turystyczny Szlak Husarii
              Polskiej).
            </p>
            <p>
              15 września 1696 na zamek przybył August II Mocny (1677–1733), a w
              1797 r. Stanisław August Poniatowski[potrzebny przypis].
            </p>
            <p>
              Do końca XVI w. zamkiem zarządzali z ramienia króla burgrabiowie,
              zaś posiadłości ziemskie, należące do zamku (tzw. starostwo
              niegrodowe) już od poł. XV w. znajdowało się przeważnie dożywotnio
              w rękach prywatnych rycerskiego stanu (bez opłat dzierżawnych).
              Dopiero konstytucja z 1562 nakazała obdarowanym płacić do skarbu
              państwa tzw. kwartę (1/4 czystego dochodu). Na pocz. XVII w. sam
              zamek wchodził w skład starostwa niegrodowego i stał się siedzibą
              dożywotnich posiadaczy, tzw. starostów niegrodowych. Spośród nich
              znani są z okresu XV-XVIII w.: Piotr Szafraniec, Stefan z
              Pogórzyc, Prosper Prowana, Andrzej Samuel Dembiński, Krzysztof
              Gosławski i Jan Dębowski. Po zniesieniu starostw ustawą sejmu z
              1775 dobra będzińskie otrzymał w 50-letnią dzierżawę na podstawie
              licytacji Stanisław Mieroszewski.
            </p>
            <h4>Czasy rozbiorowe</h4>
            <p>
              Po drugim rozbiorze Polski zamek wraz z posiadłościami zarząd
              pruski podarował jednemu z Hohenzollernów na własność, który
              bezprawnie oddał go na mocy kontraktu z 19 lipca 1802 w wieczystą
              dzierżawę 96. mieszczanom będzińskim. Nadzór nad zamkiem i dobrami
              starościńskimi powierzono kuratorom: Janowi Machurowskiemu i
              Jakubowi Jędrzejkowi. Inne źródła podają, że na mocy tego
              kontraktu zawartego we Wrocławiu między 87. mieszkańcami Będzina a
              Królewsko-Pruską Kamerą Wojenno-Ekonomiczną we Wrocławiu
              właścicielem zamku został Jan Gęborski, ostatni kurator b. dóbr
              starostwa będzińskiego. On to jako właściciel pięciomorgowego
              obszaru Góry Zamkowej rzucił myśl odbudowy zamku i murów. Własnym
              kosztem obsadził wzgórze drzewami, dając początek dzisiejszemu
              parkowi.
            </p>
            <p>
              Przy kopaniu dołów pod drzewa natrafiano na groby, z których kilka
              furmanek kości ludzkich wywieziono na pobliski cmentarz. Odkryto
              także chodnik podziemny, prowadzący z zamku w stronę kościoła św.
              Tomasza. Jednak wikariusz ks. Podczaski zabezpieczając go przed
              poszukiwaczami skarbów, kazał otwór zamurować i zasypać gruzem.
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-x-8">
              {" "}
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className=""
                  src={photosSrc[3]}
                  alt={photosTitle[3] || "photo"}
                  title={photosTitle[3]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[4]}>
                <LazyLoadImage
                  className=""
                  src={photosSrc[4]}
                  alt={photosTitle[4] || "photo"}
                  title={photosTitle[4]}
                />
              </PhotoView>
            </div>
            <p>
              Mieroszewscy nie mieszkając na zamku, nie dbali o niego, więc
              popadał w ruinę, co potwierdza lustracja z 1789. Gdy w 1825 pod
              walącym się murem zamkowym zginął jeden z mieszkańców, komisarz
              obwodu olkuskiego, Lauzański wydał polecenie zburzenia zamku do
              fundamentów. Jednak 5 marca 1827 przyszedł rozkaz z Warszawy
              nakazujący przeprowadzić rejestrację wszystkich zabytków
              znajdujących się na terenie obwodu oraz zalecający ich ochronę. W
              myśl tego rozkazu burmistrz miasta Trzciński otrzymał
              zawiadomienie, że należy wstrzymać rozbiórkę zamku. Nawet
              burmistrz Siewierza, Kobyliński został wydelegowany do Będzina w
              celu dopilnowania zarządzenia.
            </p>
            <p>
              W 1833 przybył do Będzina w celu podźwignięcia tutejszego
              górnictwa komisarz Banku Polskiego, a także miłośnik pamiątek
              narodowych, hr. Edward Raczyński. Gdy ujrzał romantyczne zwaliska
              zamku postanowił go odbudować. Już w 1834 r. zamek wrócił do
              świetności według projektu architekta i budowniczego włoskiego
              Franciszka Marii Lanciego, mieszkającego w Krakowie. Opracowując
              projekt odbudowy zamku wprowadził do surowej, gotyckiej bryły
              elementy romantycznej architektury pseudogotyckiej. Wycięto w
              średniowiecznych murach ślepe strzelnice, założono ślepe
              machikuły, zmniejszono grubość murów wieży czworobocznej w celu
              uzyskania większych powierzchni, wprowadzono duże, obramowane
              opaskami ceglanymi okna; wybitnie też obniżono wieżę cylindryczną.
              Zamek miał zostać siedzibą szkoły górniczej, lecz koncepcja ta
              szybko upadła. Zarząd Górniczy przeznaczył zamek na salę modlitw
              dla sprowadzonych w 1838 do Dąbrowy z Saksonii kilkudziesięciu
              górników. Nabożeństwa odprawiał pastor przeniesiony z Tarnowskich
              Gór. W 1840 r. w zamku urządzono kaplicę ewangelicką, w której
              odprawiono pierwsze nabożeństwo ewangelickie na terenie Zagłębia
              Dąbrowskiego. Działała do ok. 1843 r.
            </p>
            <p>
              Następnie po drobnych przeróbkach zamek służył też jako szpital.
              Nie nadając się do tego celu już w 1849 znów popadł w ruinę.
            </p>
            <PhotoView src={photosSrc[5]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[5]}
                alt={photosTitle[5] || "photo"}
                title={photosTitle[5]}
              />
            </PhotoView>
            <h4>XX lecie międzywojenne</h4>
            <p>
              W 1919 z inicjatywy Stefana Warchoła – inżyniera powiatowego, Jana
              Gęborskiego – właściciela Góry Zamkowej, Benedykta Misiórskiego –
              farmaceuty i Romana Wyszatyckiego pisarza hipotecznego, powstało
              Towarzystwo Opieki nad Górą Zamkową. Statut Towarzystwa został
              ostatecznie zatwierdzony przez wojewodę kieleckiego 18 listopada
              1927. Gęborski odstąpił Towarzystwu park i ruiny zamku, z nadzieją
              na jego odbudowanie. Towarzystwo przystąpiło do odbudowy w 1929
              r., którego projekt i plan odbudowy sporządził prof. Adolf
              Szyszko-Bohusz (1883–1948). W czasie prac budowlanych odnaleziono
              wiele zabytkowych przedmiotów (ostrogi, miecze, mizerykordie,
              topory, toporek kamienny, klucze gotyckie, majolika, grosze
              Wacława II), które przechowywano w Magistracie. Marian
              Kantor-Mirski odnalazł u obywatela Peisera głaz z rysunkiem
              ryngrafu oraz datą 1588. Był to prawdopodobnie kamień pamiątkowy
              uwieczniający podpisanie paktu będzińskiego. Kamień umieszczono w
              ogrodzie J. Gęborskiego.
            </p>
            <p>
              Obecny wygląd zamek zawdzięcza przebudowie neogotyckiej z 1834
              przeprowadzonym przez Franciszka Marię Lanciego oraz pracom
              rekonstrukcyjnym przeprowadzonym w latach 1952-56 według projektu
              inż. Zygmunta Gawlika. Pierwotnie wieża okrągła była znacznie
              wyższa niż obecnie i prawdopodobnie miała zwieńczenie ceglane.
              Budynek mieszkalny nie miał wyodrębnionej wieży kwadratowej – w
              obu swych częściach miał tę samą liczbę kondygnacji (kasztel).
              Zamek posiadał w średniowieczu także dodatkową część otoczoną
              murem z bramą, której jednak nie odtworzono.
            </p>
            <PhotoView src={photosSrc[6]}>
              <LazyLoadImage
                className="mx-auto max-w-3xl max-lg:max-w-xl"
                src={photosSrc[6]}
                alt={photosTitle[6] || "photo"}
                title={photosTitle[6]}
              />
            </PhotoView>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default BedzinHistory;
