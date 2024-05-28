import React from "react";
import modelsData from "../data/models-data.json";
import SectionHeader from "./SectionHeader";
import { useState, useEffect } from "react";
import { FaThumbsUp, FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const Comments = ({ id }) => {
  const [loadingIcon, setLoadingIcon] = useState(true);
  const [sectionState, setSectionState] = useState(true);
  const [inputState, setInputState] = useState(false);
  const [userName, setUserName] = useState("");
  const [newComment, setNewComment] = useState("");
  const sectionName = modelsData.filter((item) => item.id === id)[0].component;
  const apiURL =
    "https://kartonowe-budowle-mongo-db-api.vercel.app/api/comments";
  // "http://localhost:5000/api/comments";
  const [apiData, setApiData] = useState([]);
  const [SectionID, setSectionID] = useState("");

  const getComments = () => {
    axios

      .get(apiURL)
      .then((response) => {
        const secitionData = response.data.filter(
          (item) => item.section === sectionName
        )[0];
        setSectionID(secitionData["_id"]);
        setApiData(secitionData.comments);
        setLoadingIcon(false);
      })
      .catch((error) => {
        console.error("Error fetching comments: ", error);
        setLoadingIcon(false);
      });
  };

  const sendNewComment = () => {
    const newData = {
      user: userName,
      comment: newComment,
      createdAt: new Date(new Date().getTime() + 7200000),
    };
    axios
      .put(`${apiURL}/${SectionID}`, newData)
      .then(() => {
        setInputState(false);
        getComments();
        console.log(apiData);
      })
      .catch((error) => {
        console.error("Error sending comment: ", error);
      });
  };

  const deleteComment = (commentID) => {
    axios
      .delete(`${apiURL}/${SectionID}/`, { data: { commentID: commentID } })
      .then(() => {
        getComments();
      })
      .catch((error) => {
        console.error("Error sending comment: ", error);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="mb-2 relative">
      <SectionHeader
        sectionName="Komentarze"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState && (
        <div className="m-8 relative ">
          {/* loading icon */}
          {loadingIcon && (
            <div className="loading-icon absolute left-[calc(50%-24px)] top-[calc(50%-24px)] max-sm:left-[calc(50%-12px)] max-sm:top-[calc(50%-12px)] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
          )}

          {/* comments list*/}
          {apiData.length > 0 ? (
            apiData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[5rem,1fr] max-sm:grid-cols-[2.8rem,1fr] gap-1 my-4"
              >
                <div className="bg-white bg-opacity-20 dark:bg-opacity-5 rounded-md ">
                  <div className="w-16 h-16 max-sm:w-8 max-sm:h-8 grid place-content-center text-4xl dark:bg-accent bg-white bg-opacity-40 rounded-full m-2 font-bold max-sm:text-xl uppercase font-Calistoga ">
                    {item.user && item.user.at(0)}
                  </div>
                </div>
                <div className="w-full bg-white bg-opacity-20 dark:bg-opacity-5 rounded-md">
                  <div className="flex max-sm:flex-col justify-between px-2 py-1 bg-white dark:bg-accent dark:bg-opacity-40 bg-opacity-40 rounded-t-md">
                    <p className="m-0 font-bold">{item.user}</p>
                    <div className="flex items-center gap-4 dark:font-medium max-sm:text-xs">
                      {/* <div className="flex gap-2 text-accent dark:text-accent-3 font-semibold">
                        {item.likes}
                        <FaThumbsUp className="relative top-0.5 fill-accent dark:fill-accent-3" />
                      </div> */}
                      <p className="m-0 opacity-70">
                        {item.createdAt && item.createdAt.slice(8, 10)}
                        {item.createdAt && item.createdAt.slice(4, 8)}
                        {item.createdAt && item.createdAt.slice(0, 4)}
                      </p>
                      <p className="m-0">
                        {item.createdAt && item.createdAt.slice(11, 19)}
                      </p>
                      <button
                        className="hover:text-accent-4 dark:hover:text-accent-2"
                        onClick={() => deleteComment(item["_id"])}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                  <p className="my-1 mx-2 text-left">{item.comment}</p>
                </div>
              </div>
            ))
          ) : !loadingIcon ? (
            <div className="flex justify-center items-center gap-2">
              <div className="w-32 mb-3 h-[1px] bg-text-light" />
              <p className="text-center font-semibold whitespace-nowrap">
                Brak komentarzy
              </p>
              <div className="w-32 mb-3 h-[1px] bg-text-light" />
            </div>
          ) : (
            <p className="opacity-0">null</p>
          )}
          {/* new comment input */}
          {inputState && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendNewComment();
              }}
              className="grid"
            >
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="user"
                id="user"
                placeholder="Nazwa użytkownika"
                className="w-fit rounded-md border-2 border-accent   dark:focus:border-accent-2 focus:border-accent-4 outline-none bg-bkg-light dark:bg-bkg px-2 py-1 placeholder:text-text-dark dark:placeholder:text-text-light placeholder:opacity-70 mb-2"
              />
              <textarea
                onChange={(e) => setNewComment(e.target.value)}
                name="newComment"
                id="newComment"
                rows={3}
                className="w-full rounded-md border-2 border-accent   dark:focus:border-accent-2 focus:border-accent-4 outline-none bg-bkg-light dark:bg-bkg px-2 py-1 placeholder:text-text-dark dark:placeholder:text-text-light placeholder:opacity-70 "
                placeholder="Treść komentarza..."
              />
              <div className="flex gap-4 justify-center ">
                <button
                  type="submit"
                  className="w-fit m-2 drop-shadow-lg bg-green-700 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg text-text-light font-semibold"
                >
                  Wyślij
                </button>
                <button
                  onClick={() => {
                    setInputState(false);
                  }}
                  className="w-fit m-2 drop-shadow-lg bg-accent-4 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg text-text-light font-semibold"
                >
                  Anuluj
                </button>
              </div>
            </form>
          )}
          {!inputState && !loadingIcon && (
            <div className="w-full flex justify-center ">
              <button
                onClick={() => {
                  setInputState(true);
                }}
                className="w-fit m-2 drop-shadow-lg bg-accent-3 dark:bg-accent font-semibold py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg "
              >
                Dodaj swój komentarz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
