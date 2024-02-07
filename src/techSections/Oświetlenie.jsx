import TechHeader from "../components/TechHeader";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article = () => {
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
  const photosSrc = [
    "techSections/2121221.jpg",
    "/techSections/5885548.png",
    "/techSections/SS850678 copy.jpg",
    "/techSections/SS852693.JPG",
  ];
  const photosTitle = [
    "porównanie kilku rodzajów diod LED",
    "",
    "",
    "dwie diody SMD 0805 w latarni ulicznej",
  ];
  const photoClickHandler = (e) => {
    setPhotoIndex(photosSrc.indexOf(e.target.getAttribute("src")));
    document.querySelector("body").classList.add("site-overflow");
  };
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <ArticleGallery
        photosSrc={photosSrc}
        photosTitle={photosTitle}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      <TechHeader title="Oświetlenie w modelach kartonowych" />
      <article>
        <p>
          Do wykonania oświetlenia używam różnego rodzaju diod LED, zazwyczaj
          białych o ciepłej barwie światła. Można je podzielić na dwa typy -
          standardowe i SMD.
        </p>
        {/* placeholder */}
        <div className="bg-[#222] border-2 border-[#333] w-[24rem] h-[16rem] mx-auto text-gray-500 grid place-content-center">
          wiele różnych diod
        </div>
        <h3>Diody standardowe</h3>
        <p>
          Mają wąski kąt świecenia (kilkadziesiąt stopni), dają ładny efekt
          snopów światła przy oświetlaniu ścian, ale z racji rozmiarów i
          sztywnych nóżek są trudne w montażu. Pod takie diody trzeba
          przygotować otwory i odpowiednio dużo miejsca. Do podświetlania ścian
          używam diod o średnicy 3mm, jako światło w latarniach morskich o
          średnicy 5mm.
        </p>
        {/* placeholder */}
        <div className="bg-[#222] border-2 border-[#333] w-[24rem] h-[16rem] mx-auto text-gray-500 grid place-content-center">
          kilka diod standardowych
        </div>
        <h3>Diody SMD (Surface Mount Device)</h3>
        <p>
          Mają szeroki kąt świecenia (do 160 stopni), niewielkie rozmiary i są
          łatwe w montażu. Używam zazwyczaj SMD 3528 (3.5mm na 2.8mm), a do
          mniejszych elementów jak np. światło latarnii ulicznej przy zamku w
          Będzinie SMD 0805.
        </p>
        {/* placeholder */}
        <div className="bg-[#222] border-2 border-[#333] w-[24rem] h-[16rem] mx-auto text-gray-500 grid place-content-center">
          kilka diod SMD
        </div>
        <h3>Podłączenie</h3>
        Diody podłączam do zasilania 9V, do każdej dodaję opornik 330Ω. Wartośc
        opornika można łatwo obliczyć z poniższego wzoru:
        {/* placeholder */}
        <div className="bg-[#222] border-2 border-[#333] w-[14rem] h-[6rem] mx-auto text-gray-500 grid place-content-center">
          wzór
        </div>
        R to wartość rezystora <br />V<small>s</small> to napięcie zasilania{" "}
        <br /> V<small>f</small> to napięcie przewodzenia diody (dla białych LED
        to zazwyczaj 3V) <br /> I<small>f</small> to prąd przewodzenia diody
        diody (zazwyczaj 20mA).
        <p></p>
        {/* <LazyLoadImage
          className="mx-auto"
          src={photosSrc[3]}
          alt={photosTitle[3]}
          title={photosTitle[3]}
          onClick={(e) => {
            photoClickHandler(e);
          }}
        /> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          eveniet cum, nulla tempora deleniti ad amet architecto eos aperiam
          quod eum cupiditate ex sequi, harum ratione quidem aliquam deserunt
          cumque! Dicta ex aliquam nesciunt velit nihil, illo illum perspiciatis
          eligendi quibusdam aspernatur natus architecto? Eos minus aperiam
          earum consectetur, molestiae rerum illo eligendi. Quo alias molestiae
          id, dolore tempora sequi. Quam ullam sapiente obcaecati eius commodi
          iure reiciendis eum, totam officiis magni rerum sit. Voluptates
          voluptas veritatis nemo beatae consequuntur numquam vel, nesciunt
          dicta distinctio, dolorem doloremque sed quos totam. Quibusdam fugit
          consequuntur accusamus.{" "}
          Dolore, repellendus nam, debitis reprehenderit ut laborum, est magnam
          saepe obcaecati eos veniam neque aliquam? Architecto eum ab assumenda
          nam. Modi vel fugit dolorum illo doloremque! Voluptates numquam, illum
          reiciendis esse atque ipsa quibusdam cumque iusto blanditiis
          architecto autem. Asperiores architecto expedita consectetur
          exercitationem, nihil illo modi aut tempore adipisci pariatur
          voluptatem eaque dolores sunt quasi. Eum nemo voluptatum autem facere
          ab debitis quidem et vel recusandae voluptatem illo quas deserunt
          error id, assumenda aperiam voluptas neque placeat sit natus.
          Excepturi magni in omnis molestias facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quas
          illum corporis hic sapiente qui velit corrupti deleniti. Illum
          reiciendis dicta odit accusantium corrupti officiis eum id corporis
          numquam nesciunt. Eum asperiores totam quae? Fuga quam maiores enim
          temporibus modi adipisci placeat repellat! At corrupti unde quaerat,
          voluptas beatae eveniet et vitae asperiores? Quaerat minus sit culpa
          veniam enim quasi! Praesentium quasi voluptate minima eos odio iusto
          nobis dolorum quae, veritatis magni quam corporis nihil quibusdam quia
          dolore libero mollitia aliquid laborum ducimus voluptatibus. Harum
          nulla temporibus pariatur id debitis? Iure odit reprehenderit unde
          ipsa optio, quos debitis quaerat ipsum quia rerum accusantium aperiam
          natus, aspernatur commodi ad! Blanditiis deserunt est asperiores.
          Saepe repellendus voluptate necessitatibus, molestias alias nostrum
          distinctio?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
          perferendis quidem aut reprehenderit nihil a! Doloremque praesentium
          consequuntur, laudantium natus labore dicta consectetur autem quaerat
          vel tempore. Deserunt, aliquid iste! Labore corporis libero
          voluptatibus vero a distinctio at impedit optio ad. Et laboriosam
          quasi alias recusandae iusto maxime, quos nulla ducimus omnis
          voluptatem aut, blanditiis vero consequuntur numquam facilis dolor.
          Aut odio eum sapiente sint vel id inventore tempora? Est soluta veniam
          perferendis atque autem nisi accusantium a cumque, non nesciunt enim
          repellat ducimus ipsum reprehenderit vitae harum sit corporis? Vitae
          in iusto corrupti aspernatur expedita numquam sapiente a obcaecati,
          sequi, aliquam, libero error at qui blanditiis. Reprehenderit eos
          repudiandae impedit provident aspernatur consectetur? Sapiente aperiam
          rem autem voluptas fugit. Rem consequuntur itaque necessitatibus autem
          eum alias quasi. Consequatur officia maxime delectus quam ducimus
          accusamus voluptatibus itaque perferendis fugiat cum optio quidem et
          blanditiis, consequuntur quos dicta atque dolorem tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          illum iste perspiciatis harum mollitia sit quisquam repellat aliquam
          amet saepe! Id necessitatibus perferendis autem voluptatem rerum
          excepturi neque commodi similique. Placeat laudantium harum fugiat
          nostrum quasi obcaecati beatae adipisci, iure reiciendis! Veniam
          voluptatibus nobis, unde amet quia velit provident accusantium
          aspernatur possimus numquam sed quo quod, necessitatibus, recusandae
          debitis facilis! Quaerat quae ea totam! Dignissimos sunt, recusandae
          voluptatum animi laboriosam voluptas odio, possimus molestias modi
          dolore dolorum iste! Enim ratione aspernatur quisquam nihil. Cumque
          nisi numquam nam accusamus molestias enim.
        </p> */}
      </article>
    </>
  );
};

export default Article;
