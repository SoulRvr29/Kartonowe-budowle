import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import StiloHistory from "../historySections/StiloHistory";
import ModelInfo from "../components/ModelInfo";
import LightInfo from "../components/LightInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Stilo - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <StiloHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
