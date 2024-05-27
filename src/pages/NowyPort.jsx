import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import NowyPortHistory from "../historySections/NowyPortHistory";
import LightInfo from "../components/LightInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Nowy Port - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <NowyPortHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
