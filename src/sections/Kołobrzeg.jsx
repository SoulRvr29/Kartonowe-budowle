import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import KołobrzegHistory from "../articles/KołobrzegHistory";
import LightInfo from "../components/LightInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <KołobrzegHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
