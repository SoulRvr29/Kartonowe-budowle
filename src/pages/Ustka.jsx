import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import UstkaHistory from "../historySections/UstkaHistory";
import LightInfo from "../components/LightInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Ustka - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <UstkaHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
