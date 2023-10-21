import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import OporowHistory from "../articles/OporowHistory";
import ModelInfo from "../components/ModelInfo";

const Article = () => {
  const id = 1;
  return (
    <div className=" mb-8">
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <OporowHistory />
    </div>
  );
};

export default Article;
