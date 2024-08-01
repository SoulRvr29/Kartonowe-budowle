import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import OporowHistory from "../historySections/OporowHistory";
import ModelInfo from "../components/ModelInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Zamek w Oporowie - ModelCraft";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <OporowHistory id={id} />
    </>
  );
};

export default Article;
