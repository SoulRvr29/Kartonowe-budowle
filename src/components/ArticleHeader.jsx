import modelsData from "../data/models-data.json";

const ArticleHeader = (id) => {
  const model = modelsData[id.id];
  return (
    <header className="bg-text-dark bg-opacity-30">
      {/* horizontal rule */}
      <div className="grad-hr " />
      <h2 className=" text-center text-2xl font-bold pt-1 px-4 text-accent-2">
        {model.name} <br />
      </h2>
      <hr className="w-[90%] mx-auto" />
      <p className=" font-bold w-[80%] mx-auto text-center ">
        {model.description}
      </p>
      {/* horizontal rule */}
      <div className="grad-hr " />
    </header>
  );
};

export default ArticleHeader;
