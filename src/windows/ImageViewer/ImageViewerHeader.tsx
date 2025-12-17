import WindowControls from "@components/WindowControls";

interface Props {
  title: string;
}

const ImageViewerHeader = ({ title }: Props) => {
  return (
    <div id="window-header">
      <WindowControls target="imgfile" />
      <h2>{title}</h2>
    </div>
  );
};

export default ImageViewerHeader;
