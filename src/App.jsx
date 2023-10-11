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
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <main className="relative bg-bkg min-h-screen  flex flex-col max-w-6xl mx-auto border-accent border-x-2 border-opacity-30 ">
      <div className="bg-accent w-full  mx-auto h-full top-0 left-0 absolute blur-3xl opacity-25 self-center -z-10"></div>
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
      <BackToTop />
    </main>
  );
}

export default App;
