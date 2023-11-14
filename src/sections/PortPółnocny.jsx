import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import PortPółnocny from "../articles/PortPółnocny";
import LightInfo from "../components/LightInfo";

const Article = ({ id }) => {
  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <LightInfo id={id} />
      <PortPółnocny id={id} />
    </>
  );
};

export default Article;
