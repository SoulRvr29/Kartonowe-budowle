import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzBramaHistory from "../historySections/SandomierzBramaHistory";
import ModelInfo from "../components/ModelInfo";
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
      <SandomierzBramaHistory id={id} />
    </>
  );
};

export default Article;
