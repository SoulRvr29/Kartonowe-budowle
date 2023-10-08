import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Article from "../components/Article";

function App() {
  return (
    <main className="relative bg-bkg min-h-screen  flex flex-col  max-w-6xl mx-auto border-accent-2 border">
      <Header />
      <Banner />
      <Nav />
      <Article />
      <Footer />
    </main>
  );
}

export default App;
