import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import ŚwinoujścieHistory from "../historySections/ŚwinoujścieHistory";
import LightInfo from "../components/LightInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <ŚwinoujścieHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
