import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useState, useEffect } from "react";

const PaginationNav = ({ currentPage, setCurrentPage, totalPages }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (!isFirstLoad) {
      document.querySelector("#relacja")?.scrollIntoView();
    }
  }, [currentPage]);

  return (
    <nav className="flex justify-center max-md:justify-between gap-4 mx-8 max-md:mx-4">
      {/* previous button */}
      <button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          setIsFirstLoad(false);
        }}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "opacity-0 hover:cursor-default" : ""
        }`}
      >
        <TbPlayerTrackNextFilled
          className={`max-md:text-2xl text-3xl text-text-light shadow-md rounded-md max-md:rounded-sm max-md:p-[1px] p-[3px] border-2 hover:bg-accent border-text-light dark:border-text-light dark:hover:bg-accent rotate-180 ${
            currentPage === 1 ? "opacity-0 hover:cursor-default" : ""
          }`}
        />
      </button>
      {/* pages numbers */}
      <div className="text-xl max-md:text-base font-semibold">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setIsFirstLoad(false);
              }}
              className={` w-6 ${
                currentPage === index
                  ? "dark:text-accent text-accent-4 text-2xl max-md:text-xl font-bold"
                  : " text-text-light hover:underline"
              }`}
              disabled={currentPage === index}
            >
              {index}
            </button>
          ),
        )}
      </div>
      {/* next button */}
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          setIsFirstLoad(false);
        }}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages ? "opacity-0 hover:cursor-default" : ""
        }`}
      >
        <TbPlayerTrackNextFilled
          className={`max-md:text-2xl text-3xl text-text-light shadow-md rounded-md max-md:rounded-sm max-md:p-[1px] p-[3px] border-2 hover:bg-accent border-text-light dark:border-text-light dark:hover:bg-accent ${
            currentPage === totalPages ? "opacity-0 hover:cursor-default" : ""
          }`}
        />
      </button>
    </nav>
  );
};
export default PaginationNav;
