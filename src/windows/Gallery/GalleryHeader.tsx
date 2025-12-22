import WindowControls from "@components/WindowControls";
import { Mail, Search } from "lucide-react";

const GalleryHeader = () => {
  return (
    <div className="window-header">
      <WindowControls target="gallery" />
      <div className="w-full flex justify-end items-center gap-3 text-gray-500">
        <Mail className="icon" />
        <Search className="icon" />
      </div>
    </div>
  );
};

export default GalleryHeader;
