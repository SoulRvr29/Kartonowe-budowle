import modelsData from "../data/models-data.json";
import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import { useState } from "react";

const Article = () => {
  const model = modelsData[3];
  const [historyState, setHistoryState] = useState(true);
  return (
    <article className=" mb-8 text-text-light">
      <ArticleHeader id={3} />
      <Gallery id={3} />
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
