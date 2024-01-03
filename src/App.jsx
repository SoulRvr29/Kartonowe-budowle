import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import BackToTop from "./components/BackToTop";
import TechNav from "./components/TechNav";

import Oświetlenie from "./sections/Oświetlenie";
import Roślinność from "./sections/Roślinność";
import Sadzarka from "./sections/Sadzarka";
import Okna from "./sections/Okna";
import Arduino from "./sections/Arduino";

import Home from "./sections/Home";
import Bedzin from "./sections/Bedzin";
import Oporow from "./sections/Oporow";
import Curiosity from "./sections/Curiosity";
import Sandomierz from "./sections/Sandomierz";
import Stilo from "./sections/Stilo";
import Darlowo from "./sections/Darlowo";
import Czołpino from "./sections/Czołpino";
import Gąski from "./sections/Gąski";
import Hel from "./sections/Hel";
import Jarosławiec from "./sections/Jarosławiec";
import Jastarnia from "./sections/Jastarnia";
import Kikut from "./sections/Kikut";
import Kołobrzeg from "./sections/Kołobrzeg";
import KrynicaMorska from "./sections/KrynicaMorska";
import Niechorze from "./sections/Niechorze";
import NowyPort from "./sections/NowyPort";
import PortPółnocny from "./sections/PortPółnocny";
import Rozewie from "./sections/Rozewie";
import Sopot from "./sections/Sopot";
import Świnoujście from "./sections/Świnoujście";
import Ustka from "./sections/Ustka";
import Baranów from "./sections/Baranów";
import Gryfino from "./sections/Gryfino";
import Mauler from "./sections/Mauler";
import Predator from "./sections/Predator";
import PhantomF4 from "./sections/PhantomF4";
import StarshipSN15 from "./sections/StarshipSN15";
import Falcon9 from "./sections/Falcon9";
import Wieżowce from "./sections/Wieżowce";
import Wang from "./sections/Wang";

function App() {
  if (localStorage.getItem("overlap") == null)
    localStorage.setItem("overlap", false);
  const [overlap, setOverlap] = useState(
    JSON.parse(localStorage.getItem("overlap"))
  );

  if (localStorage.getItem("banner") == null)
    localStorage.setItem("banner", true);
  const [bannerState, setBannerState] = useState(
    JSON.parse(localStorage.getItem("banner"))
  );
  return (
    <>
      <div className="bkg-texture fixed top-0 left-0 w-screen h-screen flex justify-center -z-20"></div>
      <main className=" relative bg-bkg-light dark:bg-bkg min-h-screen  flex flex-col max-w-6xl mx-auto border-text-light dark:border-opacity-50 dark:border-accent max-[1150px]:border-none border-x-2 border-opacity-30  text-text-dark dark:text-text-light font-medium dark:font-normal ">
        <div className="dark:bg-accent bg-text-dark  w-full  mx-auto h-full top-0 left-0 absolute blur-[80px] opacity-50 self-center -z-10"></div>
        <Header
          bannerState={bannerState}
          setBannerState={setBannerState}
          overlap={overlap}
          setOverlap={setOverlap}
        />
        <Banner bannerState={bannerState} setBannerState={setBannerState} />
        <Nav overlap={overlap} setOverlap={setOverlap} />
        <TechNav />
        <BackToTop />
        <Routes>
          <Route path="/Kartonowe-budowle/" element={<Home />} />
          <Route path="/Kartonowe-budowle/Bedzin" element={<Bedzin id={0} />} />
          <Route path="/Kartonowe-budowle/Oporow" element={<Oporow id={1} />} />
          <Route
            path="/Kartonowe-budowle/Sandomierz"
            element={<Sandomierz id={4} />}
          />
          <Route path="/Kartonowe-budowle/Stilo" element={<Stilo id={2} />} />
          <Route
            path="/Kartonowe-budowle/Darlowo"
            element={<Darlowo id={5} />}
          />
          <Route
            path="/Kartonowe-budowle/Czołpino"
            element={<Czołpino id={6} />}
          />
          <Route path="/Kartonowe-budowle/Gąski" element={<Gąski id={8} />} />
          <Route path="/Kartonowe-budowle/Hel" element={<Hel id={9} />} />
          <Route
            path="/Kartonowe-budowle/Jarosławiec"
            element={<Jarosławiec id={10} />}
          />
          <Route
            path="/Kartonowe-budowle/Jastarnia"
            element={<Jastarnia id={11} />}
          />
          <Route path="/Kartonowe-budowle/Kikut" element={<Kikut id={12} />} />
          <Route
            path="/Kartonowe-budowle/Kołobrzeg"
            element={<Kołobrzeg id={13} />}
          />
          <Route
            path="/Kartonowe-budowle/Krynica Morska"
            element={<KrynicaMorska id={14} />}
          />
          <Route
            path="/Kartonowe-budowle/Niechorze"
            element={<Niechorze id={15} />}
          />
          <Route
            path="/Kartonowe-budowle/Nowy Port"
            element={<NowyPort id={16} />}
          />
          <Route
            path="/Kartonowe-budowle/Port Północny"
            element={<PortPółnocny id={17} />}
          />
          <Route
            path="/Kartonowe-budowle/Rozewie"
            element={<Rozewie id={18} />}
          />
          <Route path="/Kartonowe-budowle/Sopot" element={<Sopot id={19} />} />
          <Route
            path="/Kartonowe-budowle/Świnoujście"
            element={<Świnoujście id={20} />}
          />
          <Route path="/Kartonowe-budowle/Ustka" element={<Ustka id={7} />} />
          <Route
            path="/Kartonowe-budowle/Curiosity"
            element={<Curiosity id={3} />}
          />
          <Route
            path="/Kartonowe-budowle/Baranów"
            element={<Baranów id={21} />}
          />
          <Route
            path="/Kartonowe-budowle/Gryfino"
            element={<Gryfino id={22} />}
          />
          <Route
            path="/Kartonowe-budowle/Mauler"
            element={<Mauler id={23} />}
          />
          <Route
            path="/Kartonowe-budowle/Predator"
            element={<Predator id={24} />}
          />
          <Route
            path="/Kartonowe-budowle/PhantomF4"
            element={<PhantomF4 id={25} />}
          />
          <Route
            path="/Kartonowe-budowle/StarshipSN15"
            element={<StarshipSN15 id={26} />}
          />
          <Route
            path="/Kartonowe-budowle/Falcon9"
            element={<Falcon9 id={27} />}
          />
          <Route path="/Kartonowe-budowle/Wang" element={<Wang id={28} />} />
          <Route path="/Kartonowe-budowle/Wieżowce" element={<Wieżowce />} />
          <Route
            path="/Kartonowe-budowle/Oświetlenie"
            element={<Oświetlenie />}
          />
          <Route
            path="/Kartonowe-budowle/Roślinność"
            element={<Roślinność />}
          />
          <Route path="/Kartonowe-budowle/Sadzarka" element={<Sadzarka />} />
          <Route path="/Kartonowe-budowle/Okna" element={<Okna />} />
          <Route path="/Kartonowe-budowle/Arduino" element={<Arduino />} />
        </Routes>
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}

export default App;
