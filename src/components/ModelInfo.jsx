import modelsData from "../data/models-data.json";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import Map from "./Map";

const ModelInfo = ({ id }) => {
  const data = modelsData.filter((item) => item.id == id)[0];
  // console.log(id);
  const info = Object.keys(data.info);
  const [sectionState, setSectionState] = useState(true);
  return (
    <>
      <SectionHeader
        sectionName="Model"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState === true && (
        <div className="flex justify-evenly p-4 pb-8 flex-wrap gap-4">
          {data.position && <Map id={id} position={data.position} />}

          <section className="flex flex-wrap justify-center items-center gap-8 max-sm:gap-4 max-sm:flex-col py-4 z-10">
            <img
              className="model-cover max-h-[270px] max-w-[220px] w-auto max-sm:border-none border-2 border-accent drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)] "
              src={data.cover}
              alt="okładka"
            />
            <div className="model-info w-max h-min p-4 border-l-2 max-sm:border-l-0 max-sm:border-t-2 dark:border-accent-2 border-accent-4">
              <ul className="info-text text-lg max-sm:text-base text-accent-3 tracking-wide font-bold">
                {info.map((key) => {
                  return (
                    <li
                      className="dark:text-accent-3 text-text-light"
                      key={key}
                    >
                      {key != "Link do pobrania" && (
                        <span className="dark:text-text-light text-text-dark font-bold ">
                          {key}:{" "}
                        </span>
                      )}
                      {key == "Link do pobrania" ? (
                        <a
                          className="hover:underline text-accent-4 dark:text-accent-2"
                          href={data.info[key]}
                          target="_blank"
                        >
                          Download
                        </a>
                      ) : (
                        data.info[key]
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ModelInfo;
