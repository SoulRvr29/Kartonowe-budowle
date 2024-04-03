import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const scrollHandler = () => {
    let y = window.scrollY;
    y > 600
      ? (document.querySelector(".btn-up").style.display = "grid")
      : (document.querySelector(".btn-up").style.display = "none");
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <button className="btn-up max-w-7xl fixed bottom-0 w-full hidden z-20">
      <a
        className="absolute right-5 bottom-5 mr-2 hover:text-accent hover:scale-125 transition-all uppercase "
        href="#"
      >
        <FaArrowUp
          size={32}
          fill="var(--text-light)"
          className=" rounded-full aspect-square p-[2px] bg-accent hover:bg-accent-2 drop-shadow-lg border-2"
        />
      </a>
    </button>
  );
};

export default BackToTop;
