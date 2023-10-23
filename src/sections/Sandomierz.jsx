import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzHistory from "../articles/SandomierzHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} name={"Galeria - Ratusz"} />
      <Gallery id={id} name={"Galeria - Brama"} />
      <SandomierzHistory id={id} />
    </>
  );
};

export default Article;
