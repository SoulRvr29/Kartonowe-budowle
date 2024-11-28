import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";

const InfoCard = ({ mapSize }) => {
  const [loadingIcon, setLoadingIcon] = useState(true);
  const apiURL = "https://kartonowe-budowle-mongo-db-api.vercel.app/api/info";
  // "http://localhost:5000/api/info";
  const [markdown, setMarkdown] = useState("");
  const [savedMarkdown, setSavedMarkdown] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await axios.get(apiURL);
        const { content } = res.data[0];
        if (content) {
          setMarkdown(content);
          setSavedMarkdown(content);
          setLoadingIcon(false);
        }
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };
    fetchMarkdown();
  }, []);

  const handleSave = async () => {
    try {
      await axios.post(apiURL, {
        content: markdown,
      });
      setSavedMarkdown(markdown);
    } catch (error) {
      console.error("Error saving markdown:", error);
    }
  };

  return (
    <div
      className={
        "info text-left relative w-full min-h-[30rem] max-w-lg mx-auto border-2 border-accent rounded-xl bg-[#bbb] dark:bg-[#222] my-4 p-8 py-6 drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)] " +
        (mapSize && " order-1 max-lg:order-first")
      }
    >
      {/* loading icon */}
      {loadingIcon && (
        <div className="loading-icon absolute left-[calc(50%-24px)] top-[calc(50%-24px)] max-sm:left-[calc(50%-12px)] max-sm:top-[calc(50%-12px)] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
      )}

      {!isEditing ? (
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => <NavLink {...props} to={props.href} />,
          }}
        >
          {savedMarkdown}
        </Markdown>
      ) : (
        <div className="flex flex-col justify-between gap-2 min-h-full">
          <textarea
            className="w-full min-h-[22rem] bg-transparent mt-1 px-1 border-2 border-opacity-30 dark:border-opacity-50 dark:border-white border-black outline-none"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
          {isEditing && (
            <div className=" w-full flex gap-4 max-sm:gap-0 justify-center -mb-4">
              <button
                onClick={() => {
                  handleSave();
                  setIsEditing(false);
                }}
                className="w-fit m-2 drop-shadow-lg bg-green-700 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg text-text-light font-semibold"
              >
                Aktualizuj
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                }}
                className="w-fit m-2 drop-shadow-lg bg-accent-4 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg text-text-light font-semibold"
              >
                Anuluj
              </button>
            </div>
          )}
        </div>
      )}
      {user && user.admin && (
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            setMarkdown(savedMarkdown);
          }}
          className={
            "edit-btn absolute top-0 right-0 bg-accent font-semibold text-text-dark px-2 pb-1 rounded-bl-md rounded-tr-lg  dark:text-text-light max-sm:text-xs opacity-0 hover:"
          }
        >
          edycja
        </button>
      )}
    </div>
  );
};

export default InfoCard;
