import gsap from "gsap";
import { Draggable } from "gsap/all";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import Dock from "@components/Dock";
import Terminal from "@windows/Terminal";
import Safari from "@windows/Safari";
import Resume from "@windows/Resume";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;
