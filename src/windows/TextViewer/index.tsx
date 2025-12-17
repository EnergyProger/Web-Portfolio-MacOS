import type { IFile } from "@types";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import TextViewerHeader from "./TextViewerHeader";
import TextViewerContent from "./TextViewerContent";

const TextViewer = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data as IFile | null;

  if (!data) return null;

  return (
    <>
      <TextViewerHeader title={data.name} />
      <TextViewerContent data={data} />
    </>
  );
};

const TextViewerWindow = WindowWrapper(TextViewer, "txtfile");

export default TextViewerWindow;
