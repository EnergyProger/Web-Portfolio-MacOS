import useWindowStore from "@store/window";

interface Props {
  target: string;
}

const WindowControls = ({ target }: Props) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
