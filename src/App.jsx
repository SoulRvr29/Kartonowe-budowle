import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Home from "./articles/Home";
import Bedzin from "./articles/Bedzin";
import Oporow from "./articles/Oporow";
import Curiosity from "./articles/Curiosity";
import Sandomierz from "./articles/Sandomierz";
import Stilo from "./articles/Stilo";

function App() {
  return (
    <main className="relative bg-bkg min-h-screen  flex flex-col  max-w-6xl mx-auto border-accent-2 border">
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
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
