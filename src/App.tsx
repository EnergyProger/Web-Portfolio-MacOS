import gsap from "gsap";
import { Draggable } from "gsap/all";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import Dock from "@components/Dock";
import Terminal from "@windows/Terminal";
import Safari from "@windows/Safari";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
    </main>
  );
};

export default App;
