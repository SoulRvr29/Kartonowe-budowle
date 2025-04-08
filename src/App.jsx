import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Oswietlenie from "./techPages/Oswietlenie";
import Roslinnosc from "./techPages/Roslinnosc";
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
import Czolpino from "./pages/Czolpino";
import Gaski from "./pages/Gaski";
import Hel from "./pages/Hel";
import Jaroslawiec from "./pages/Jaroslawiec";
import Jastarnia from "./pages/Jastarnia";
import Kikut from "./pages/Kikut";
import Kolobrzeg from "./pages/Kolobrzeg";
import KrynicaMorska from "./pages/KrynicaMorska";
import Niechorze from "./pages/Niechorze";
import NowyPort from "./pages/NowyPort";
import PortPolnocny from "./pages/PortPolnocny";
import Rozewie from "./pages/Rozewie";
import Sopot from "./pages/Sopot";
import Swinoujscie from "./pages/Swinoujscie";
import Ustka from "./pages/Ustka";
import Baranow from "./pages/Baranow";
import Gryfino from "./pages/Gryfino";
import Mauler from "./pages/Mauler";
import Predator from "./pages/Predator";
import PhantomF4 from "./pages/PhantomF4";
import StarshipSN15 from "./pages/StarshipSN15";
import Falcon9 from "./pages/Falcon9";
import Wang from "./pages/Wang";
import AtlasV from "./pages/AtlasV";
import SaturnV from "./pages/SaturnV";
import Olsztyn from "./pages/Olsztyn";
import WangGPM from "./pages/WangGPM";
import MiG29 from "./pages/MiG29";
import Wiezowce from "./pages/Wiezowce";
import NowyWisnicz from "./pages/NowyWisnicz";
import Layout from "./Layout";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

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
      <Route path="/Czolpino" element={<Czolpino id={6} />} />
      <Route path="/Gaski" element={<Gaski id={8} />} />
      <Route path="/Hel" element={<Hel id={9} />} />
      <Route path="/Jaroslawiec" element={<Jaroslawiec id={10} />} />
      <Route path="/Jastarnia" element={<Jastarnia id={11} />} />
      <Route path="/Kikut" element={<Kikut id={12} />} />
      <Route path="/Kolobrzeg" element={<Kolobrzeg id={13} />} />
      <Route path="/Krynica Morska" element={<KrynicaMorska id={14} />} />
      <Route path="/Niechorze" element={<Niechorze id={15} />} />
      <Route path="/Nowy Port" element={<NowyPort id={16} />} />
      <Route path="/Port Polnocny" element={<PortPolnocny id={17} />} />
      <Route path="/Rozewie" element={<Rozewie id={18} />} />
      <Route path="/Sopot" element={<Sopot id={19} />} />
      <Route path="/Swinoujscie" element={<Swinoujscie id={20} />} />
      <Route path="/Ustka" element={<Ustka id={7} />} />
      <Route path="/Curiosity" element={<Curiosity id={3} />} />
      <Route path="/Baranow" element={<Baranow id={21} />} />
      <Route path="/Gryfino" element={<Gryfino id={22} />} />
      <Route path="/Mauler" element={<Mauler id={23} />} />
      <Route path="/Predator" element={<Predator id={24} />} />
      <Route path="/PhantomF4" element={<PhantomF4 id={25} />} />
      <Route path="/StarshipSN15" element={<StarshipSN15 id={26} />} />
      <Route path="/Falcon9" element={<Falcon9 id={27} />} />
      <Route path="/Wang" element={<Wang id={28} />} />
      <Route path="/AtlasV" element={<AtlasV id={30} />} />
      <Route path="/SaturnV" element={<SaturnV id={31} />} />
      <Route path="/Olsztyn" element={<Olsztyn id={32} />} />
      <Route path="/WangGPM" element={<WangGPM id={33} />} />
      <Route path="/MiG-29" element={<MiG29 id={34} />} />
      <Route path="/Wiezowce" element={<Wiezowce id={35} />} />
      <Route path="/NowyWisnicz" element={<NowyWisnicz id={36} />} />

      <Route path="/Oswietlenie" element={<Oswietlenie id={"Oswietlenie"} />} />
      <Route path="/Roslinnosc" element={<Roslinnosc />} />
      <Route path="/Sadzarka" element={<Sadzarka />} />
      <Route path="/Okna" element={<Okna />} />
      <Route path="/Arduino" element={<Arduino />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export { App, router };
