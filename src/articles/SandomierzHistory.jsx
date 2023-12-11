import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SandomierzHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const photo = data.filter((item) => item.id == id)[0].photo;
  const src = (nr) => {
    return photo + nr + ".jpg";
  };
  return (
    <>
      <SectionHeader
        sectionName="Informacje"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
      {sectionState === true && (
        <article className="px-8 max-sm:px-4">
          <h4>Ratusz w Sandomierzu</h4>
          <LazyLoadImage
            className="pr-8 float-left max-w-[400px]"
            src={src(1)}
            alt="ratusz"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
            title="Ratusz w roku 1899."
          />
          <p>
            <span className="first-letter font-playfair">B</span>
            udynek wzniesiony w 1349 r. - wkrótce po najeździe Litwinów.
            Pierwotnie gotycki, był budowlą na planie kwadratu zwieńczoną
            wysoką, ośmioboczną wieżą. Część południowa, najstarsza (na niej
            zegar słoneczny) pochodzi z tego okresu. W XVI w. został rozbudowany
            w formę wydłużonego prostokąta, a następnie zwieńczony attyką
            trójstrefową, której autorstwo przypisywane jest Janowi Marii
            Padovano. Naroża attyki zdobią głowy przedstawiające cztery stany.
            Wieża została dobudowana w XVII wieku.
          </p>
          <p>
            Na ścianie południowej ratusza znajduje się zegar słoneczny wykonany
            w technice sgraffito przez Tadeusza Przypkowskiego (1958), byłego
            właściciela muzeum zegarów w Jędrzejowie. Od strony wschodniej przed
            ratuszem znajduje się figura Matki Boskiej Niepokalanej z 1776 r.
            ustawiona na pamiątkę misji świętej w 1770 r.
          </p>
          <p>
            W ratuszu mieści się Urząd Stanu Cywilnego, w podziemiach klub
            „Lapidarium”. Obok znajduje się wyjście z trasy podziemnej.
          </p>
          <p>
            O godzinie 12.00 z wieży ratuszowej grany jest hejnał sandomierski.
          </p>
          <LazyLoadImage
            className="pl-8 mx-auto"
            src={src(2)}
            alt="ratusz"
            title="Ratusz obecnie"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <hr className="dark:bg-accent-2 bg-accent-4 " />
          <h4 className="">Brama Opatowska</h4>
          <LazyLoadImage
            className="pr-8 float-left max-w-md"
            src={src(3)}
            alt="brama"
            title="Brama Opatowska obecnie."
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />

          <p className="pt-2">
            <span className="first-letter font-playfair">B</span>rama Opatowska
            – gotycka brama wjazdowa z 2 poł. XIV w. w Sandomierzu. Zbudowana z
            fundacji Kazimierza Wielkiego jako część murów obronnych miasta. W
            XVI w. została zwieńczona renesansową attyką ufundowaną przez
            sandomierskiego lekarza Stanisława Bartolona.
          </p>
          <p>
            W czasie powstania styczniowego 8 lutego 1863 r. miał tu miejsce
            dramatyczny epilog bitwy pod Słupczą. Uchodzący z pola bitwy
            rozgromieni powstańcy próbowali stawiać opór na barykadzie
            wzniesionej w Bramie Opatowskiej. Została ona jednak zdobyta już
            przy pierwszym ataku ścigających ich Kozaków.
          </p>
          <p>
            Jest jedyną zachowaną bramą spośród czterech, które prowadziły
            niegdyś do Sandomierza. Poza Opatowską do miasta prowadziły jeszcze
            bramy: Zawichojska, Lubelska i Krakowska oraz dwie furty, spośród
            których zachowała się jedna – Dominikańska, nazywana Uchem Igielnym.
          </p>
        </article>
      )}
    </>
  );
};

export default SandomierzHistory;
