import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import StarshipSN15History from "../historySections/StarshipSN15History";
const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <StarshipSN15History id={id} />
    </>
  );
};

export default Article;
