import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import BedzinHistory from "../articles/BedzinHistory";
import ModelInfo from "../components/ModelInfo";
import BedzinArch from "../articles/BedzinArch";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <BedzinHistory id={id} />
      <BedzinArch id={id} />
    </>
  );
};

export default Article;
