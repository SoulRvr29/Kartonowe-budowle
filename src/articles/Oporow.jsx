import modelsData from "../data/models-data.json";
import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";

const Article = () => {
  const model = modelsData[1];
  const [historyState, setHistoryState] = useState(true);
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={1} />
      <Gallery id={1} />
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {historyState === true && (
        <article className="px-8">
          <img
            className="pb-8 pr-8 float-left "
            src={model.photos[0]}
            alt="Oporów"
          />

          <p>
            <span className="first-letter font-playfair">O</span>porów k/Kutna
            wieś w powiecie kutnowskim, województwie łódzkim, historycznie
            związany z ziemią łęczycką, wzmiankowany w źródłach historycznych od
            XIV w., był siedzibą rodu Oporowskich, herbu Sulima. Przed 1424 r.
            uzyskał prawa miejskie, które utracił w końcu XVIII w. Rezydencję
            rodową – zamek zbudował arcybiskup Władysław Oporowski, syn Mikołaja
            wojewody łęczyckiego, właściciel dóbr oporowskich w latach
            1428-1453. Na początku XVII w. dziedzictwo przejęła rodzina
            Tarnowskich herbu Rola, w XVIII w. dobra wraz z zamkiem należały do
            Sołłohubów. W XIX w. Oporów kilkakrotnie sprzedawany był kolejno
            własnością Korzeniowskich, Pociejów, Oborskich, Orsettich, a od 1932
            r. Karskich.
          </p>
          <p>
            Zamek, mała późnogotycka rezydencja obronna wzniesiona około 1440 r.
            usytuowana na wyspie otoczonej fosą, jest jednym z niewielu tego
            typu zabytków zachowanych w Polsce. Zabudowa skupiona wokół
            czworobocznego dziedzińca składa się z domu mieszkalnego, wieży,
            baszty z kaplicą, połączonych murem obronnym. Remonty wykonane w
            XVII, XVIII i XIX wieku spowodowały tylko niewielkie przeróbki.
            Pozostały po nich barokowe otwory okienne na piętrze, klasycystyczne
            sztukaterie, parkiety i przebudowana w XVIII i XIX w. część bramna.
            Z około 1840 r. pochodzi przybudówka na dziedzińcu, tzw. „Kredens”
            oraz neogotycki portal bramy wjazdowej i taras przed mostem. Zamek
            otacza krajobrazowy park założony w 1. poł. XIX w., w którym
            czytelne jest wcześniejsze założenie XVII-wiecznego ogrodu.
          </p>
          <p>
            Gruntowne prace konserwatorskie wykonane w latach 1962-1965 usunęły
            część przebudowy z XIX w., przywróciły pierwotną sylwetkę dachów i
            ganek komunikacyjny domu mieszkalnego. Spod tynków odsłonięto
            gotyckie portale i okna oraz drewniane, polichromowane stropy.
          </p>
          <p>
            Zamek od 1949 r. mieści muzeum z ekspozycją wnętrz dworskich. Tworzą
            ją dzieła sztuki i wyroby rzemiosła artystycznego prezentujące
            kulturę szlachecką. Zbiory zawierają dzieła sztuki z różnych epok,
            od XVI do pocz. XX. – obrazy, rzeźby, wyroby rzemiosła
            artystycznego. Pochodzą one z przekazów, darów i zakupów. Nieliczne
            tylko eksponaty związane są z historią zamku. Należą do nich
            portrety rodziny Sołłohubów z XVIII w., lustra z żardinierami z
            pocz. XIX w., pistolety pojedynkowe z XVIII i XIX w. oraz naczynia
            fajansowe angielskie z Shelton XIX w.
          </p>
        </article>
      )}
    </div>
  );
};

export default Article;
