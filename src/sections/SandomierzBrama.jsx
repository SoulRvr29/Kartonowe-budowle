import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzBramaHistory from "../articles/SandomierzBramaHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <SandomierzBramaHistory id={id} />
    </>
  );
};

export default Article;
