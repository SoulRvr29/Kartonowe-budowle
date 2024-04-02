import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import PhantomHistory from "../historySections/PhantomF4History";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Phantom F-4B - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <PhantomHistory id={id} />
    </>
  );
};

export default Article;
