import modelsData from "../data/models-data.json";
import SectionHeader from "../components/SectionHeader";
import { useState } from "react";

const SandomierzHistory = () => {
  const model = modelsData[3];
  const [historyState, setHistoryState] = useState(true);
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {historyState === true && (
        <article>
          <div className="p-8">
            <p className=" text-justify">{model.description}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default SandomierzHistory;
