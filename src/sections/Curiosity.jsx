import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import CuriosityHistory from "../articles/CuriosityHistory";
import ModelInfo from "../components/ModelInfo";

const Article = () => {
  const id = 3;
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <CuriosityHistory />
    </div>
  );
};

export default Article;
