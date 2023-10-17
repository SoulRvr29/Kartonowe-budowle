import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import OporowHistory from "../articles/OporowHistory";

const Article = () => {
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={1} />
      <Gallery id={1} />
      <OporowHistory />
    </div>
  );
};

export default Article;
