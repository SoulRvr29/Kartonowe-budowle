import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import BackToTop from "./components/BackToTop";
import TechNav from "./components/TechNav";

import Oświetlenie from "./techSections/Oświetlenie";
import Roślinność from "./techSections/Roślinność";
import Sadzarka from "./techSections/Sadzarka";
import Okna from "./techSections/Okna";
import Arduino from "./techSections/Arduino";

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
        {/* <TechNav /> */}
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bedzin" element={<Bedzin id={0} />} />
          <Route path="/Oporow" element={<Oporow id={1} />} />
          <Route path="/Sandomierz" element={<Sandomierz id={4} />} />
          <Route path="/Stilo" element={<Stilo id={2} />} />
          <Route path="/Darlowo" element={<Darlowo id={5} />} />
          <Route path="/Czołpino" element={<Czołpino id={6} />} />
          <Route path="/Gąski" element={<Gąski id={8} />} />
          <Route path="/Hel" element={<Hel id={9} />} />
          <Route path="/Jarosławiec" element={<Jarosławiec id={10} />} />
          <Route path="/Jastarnia" element={<Jastarnia id={11} />} />
          <Route path="/Kikut" element={<Kikut id={12} />} />
          <Route path="/Kołobrzeg" element={<Kołobrzeg id={13} />} />
          <Route path="/Krynica Morska" element={<KrynicaMorska id={14} />} />
          <Route path="/Niechorze" element={<Niechorze id={15} />} />
          <Route path="/Nowy Port" element={<NowyPort id={16} />} />
          <Route path="/Port Północny" element={<PortPółnocny id={17} />} />
          <Route path="/Rozewie" element={<Rozewie id={18} />} />
          <Route path="/Sopot" element={<Sopot id={19} />} />
          <Route path="/Świnoujście" element={<Świnoujście id={20} />} />
          <Route path="/Ustka" element={<Ustka id={7} />} />
          <Route path="/Curiosity" element={<Curiosity id={3} />} />
          <Route path="/Baranów" element={<Baranów id={21} />} />
          <Route path="/Gryfino" element={<Gryfino id={22} />} />
          <Route path="/Mauler" element={<Mauler id={23} />} />
          <Route path="/Predator" element={<Predator id={24} />} />
          <Route path="/PhantomF4" element={<PhantomF4 id={25} />} />
          <Route path="/StarshipSN15" element={<StarshipSN15 id={26} />} />
          <Route path="/Falcon9" element={<Falcon9 id={27} />} />
          <Route path="/Wang" element={<Wang id={28} />} />
          <Route path="/Wieżowce" element={<Wieżowce />} />
          <Route path="/Oświetlenie" element={<Oświetlenie />} />
          <Route path="/Roślinność" element={<Roślinność />} />
          <Route path="/Sadzarka" element={<Sadzarka />} />
          <Route path="/Okna" element={<Okna />} />
          <Route path="/Arduino" element={<Arduino />} />
        </Routes>
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}

export default App;
