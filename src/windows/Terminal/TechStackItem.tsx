import { Check } from "lucide-react";
import { TERMINAL_WINDOW_CHECK_ICON_SIZE } from "@constants";

interface Props {
  category: string;
  items: string[];
}

const TechStackItem = ({ category, items }: Props) => {
  return (
    <li className="flex items-center">
      <Check className="check" size={TERMINAL_WINDOW_CHECK_ICON_SIZE} />
      <h3>{category}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {index < items.length - 1 ? "," : ""}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TechStackItem;
