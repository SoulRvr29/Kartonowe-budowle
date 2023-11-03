import modelsData from "../data/models-data.json";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";
const LightInfo = ({ id }) => {
  const model = modelsData.filter((item) => item.id == id)[0];
  const daneTech = Object.keys(model["Dane techniczne"]);
  const fazy = Object.keys(model["Fazy światła"]);
  const [sectionState, setSectionState] = useState(true);

  return (
    <>
      <SectionHeader
        sectionName="Dane techniczne"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState && (
        <div className="flex w-fit mx-auto gap-10 p-4 pr-6 max-md:flex-col">
          <ul className="list-disc pl-8 marker:text-accent max-md:mb-4 max-sm:text-left font-bold  h-full w-fit rounded-xl ">
            {daneTech.map((item) => (
              <li>
                {item + ": "}
                <span className="li-span">
                  {model["Dane techniczne"][item]}
                </span>
              </li>
            ))}
          </ul>
          <ul className="list-disc pl-8 marker:text-accent max-md:mb-4 max-sm:text-left font-bold  h-full w-fit rounded-xl">
            {fazy.map((item) => (
              <li>
                {item + ": "}
                <span className="li-span">{model["Fazy światła"][item]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default LightInfo;
