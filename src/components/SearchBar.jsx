import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import modelsData from "../data/models-data.json";

const SearchBar = ({ data, setData, setActiveList }) => {
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const completeData = modelsData.sort((a, b) => {
    return b["rok ukończenia"] - a["rok ukończenia"];
  });

  function removePLChars(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l")
      .replace(/Ł/g, "L");
  }
  const navigate = useNavigate();

  return (
    <div className="mx-8 max-sm:mx-0 relative flex justify-center">
      {!searchActive && (
        <IoMdSearch
          size={20}
          color="var(--accent)"
          className="absolute left-[calc(50%-2.6rem)] top-[5px] opacity-80 pointer-events-none"
        />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (data.length === 1) {
            navigate(data[0].link);
            if (localStorage.getItem("autoScroll") == "true") {
              const articleSection = document.querySelector(".article-header");
              const header = document.querySelector("header");
              const articleTop =
                articleSection.getBoundingClientRect().top + window.scrollY;

              window.scrollTo({
                top: articleTop - header.offsetHeight,
                behavior: "smooth",
              });
            }
          }
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Szukaj..."
          className="w-[30rem] max-sm:w-screen px-1 pb-[2px] bg-gradient-to-r bg-transparent via-[rgba(0,0,0,0.2)]  dark:via-[rgba(0,0,0,1)] text-lg text-white dark:text-white placeholder:text-white placeholder:-ml-6 dark:placeholder:text-white dark:placeholder:opacity-50 placeholder:text-opacity-50 focus:placeholder:invisible text-center font-semibold focus:bg-opacity-30 dark:focus:bg-opacity-10 focus:outline-none caret-accent"
          value={search}
          onFocus={() => {
            setSearch("");
            setSearchActive(true);
            setData(data);
            setActiveList("");
          }}
          onBlur={() => {
            setSearch("");
            setSearchActive(false);
          }}
          onChange={(e) => {
            const text = e.target.value;
            const newData = completeData;
            console.log(text);
            setSearch(text);
            const filteredData = newData.filter((item) => {
              return (
                removePLChars(item.name.toLowerCase()).indexOf(
                  removePLChars(text.toLowerCase())
                ) !== -1
              );
            });
            setData(filteredData);
          }}
        />
        <hr className="grad-hr" />
      </form>
    </div>
  );
};

export default SearchBar;
