import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzHistory from "../articles/SandomierzHistory";
import ModelInfo from "../components/ModelInfo";

const Article = () => {
  const id = 4;
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <SandomierzHistory />
    </div>
  );
};

export default Article;
