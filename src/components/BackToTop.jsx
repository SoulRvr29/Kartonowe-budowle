const BackToTop = () => {
  const scrollHandler = () => {
    let y = window.scrollY;
    y > 600
      ? (document.querySelector(".btn-up").style.display = "grid")
      : (document.querySelector(".btn-up").style.display = "none");
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <button className="btn-up max-w-6xl fixed bottom-0 w-full hidden z-[12]">
      <a
        className="absolute right-5 bottom-5 mr-2 hover:text-accent hover:scale-125 transition-all uppercase "
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2rem"
          viewBox="0 0 384 512"
          fill="var(--text-light)"
          className=" rounded-full aspect-square p-[2px] bg-accent hover:bg-accent-2 drop-shadow-lg border-2"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </a>
    </button>
  );
};

export default BackToTop;
