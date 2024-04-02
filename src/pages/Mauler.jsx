import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import MaulerHistory from "../historySections/MaulerHistory";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Mauler - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <MaulerHistory id={id} />
    </>
  );
};

export default Article;
