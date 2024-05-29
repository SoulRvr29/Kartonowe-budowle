import React from "react";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const ShareLi = ({ type, link }) => {
  const [copy, setCopy] = useState(false);
  return (
    <li className="relative flex-col items-center text-lg max-sm:text-xs">
      <div>
        <div className="flex justify-between items-center max-md:w-screen max-w-2xl  mb-1 max-md:mx-8 max-md:px-4 text-text-light">
          <label htmlFor={type}>{type}:</label>
          <div
            className={
              "text-accent-3 transition-opacity duration-500 opacity-0 " +
              (copy && " opacity-100")
            }
          >
            Skopiowano
          </div>
        </div>
        <div className="flex max-md:mx-8 max-md:px-4">
          <input
            id={type}
            onClick={(e) => e.target.select()}
            className="w-[40rem] max-md:w-full h-10 max-md:text-sm border-accent border-2 rounded-md rounded-r-none px-2 focus:outline-none max-md:m-0 hover:border-white bg-bkg font-normal text-text-light"
            type="text"
            value={link}
            autocomplete="off"
            readOnly
          />
          <div
            className="grid place-content-center h-10 w-10 border-2 rounded-r-md border-accent border-l-0 bg-bkg hover:bg-accent cursor-pointer text-text-light"
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
            className="grid justify-items-end gap-6 font-bold"
          >
            <ShareLi type="Link bezpośredni" link={directFull} />
            <ShareLi type="Miniaturka na forum" link={shareForum} />
            <ShareLi type="Miniaturka na stronę" link={shareWebsite} />
          </ul>
        </div>
      )}
    </>
  );
};

export default ShareScreen;
