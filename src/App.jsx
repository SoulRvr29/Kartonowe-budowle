import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import BackToTop from "./components/BackToTop";

import Home from "./sections/Home";
import Bedzin from "./sections/Bedzin";
import Oporow from "./sections/Oporow";
import Curiosity from "./sections/Curiosity";
import Sandomierz from "./sections/Sandomierz";
import Stilo from "./sections/Stilo";
import Darlowo from "./sections/Darlowo";

function App() {
  return (
    <main className=" relative bg-bkg-light dark:bg-bkg min-h-screen  flex flex-col max-w-6xl mx-auto border-text-light dark:border-opacity-70 dark:border-accent border-x-2 border-opacity-30  text-text-dark dark:text-text-light  font-medium dark:font-normal">
      <div className="dark:bg-accent bg-text-dark  w-full  mx-auto h-full top-0 left-0 absolute blur-3xl opacity-40 self-center -z-10"></div>
      <Header />
      <Banner />
      <Nav />
      <Routes>
        <Route path="/Kartonowe-budowle/" element={<Home />} />
        <Route path="/Kartonowe-budowle/Bedzin" element={<Bedzin />} />
        <Route path="/Kartonowe-budowle/Oporow" element={<Oporow />} />
        <Route path="/Kartonowe-budowle/Curiosity" element={<Curiosity />} />
        <Route path="/Kartonowe-budowle/Sandomierz" element={<Sandomierz />} />
        <Route path="/Kartonowe-budowle/Stilo" element={<Stilo />} />
        <Route path="/Kartonowe-budowle/Darlowo" element={<Darlowo />} />
      </Routes>
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;
