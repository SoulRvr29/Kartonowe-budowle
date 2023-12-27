import ImagesGrid from "../components/ImagesGrid";

const Article = () => {
  return (
    <>
      <hr className="grad-hr" />
      <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8">
        <p className="max-w-3xl font-bold text-lg mx-auto text-center max-sm:text-sm m-4 drop-shadow-sm dark:text-text-light text-text-dark">
          Witaj na stronie.
          <br />
        </p>
        <p>
          Znajdziesz tu galerie sklejonych przeze mnie modeli kartonowych.
          Modele zacząłem sklejać koło 1998 roku, były to głównie budowle z
          wydawnictwa GPM, ale jest też kilka wyjątków jak rakiety, samoloty,
          czy figurki. Pierwsze modele są wykonane w standardzie bez żadnych
          dodatków. Z czasem doszedł retusz, usztywnianie elementów tekturą,
          roślinność, oświetlenie i dodatkowe wykonane przeze mnie elementy.
          Modele można wybrać z listy powyżej z podziałem na kategorie. Lista
          nie jest jeszcze w pełni kompletna, z czasem będę dodawał kolejne
          pozycje.
        </p>
        <hr className="grad-hr" />
      </header>
      <div className=" mb-8 mx-8">
        <br />
        <h4 className="max-sm:text-base mx-auto">
          Poniżej wybrane zdjęcia z najbardziej wartych uwagi modeli:
        </h4>
        <ImagesGrid />
      </div>
    </>
  );
};

export default Article;
