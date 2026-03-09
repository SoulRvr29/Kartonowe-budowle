import { PiCaretDoubleLeftBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const PaginationNav = ({ currentPage, setCurrentPage, totalPages }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (!isFirstLoad) {
      document.querySelector("#relacja")?.scrollIntoView();
    }
  }, [currentPage]);

  return (
    <nav className="flex justify-center max-md:justify-between gap-8 max-md:gap-4 mx-8 max-md:mx-4">
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
        <PiCaretDoubleLeftBold
          className={`max-md:text-2xl text-3xl text-text-light shadow-md rounded-md max-md:rounded-sm max-md:p-[2px] p-[4px] bg-accent-4 dark:bg-accent bg-opacity-40 hover:bg-opacity-100 ${
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
        <PiCaretDoubleLeftBold
          className={`max-md:text-2xl text-3xl text-text-light shadow-md rounded-md max-md:rounded-sm max-md:p-[2px] p-[4px] bg-accent-4 dark:bg-accent bg-opacity-40 hover:bg-opacity-100 rotate-180 ${
            currentPage === totalPages ? "opacity-0 hover:cursor-default" : ""
          }`}
        />
      </button>
    </nav>
  );
};
export default PaginationNav;
