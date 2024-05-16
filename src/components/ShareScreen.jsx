import React from "react";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const ShareLi = ({ type, link }) => {
  const [copy, setCopy] = useState(false);
  return (
    <li className="relative flex max-md:flex-col max-md:items-start items-center text-lg ">
      <div className="max-md:ml-8">{type}:</div>
      <div className="flex items-center max-md:w-screen max-w-2xl max-md:px-8">
        <input
          onClick={(e) => e.target.select()}
          className="w-[20rem] max-md:w-full h-10 border-accent border-2 rounded-md rounded-r-none px-2 focus:outline-none ml-2 max-md:m-0 hover:border-white bg-bkg "
          type="text"
          value={link}
          autocomplete="off"
          readOnly
        />
        <div
          className="grid place-content-center h-10 w-10 border-2 rounded-r-md border-accent border-l-0 bg-bkg hover:bg-accent cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(link);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 1000);
          }}
          title="copy"
        >
          <FaCopy size={20} />
        </div>
        <div
          className={
            "ml-2 text-accent-3 absolute -right-20 max-md:right-8  max-md:top-0 transition-opacity duration-500 opacity-0 " +
            (copy && " opacity-100")
          }
        >
          Copied!
        </div>
      </div>
    </li>
  );
};

const ShareScreen = ({
  shareScreen,
  setShareScreen,
  directFull,
  shareForum,
  shareWebsite,
}) => {
  return (
    <>
      {shareScreen && (
        <div
          className="fixed top-0 left-0 bg-black bg-opacity-70 z-[9999] w-full h-full grid place-content-center"
          onClick={(e) => {
            setShareScreen(false);
          }}
        >
          <ul
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="grid justify-items-end gap-4 font-bold"
          >
            <ShareLi type="Direct link" link={directFull} />
            <ShareLi type="Forum thumb" link={shareForum} />
            <ShareLi type="Website thumb" link={shareWebsite} />
          </ul>
        </div>
      )}
    </>
  );
};

export default ShareScreen;
