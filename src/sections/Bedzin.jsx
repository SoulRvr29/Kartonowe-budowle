import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";
import BedzinHistory from "../articles/BedzinHistory";
import BedzinModel from "../articles/BedzinModel";

const Article = () => {
  return (
    <div className="mb-14">
      <ArticleHeader id={0} />
      <BedzinModel />
      <Gallery id={0} />
      <BedzinHistory />
    </div>
  );
};

export default Article;
