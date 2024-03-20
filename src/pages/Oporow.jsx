import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import OporowHistory from "../historySections/OporowHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <OporowHistory id={id} />
    </>
  );
};

export default Article;
