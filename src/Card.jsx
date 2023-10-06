const Card = ({ model }) => {
  return (
    <div className="first:-ml-0 aspect-square h-[180px] max-sm:-ml-32 -ml-20 relative  hover:-translate-x-14 hover:-translate-y-1 transition-all duration-300 hover:rotate-3 pointer last:-mr-24 hover:last:-translate-x-2 ">
      {/* gradient */}
      <div className="rounded-xl  bg-gradient-to-r  from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(0,0,0,0.2)] w-full h-full absolute"></div>
      {/* zdjęcie */}
      <img
        className="h-[180px] shadow-[0_0_20px_black]  rounded-xl  left-0 border-8 border-accent pointer  "
        src={model.card}
        alt={model.name}
      />

      {/* nazwa modelu container */}
      <div className="absolute text-white w-full h-full  bg-opacity-50 rounded-xl grid justify-start place-content-end  top-0  opacity-0 hover:opacity-100 transition-all duration-300">
        {/* wydawca */}
        <div className="text-accent absolute px-1 top-2 left-2 text-base   text-left rounded-tl-[4px] leading-5 font-bold bg-white">
          {model.publisher}
        </div>
        {/* nazwa modelu */}
        <div className="absolute bottom-0 w-full text-base  bg-accent px-4 py-2 text-left rounded-b-lg leading-5 font-bold bg-gradient-to-r  from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(0,0,0,0.2)]">
          {model.name}
        </div>
      </div>
    </div>
  );
};

export default Card;
