import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import PredatorHistory from "../historySections/PredatorHistory";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Predator - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <PredatorHistory id={id} />
    </>
  );
};

export default Article;
