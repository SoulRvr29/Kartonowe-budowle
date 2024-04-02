import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import CuriosityHistory from "../historySections/CuriosityHistory";
import ModelInfo from "../components/ModelInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Curiosity - Kartonowe Budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <CuriosityHistory id={id} />
    </>
  );
};

export default Article;
