import type { IFile } from "@types";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import ImageViewerHeader from "./ImageViewerHeader";
import ImageViewerContent from "./ImageViewerContent";

const ImageViewer = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data as IFile | null;

  if (!data) return null;

  return (
    <>
      <ImageViewerHeader title={data.name} />
      <ImageViewerContent data={data} />
    </>
  );
};

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;
