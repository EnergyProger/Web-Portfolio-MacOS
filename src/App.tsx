import gsap from "gsap";
import { Draggable } from "gsap/all";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import Dock from "@components/Dock";
import Terminal from "@windows/Terminal";
import Safari from "@windows/Safari";
import Resume from "@windows/Resume";
import Finder from "@windows/Finder";
import TextViewer from "@windows/TextViewer";
import ImageViewer from "@windows/ImageViewer";
import Contact from "@windows/Contact";

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
      <Finder />
      <TextViewer />
      <ImageViewer />
      <Contact />
    </main>
  );
};

export default App;
