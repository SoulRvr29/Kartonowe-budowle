import Card from "./Card.jsx";
import modelsData from "../data/models-data.json";

const Nav = () => {
  return (
    <nav>
      {/* horizontal rule */}
      <div className="grad-hr-2" />
      {/* categories */}
      <div className="relative z-10 ">
        <ul className="flex w-full text-center justify-center nav-clamp tracking-wide bg-text-dark bg-opacity-30 ">
          <li className="border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 hover:cursor-pointer  hover:border-b-accent-2 text">
            Budowle
          </li>
          <li className="border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 pointer  hover:border-b-accent-2">
            Latarnie morskie
          </li>
          <li className="border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 pointer  hover:border-b-accent-2">
            Wieżowce
          </li>
          <li className="border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 pointer  hover:border-b-accent-2">
            Inne
          </li>
        </ul>
      </div>
      {/* horizontal rule */}
      <div className="grad-hr-2 relative bottom-[2px] z-0" />
      {/* cards */}
      <section className="w-full  grid justify-center overflow-x-auto px-10">
        <div className="flex  relative  py-4  z-10 ">
          {modelsData.map((model) => (
            <Card model={model} key={model.id} />
          ))}
        </div>
      </section>
    </nav>
  );
};

export default Nav;
