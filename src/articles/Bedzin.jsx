import modelsData from "../data/models-data.json";
import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import HistoryHeader from "../components/HistoryHeader";
import { useState } from "react";

const Article = () => {
  const model = modelsData[0];
  const [historyState, setHistoryState] = useState(true);

  return (
    <div className="mb-14">
      <ArticleHeader id={0} />
      <Gallery id={0} />
      <HistoryHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {historyState === true && (
        <article id="test" className="history mb-8 text-text-light ">
          <div className="px-8 ">
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
            <img
              className="py-4 pr-8 float-left "
              src={model.photos.real}
              alt="będzin"
            />
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
              więc u samego podnóża zamku[3][4].
            </p>

            <p>
              W 1458 tenutariuszem zamku był Stanisław z Pogórzyc, w latach
              1462-70 Szczepan Pogórski z Pogórzyc, a w latach 1492-9 Benedykt
              alias Bieniasz Pogórski. W 1502 król polski Aleksander
              Jagiellończyk zezwolił Stanisławowi Jarockiemu z Jaroszyna
              staroście sławkowskiemu wykupić zamek oraz miasto królewskie
              Będzin wraz z wsiami z rąk Bieniasza Pogórskiego. Według lustracji
              z 1564 zamek był częściowo opustoszały i popadał w ruinę[3][4].
            </p>
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
              {" "}
              W 1616 zamek wraz z częścią miasta spłonął. Warownię na własny
              koszt odbudował starosta będziński Andrzej Dębiński – podstoli
              krakowski. Jednak już w czasie tzw. potopu szwedzkiego w latach
              1655–1656 zamek znów został spalony i częściowo zburzony przez
              wojska Hartfelda, Montecuculliego i Sporka. Gdy w 1660 lustratorzy
              królewscy zjechali do Będzina, rozkazali zamek odbudować co
              nastąpiło w 1665[4].
            </p>
            <p>
              19 lub 20 sierpnia 1683 według tradycji zamek gościł Jana III
              Sobieskiego z żoną Marysieńką oraz poselstwo cesarza Leopolda I
              Habsburga z generałem hr. Antonem Caraffą (zm. 1693) na czele.
              Sobieski właśnie zmierzał z odsieczą pod Wiedeń (do wydarzenia
              tego nawiązuje przechodzący pod zamkiem turystyczny Szlak Husarii
              Polskiej).
            </p>
            <p>
              {" "}
              15 września 1696 na zamek przybył August II Mocny (1677–1733), a w
              1797 r. Stanisław August Poniatowski[potrzebny przypis]. Do końca
              XVI w. zamkiem zarządzali z ramienia króla burgrabiowie, zaś
              posiadłości ziemskie, należące do zamku (tzw. starostwo
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

            <br />
            <b>
              <h3> Architektura</h3>
            </b>
            <hr />
            <p>
              Ekipa odbudowująca zamek w Będzinie w 1953; drugi od prawej w
              szeregu stojących Roman Romański – wojewódzki konserwator zabytków
              w Katowicach w latach 1954–1961 Zamek założono na pozostałościach
              wczesnośredniowiecznego grodu istniejącego od XI do XIII w., na
              wzniesieniu na lewym brzegu Czarnej Przemszy. Początkowo założenie
              to stanowiła cylindryczna wieża o średnicy 10,7 m wzniesiona z
              miejscowego kamienia w północno-wschodniej części wzgórza
              zamkowego. Wejście do niej znajdowało się w trzeciej, z
              istniejących czterech kondygnacji. Kolejnym etapem rozbudowy zamku
              było wzniesienie pięciokondygnacyjnej wieży na planie zbliżonym do
              kwadratu o wymiarach 9 × 8,5 m, do której nieco później dobudowano
              budynek mieszkalny o czterech kondygnacjach, przez który
              prawdopodobnie prowadziło wejście do zamku. Inna koncepcja
              opierająca się na widoku przedstawiającym zamek na weducie
              Gerunga, stanowi że nie było wyodrębnionej widocznej dziś
              kwadratowej wieży, lecz że część zajmująca wieżę i budynek była
              tej samej wysokości i była przykryta jednym dachem (kasztel).
              Dziedziniec pierwotnie był położony o ok. 2 metry niżej niż
              obecnie.
            </p>
            <p>
              Mury zamku w Będzinie wzniesiono techniką „opus emplectum”, która
              polega na murowaniu zewnętrznej i wewnętrznej części muru z
              ociosanych bloków kamiennych (czasem z cegieł) łączonych zaprawą
              wapienną i wypełnianiu przestrzeni między nimi kruszonym kamieniem
              zalanym także zaprawą wapienną (tzw. rumosz). Podstawowym
              elementem murowym stosowanym do wzniesienia zamku był dolomitowy
              kamień łamany.
            </p>
            <p>
              Zamek górny otaczały dwa przedzielone bramami mury obwodowe,
              pomiędzy którymi wiodła droga prowadząca na dziedziniec.
              Istniejący dziś jedynie w formie resztek fundamentów zamek dolny
              znajdował się na zachód od zamku – posiadał dodatkowy mur obronny,
              czworoboczną basztę i bramę wychodzącą na północ.
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default Article;
