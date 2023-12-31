import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import SopotHistory from "../articles/SopotHistory";
import LightInfo from "../components/LightInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <SopotHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
