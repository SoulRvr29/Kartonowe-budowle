import React from "react";
import modelsData from "../data/models-data.json";
import SectionHeader from "./SectionHeader";
import { useState, useEffect } from "react";
import { FaThumbsUp, FaTrashAlt, FaCaretDown } from "react-icons/fa";
import axios from "axios";

const Comments = ({ id }) => {
  const [loadingIcon, setLoadingIcon] = useState(true);
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  const [inputState, setInputState] = useState(false);
  const [newComment, setNewComment] = useState("");
  const sectionName = modelsData.filter((item) => item.id === id)[0].component;
  const apiURL =
    "https://kartonowe-budowle-mongo-db-api.vercel.app/api/comments";
  // "http://localhost:5000/api/comments";
  const [apiData, setApiData] = useState([]);
  const [SectionID, setSectionID] = useState("");
  const [visibleComments, setVisibleComments] = useState(-5);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

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
      login: user.login,
      comment: newComment,
      createdAt: new Date(new Date().getTime() + 7200000),
      admin: user.admin,
    };
    axios
      .put(`${apiURL}/${SectionID}`, newData)
      .then(() => {
        console.log(user);
        setInputState(false);
        setNewComment("");
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
    <div className="relative">
      <SectionHeader
        sectionName="Komentarze"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState && (
        <div className="m-8 relative mx-auto max-w-4xl">
          {/* loading icon */}
          {loadingIcon && (
            <div className="loading-icon absolute left-[calc(50%-24px)] top-[calc(50%-24px)] max-sm:left-[calc(50%-12px)] max-sm:top-[calc(50%-12px)] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
          )}
          {/* comments list*/}
          {apiData.length > 0 ? (
            apiData
              .slice(visibleComments, apiData.length)
              .map((item, index) => (
                <div
                  key={index}
                  className="comment grid grid-cols-[5rem,1fr] max-sm:grid-cols-[2.8rem,1fr] gap-1 my-4"
                >
                  <div className="bg-white bg-opacity-20 dark:bg-opacity-5 rounded-md ">
                    <div className="w-16 h-16 max-sm:w-8 max-sm:h-8 grid place-content-center text-4xl dark:bg-accent bg-white bg-opacity-40 rounded-full m-2 font-bold max-sm:text-xl uppercase font-Calistoga ">
                      {item.login && item.login.at(0)}
                    </div>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 dark:bg-opacity-5 rounded-md">
                    <div className="flex max-sm:flex-col justify-between px-2 py-1 bg-white dark:bg-accent dark:bg-opacity-40 bg-opacity-40 rounded-t-md">
                      <div className="font-bold flex">
                        {item.login}
                        {item.admin && (
                          <div className="text-accent-4 bg-white bg-opacity-75 px-1 rounded-md scale-[70%]">
                            Admin
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 dark:font-medium max-sm:text-xs max-sm:mr-8">
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

                        {localStorage.getItem("devMode") == "true" && (
                          <button
                            className="dev hover:text-accent-4 dark:hover:text-accent-2 max-sm:absolute max-sm:right-2 max-sm:top-4 "
                            onClick={() => deleteComment(item["_id"])}
                          >
                            <FaTrashAlt className="max-sm:text-lg" />
                          </button>
                        )}
                      </div>
                    </div>
                    <pre className="my-1 mx-2 text-left whitespace-pre-wrap">
                      {item.comment}
                    </pre>
                  </div>
                </div>
              ))
          ) : !loadingIcon ? (
            <div className="flex justify-center items-center gap-2">
              <div className="w-32 mb-4 h-[1px] bg-text-light" />
              <p className="text-center font-semibold whitespace-nowrap text-text-light text-lg">
                Brak komentarzy
              </p>
              <div className="w-32 mb-4 h-[1px] bg-text-light" />
            </div>
          ) : (
            <p className="opacity-0">null</p>
          )}
          {/* show more comments */}
          {apiData.length > 5 && visibleComments !== 0 && (
            <button
              onClick={() => {
                setVisibleComments(0);
                console.log(visibleComments, apiData.length);
              }}
              className="w-full text-center mb-4 flex justify-center items-center gap-4"
            >
              <FaCaretDown size={30} />
              Pokaż resztę komentarzy
              <FaCaretDown size={30} />
            </button>
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
              <div className="text-lg dark:text-accent font-bold">
                {user.login}
              </div>
              {/* <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="user"
                id="user"
                placeholder="Nazwa użytkownika"
                required
                className="w-fit rounded-md border-2 border-text-light dark:border-accent dark:focus:border-accent-2 focus:border-accent-3 outline-none bg-bkg-light dark:bg-bkg px-2 py-1 placeholder:text-text-dark dark:placeholder:text-text-light placeholder:opacity-70 mb-2"
              /> */}
              <textarea
                onChange={(e) => setNewComment(e.target.value)}
                name="newComment"
                id="newComment"
                rows={3}
                required
                wrap="hard"
                className="w-full rounded-md border-2 border-text-light dark:border-accent dark:focus:border-accent-2 focus:border-accent-3 outline-none bg-bkg-light dark:bg-bkg px-2 py-1 placeholder:text-text-dark dark:placeholder:text-text-light placeholder:opacity-70 "
                placeholder="Treść komentarza..."
              />
              <div className="flex gap-4 justify-center mt-2">
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
              {user ? (
                <button
                  onClick={() => {
                    setUser(JSON.parse(localStorage.getItem("user")));
                    setInputState(true);
                  }}
                  className="w-fit m-2 drop-shadow-lg bg-accent-3 dark:bg-accent font-semibold py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg "
                >
                  {apiData.length
                    ? "Dodaj swój komentarz"
                    : "Skomentuj jako pierwszy"}
                </button>
              ) : (
                <div className="font-semibold">
                  Zaloguj się by dodać komentarz
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
