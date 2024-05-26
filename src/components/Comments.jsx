import React from "react";
import modelsData from "../data/models-data.json";
import SectionHeader from "./SectionHeader";
import { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";

const Comments = ({ id }) => {
  const [loadingIcon, setLoadingIcon] = useState(true);
  const [sectionState, setSectionState] = useState(true);
  const sectionName = modelsData.filter((item) => item.id === id)[0].component;
  const apiURL = "http://localhost:5000/api/comments";
  // "https://kartonowe-budowle-mongo-db-api.vercel.app/api/comments";
  const [apiData, setApiData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(apiURL);
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      const filteredData = data.filter(
        (item) => item.section === sectionName
      )[0].comments;
      setApiData(filteredData);
      setLoadingIcon(false);
    } catch (error) {
      console.error("Error fetching comments: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mb-2 relative">
      <SectionHeader
        sectionName="Komentarze"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {/* loading icon */}
      {loadingIcon && (
        <div className="loading-icon absolute left-[calc(50%-24px)] top-[calc(50%-24px)] max-sm:left-[calc(50%-12px)] max-sm:top-[calc(50%-12px)] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
      )}
      {sectionState && (
        <div className="my-8">
          {apiData.length > 0 ? (
            apiData.map((item, index) => (
              <div
                key={index}
                className="flex mx-8 my-4 bg-accent bg-opacity-10"
              >
                <div className="w-16 h-16 grid place-content-center text-3xl ">
                  {item.user.slice(0, 2)}
                </div>
                <div className="w-full border-l border-white border-opacity-50">
                  <div className="flex justify-between px-2 py-1 bg-accent bg-opacity-40">
                    <p className="m-0 font-bold">{item.user}</p>
                    <div className="flex gap-4">
                      <div className="flex gap-2 text-accent-3">
                        {item.likes}
                        <FaThumbsUp className="relative top-0.5 fill-accent-3" />
                      </div>
                      <p className="m-0">{item.createdAt.slice(0, 10)}</p>
                    </div>
                  </div>
                  <p className="my-1 mx-2 text-left">{item.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Brak komentarzy</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
