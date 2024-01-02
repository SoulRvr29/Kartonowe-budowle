const TechHeader = ({ title }) => {
  return (
    <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 ">
      <hr className="grad-hr" />
      <h2 className="article-header font-Calistoga tracking-widest text-center text-3xl  max-sm:text-xl font-semibold py-1 px-2  dark:text-accent-2 text-accent-4 dark:drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] drop-shadow-[1px_0px_0px_rgba(0,0,0,0.5)] ">
        {title} <br />
      </h2>
      <hr className="grad-hr" />
    </header>
  );
};

export default TechHeader;
