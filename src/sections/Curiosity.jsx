import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import CuriosityHistory from "../articles/CuriosityHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <CuriosityHistory id={id} />
    </>
  );
};

export default Article;
