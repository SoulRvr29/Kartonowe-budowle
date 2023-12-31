import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../data/models-data.json";

const WangHistory = ({ id }) => {
  const [historyState, setHistoryState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const photo = data.filter((item) => item.id == id)[0].photo;
  const src = (nr) => {
    return photo + nr + ".jpg";
  };
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
      {historyState === true && (
        <article className="px-8">
          <LazyLoadImage
            className="pr-8 float-left "
            src={src(1)}
            alt="zdjęcie"
            title="Świątynia Wang w Norwegii, rysunek F.W. Schiertza z 1841 roku"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <p>
            <span className="first-letter font-playfair">K</span>ościół został
            zbudowany z sosnowych bali w miejscowości Vang w południowej
            Norwegii, na przełomie XII i XIII wieku. Powstał jako jeden z około
            tysiąca (przetrwało kilkadziesiąt) norweskich kościołów klepkowych
            (słupowych) – stavkirke. Uważany jest za najstarszy drewniany
            kościół w Polsce.
          </p>
          <p>
            W XIX wieku świątynia stała się już za mała na potrzeby ludności
            miejscowości Vang, która chcąc wybudować sobie nowy kościół, musiała
            zaciągnąć pożyczkę na pokrycie kosztów budowy. Kościół był mocno
            zniszczony, ale nadawał się do sprzedaży w celu rozbiórki i
            odbudowania w innym miejscu. Wtedy norweski malarz Jan Krystian Dahl
            przebywający w Dreźnie skłonił pruskiego króla Fryderyka Wilhelma IV
            do jej zakupu za 427 marek dla berlińskiego muzeum.
          </p>
          <p>
            W 1841 rozebraną świątynię przewieziono najpierw do Szczecina, a
            potem do Berlina, jednak zaprzyjaźniona z królem hrabina Fryderyka
            von Reden z Bukowca przekonała go, żeby przewieźć ją na Śląsk.
            Argumentem było to, że gmina, do której należał Karpacz Górny,
            Borowice, Wilcza Poręba i Budniki, nie miała kościoła i była
            obsługiwana okazjonalnie przez duchownych z Kowar lub Miłkowa.
            Dokładne położenie wyznaczył dyrektor sobieszowskiego zarządu dóbr
            rodu Schaffgotschów, wyliczając najkrótsze czasy dojścia z
            poszczególnych miejscowości. Wzięto też pod uwagę scenerię, w jakiej
            miał stanąć kościółek. Świątynię najpierw Odrą przewieziono do
            Malczyc, potem drogą lądową do Karpacza Górnego (wówczas niem.
            Brückenberg – Mostowa Góra), w którym znalazł się w roku 1842.
          </p>
          <p>
            Znaczna część oryginalnych elementów kościoła nie nadawała się do
            użytku. Kierujący budową pisał w kwietniu 1844 roku, że z Norwegii
            przewieziono tylko jedną piętnastą jego fragmentów. Brakujące części
            dorabiano w trakcie budowy na podstawie rysunków. W zrekonstruowanym
            kościele wybudowano krużganki, wieżę oraz wykonano okna w
            krużgankach i w ścianach wewnętrznych, których pierwotny kościół nie
            posiadał. Oryginalne są umieszczone pośrodku kościoła cztery
            drewniane kolumny oraz bogato rzeźbione portale, a także rzeźbione
            lwy nordyckie. Spośród późniejszych elementów na uwagę zasługuje
            bogato zdobiony krucyfiks wyrzeźbiony w jednym pniu dębowym przez
            Jakuba z Janowic w 1846 roku.
          </p>
          <LazyLoadImage
            className="pl-8 float-right "
            src={src(2)}
            alt="zdjęcie"
            title="Świątynia Wang w 2006 roku."
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <p>
            28 lipca 1844 świątynia Wang stała się kościołem miejscowej parafii
            ewangelickiej i jest nim nadal. Stanowi atrakcję turystyczną
            Karpacza.
          </p>
          <p>
            Konstrukcja kościoła wykonana jest bez użycia gwoździ, wszystkie
            połączenia zrealizowano przy pomocy drewnianych złączy ciesielskich.
            Wnętrze świątyni ozdobione jest oryginalnymi zdobieniami i rzeźbami.
            Bryła obiektu podczas prac konserwatorskich, zgodnie z XIX-wiecznymi
            trendami konserwatorskimi, uległa znacznej rozbudowie. Dobudowano
            też wysoką kamienną dzwonnicę, która chroni drewnianą świątynię
            przed wiatrem znad Śnieżki. Kościół posiada 3 dzwony: Owieczka Boża,
            Ojcze Nasz i Chwała Chrystusowi.
          </p>
          <p>
            W latach 1963-1965 przeprowadzono prace konserwatorskie. Odnowiono
            malowanie elementów drewnianych. Wymieniono pokrycie dachowe z łupku
            na gont przycinany według wzorów norweskich. Wykonano instalację
            elektryczną i ogrzewanie.
          </p>
          <p>
            Na przykościelnym cmentarzu pochowani zostali zarówno wierni z
            miejscowej parafii (np. Henryk Tomaszewski) oraz ich duszpasterze,
            jak również osoby, które zginęły w górach (np. Julianne Caroline
            Korber – właścicielka Riesenbaude, zmarła 22 listopada 1884 i
            pochowana 6 dni później). 29 kwietnia 2014 roku na cmentarzu przy
            świątyni Wang został pochowany Tadeusz Różewicz.
          </p>
          <p>
            W miejscu dawnego pomnika żołnierzy-ofiar I wojny światowej znajduje
            się rzeźba „Wskrzeszenie Łazarza” autorstwa Ryszarda Zająca.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <LazyLoadImage
              className="max-h-[20rem] cursor-pointer max-sm:w-full "
              src={src(3)}
              alt="zdjęcie"
              title="Świątynia Wang obecnie."
              onClick={(e) => {
                setProp(e);
                setFullScreen(true);
              }}
            />
            <LazyLoadImage
              className="max-h-[20rem] cursor-pointer max-sm:w-full "
              src={src(4)}
              alt="zdjęcie"
              title="Świątynia Wang obecnie."
              onClick={(e) => {
                setProp(e);
                setFullScreen(true);
              }}
            />
          </div>
        </article>
      )}
    </>
  );
};

export default WangHistory;
