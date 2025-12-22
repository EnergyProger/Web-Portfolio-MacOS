import WindowWrapper from "@hoc/WindowWrapper";
import GalleryContent from "./GalleryContent";
import GalleryHeader from "./GalleryHeader";
import GallerySidebar from "./GallerySidebar";

const Gallery = () => {
  return (
    <>
      <GalleryHeader />
      <div className="flex w-full">
        <GallerySidebar />
        <GalleryContent />
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "gallery");

export default GalleryWindow;
