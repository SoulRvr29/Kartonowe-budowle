import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import KikutHistory from "../historySections/KikutHistory";
import LightInfo from "../components/LightInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Kikut - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <KikutHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
