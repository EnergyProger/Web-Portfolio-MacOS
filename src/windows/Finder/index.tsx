import WindowWrapper from "@hoc/WindowWrapper";
import FinderHeader from "./FinderHeader";
import FinderSidebar from "./FinderSidebar";
import FinderContent from "./FinderContent";

const Finder = () => {
  return (
    <>
      <FinderHeader />
      <div className="bg-white flex h-full">
        <FinderSidebar />
        <FinderContent />
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
