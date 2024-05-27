import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import ŚwinoujścieHistory from "../historySections/ŚwinoujścieHistory";
import LightInfo from "../components/LightInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Świnoujście - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <ŚwinoujścieHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
