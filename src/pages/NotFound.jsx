import React from "react";
import { IoIosWarning } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <div className="grid justify-center gap-8 max-sm:gap-4 my-auto p-4 ">
      <IoIosWarning
        size={60}
        className="fill-accent-4 dark:fill-accent-2 mx-auto drop-shadow-md animate-pulse hover:cursor-default"
      />
      <h1 className="mx-auto text-5xl max-sm:text-3xl">404 Not Found</h1>
      <p className="flex gap-2 text-xl max-sm:text-base items-center justify-center">
        Strony nie znaleziono
      </p>
      <button
        onClick={() => window.history.back()}
        className="bg-accent rounded-lg w-fit p-0 px-2 mx-auto flex items-center gap-1 uppercase font-semibold hover:brightness-110 text-text-light drop-shadow-md"
        to="/"
      >
        <FaArrowLeft />
        wróć
      </button>
    </div>
  );
}

export default NotFound;
