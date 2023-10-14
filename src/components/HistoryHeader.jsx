const HistoryHeader = ({ sectionState, setSectionState, sectionName }) => {
  return (
    <div className="mb-14">
      <header className="history-cont font-bold mx-8">
        <h3 className="flex">
          <button
            onClick={() => {
              setSectionState(!sectionState);
              sectionState === true &&
                document.querySelector(".history-cont").scrollIntoView();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3rem"
              viewBox="0 0 512 512"
              fill="var(--accent-2)"
              className={
                sectionState === false
                  ? "mr-2 mt-1 hover:scale-125  rotate-180"
                  : "mr-2 mt-1 hover:scale-125 "
              }
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </button>
          {sectionName}
        </h3>

        <hr />
      </header>
    </div>
  );
};

export default HistoryHeader;
