import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SectionHeader = ({
  sectionState,
  setSectionState,
  sectionName,
  sectionNumber,
}) => {
  return (
    <div className="z-10 relative">
      <div className="absolute w-full h-full -top-2 left-0  bg-gradient-to-b from-transparent via-text-light dark:via-accent to-transparent opacity-20 -z-10"></div>

      <header className="history-cont font-bold">
        <h3 className="flex flex-wrap items-center text-2xl max-sm:text-lg max-[400px]:text-base mx-6 max-sm:mx-2">
          <button
            className="arrow-up-down"
            onClick={() => {
              setSectionState(!sectionState);
            }}
          >
            {sectionState ? (
              <IoIosArrowUp
                size={28}
                fill="var(--accent-4)"
                className="transition-all duration-300 dark:fill-accent-2 mr-2 mt-1 max-sm:mt-0 arrow-up max-sm:h-6"
              />
            ) : (
              <IoIosArrowDown
                size={28}
                fill="var(--accent-4)"
                className="transition-all duration-300 dark:fill-accent-2 mr-2 mt-1 max-sm:mt-0 arrow-down max-sm:h-6 "
              />
            )}
          </button>
          {sectionName}
          {sectionNumber > 0 && (
            // <div className="grid place-content-center ml-2 opacity-30 text-xl max-md:text-xs">{`(${sectionNumber})`}</div>
            <div className="grid place-content-center px-[5px] max-sm:px-[3px] h-7 max-sm:h-6 mt-1 ml-2  text-lg max-sm:text-sm max-sm:mt-0 rounded-md border-2 dark:border-accent-2 opacity-90 border-accent-4 border-opacity-50 dark:border-opacity-50 text-accent-4  dark:text-accent-2 text-opacity-80 dark:text-opacity-70">{`${sectionNumber}`}</div>
          )}
        </h3>

        <hr className="dark:bg-accent-2 bg-accent-4" />
      </header>
    </div>
  );
};

export default SectionHeader;
