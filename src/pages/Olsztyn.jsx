import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import OlsztynHistory from "../historySections/OlsztynHistory";
import ModelInfo from "../components/ModelInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Zamek w Olsztynie - ModelCraft";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <OlsztynHistory id={id} />
    </>
  );
};

export default Article;
