import modelsData from "../data/models-data.json";

const ArticleHeader = ({ id }) => {
  const model = modelsData.filter((item) => item.id == id)[0];
  return (
    <header className="article-header relative bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="grad-rad grad-rad-l"></div>
        <div className="grad-rad grad-rad-r"></div>
      </div>
      <hr className="grad-hr" />
      <div className="article-text">
        <h2 className="font-Calistoga tracking-widest text-center text-3xl  max-sm:text-xl font-semibold pt-2 px-2  dark:text-accent-2 text-accent-4 dark:drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] drop-shadow-[1px_0px_0px_rgba(0,0,0,0.5)]">
          {model.name} <br />
        </h2>
        <hr className="max-w-3xl mx-auto hr dark:bg-accent-2 bg-accent-4" />
        <p className="max-w-3xl font-bold text-lg mx-auto text-center max-sm:text-sm px-4 drop-shadow-sm dark:text-text-light text-text-dark">
          {model.description}
        </p>
      </div>
      <hr className="grad-hr" />
    </header>
  );
};

export default ArticleHeader;
