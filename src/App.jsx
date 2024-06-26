import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

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
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bedzin" element={<Bedzin id={0} />} />
        <Route path="/Oporow" element={<Oporow id={1} />} />
        <Route path="/SandomierzRatusz" element={<SandomierzRatusz id={4} />} />
        <Route path="/SandomierzBrama" element={<SandomierzBrama id={29} />} />
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
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
}

export default App;
