import { Check, Flag } from "lucide-react";
import {
  TERMINAL_WINDOW_CHECK_ICON_SIZE,
  TERMINAL_WINDOW_FLAG_ICON_SIZE,
} from "@constants";

interface Props {
  totalStacks: number;
  renderTime: number;
}

const TerminalFooter = ({ totalStacks, renderTime }: Props) => {
  return (
    <div className="footer">
      <p>
        <Check size={TERMINAL_WINDOW_CHECK_ICON_SIZE} /> {totalStacks} of{" "}
        {totalStacks} stacks loaded successfully (100%)
      </p>
      <p className="text-black">
        <Flag size={TERMINAL_WINDOW_FLAG_ICON_SIZE} fill="black" />
        Render time: {renderTime.toFixed(2)}ms
      </p>
    </div>
  );
};

export default TerminalFooter;
