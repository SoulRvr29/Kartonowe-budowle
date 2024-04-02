import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import JastarniaHistory from "../historySections/JastarniaHistory";
import LightInfo from "../components/LightInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Jastarnia - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <JastarniaHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
