import { Check, Flag } from "lucide-react";
import { techStack } from "@config";
import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import {
  TERMINAL_WINDOW_CHECK_ICON_SIZE,
  TERMINAL_WINDOW_FLAG_ICON_SIZE,
} from "@constants";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@eduard % </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map((tech) => (
            <li key={tech.category} className="flex items-center">
              <Check className="check" size={TERMINAL_WINDOW_CHECK_ICON_SIZE} />
              <h3>{tech.category}</h3>
              <ul>
                {tech.items.map((item, index) => (
                  <li key={index}>
                    {item}
                    {index < tech.items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footer">
          <p>
            <Check size={TERMINAL_WINDOW_CHECK_ICON_SIZE} /> 5 of 5 stacks
            loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={TERMINAL_WINDOW_FLAG_ICON_SIZE} fill="black" />
            Render time: 3ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
