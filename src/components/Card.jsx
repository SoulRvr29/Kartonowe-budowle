import { NavLink } from "react-router-dom";
import { IoIosConstruct } from "react-icons/io";

const Card = ({ model, overlap, headerSticky }) => {
  const actualYear = new Date().getFullYear();
  const saturation = Math.round(
    ((model["rok ukończenia"] - 2001) / (actualYear - 2001)) * 100 * 2 > 100
      ? 100
      : ((model["rok ukończenia"] - 2001) / (actualYear - 2001)) * 100 * 2,
  );
  // console.log(saturation);
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
        <div className="absolute w-full h-full overflow-hidden z-10">
          {/* new gallery band */}
          {model.new && (
            <div className="absolute top-[1.5rem] scale-75 -left-[4.4rem] text-accent-4 font-bold py-[2px] w-52 text-center leading-4 uppercase text-xs bg-white -rotate-45 tracking-wide">
              nowa galeria
            </div>
          )}
        </div>
        {/* gradient */}
        <div className="rounded-xl max-sm:rounded-md bg-gradient-to-r  from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(0,0,0,0.4)] w-full h-full absolute z-10"></div>
        {/* zdjęcie */}
        {model.card ? (
          <div className="card-container h-[180px] max-sm:h-[150px] dark:shadow-[0_0_12px_black] shadow-[0_0_12px_rgba(0,0,0,0.3)]  rounded-xl max-sm:rounded-md left-0 border-8 max-sm:border-[6px] bg-acc border-accent transition-all duration-300">
            <img
              className="rounded-md max-sm:rounded-sm"
              style={{
                filter: `saturate(${saturation}%)`,
              }}
              src={model.card}
              alt={model.name}
            />
          </div>
        ) : (
          <div>
            <div className="card-container h-[180px] max-sm:h-[150px] dark:shadow-[0_0_12px_black] shadow-[0_0_12px_rgba(0,0,0,0.3)] rounded-xl max-sm:rounded-md left-0 border-8 max-sm:border-[6px] border-accent bg-bkg-light dark:bg-bkg transition-all duration-300">
              <IoIosConstruct
                size={80}
                className="w-full h-full p-6 bg-zinc-300 fill-zinc-600"
              />
            </div>
          </div>
        )}

        {/* nazwa modelu container */}
        <div className="absolute text-white w-full h-full  bg-opacity-50 rounded-xl max-sm:rounded-md grid justify-start place-content-end  top-0  opacity-100 hover:opacity-100 transition-all duration-300 group z-10">
          {/* rok ukończenia */}
          {!model.new && (
            <div
              title="rok ukończenia budowy"
              className="rok-ukonczenia text-accent absolute px-1 top-2 left-2 max-sm:top-[6px] max-sm:left-[6px] text-xs text-left rounded-tl-md max-sm:rounded-tl-sm rounded-br-[4px] leading-5 font-bold bg-white bg-opacity-50 border-r-2 border-b-2 border-accent acti border-opacity-70 transition-all duration-300"
            >
              {model["rok ukończenia"] > 9000
                ? "w budowie"
                : model["rok ukończenia"]}
            </div>
          )}
          {/* nazwa modelu */}
          <div className="nazwa-modelu absolute bottom-0 max-sm:text-center w-full max-sm:py-1 text-sm bg-accent px-3 py-2 pt-[5px] text-left rounded-b-xl max-sm:rounded-b-sm max-sm:m-[6px] max-sm:w-[calc(100%-12px)] leading-4 font-bold bg-gradient-to-r from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(0,0,0,0.4)] pr-6 opacity-0 max-sm:opacity-100 max-sm:bg-opacity-50  group-hover:opacity-100 transition-all duration-300">
            {model.name}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
