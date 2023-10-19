import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import BedzinHistory from "../articles/BedzinHistory";
import ModelInfo from "../components/ModelInfo";
import BedzinArch from "../articles/BedzinArch";

const Article = () => {
  const id = 0;
  return (
    <div className="mb-14">
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <BedzinHistory />
      <BedzinArch />
    </div>
  );
};

export default Article;
