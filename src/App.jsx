import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Nav from "./components/MainNav";
import BackToTop from "./components/BackToTop";
import TechNav from "./components/TechNav";

import Oświetlenie from "./techPages/Oświetlenie";
import Roślinność from "./techPages/Roślinność";
import Sadzarka from "./techPages/Sadzarka";
import Okna from "./techPages/Okna";
import Arduino from "./techPages/Arduino";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Bedzin from "./pages/Bedzin";
import Oporow from "./pages/Oporow";
import Curiosity from "./pages/Curiosity";
import SandomierzRatusz from "./pages/SandomierzRatusz";
import SandomierzBrama from "./pages/SandomierzBrama";
import Stilo from "./pages/Stilo";
import Darlowo from "./pages/Darlowo";
import Czołpino from "./pages/Czołpino";
import Gąski from "./pages/Gąski";
import Hel from "./pages/Hel";
import Jarosławiec from "./pages/Jarosławiec";
import Jastarnia from "./pages/Jastarnia";
import Kikut from "./pages/Kikut";
import Kołobrzeg from "./pages/Kołobrzeg";
import KrynicaMorska from "./pages/KrynicaMorska";
import Niechorze from "./pages/Niechorze";
import NowyPort from "./pages/NowyPort";
import PortPółnocny from "./pages/PortPółnocny";
import Rozewie from "./pages/Rozewie";
import Sopot from "./pages/Sopot";
import Świnoujście from "./pages/Świnoujście";
import Ustka from "./pages/Ustka";
import Baranów from "./pages/Baranów";
import Gryfino from "./pages/Gryfino";
import Mauler from "./pages/Mauler";
import Predator from "./pages/Predator";
import PhantomF4 from "./pages/PhantomF4";
import StarshipSN15 from "./pages/StarshipSN15";
import Falcon9 from "./pages/Falcon9";
import Wang from "./pages/Wang";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
      <main className=" relative bg-bkg-light dark:bg-bkg min-h-screen  flex flex-col max-w-6xl mx-auto border-text-light dark:border-opacity-50 dark:border-accent max-[1150px]:border-none border-x-2 border-opacity-30 font-medium dark:font-normal pb-[34px]">
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
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Bedzin" element={<Bedzin id={0} />} />
          <Route path="/Oporow" element={<Oporow id={1} />} />
          <Route
            path="/SandomierzRatusz"
            element={<SandomierzRatusz id={4} />}
          />
          <Route
            path="/SandomierzBrama"
            element={<SandomierzBrama id={29} />}
          />
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
          <Route path="/Oświetlenie" element={<Oświetlenie />} />
          <Route path="/Roślinność" element={<Roślinność />} />
          <Route path="/Sadzarka" element={<Sadzarka />} />
          <Route path="/Okna" element={<Okna />} />
          <Route path="/Arduino" element={<Arduino />} />
        </Routes>
        <Footer />
      </main>
      <SpeedInsights />
    </>
  );
}

export default App;
