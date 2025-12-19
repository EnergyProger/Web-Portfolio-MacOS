import WindowControls from "@components/WindowControls";
import { Search } from "lucide-react";

const FinderHeader = () => {
  return (
    <div className="window-header">
      <WindowControls target="finder" />
      <Search className="icon" />
    </div>
  );
};

export default FinderHeader;
