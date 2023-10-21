import modelsData from "../data/models-data.json";

const ArticleHeader = ({ id }) => {
  const model = modelsData[id];
  return (
    <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30  mb-2">
      {/* horizontal rule */}
      <div className=" grad-hr drop-shadow-[0_1px_0_#666]" />
      <h2 className="font-playfair tracking-widest text-center text-3xl font-semibold pt-1 dark:text-accent-2 text-accent-4 dark:drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] drop-shadow-[1px_0px_0px_rgba(0,0,0,0.5)]">
        {model.name} <br />
      </h2>
      <hr className="max-w-3xl mx-auto hr dark:bg-accent-2 bg-accent-4" />
      <p className="max-w-3xl font-bold text-lg mx-auto text-center max-sm:text-sm px-4 drop-shadow-sm dark:text-text-light text-text-dark">
        {model.description}
        <br />
        {model.description2}
      </p>
      {/* horizontal rule */}
      <div className="grad-hr drop-shadow-[0_1px_0_#666]" />
    </header>
  );
};

export default ArticleHeader;
