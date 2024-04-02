import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzRatuszHistory from "../historySections/SandomierzRatuszHistory";
import ModelInfo from "../components/ModelInfo";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Ratusz w Sandomierzu - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <SandomierzRatuszHistory id={id} />
    </>
  );
};

export default Article;
