import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import GryfinoHistory from "../historySections/GryfinoHistory";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Kościół w Gryfinie - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <GryfinoHistory id={id} />
    </>
  );
};

export default Article;
