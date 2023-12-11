import modelsData from "../data/models-data.json";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CuriosityModel = ({ id }) => {
  const data = modelsData[id];
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
        <section className="flex flex-wrap justify-center items-center gap-8 max-sm:gap-4 max-sm:flex-col py-4">
          <LazyLoadImage
            className="h-[200px] w-auto max-sm:border-none border-2 border-accent"
            src={data.cover}
            alt="okładka"
          />
          <div className="w-max h-min p-4 border-l-2 max-sm:border-l-0 max-sm:border-t-2 border-accent-2">
            <ul className="text-lg max-sm:text-base text-accent-3 tracking-wide font-bold">
              {info.map((key) => {
                return (
                  <li key={key}>
                    <span className="text-text-light font-bold ">{key}: </span>
                    {data.info[key]}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default CuriosityModel;
