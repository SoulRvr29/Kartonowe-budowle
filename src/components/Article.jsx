import modelsData from "../data/models-data.json";
import Bedzin from "../articles/Bedzin";
import Oporow from "../articles/Oporow";
import { useState } from "react";

const Article = () => {
  const [model, setModel] = useState(modelsData[0].component);
  console.log(model);
  return <></>;
};

export default Article;
