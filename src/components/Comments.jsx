import React from "react";
import modelsData from "../data/models-data.json";
import SectionHeader from "./SectionHeader";
import { useState, useEffect } from "react";
import { FaThumbsUp, FaTrashAlt, FaCaretUp } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

import axios from "axios";

const Comments = ({ id }) => {
  const [loadingIcon, setLoadingIcon] = useState(true);
  const [sendingSpinner, setSendingIcon] = useState(false);
  const [updatingSpinner, setUpdatingSpinner] = useState(false);
  const [deletingSpinner, setDeletingSpinner] = useState(null);
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  const [inputState, setInputState] = useState(false);
  const [newComment, setNewComment] = useState("");
  const sectionName =
    typeof id === "number"
      ? modelsData.filter((item) => item.id === id)[0].component
      : id;

  const apiURLcomments =
    "https://kartonowe-budowle-mongo-db-api.vercel.app/api/comments";
  // "http://localhost:5000/api/comments";
  const apiURLusers =
    "https://kartonowe-budowle-mongo-db-api.vercel.app/api/users";
  // "http://localhost:5000/api/users";

  const [apiData, setApiData] = useState([]);
  const [SectionID, setSectionID] = useState("");
  const [visibleComments, setVisibleComments] = useState(-5);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [unLoggedUserName, setUnLoggedUserName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const getUsersList = () => {
    axios
      .get(apiURLusers)
      .then((response) => {
        setUsersList(response.data.map((item) => item.login));
      })
      .catch((error) => {
        console.error("Error fetching comments: ", error);
      });
  };

  const getComments = () => {
    axios

      .get(apiURLcomments)
      .then((response) => {
        const secitionData = response.data.filter(
          (item) => item.section === sectionName
        )[0];
        setSectionID(secitionData["_id"]);
        setApiData(secitionData.comments);
        setLoadingIcon(false);
        setDeletingSpinner(null);
        setUpdatingSpinner(false);
      })
      .catch((error) => {
        console.error("Error fetching comments: ", error);
        setLoadingIcon(false);
      });
  };

  const sendNewComment = () => {
    setSendingIcon(true);
    let userName = unLoggedUserName;
    let admin = false;
    if (user) {
      admin = user.admin;
      userName = user.login;
    }
    const newData = {
      modelName:
        typeof id === "number"
          ? modelsData.filter((item) => item.id === id)[0].name
          : id,
      login: userName,
      comment: newComment,
      createdAt: new Date(new Date().getTime() + 7200000),
      admin: admin,
      likes: {
        quantity: 0,
        users: [],
      },
    };
    axios
      .put(`${apiURLcomments}/${SectionID}`, newData)
      .then(() => {
        setInputState(false);
        setNewComment("");
        getComments();
        setSendingIcon(false);
      })
      .catch((error) => {
        console.error("Error sending comment: ", error);
      });
  };

  const [editComment, setEditComment] = useState(-1);
  const [editCommentText, setEditCommentText] = useState("");

  const updateComment = (comment, index) => {
    setUpdatingSpinner(true);
    const data = {
      comment: comment,
      index: index,
    };
    axios.put(`${apiURLcomments}/${SectionID}/update`, data).then(() => {
      getComments();
      setEditComment(-1);
    });
  };

  const deleteComment = (commentID) => {
    setDeletingSpinner(commentID);
    axios
      .delete(`${apiURLcomments}/${SectionID}/`, {
        data: { commentID: commentID },
      })
      .then(() => {
        getComments();
      })
      .catch((error) => {
        console.error("Error sending comment: ", error);
      });
  };

  useEffect(() => {
    getComments();
    getUsersList();
  }, []);

  const [likesError, setLikesError] = useState(-1);
  const likesHandler = (index) => {
    const data = {
      user: user.login,
      index: index,
    };
    axios
      .put(`${apiURLcomments}/${SectionID}/like`, data)
      .then(() => {
        getComments();
      })
      .catch((error) => {
        console.error("Error sending comment: ", error);
      });
  };

  return (
    <div className="relative">
      <SectionHeader
        sectionNumber={apiData.length}
        sectionName="Komentarze"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState && (
        <div className="m-8 relative mx-auto max-w-4xl px-2">
          {/* loading icon */}
          {loadingIcon && (
            <div className="loading-icon absolute left-[calc(50%-24px)] top-[calc(50%-24px)] max-sm:left-[calc(50%-12px)] max-sm:top-[calc(50%-12px)] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
          )}
          {/* show more comments */}
          {apiData.length > 5 && visibleComments !== 0 && (
            <button
              onClick={() => {
                setVisibleComments(0);
                // console.log(visibleComments, apiData.length);
              }}
              className="w-full text-center mb-4 flex justify-center items-center gap-4"
            >
              <FaCaretUp size={30} />
              Pokaż resztę komentarzy
              <FaCaretUp size={30} />
            </button>
          )}
          {/* comments list*/}
          {apiData.length > 0 ? (
            apiData
              .slice(visibleComments, apiData.length)
              .map((item, index) => (
                <div
                  key={index}
                  className="comment grid grid-cols-[5rem,1fr] max-md:grid-cols-[1fr] gap-1 my-2"
                >
                  <div className="bg-white bg-opacity-20 dark:bg-opacity-5 rounded-md max-md:hidden ">
                    <div
                      className={
                        "w-16 h-16 max-sm:w-8 max-sm:h-8 grid bg-white dark:bg-accent place-content-center text-4xl rounded-full m-2 font-bold max-sm:text-xl uppercase font-Calistoga " +
                        // (item.login == "Bez konta"
                        (!usersList.includes(item.login)
                          ? " invert dark:invert-0 opacity-30 dark:opacity-80 dark:bg-bkg"
                          : item.admin
                            ? " bg-opacity-70 dark:bg-opacity-80"
                            : " bg-opacity-40 dark:bg-opacity-60")
                      }
                    >
                      {item.login && item.login.at(0)}
                      {/* {item.admin ? (
                        <div className="admin-avatar w-16 h-16 rounded-full"></div>
                      ) : (
                        item.login && item.login.at(0)
                      )} */}
                    </div>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 dark:bg-opacity-5 rounded-md">
                    <div
                      className={
                        "flex max-sm:flex-col justify-between px-2 py-1 bg-white dark:bg-accent dark:bg-opacity-40 bg-opacity-40 rounded-t-md" +
                        // (item.login == "Bez konta"
                        (!usersList.includes(item.login)
                          ? " opacity-60  dark:bg-bkg-light"
                          : item.admin
                            ? " bg-opacity-60 dark:bg-opacity-70"
                            : "")
                      }
                    >
                      <div className="font-bold flex">
                        {item.login}
                        {item.admin && (
                          <div className="text-accent-4 bg-white bg-opacity-75 px-1 rounded-md scale-[70%]">
                            Admin
                          </div>
                        )}
                      </div>
                      <div className="relative flex items-center gap-4 dark:font-medium max-sm:text-xs max-sm:mr-8 ">
                        <div
                          className="relative flex text-green-700 dark:text-green-500 font-semibold hover:brightness-125 transition-all"
                          title="polub"
                          onClick={() => {
                            if (user) {
                              likesHandler(index);
                            } else {
                              setLikesError(index);
                              setTimeout(() => {
                                setLikesError(-1);
                              }, 1000);
                            }
                          }}
                        >
                          <div className="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.4)]">
                            <div
                              className={
                                "absolute like-prompt whitespace-nowrap -top-10 -left-16 max-sm:left-0 max-sm:-top-8 bg-accent-4 dark:bg-accent-2 text-text-light px-2 pt-[2px] pb-[4px] rounded-md  " +
                                (likesError === index ? " block" : " hidden")
                              }
                            >
                              <div className="h-4 w-4 bg-accent-4 dark:bg-accent-2 -z-10 absolute -bottom-2 left-[calc(50%-8px)] rotate-45 max-sm:left-3 "></div>
                              Zaloguj się by oceniać
                            </div>
                          </div>
                          {item.likes.quantity}
                          <FaThumbsUp className="relative top-0.5 fill-green-700 dark:fill-green-500 ml-2" />
                        </div>
                        <p className="m-0 opacity-70">
                          {item.createdAt && item.createdAt.slice(8, 10)}
                          {item.createdAt && item.createdAt.slice(4, 8)}
                          {item.createdAt && item.createdAt.slice(0, 4)}
                        </p>
                        <p className="m-0">
                          {item.createdAt && item.createdAt.slice(11, 19)}
                        </p>
                        {user && user.admin && (
                          <button
                            className="dev hover:text-accent-4 dark:hover:text-accent-2 max-sm:absolute max-sm:-right-9 max-sm:top-[-22px] "
                            onClick={() => deleteComment(item["_id"])}
                          >
                            {deletingSpinner === item["_id"] ? (
                              <ImSpinner2 className="animate-spin" />
                            ) : (
                              <FaTrashAlt className="max-sm:text-base" />
                            )}
                          </button>
                        )}{" "}
                      </div>
                    </div>
                    {editComment !== index && (
                      <pre className="relative my-1 mx-2 text-left whitespace-pre-wrap max-md:text-sm font-sans">
                        {item.comment}
                        {user && user.login === item.login && (
                          <div
                            onClick={() => {
                              setEditComment(index);
                              setEditCommentText(item.comment);
                            }}
                            className={
                              "edit-btn absolute top-1 right-0 bg-white bg-opacity-70 font-semibold text-text-dark dark:bg-opacity-20 px-1 rounded-md  dark:text-text-light opacity-0 transition-opacity cursor-pointer max-sm:opacity-100 max-sm:top-[-46px] max-sm:text-xs " +
                              (user &&
                                user.admin == "true" &&
                                "  max-sm:right-4")
                            }
                          >
                            edycja
                          </div>
                        )}
                      </pre>
                    )}
                    {editComment === index && (
                      <div className="relative">
                        <textarea
                          onChange={(e) => setEditCommentText(e.target.value)}
                          value={editCommentText}
                          name="updateComment"
                          id="updateComment"
                          rows={3}
                          required
                          wrap="hard"
                          className="w-full outline-none bg-transparent px-2 py-1 border-2 dark:border-accent rounded-b-md"
                        />
                        {/* updating spinner */}
                        {updatingSpinner && (
                          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                            <ImSpinner2 className="animate-spin" size={40} />
                          </div>
                        )}
                      </div>
                    )}
                    {item.updatedAt && (
                      <div className="text-xs opacity-40 p-1 flex gap-1">
                        <div>Edytowano:</div>
                        <div>
                          {item.updatedAt && item.updatedAt.slice(8, 10)}
                          {item.updatedAt && item.updatedAt.slice(4, 8)}
                          {item.updatedAt && item.updatedAt.slice(0, 4)}
                        </div>
                        <div>
                          {item.updatedAt && item.updatedAt.slice(11, 19)}
                        </div>
                      </div>
                    )}
                  </div>
                  {editComment === index && (
                    <div className=" col-span-2 w-full flex gap-4 justify-center mt-2">
                      <button
                        onClick={() => {
                          updateComment(editCommentText, index);
                        }}
                        className="w-fit m-2 drop-shadow-lg bg-green-700 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg text-text-light font-semibold"
                      >
                        Aktualizuj
                      </button>
                      <button
                        onClick={() => {
                          setEditComment(-1);
                          setEditCommentText("");
                        }}
                        className="w-fit m-2 drop-shadow-lg bg-accent-4 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg text-text-light font-semibold"
                      >
                        Anuluj
                      </button>
                    </div>
                  )}
                </div>
              ))
          ) : !loadingIcon ? (
            <div className="flex justify-center items-center gap-2 max-sm:-mt-2">
              <div className="w-32 mb-4 h-[1px] bg-text-light max-sm:hidden" />
              <p className="text-center font-semibold whitespace-nowrap text-text-light text-lg">
                Brak komentarzy
              </p>
              <div className="w-32 mb-4 h-[1px] bg-text-light max-sm:hidden" />
            </div>
          ) : (
            <p className="opacity-0">null</p>
          )}

          {/* new comment input */}
          {inputState && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (usersList.includes(unLoggedUserName)) {
                  alert("Nazwa użytkownika jest już zajęta");
                } else {
                  sendNewComment();
                }
              }}
              className="grid"
            >
              <div className="flex gap-2 items-center dark:text-accent font-bold">
                {user ? (
                  user.login
                ) : (
                  <input
                    onChange={(e) => {
                      setUnLoggedUserName(e.target.value);
                    }}
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Nazwa użytkownika"
                    required
                    autoFocus
                    className="w-fit rounded-md border-2 border-text-light dark:border-accent dark:focus:border-accent-2 focus:border-accent-3 outline-none bg-bkg-light dark:bg-bkg px-2 py-1 placeholder:text-text-dark dark:placeholder:text-text-light placeholder:opacity-70 mb-2"
                  />
                )}
                {/* {!user && (
                  <div className="font-semibold text-xs dark:bg-accent-2 cursor-pointer dark:text-text-light bg-accent-3 px-1 py-[2px] rounded-md">
                    Zaloguj się
                  </div>
                )} */}
              </div>{" "}
              <div className="relative">
                <textarea
                  onChange={(e) => setNewComment(e.target.value)}
                  name="newComment"
                  id="newComment"
                  rows={3}
                  required
                  autoFocus={user}
                  wrap="hard"
                  className="w-full rounded-md border-2 border-text-light dark:border-accent dark:focus:border-accent-2 focus:border-accent-3 outline-none bg-bkg-light dark:bg-bkg px-2 py-1 placeholder:text-text-dark dark:placeholder:text-text-light placeholder:opacity-70 "
                  placeholder="Treść komentarza..."
                />
                {/* sending spinner */}
                {sendingSpinner && (
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <ImSpinner2 className="animate-spin" size={40} />
                  </div>
                )}
              </div>
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
