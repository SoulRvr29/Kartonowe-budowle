import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import StiloHistory from "../articles/StiloHistory";

const Article = () => {
  return (
    <div className=" mb-8 text-text-light">
      <ArticleHeader id={2} />
      <Gallery id={2} />
      <StiloHistory />
    </div>
  );
};

export default Article;
