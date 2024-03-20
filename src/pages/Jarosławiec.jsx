import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import JarosławiecHistory from "../historySections/JarosławiecHistory";
import LightInfo from "../components/LightInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <JarosławiecHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
