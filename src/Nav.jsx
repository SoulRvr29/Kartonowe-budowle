import Card from "./Card.jsx";
import modelsData from "./models-data.json";

const Nav = () => {
  return (
    <nav>
      {/* horizontal rule */}
      <div className="grad-hr" />
      {/* categories */}
      <div className="relative z-10 ">
        {/* gradient */}
        {/* <div className="w-full h-full absolute banner-grad z-10"></div> */}
        <ul className="flex w-full text-center justify-center nav-clamp tracking-wide bg-text-dark bg-opacity-30 ">
          <li className="border-r py-1 px-2 border-b border-b-transparent hover:border-b hover:cursor-pointer  hover:border-b-accent-2 text">
            Budowle
          </li>
          <li className="border-r py-1 px-2 border-b border-b-transparent hover:border-b pointer  hover:border-b-accent-2">
            Latarnie morskie
          </li>
          <li className="border-r py-1 px-2 border-b border-b-transparent hover:border-b pointer  hover:border-b-accent-2">
            Wieżowce
          </li>
          <li className="border-r py-1 px-2 border-b border-b-transparent hover:border-b pointer  hover:border-b-accent-2">
            Inne
          </li>
        </ul>
      </div>
      {/* horizontal rule */}
      <div className="grad-hr relative bottom-[1px] z-0" />
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
