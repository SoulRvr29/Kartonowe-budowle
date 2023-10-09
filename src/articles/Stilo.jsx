import modelsData from "../data/models-data.json";

const Article = () => {
  const model = modelsData[2];
  return (
    <article className=" mb-8 text-text-light">
      {/* horizontal rule */}
      <div className="grad-hr relative bottom-[1px] z-0" />
      <h2 className="text-2xl py-1 px-4 text-accent-2 bg-text-dark bg-opacity-30 ">
        {model.name}
      </h2>
      {/* horizontal rule */}
      <div className="grad-hr relative bottom-[1px] z-0" />
      <div className="p-8">
        {/* <img
          className="pb-8 pr-8 float-left "
          src={model.photos.real}
          alt="Oporów"
        /> */}
        <p className=" text-justify">{model.description}</p>
      </div>
    </article>
  );
};

export default Article;
