import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import WangHistory from "../historySections/WangHistory";
import ModelInfo from "../components/ModelInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Świątynia Wang - ModelCraft";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <WangHistory id={id} />
    </>
  );
};

export default Article;
