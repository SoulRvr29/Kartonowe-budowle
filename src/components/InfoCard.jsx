import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const InfoCard = ({ mapSize }) => {
  const apiURL = "https://kartonowe-budowle-mongo-db-api.vercel.app/api/models";
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
    } catch (error) {
      console.log("Error fetching posts: ", error);
    }
  }

  return (
    <div
      className={
        "max-w-xl mx-auto border-2 border-accent rounded-xl bg-[#aaa] dark:bg-[#222] my-4 p-8 drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)] " +
        (mapSize && " order-1 max-lg:order-first")
      }
    >
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
    </div>
  );
};

export default InfoCard;
