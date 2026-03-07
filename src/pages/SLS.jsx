import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import SLSHistory from "../historySections/SLSHistory";
import SLSReport from "../reportSections/SLSReport";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Space Launch System (SLS) - ModelCraft";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      <SLSReport id={id} />
      <SLSHistory id={id} />
    </>
  );
};

export default Article;
