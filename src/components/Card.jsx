import { NavLink } from "react-router-dom";
import { IoIosConstruct } from "react-icons/io";

const Card = ({ model, overlap, headerSticky }) => {
  if (model.id === 38) {
    console.log(model.card);
  }
  return (
    <div
      className={
        overlap
          ? "nav-card first:-ml-0 aspect-square h-[180px] max-sm:h-[150px] max-md:left-0 ml-[1rem] relative transition-all duration-300 hover:rotate-3 max-md:ml-0 max-md:last:mr-0 "
          : "nav-card first:-ml-0 aspect-square h-[180px] max-sm:h-[150px] -left-12 max-md:left-0 -ml-[4.2rem] relative  hover:-translate-x-14 hover:translate-y-0 transition-all duration-300 hover:rotate-3 last:-mr-24 hover:last:-translate-x-2 max-md:ml-0 max-md:last:mr-0 max-md:hover:translate-x-0 max-md:hover:last:translate-x-0"
      }
    >
      <NavLink
        onClick={() => {
          if (localStorage.getItem("autoScroll") == "true") {
            // document.querySelector(".article-header").scrollIntoView();
            const articleSection = document.querySelector(".article-header");
            const header = document.querySelector("header");
            const articleTop =
              articleSection.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
              top: articleTop - header.offsetHeight,
              behavior: "smooth",
            });
          }
        }}
        to={model.link}
      >
        <div className="absolute w-full h-full overflow-hidden z-0">
          {/* new gallery band */}
          {model.new && (
            <div className="absolute top-[1.5rem] scale-75 -left-[4.4rem] text-accent-4 font-bold py-[2px] w-52 text-center leading-4 uppercase text-xs bg-white -rotate-45 tracking-wide">
              nowa galeria
            </div>
          )}
        </div>
        {/* gradient */}
        <div className="rounded-xl  bg-gradient-to-r  from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(0,0,0,0.2)] w-full h-full absolute"></div>
        {/* zdjęcie */}
        {model.card ? (
          <img
            className="h-[180px] max-sm:h-[150px] dark:shadow-[0_0_12px_black] shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-xl left-0 border-8 max-sm:border-[6px] border-accent bg-bkg-light dark:bg-bkg"
            src={model.card}
            alt={model.name}
          />
        ) : (
          <div className="h-[180px] max-sm:h-[150px] dark:shadow-[0_0_12px_black] shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-xl left-0 border-8 max-sm:border-[6px] border-accent bg-bkg-light dark:bg-bkg">
            <IoIosConstruct
              size={80}
              className="w-full h-full p-6 opacity-50"
            />
          </div>
        )}

        {/* nazwa modelu container */}
        <div className="absolute text-white w-full h-full  bg-opacity-50 rounded-xl grid justify-start place-content-end  top-0  opacity-0 hover:opacity-100 transition-all duration-300">
          {/* rok ukończenia */}
          {!model.new && (
            <div
              title="rok budowy modelu"
              className="text-accent absolute px-1 top-2 left-2 text-xs text-left rounded-tl-[4px] rounded-br-[4px] leading-5 font-bold bg-white"
            >
              {model["rok ukończenia"] == 9999
                ? "w budowie"
                : model["rok ukończenia"]}
            </div>
          )}
          {/* nazwa modelu */}
          <div className="nazwa-modelu absolute bottom-0 w-full max-sm:py-1 text-sm  bg-accent px-3 py-2 pt-[5px] text-left rounded-b-xl leading-4 font-bold bg-gradient-to-r  from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(0,0,0,0.2)] pr-6 ">
            {model.name}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
