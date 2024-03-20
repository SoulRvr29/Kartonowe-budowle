import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import WangHistory from "../historySections/WangHistory";
import ModelInfo from "../components/ModelInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <WangHistory id={id} />
    </>
  );
};

export default Article;
