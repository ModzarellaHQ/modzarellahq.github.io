import { render } from "solid-js/web";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mods from "./components/Mods";
import Steps from "./components/Steps";
import MakeAMod from "./components/MakeAMod";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Mods />
        <MakeAMod />
      </main>
      <Footer />
    </>
  );
}

render(() => <App />, document.getElementById("root")!);
