import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import DarłowoHistory from "../articles/DarłowoHistory";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <DarłowoHistory id={id} />
    </>
  );
};

export default Article;
