import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzBramaHistory from "../historySections/SandomierzBramaHistory";
import ModelInfo from "../components/ModelInfo";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Brama Opatowska w Sandomierzu - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <SandomierzBramaHistory id={id} />
    </>
  );
};

export default Article;
