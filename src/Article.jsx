import modelsData from "./models-data.json";

const Article = () => {
  const model = modelsData[0];
  return (
    <article className="mb-8">
      {/* horizontal rule */}
      <div className="grad-hr relative bottom-[1px] z-0" />
      <h2 className="text-xl py-1 px-4 text-accent-2 bg-text-dark bg-opacity-30 text-left">
        {model.name}
      </h2>
      {/* horizontal rule */}
      <div className="grad-hr relative bottom-[1px] z-0" />
      <img className="p-8 float-left" src={model.photos.real} alt="będzin" />
      <p className="p-8 text-justify">{model.description}</p>
    </article>
  );
};

export default Article;
