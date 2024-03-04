import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import StiloHistory from "../articles/StiloHistory";
import ModelInfo from "../components/ModelInfo";
import LightInfo from "../components/LightInfo";
const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <StiloHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
