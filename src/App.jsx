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

function App() {
  return (
    <main className=" relative bg-bkg-light dark:bg-bkg min-h-screen  flex flex-col max-w-6xl mx-auto border-text-light dark:border-opacity-70 dark:border-accent max-[1150px]:border-none border-x-2 border-opacity-30  text-text-dark dark:text-text-light  font-medium dark:font-normal ">
      <div className="w-full mx-auto h-full max-w-6xl top-0 left-0 absolute self-center z-[2]"></div>
      <div className="dark:bg-accent bg-text-dark  w-full  mx-auto h-full top-0 left-0 absolute blur-3xl opacity-40 self-center -z-10"></div>
      <Header />
      <Banner />
      <Nav />
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
        <Route path="/Kartonowe-budowle/Darlowo" element={<Darlowo id={5} />} />
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
        <Route path="/Kartonowe-budowle/Mauler" element={<Mauler id={23} />} />
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
      </Routes>
      <br />
      <br />
      <Footer />
    </main>
  );
}

export default App;
