import { FaRegSnowflake } from "react-icons/fa";
import Snowfall from "react-snowfall";
import { useState } from "react";

const SnowFlakes = (snowflakesFromLocalStorage) => {
  if (localStorage.getItem("snowflakes") == null)
    localStorage.setItem("snowflakes", true);
  const [snowflakes, setSnowflakes] = useState(
    JSON.parse(localStorage.getItem("snowflakes"))
  );
  console.log(snowflakesFromLocalStorage);
  return (
    <>
      {snowflakes && (
        <Snowfall
          snowflakeCount={window.innerWidth < 768 ? 30 : 100}
          style={{ zIndex: 100, position: "fixed", top: 0, left: 0 }}
        />
      )}
      <button
        className=""
        onClick={() => {
          setSnowflakes(!snowflakes);
          snowflakes
            ? localStorage.setItem("snowflakes", false)
            : localStorage.setItem("snowflakes", true);
        }}
      >
        <FaRegSnowflake
          size={20}
          color="var(--icon-gray)"
          className="header-icon  transition-all relative bottom-[1px]"
          title={snowflakes ? "Ukryj padający śnieg" : "Pokaż padający śnieg"}
        />
      </button>
    </>
  );
};

export default SnowFlakes;
