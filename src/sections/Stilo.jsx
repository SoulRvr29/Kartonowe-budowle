import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import StiloHistory from "../articles/StiloHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <StiloHistory id={id} />
    </>
  );
};

export default Article;
