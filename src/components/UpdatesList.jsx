import React from "react";
import updates from "../data/updates.json";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Update = ({ date, description }) => {
  return (
    <div className="flex max-sm:flex-col gap-4 max-sm:gap-2 border-b border-text-dark/50 dark:border-accent last:border-none py-2 max-sm:py-1 bg-white bg-opacity-20 dark:bg-opacity-5 px-4 max-sm:px-2 last:rounded-b-xl">
      <span className="max-sm:w-fit whitespace-nowrap max-sm:text-xs max-sm:pr-0 border-r border-text-dark/50 dark:border-text-light max-sm:border-r-0 max-sm:border-b pr-4 text-accent-4 dark:text-accent-2">
        {date}
      </span>
      <p className="m-0 max-sm:text-sm text-left">{description}</p>
    </div>
  );
};

const UpdatesList = () => {
  const [visibleUpdates, setVisibleUpdates] = useState(
    updates.length < 3 ? updates.length : 3,
  );

  return (
    <div className="rounded-xl dark:bg-accent/30 bg-white/30 py-0 drop-shadow-lg h-fit w-fit min-w-[50rem] max-lg:min-w-full m-auto">
      <h4 className="text-lg max-sm:text-base text-center m-0 pb-1">
        Ostatnie aktualizacje
      </h4>
      {updates
        .slice(updates.length - visibleUpdates, updates.length)
        .reverse()
        .map((update) => (
          <Update
            key={update.id}
            date={update.date}
            description={update.description}
          />
        ))}
      {updates.length > 3 && visibleUpdates !== updates.length && (
        <div className="w-full px-2 text-sm py-2 max-sm:-mb-4 text-center flex justify-center items-center gap-4 max-sm:gap-2 ">
          {" "}
          <button
            onClick={() => {
              if (updates.length - visibleUpdates > 2)
                setVisibleUpdates(visibleUpdates + 3);
              else setVisibleUpdates(updates.length);
            }}
            className="bg-white/10 max-sm:w-full  px-2 py-1 rounded-lg hover:bg-white/20 transition-colors  gap-2"
          >
            Pokaż więcej
          </button>
          <button
            onClick={() => {
              setVisibleUpdates(updates.length);
            }}
            className="bg-white/10 max-sm:w-full  px-2 py-1 rounded-lg hover:bg-white/20 transition-colors gap-2"
          >
            Pokaż wszystko
          </button>
        </div>
      )}
      {updates.length > 3 && visibleUpdates == updates.length && (
        <div className="w-full px-2  text-sm py-2 max-sm:-mb-4 text-center flex justify-center items-center gap-2 ">
          {" "}
          <button
            onClick={() => {
              setVisibleUpdates(3);
            }}
            className="bg-white/10 max-sm:w-full px-2 py-1 rounded-lg hover:bg-white/20 transition-colors gap-2"
          >
            Zwiń listę
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdatesList;
