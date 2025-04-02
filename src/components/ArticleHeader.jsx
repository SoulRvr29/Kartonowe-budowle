import modelsData from "../data/models-data.json";

const ArticleHeader = ({ id }) => {
  const model = modelsData.filter((item) => item.id == id)[0];
  return (
    <header className="article-header relative bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] dark:via-[rgba(0,122,204,0.1)] to-transparent z-10 ">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="grad-rad grad-rad-l"></div>
        <div className="grad-rad grad-rad-r"></div>
      </div>
      <hr className="grad-hr" />
      <div className="article-text">
        {/* <h2 className="font-Calistoga tracking-widest text-center text-3xl  max-sm:text-xl font-semibold pt-2 px-2  dark:text-accent-2 text-accent-4 dark:drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] drop-shadow-[1px_0px_0px_rgba(0,0,0,0.5)]"> */}
        <h2 className="font-Calistoga tracking-widest text-center text-3xl  max-sm:text-2xl font-semibold pt-2 px-2  dark:text-transparent text-transparent dark:drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] drop-shadow-[1px_0px_0px_rgba(0,0,0,0.5)] bg-clip-text bg-gradient-to-br from-accent-2 via-accent-4 to-text-dark from-30% to-90% dark:from-accent-3 dark:via-accent-2 dark:to-accent-4 dark:from-30% dark:to-80%">
          {model.name} <br />
        </h2>
        <hr className="max-w-3xl mx-auto hr dark:bg-accent-2 bg-accent-4" />
        <p className="max-w-3xl font-bold text-lg mx-auto text-center max-sm:text-base px-4 drop-shadow-sm text-transparent bg-gradient-to-br from-accent-4 to-text-dark from-0% to-70% dark:text-text-light bg-clip-text dark:bg-none">
          {model.description}
        </p>
      </div>
      <hr className="grad-hr" />
    </header>
  );
};

export default ArticleHeader;
