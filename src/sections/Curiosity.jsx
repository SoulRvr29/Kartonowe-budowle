import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import CuriosityHistory from "../articles/CurisityHistory";

const Article = () => {
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={3} />
      <Gallery id={3} />
      <CuriosityHistory />
    </div>
  );
};

export default Article;
