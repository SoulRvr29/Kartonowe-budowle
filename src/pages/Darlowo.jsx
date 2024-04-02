import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import DarłowoHistory from "../historySections/DarłowoHistory";
import LightInfo from "../components/LightInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Darłowo - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <DarłowoHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
