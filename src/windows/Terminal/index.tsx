import { techStack } from "@config";
import WindowWrapper from "@hoc/WindowWrapper";
import { useRenderTime } from "@hooks/useRenderTime";
import TerminalHeader from "./TerminalHeader";
import TechStackList from "./TechStackList";
import TerminalFooter from "./TerminalFooter";

interface Props {
  isOpen?: boolean;
}

const Terminal = ({ isOpen = false }: Props) => {
  const techStackLength = techStack.length;
  const renderTime = useRenderTime(isOpen);

  return (
    <>
      <TerminalHeader title="Tech Stack" />
      <div className="techstack">
        <p>
          <span className="font-bold">@eduard % </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <TechStackList />
        <TerminalFooter totalStacks={techStackLength} renderTime={renderTime} />
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
