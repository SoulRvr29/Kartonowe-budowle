import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import SandomierzHistory from "../articles/SandomierzHistory";

const Article = () => {
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={4} />
      <Gallery id={4} />
      <SandomierzHistory />
    </div>
  );
};

export default Article;
