import React from "react";
import { useEffect, useState } from "react";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";

const InfoCard = ({ mapSize }) => {
  const [loadingIcon, setLoadingIcon] = useState(true);
  const apiURL =
    //  "http://localhost:5000/api/info";
    "https://kartonowe-budowle-mongo-db-api.vercel.app/api/info";
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(apiURL);
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();

      setApiData(data);
      setLoadingIcon(false);
    } catch (error) {
      console.log("Error fetching posts: ", error);
    }
  }
  // const markdown = `
  // # W budowie
  // **Świątynia Wang 1:72** - budowla jest na ukończeniu, do zrobienia trawniki, drzewka, oświetlenie wokół budowli.
  // **Świątynia Wang 1:150** - budowla gotowa, do zrobienia drzewka.

  // # Gelerie do dodania
  // - Rakieta Saturn V
  // - Wieżowce
  // - Olsztyn
  // - Wilczy Szaniec
  // - Nowy Wiśnicz
  // - Wawel
  // - Samolot Mig 29UB
  // `;
  return (
    <div
      className={
        "w-full min-h-[30rem] max-w-xl mx-auto border-2 border-accent rounded-xl bg-[#aaa] dark:bg-[#222] my-4 p-8 drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)] " +
        (mapSize && " order-1 max-lg:order-first")
      }
    >
      {/* loading icon */}
      {loadingIcon && (
        <div className="loading-icon absolute left-[calc(50%-24px)] top-[calc(50%-24px)] max-sm:left-[calc(50%-12px)] max-sm:top-[calc(50%-12px)] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
      )}
      {apiData.map((item) => (
        <div className="mb-4" key={item["_id"]}>
          <h5>{item.title}</h5>

          {item.entries &&
            item.entries.map((entrie, index) => (
              <p className="m-0" key={index}>
                <b>{Object.keys(entrie)}</b>
                {" - "}
                <span>{Object.values(entrie)}</span>
              </p>
            ))}
          {item.list && (
            <ul className="list-disc list-inside">
              {item.list.map((listItem, index) => (
                <li className="m-0" key={index}>
                  {listItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {/* <Markdown className={"markdown"} remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown> */}
    </div>
  );
};

export default InfoCard;
