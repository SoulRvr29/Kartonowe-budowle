import ImagesGrid from "../components/ImagesGrid";

const Article = () => {
  return (
    <>
      <hr className="grad-hr" />
      <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10">
        <p className="max-w-3xl font-bold text-lg mx-auto text-center max-sm:text-sm px-4 m-4 drop-shadow-sm dark:text-text-light text-text-dark">
          Witaj na stronie. Znajdziesz tu galerie sklejonych przeze mnie modeli
          kartonowych. Modele na liście powyżej są ułożone od najnowszych i
          podzielone na kategorie.
        </p>

        <hr className="grad-hr" />
      </header>
      <article className=" mb-8">
        {/* <h4 className="max-sm:text-base">Poniżej przykładowe zdjęcia</h4> */}
        <ImagesGrid />
      </article>
    </>
  );
};

export default Article;
