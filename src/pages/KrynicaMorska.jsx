import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import KrynicaMorskaHistory from "../historySections/KrynicaMorskaHistory";
import LightInfo from "../components/LightInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Krynica Morska - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <KrynicaMorskaHistory id={id} />
      <LightInfo id={id} />
    </>
  );
};

export default Article;
