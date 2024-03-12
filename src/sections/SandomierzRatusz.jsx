import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzRatuszHistory from "../articles/SandomierzRatuszHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <SandomierzRatuszHistory id={id} />
    </>
  );
};

export default Article;
