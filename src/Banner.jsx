const Banner = () => {
  return (
    <>
      <section className="pointer  h-[200px] w-full overflow-hidden relative flex flex-col">
        <h2 className=" absolute z-20 bottom-4 left-8 text-xl text-text-light drop-shadow-[1px_2px_1px_var(--bkg)] font-bold">
          Zamek w Będzinie
        </h2>

        {/* <div className="absolute bg-white z-10 w-full h-full"></div> */}
        <div className="grid grayscale hover:grayscale-[0] transition-all duration-1000 ">
          {/* gradient */}
          <div className="w-full h-full absolute banner-grad z-10"></div>
          <img
            className=" banner-img relative bottom-[11rem] place-self-center  w-screen min-w-max "
            src="./banner/bedzin-banner.jpg"
            alt="banner photo"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
