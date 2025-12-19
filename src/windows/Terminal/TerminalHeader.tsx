import WindowControls from "@components/WindowControls";

interface Props {
  title: string;
}

const TerminalHeader = ({ title }: Props) => {
  return (
    <div className="window-header">
      <WindowControls target="terminal" />
      <h2>{title}</h2>
    </div>
  );
};

export default TerminalHeader;
