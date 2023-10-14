import { Link } from "react-router-dom";

function App() {
  return (
    <header className="relative">
      {/* left side */}
      <div className="absolute flex h-full ml-4">
        <button>
          <Link to="/Kartonowe-budowle/" reloadDocument>
            <svg
              className="h-5 hover:fill-accent-2 transition-all max-sm:h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="var(--text-light)"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </Link>
        </button>
      </div>
      {/* center */}
      <div className="flex gap-2 justify-center align-middle place-items-center">
        <h1 className="text-accent text-header font-bold uppercase p-1 max-md:p-0">
          Kartonowe &nbsp;budowle
        </h1>
      </div>
      {/* right side */}
      <div className="absolute flex gap-4 h-full right-0 top-0 mr-4">
        {/* <button>
          <svg
            className="h-5 hover:fill-accent transition-all place-self-center"
            fill="var(--text-light)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
          </svg>
        </button> */}
        {/* <button>
          <svg
            className="h-5 hover:fill-accent transition-all mb-1 place-self-center"
            fill="var(--text-light)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
          >
            <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
          </svg>
        </button> */}
      </div>
      {/* horizontal rule */}
      <div className="grad-hr" />
    </header>
  );
}

export default App;
