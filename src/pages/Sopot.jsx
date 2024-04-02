import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import SopotHistory from "../historySections/SopotHistory";
import LightInfo from "../components/LightInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Sopot - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <SopotHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
