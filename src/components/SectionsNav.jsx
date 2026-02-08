const SectionsNav = () => {
  const scrollHandler = () => {
    let y = window.scrollY;
    y > 550
      ? (document.querySelector(".sectionsNav").style.display = "flex")
      : (document.querySelector(".sectionsNav").style.display = "none");
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <div className="sectionsNav z-50 absolute -bottom-8 left-0 w-full flex gap-4 px-4 text-base font-semibold bg-bkg bg-opacity-80 py-1 border-b-2 border-accent border-opacity-20">
      <div className="hover:underline hover:cursor-pointer">Model</div>
      <div
        href=".gallery-cont"
        className="hover:underline hover:cursor-pointer"
      >
        Galeria
      </div>
      <div className="hover:underline hover:cursor-pointer">Komentarze</div>
      <div className="hover:underline hover:cursor-pointer">Historia</div>
    </div>
  );
};
export default SectionsNav;
