import { IoIosArrowUp } from "react-icons/io";

const SectionHeader = ({ sectionState, setSectionState, sectionName }) => {
  return (
    <div className="z-10 relative">
      <div className="absolute w-full h-full -top-2 left-0  bg-gradient-to-b from-transparent via-text-light dark:via-accent to-transparent opacity-20 -z-10"></div>

      <header className="history-cont font-bold ">
        <h3 className="flex flex-wrap text-2xl max-md:text-lg max-[400px]:text-base mx-8 max-sm:mx-4 ">
          <button
            className="arrow-up-down"
            onClick={() => {
              setSectionState(!sectionState);
            }}
          >
            <IoIosArrowUp
              size={28}
              fill="var(--accent-4)"
              className={
                sectionState === false
                  ? "transition-all duration-300 dark:fill-accent-2 mr-2 mt-1 arrow-down max-sm:h-3 rotate-180"
                  : "transition-all duration-300 dark:fill-accent-2 mr-2 mt-1 arrow-up max-sm:h-3"
              }
            />
          </button>
          {sectionName}
        </h3>

        <hr className="dark:bg-accent-2 bg-accent-4" />
      </header>
    </div>
  );
};

export default SectionHeader;
