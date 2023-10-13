import modelsData from "../data/models-data.json";
import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import { useState } from "react";

const Article = () => {
  const model = modelsData[4];
  const [historyState, setHistoryState] = useState(true);
  return (
    <article className=" mb-8 text-text-light">
      <ArticleHeader id={4} />
      <Gallery id={4} />
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
