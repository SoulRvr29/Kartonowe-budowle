import React from "react";
import { useState } from "react";

export default function ResistorCalc() {
  const [Vs, setVs] = useState(0);
  const [Vf, setVf] = useState(0);
  const [If, setIf] = useState(0);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Vs && Vf && If
      ? setResult(parseInt((Vs - Vf) / (If / 1000)))
      : setResult(0);
  };
  return (
    <div>
      <h2 className="bg-white rounded-t-xl max-w-[15rem] py-1 px-2 font-bold text-text-dark text-center uppercase">
        Kalkulator rezystora
      </h2>
      <form
        className="flex flex-col max-w-[15rem] border-2 p-4 rounded-b-xl"
        onSubmit={handleSubmit}
      >
        <label className="text-xs mb-1" htmlFor="Vs">
          Napięcie zasilania:
        </label>
        <div className="flex mb-4 ">
          <input
            className="py-1 px-2 w-full dark:bg-bkg dark:placeholder:text-neutral-500 border-2 rounded-l-md border-accent outline-none autofill:hover:bg-red-500"
            id="Vs"
            type="number"
            step="0.1"
            min="0"
            // placeholder="Wprowadź napięcie"
            onChange={(e) => setVs(e.target.value)}
          />
          <span className="p-1 w-10 text-center border-2 border-accent bg-white dark:bg-bkg rounded-r-md border-l-0">
            V
          </span>
        </div>

        <label className="text-xs mb-1" htmlFor="Vf">
          Napięcie przewodzenia:
        </label>
        <div className="flex mb-4">
          <input
            className="py-1 px-2 w-full dark:bg-bkg dark:placeholder:text-neutral-500 border-2 rounded-l-md border-accent outline-none"
            id="Vf"
            type="number"
            step="0.1"
            min="0"
            // placeholder="Wprowadź napięcie"
            onChange={(e) => setVf(e.target.value)}
          />
          <span className="p-1 w-10 text-center border-2 border-accent bg-white dark:bg-bkg rounded-r-md border-l-0">
            V
          </span>
        </div>
        <label className="text-xs mb-1" htmlFor="If">
          Prąd przewodzenia:
        </label>
        <div className="flex mb-4">
          <input
            className="py-1 px-2 w-full dark:bg-bkg dark:placeholder:text-neutral-500 border-2 rounded-l-md border-accent outline-none"
            id="If"
            type="number"
            step="0.1"
            min="0"
            // placeholder="Wprowadź prąd"
            onChange={(e) => setIf(e.target.value)}
          />
          <span className="p-1 w-10 text-center border-2 border-accent bg-white dark:bg-bkg rounded-r-md border-l-0">
            mA
          </span>
        </div>
        <div className="h-[2px] w-full bg-white mb-3"></div>
        <div className="flex gap-4">
          <div className="w-full">
            <div className="text-xs mb-1">Wynik:</div>
            <div className=" dark:bg-bkg bg-white border-2 border-accent rounded-md p-2 py-1 h-9 max-w-[7rem] overflow-hidden">
              {result}
              {result && <span>&Omega;</span>}
            </div>
          </div>
          <button className="bg-accent text-white hover:bg-sky-600 mt-5 w-fit mx-auto p-1 px-3 rounded-lg border-2 border-accent">
            Oblicz
          </button>
        </div>
      </form>
    </div>
  );
}
