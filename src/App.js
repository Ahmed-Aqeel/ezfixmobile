import "./App.css";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Fillers from "./components/Fillers";
import Footer from "./components/Footer";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Offerings from "./components/Offerings";
import Problems from "./components/Problems";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Front />

      <Banner />

      <Offerings />

      <Problems />

      <Fillers />

      <Contact />

      <Benefits />

      <Footer />
    </div>
  );
}

export default App;
