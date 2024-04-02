import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import BaranowHistory from "../historySections/BaranowHistory";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Baranów Sandomierski - Kartonowe budowle";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <BaranowHistory id={id} />
    </>
  );
};

export default Article;
