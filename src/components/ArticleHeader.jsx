import modelsData from "../data/models-data.json";

const ArticleHeader = ({ id }) => {
  const model = modelsData[id];
  return (
    <header className="article-header bg-text-dark bg-opacity-30  mb-2">
      {/* horizontal rule */}
      <div className=" grad-hr " />
      <h2 className="font-playfair  tracking-widest text-center text-2xl font-semibold pt-1  text-accent-2 drop-shadow-lg">
        {model.name} <br />
      </h2>
      <hr className="max-w-3xl mx-auto" />
      <p className="max-w-3xl font-bold  mx-auto text-center max-sm:text-sm px-4">
        {model.description}
        <br />
        {model.description2}
      </p>
      {/* horizontal rule */}
      <div className="grad-hr " />
    </header>
  );
};

export default ArticleHeader;
