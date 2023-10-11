import modelsData from "../data/models-data.json";

const ArticleHeader = (id) => {
  const model = modelsData[id.id];
  return (
    <header className="article-header bg-text-dark bg-opacity-30 px-8 mb-2">
      {/* horizontal rule */}
      <div className=" grad-hr " />
      <h2 className=" text-center text-2xl font-bold pt-1  text-accent-2">
        {model.name} <br />
      </h2>
      <hr className="max-w-3xl mx-auto" />
      <p className="max-w-3xl font-bold  mx-auto text-center ">
        {model.description}
      </p>
      {/* horizontal rule */}
      <div className="grad-hr " />
    </header>
  );
};

export default ArticleHeader;
