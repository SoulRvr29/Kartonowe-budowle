import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import KrynicaMorskaHistory from "../historySections/KrynicaMorskaHistory";
import LightInfo from "../components/LightInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <KrynicaMorskaHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
