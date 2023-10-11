import modelsData from "../data/models-data.json";
import ArticleHeader from "../components/ArticleHeader";
import Gallery from "../components/Gallery";

const Article = () => {
  const model = modelsData[1];
  return (
    <article className=" mb-8 text-text-light">
      <ArticleHeader id={1} />
      <Gallery id={1} />
      <div className="p-8">
        <img
          className="pb-8 pr-8 float-left "
          src={model.photos.real}
          alt="Oporów"
        />
        <p className=" text-justify">{model.description}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere optio
          amet temporibus tenetur id nisi voluptatum dolor, eveniet suscipit
          quae in corrupti ipsam enim, asperiores deserunt dignissimos nemo sunt
          minima?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolore
          doloribus fugiat ratione eaque saepe porro sed aspernatur soluta
          tempora commodi beatae vel repellendus, consectetur a? Ex harum esse
          cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          similique illo nulla omnis, eaque odit nemo reiciendis reprehenderit
          eveniet hic totam fugiat voluptatibus tenetur minus nesciunt expedita
          iste quos ad?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
          numquam nihil doloremque, doloribus voluptas eius, itaque impedit
          magni porro quam a corrupti dolor illo veritatis cupiditate
          laboriosam? Asperiores, odit temporibus. Atque dolor suscipit, modi
          distinctio provident cupiditate a repellat doloribus voluptate
          perspiciatis aperiam consequuntur. Asperiores minima voluptas libero
          quibusdam, ipsam error repellendus earum! Quas, distinctio saepe.
          Cumque magnam quam qui. Maiores, tempore doloremque! Vero quaerat
          mollitia harum nostrum culpa doloremque, accusantium impedit eveniet
          explicabo excepturi asperiores similique, porro repellendus assumenda
          animi. Ad dolorem libero rem asperiores voluptatem in non cupiditate.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          placeat voluptas aperiam voluptate cum doloremque pariatur porro,
          minima consectetur similique est expedita autem repellat esse dicta
          quis repellendus nostrum laboriosam. Reiciendis laudantium nemo
          laborum vero corrupti quibusdam nostrum aliquid repellat similique
          ullam et tempora optio, commodi molestias deleniti soluta. Aperiam
          quam in eos iste quasi, delectus doloremque nobis corrupti quidem.
          Fugiat quasi facere nihil officia velit minus exercitationem,
          praesentium libero optio perferendis at eius ab voluptatem harum
          commodi ipsa in itaque, atque eum reiciendis laboriosam aliquam
          consectetur autem! Tempore, dolorum? Molestias, vero dicta. Saepe
          placeat nam sed, ratione hic autem ipsam aut, libero reprehenderit
          modi ad vitae molestias! Dolore cupiditate libero quibusdam nemo
          quidem voluptates odio autem dolor officiis quasi. Ullam deserunt
          voluptas minus quidem corporis expedita ipsum atque et debitis
          inventore vitae asperiores non distinctio nam, cum, cupiditate,
          delectus tempora. Suscipit sunt iure accusamus quae ipsa assumenda eum
          maxime.
        </p>
      </div>
    </article>
  );
};

export default Article;
