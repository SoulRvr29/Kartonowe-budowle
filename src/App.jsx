import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Nav from "./Nav";
import Article from "./Article";

function App() {
  return (
    <main className="relative bg-bkg min-h-screen w-screen flex flex-col  max-w-6xl mx-auto border-accent-2 border">
      <Header />
      <Banner />
      <Nav />
      <Article />
      <Footer />
    </main>
  );
}

export default App;
