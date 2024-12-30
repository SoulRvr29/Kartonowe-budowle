import { FaRegSnowflake } from "react-icons/fa";
import Snowfall from "react-snowfall";
import { useState } from "react";

const SnowFlakes = () => {
  if (localStorage.getItem("snowflakes") == null)
    localStorage.setItem("snowflakes", true);
  const [snowflakes, setSnowflakes] = useState(
    JSON.parse(localStorage.getItem("snowflakes"))
  );

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
          className={
            "header-icon  transition-all relative bottom-[1px]" +
            (snowflakes
              ? " text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
              : " text-icon-gray")
          }
          title={snowflakes ? "Ukryj padający śnieg" : "Pokaż padający śnieg"}
        />
      </button>
    </>
  );
};

export default SnowFlakes;
