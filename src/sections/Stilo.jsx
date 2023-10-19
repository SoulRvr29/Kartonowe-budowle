import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import StiloHistory from "../articles/StiloHistory";
import ModelInfo from "../components/ModelInfo";

const Article = () => {
  const id = 2;
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <StiloHistory />
    </div>
  );
};

export default Article;
