import WindowControls from "@components/WindowControls";

interface Props {
  title: string;
}

const TextViewerHeader = ({ title }: Props) => {
  return (
    <div id="window-header">
      <WindowControls target="txtfile" />
      <h2>{title}</h2>
    </div>
  );
};

export default TextViewerHeader;
