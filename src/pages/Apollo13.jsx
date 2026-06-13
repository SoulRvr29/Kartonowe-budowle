import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import ModelInfo from "../components/ModelInfo";
import Apollo13Report from "../reportSections/Apollo13Report";
import Apollo13History from "../historySections/Apollo13History";
import LunarModuleHistory from "../historySections/LunarModuleHistory";
import Comments from "../components/Comments";
import { useEffect } from "react";

const Article = ({ id }) => {
  useEffect(() => {
    document.title = "Lądownik księżycowy LM-7 Aquarius - ModelCraft";
  }, []);

  return (
    <>
      <ArticleHeader id={id} />
      <ModelInfo id={id} />
      <Gallery id={id} />
      <Comments id={id} />
      {/* <Apollo13Report id={id} /> */}
      <LunarModuleHistory id={id} />
      <Apollo13History id={id} />
    </>
  );
};

export default Article;
