import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import BedzinHistory from "../historySections/BedzinHistory";
import ModelInfo from "../components/ModelInfo";
import BedzinArch from "../historySections/BedzinArch";

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
