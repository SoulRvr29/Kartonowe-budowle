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
    "models/wilczy_szaniec/wilczy_szaniec-photo4.webp",
    "models/wilczy_szaniec/wilczy_szaniec-photo5.webp",
    "models/wilczy_szaniec/wilczy_szaniec-photo1.webp",
    "models/wilczy_szaniec/wilczy_szaniec-photo2.webp",
    "models/wilczy_szaniec/wilczy_szaniec-photo3.webp",
  ];
  const photosTitle = [
    "Budowa ciężkiego schronu",
    "Budowa Wilczego Szańca",
    "Fragment kwatery Hitlera w latach 1963-1965",
    "Wilczy Szaniec obecnie",
    "Wilczy Szaniec obecnie",
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
            <p>
              <span className="first-letter font-playfair">W</span>ilczy Szaniec
              (niem. Wolfsschanze) – w latach 1941–1944 kwatera główna Adolfa
              Hitlera i Naczelnego Dowództwa Sił Zbrojnych w lesie gierłoskim,
              na wschód od leżącej na skraju lasu wsi Gierłoż (wtedy Görlitz) i
              8 km na wschód od Kętrzyna (obecnie w woj. warmińsko-mazurskim).
              Kwatera została wybudowana, aby Hitler mógł z niej dowodzić
              wojskami podbijającymi ZSRR. 20 lipca 1944 Claus von Stauffenberg
              i Werner von Haeften dokonali tu nieudanego zamachu na życie
              Hitlera.
            </p>
            <p>
              „Wilczy Szaniec” przecinała linia kolejowa Kętrzyn – Węgorzewo i
              równoległa do niej szosa Gierłoż – Parcz. Kwatera miała
              powierzchnię 250 ha i otoczona była pierwotnie zasiekami, a
              następnie także polem minowym. Co kilkaset metrów ustawione były
              kilkunastometrowej wysokości drewniane wieże obserwacyjne, a na
              terenie suchym także betonowe stanowiska ckm.
            </p>
            <p>
              Do kwatery prowadziły trzy strzeżone wartowniami wjazdy. Wartownia
              zachodnia znajdowała się na skraju lasu na wysokości majątku
              Gierłoż (niem. Gut Görlitz). Wartownia wschodnia położona była na
              szosie w polu, od strony wsi Parcz, około 300 m od aktualnej
              granicy lasu. Na południowy wschód od centrum, obok szosy Gierłoż
              – Parcz znajdowało się zapasowe lądowisko dla samolotów
              kurierskich. Jadąc na południe z centrum kwatery przejeżdżało się
              do wartowni południowej, a dalej do szosy Kętrzyn – Giżycko, za
              którą znajdowało się właściwe lotnisko kwatery w Wilamowie.
              Dodatkowo w centrum kwatery znajdowała się także tzw. wartownia
              oficerska, strzegąca wjazdu na teren pierwszej strefy oraz
              wartownia kolejowa na zjeździe z szosy na stację kolejową. Żadna z
              wartowni nie dotrwała do chwili obecnej, a jedynymi
              pozostałościami ich lokalizacji są kawałki dachówek. Oprócz
              ogrodzenia zewnętrznego, strefy zakazane I i II wygrodzone były
              około dwumetrowej wysokości płotem z siatki zwieńczonej drutem
              kolczastym, gdyż oprócz wjazdu do kwatery kontroli podlegał
              również ruch pomiędzy jej strefami.
            </p>
            <p>
              Stała załoga „Wilczego Szańca” liczyła 2100-2200 osób – oprócz
              oficerów sztabowych, łączników i innych wojskowych także
              fryzjerów, kucharzy, lekarzy, stenografów, sekretarek itp. Załoga
              kwatery korzystała z obsługi medycznej w przeznaczonym na ten cel
              szpitalu w Karolewie.
            </p>
            <h4>Wybór miejsca i budowa kwatery</h4>
            <p>
              Po pokonaniu Francji Hitler wydał rozkaz przygotowania planu wojny
              z ZSRR. Ogólną koncepcję tego planu przygotowywał w lipcu 1940
              gen. Erich Marcks – szef sztabu 18 Armii, później we wrześniu 1940
              plan rozwinął gen. Friedrich Paulus – szef oddziału operacyjnego
              Sztabu Generalnego Wojsk Lądowych. Obaj generałowie podlegali
              szefowi tego sztabu, gen. Franzowi Halderowi. 18 grudnia 1940
              Hitler podpisał dyrektywę nr 21 – plan „Barbarossa”, który
              zakładał rozgromienie ZSRR w ciągu kilku miesięcy.
            </p>
            <p>
              Wilczy Szaniec zlokalizowano w zachodniej części Giżyckiego Rejonu
              Umocnionego, między Giżyckim i Lidzbarskim Rejonem Umocnionym. Na
              szczegółową lokalizację zdaje się miał wpływ dr Fritz Todt,
              bywalec „Kurhausu” – domu wypoczynkowego w lesie gierłoskim.
              Kwatera położona była na terenie podmokłym i bagiennym. Kwatera
              Hitlera dodatkowo chroniona była przez rozmieszczone w najbliższej
              okolicy stanowiska obrony przeciwlotniczej i samoloty myśliwskie,
              które bazowały na lotniskach w promieniu do 100 km (lotnisko
              własne, lotnisko polowe w Giżycku, w miejscowości Szyba koło Ełku,
              koło Sępopola i w Królewcu). Kwatera leżała blisko granicy
              sowieckiej, a więc Hitler mógł przebywać blisko frontu i kierować
              działaniami wojennymi. Od wschodu naturalną przeszkodą był pas
              jezior mazurskich, w przesmyku między jeziorami była Twierdza
              Boyen w Giżycku. Całe Prusy były ufortyfikowane. Przed atakiem
              lądowym kwaterę zabezpieczały schrony w kierunku Giżycka i
              Węgorzewa, czuwało lotnictwo. Kwatera leżała ponadto na uboczu
              szlaków komunikacyjnych. Chroniły ją jeziora i bagna. Lasy
              liściaste były naturalnym maskowaniem. Istniejąca linia kolejowa
              ułatwiała komunikację. Hitler osobiście nadał kwaterze nazwę
              Wilczy Szaniec (Wolfsschanze). Wykorzystał do tego swój pseudonim
              Wilk (Wolf) z lat walki, którego używał od 1919 r. Słowo „wilk”
              znalazło się w nazwach trzech innych kwater Hitlera: Wilkołak
              (Werwolf), Wilczy Jar 1 (Wolfsschlucht) i Wilczy Jar 2
              (Wolfsschlucht 2).
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[0]}
                alt="Wilczy Szaniec"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              Prace budowlane według projektu inż. Behrensa z OT (głównego
              projektanta organizacji), wykonywane siłami Organizacji Todt,
              rozpoczęto późną jesienią 1940. Ukrywano je pod pozorem budowy
              zakładów chemicznych firmy zbrojeniowej Askania Werke z Berlina, a
              budowany obiekt oznaczano kryptonimami Askania Nord oraz Anlage
              Nord (równolegle powstawała z ramienia Organizacji Todta i pod
              szyldem firmy Askania kwatera Mauerwald w Mamerkach, a także
              kompleksy Askania/Anlage Süd na Pogórzu Strzyżowskim i
              Askania/Anlage Mitte pod Tomaszowem Mazowieckim). Część drobnych
              zleceń otrzymały prywatne firmy z Kętrzyna i Giżycka, natomiast
              zlecenia specjalistyczne – przedsiębiorstwa z całej Rzeszy. Budowa
              trwała praktycznie do końca 1944 roku (także w trakcie użytkowania
              kwatery). Jednorazowo pracowało tu 2–3 tys. osób. Prace prowadzono
              całodobowo. Dla całej budowy istniało tylko jedno stanowisko
              produkcji betonu, skąd systemem rurociągów doprowadzano go do
              betonowanego obiektu. Zatrudniano ludzi pewnych i zaufanych oraz
              robotników przymusowych różnych narodowości. Pracowali Polacy,
              Norwegowie, Francuzi i Rosjanie. Robotników OT zakwaterowano w
              Kętrzynie w barakach cukrowni, skąd byli dowożeni na budowę koleją
              i autobusami. Obóz pracy dla Norwegów znajdował się w miejscowości
              Parcz. Robotników często wymieniano. Nie pracowali dłużej niż pół
              roku, po czym Niemców przemieszczano na inne budowy, cudzoziemców
              – w większości do obozów koncentracyjnych, gdzie ginęli. Znane
              jest 17 nazwisk Polaków pracujących przy budowie. Wyliczono, że
              przy budowie pracowało ok. 20 tys. robotników. Większość
              materiałów dostarczano transportem kolejowym z głębi Niemiec
              (stal, cement, inne materiały). Materiały wyładowywano na stacji
              kolejowej, po czym kolejką wąskotorową podwożono je do miejsca
              budowy. Prac nie przerywano nawet zimą. Już w maju 1941 r. kwatera
              była gotowa na przyjazd Hitlera (strefa II). Koszt budowy obiektu
              do końca 1944 r. wyniósł ok. 36 mln marek.
            </p>
            <p>Budowę kwatery prowadzono w trzech fazach:</p>
            <ul className="flex flex-col gap-2">
              <li>
                w latach 1940–1941 wybudowano kwaterę tymczasową – zakładano, że
                wojna na wschodzie potrwa kilka miesięcy. Na całość kwatery
                składało się kilka lekkich budowli betonowych klasy „B” lub „C”,
                drewniane baraki (barakami nazywano też budynki niebędące
                bunkrami, chociaż miały stalowe okiennice i niektóre z nich były
                murowane). W strefie I wybudowano obiekty dla A. Hitlera, M.
                Bormanna, feldmarszałka W. Keitla i innych osobistości III
                Rzeszy, a także pomieszczenia łączności, pomieszczenia dla
                adiutantów Hitlera i Wehrmachtu, OKW, lekarzy, ochrony oraz
                garaże i kotłownię. Rozbudowano sieć drogową i wybudowano
                bocznicę kolejową z rampą wyładunkową (przez obiekt biegła od
                1907 r. linia łączącą Kętrzyn z Węgorzewem). Na łąkach za
                pobliskim Korolewem powstało lotnisko polowe. Postawiono
                ogromnej wielkości nieznane wówczas w Polsce baraki-namioty.
              </li>
              <li>
                w latach 1942–1943 nastąpiła rozbudowa istniejących budowli w
                bezpośrednim otoczeniu Hitlera oraz zwiększono ich liczbę na
                terenie kwatery. Do niektórych betonowych obiektów dobudowano
                poprawiające komfort drewniane aneksy. Ostatecznie ukształtował
                się także podział „Wilczego Szańca” na strefy użytkowe: I strefa
                zamknięta (lub zakazana), wyłącznie do użytku Hitlera i jego
                najbliższego otoczenia (na północ od linii kolejowej Kętrzyn –
                Węgorzewo), II strefa zamknięta (na południe od linii kolejowej)
                z komendantem kwatery. W południowo-wschodniej części kwatery
                znalazły się przedstawicielstwa wojsk lotniczych, marynarki
                wojennej, ministerstwa spraw zagranicznych i ministerstwa
                uzbrojenia. Wybudowano pomieszczenia biurowe, polepszające
                warunki pracy – baraki drewniane i obiekty z cegły. Stropy tych
                ostatnich wykonywano ze strunobetonu. Do tej kategorii budowli
                należały: schron dla gości, barak stenografów, kasyno,
                herbaciarnia, biuro gen. A. Jodla, kino oraz drewniane
                przybudówki do schronów Hitlera, Keitla, i wydziału personalnego
                OKW. W strefie II dobudowano m.in. węzeł łączności,
                pomieszczenie dla łączników sztabowych, ministerstwa spraw
                zagranicznych, marynarki wojennej, lotnictwa, A. Speera.
              </li>
              <li>
                od roku 1944 (po zbombardowaniu Peenemünde) istniejące schrony
                wzmacniano kolejnymi płaszczami żelbetu z przerwami
                przeciwodłamowymi (ściany do 4 m, a stropy do 8 m grubości).
                Obudowano w ten sposób schrony Hitlera (zakończony w
                październiku 1944), Bormanna, dla gości i węzeł łączności.
                Wybudowano nowe schrony według wymogów klasy „A”. Drewniane
                baraki obudowywano cegłami i strunobetonem.
              </li>
            </ul>
            <p>
              Budowy formalnie nigdy nie ukończono, nie istnieje więc ostateczny
              obraz kwatery. Ten, który można aktualnie zwiedzać, powstał pod
              koniec 1944, jeżeli nie liczyć dodatkowych zniszczeń spowodowanych
              wysadzaniem niewypałów przez polskich saperów w okresie
              rozminowania.
            </p>
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[1]}
                alt="Wilczy Szaniec"
                title={photosTitle[1]}
              />
            </PhotoView>
            <p>
              Na terenie „Wilczego Szańca” znajdowało się około 80 obiektów o
              konstrukcji trwałej i około 100 baraków drewnianych.
              Najsolidniejsze schrony typu ciężkiego miały ściany o grubości 4–6
              m i stropy do 8 m. Ze względu na wysoki poziom wód gruntowych
              zdecydowana większość obiektów na terenie Wilczego Szańca były
              budowlami typu naziemnego. Wyjątek stanowiły położone na
              wzniesieniach magazyny na żywność, na amunicję oraz podpiwniczenia
              na urządzenia techniczne (agregaty prądotwórcze, zbiorniki) pod
              schronem Hitlera i schronem łączności. Drogi dla samochodów były
              wykonane z asfaltu, betonu i bruku, a przejścia piesze – z
              utwardzonego piasku. Ściany niektórych schronów pokryte były
              tynkiem z domieszką trawy. Cała kwatera była starannie maskowana.
              Przy budowie starano się zachować istniejące drzewa, a ubytki w
              drzewostanie uzupełniano atrapami z rur pokrytych igielitową
              siatką imitującą liście. Wszystkie drogi i ścieżki były z góry
              przykryte siatkami maskującymi. Siatki były druciane z
              przywiązanymi do nich kawałkami plastiku imitującego liście i
              igliwie, odporne na ogień. Siatki umieszczano na drutach
              przeciągniętych od drzew do schronów oraz między drzewami. Siatki
              często wymieniano. Na schronach były ustawione sztuczne drzewa.
              Dachy budynków, pokryte warstwą ziemi, porastała trawa i młode
              drzewa. Ściany obiektów początkowo pokrywano zaprawą z domieszką
              trawy morskiej i zielonej farby, wiórów, tworzących chropowatą
              powierzchnię barwioną na zielono, do których w zimie łatwo
              przyklejał się śnieg. W późniejszym okresie ściany tylko malowano
              w szaro-zielono-brązowe plamy. Skuteczność kamuflażu sprawdzana
              była okresowo za pomocą zdjęć lotniczych. Wszystkie drogi i
              ścieżki przykryte były siatkami maskującymi. Kwatera wyposażona
              była we wszystkie środki techniczne. Energia elektryczna
              dostarczana była liniami energetycznymi z lokalnej elektrowni. Na
              wypadek zagrożenia obiekt był wyposażony w agregaty prądotwórcze
              (diesle) oraz baterie akumulatorów. Ogrzewanie było centralne.
              Obiekt miał własne ujęcie wody oraz osadnik nieczystości. Posiadał
              bezpośrednie połączenie telefoniczne i radiowe z Berlinem oraz z
              pozostałymi punktami kierowania w Prusach. W pobliżu dworca
              znajdowała się bocznica kolejowa, na której stał specjalny pociąg
              Hitlera „Brandenburg” lub pociąg (wagon) kurierski, łączący
              kwaterę z Berlinem. Zarówno pociąg, jak i wagon specjalny stały
              pod przykryciem siatek maskujących. Z Gierłoży chodziły pociągi
              samobieżne, łączące Wilczy Szaniec z innymi stanowiskami
              kierowania. Ciężkie schrony stanowiły tylko zabezpieczenie na
              wypadek ataku lotniczego. Życie codzienne i praca odbywały się w
              schronach lekkich i barakach drewnianych.
            </p>
            <p>
              Teren kwatery ogrodzony był dwukrotnie płotem z siatki drucianej,
              rozciągniętej w odległości 100–180 m. Wewnątrz między ogrodzeniami
              założone były pola minowe. Poszczególne strefy były ogrodzone
              siatką drucianą i drutem kolczastym oraz walcami Bruno. Do stref
              prowadziły bramy, przez które można było wejść za okazaniem
              przepustek specjalnych, zostawiając broń na wartowni.
              Bezpieczeństwo zewnętrzne zapewniał Batalion Ochrony Führera
              (Führer Belgleit Bataillon). Był zmechanizowany i mógł podejmować
              szybkie interwencje, posiadał również środki przeciwlotnicze i
              przeciwpancerne. Ponadto niedaleko Gołdapi, ok. 70 km od kwatery,
              stacjonował batalion wojsk powietrznodesantowych, który mógł być
              zrzucony na spadochronach. Koło Insterburga (Czerniachowsk)
              stacjonował batalion strzelców desantowych. Komendantowi kwatery
              podlegała szkoła niszczycieli czołgów w Karolewie, batalion
              policji w Pozezdrzu i szkoła podoficerska w Orzyszu. Cały obszar o
              promieniu kilkudziesięciu kilometrów był nieustannie patrolowany.
              Za bezpieczeństwo wewnętrzne odpowiedzialny był także Batalion
              Ochrony Führera, który współpracował ze Służbą Bezpieczeństwa
              Rzeszy.
            </p>
            <h4>Użytkowanie kwatery</h4>
            <p>
              Hitler przybył do Wilczego Szańca 24 czerwca 1941 i przebywał w
              nim z przerwami do 20 listopada 1944. 26 czerwca o świcie przybył
              specjalnym pociągiem rzut polowy Naczelnego Dowództwa Niemieckich
              Sił Zbrojnych (OKW). Ponieważ nie wszystkie obiekty były gotowe,
              część sztabu początkowo pracowała w pociągu stojącym na bocznicy
              (pociąg ten - lub jego część - stał na stałe na bocznicy pod
              przykryciem siatek maskujących). Siedziby najwyższych dostojników
              Rzeszy były początkowo w najstarszej, południowej części, w
              strefie II. Dopiero po wykończeniu prac budowlanych przeniesiono
              się do strefy I. Hitler spędził tutaj około 800 dni (po odliczeniu
              wyjazdów). W czasie użytkowania Wilczego Szańca Hitler najdłużej
              przebywał w kwaterze „Wehrwolf” koło Winnicy na Ukrainie (w
              okresie od lipca do października 1942 oraz od lutego do marca i w
              sierpniu 1943) oraz w swojej rezydencji Berghof w Berchtesgaden.
            </p>
            <p>
              W I strefie zamkniętej obok Hitlera stale przebywali Martin
              Bormann (szef kancelarii NSDAP i sekretarz Hitlera), Wilhelm
              Keitel, Alfred Jodl, przedstawiciele poszczególnych rodzajów sił
              zbrojnych, stenografowie, przyboczni lekarze Hitlera, adiutanci i
              inni związani z obsługą sztabu głównego. Codzienne życie w
              kwaterze koncentrowało się wokół narad. Zwykle ok. godziny 12.00
              odbywała się narada główna z omówieniem sytuacji na frontach,
              około godziny 18.00 odbywało się omówienie wydarzeń, jakie zaszły
              w ciągu dnia, a ostatnie spotkanie około północy.
            </p>
            <p>
              Wilczy Szaniec odwiedzali przedstawiciele państw współpracujących
              z hitlerowskimi Niemcami (Bułgarii, Finlandii, Francji – premier
              rządu Vichy, Japonii, Rumunii, Słowacji, Włoch – kilkakrotnie
              Benito Mussolini). Do kwatery przybywali także podwładni Hitlera z
              terenów krajów okupowanych i Niemiec, w tym Hans Frank i Erich
              Koch.
            </p>
            <p>
              W Wilczym Szańcu podejmowano najważniejsze decyzje związane z
              przebiegiem II wojny światowej. Tutaj w dniu 20 lipca 1944 Claus
              von Stauffenberg dokonał nieudanego zamachu na Hitlera.
            </p>
            <p>
              Hitler opuścił Wilczy Szaniec w dniu 20 listopada 1944, gdy front
              zbliżył się niebezpiecznie blisko (wcześniej trwały już walki o
              pobliską Gołdap). Po opuszczeniu kwatery przez Hitlera wywieziono
              z obiektu całą dokumentację i ważniejsze urządzenia.
            </p>
            <p>
              W dniach 21 i 22 stycznia 1945 Wilczy Szaniec użytkowany był przez
              sztab 4 Armii gen. Friedricha Hossbacha. Gen. Hossbach bez wiedzy
              Hitlera w dniu 22 stycznia 1945 wydał rozkaz wycofania wojsk
              niemieckich z rejonu Wielkich Jezior Mazurskich.
            </p>
            <PhotoView src={photosSrc[2]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[2]}
                alt="Wilczy Szaniec"
                title={photosTitle[2]}
              />
            </PhotoView>
            <h4>Koniec „Wilczego Szańca” – wysadzenie</h4>
            <p>
              Wysadzenia obiektów na terenie Wilczego Szańca dokonali saperzy z
              Grupy Korpuśnej gen. Eduarda Hausera w nocy 24/25 stycznia 1945 po
              zajęciu przez Armię Czerwoną w dniu 24 stycznia 1945 pobliskiego
              Węgorzewa. Szacuje się, że na wysadzenie jednego schronu typu
              ciężkiego zużywano kilka ton trotylu lub melinitu. Według świadków
              fala uderzeniowa wybuchów spowodowała pękanie szyb w oknach domów
              odległego o 7 kilometrów Kętrzyna.
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
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Wilczy_Szaniec"
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
