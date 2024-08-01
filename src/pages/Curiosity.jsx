import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import CuriosityHistory from "../historySections/CuriosityHistory";
import ModelInfo from "../components/ModelInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Curiosity - ModelCraft";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <CuriosityHistory id={id} />
    </>
  );
};

export default Article;
