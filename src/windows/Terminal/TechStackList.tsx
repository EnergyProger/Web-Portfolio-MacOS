import { techStack } from "@config";
import TechStackItem from "./TechStackItem";

const TechStackList = () => {
  return (
    <ul className="content">
      {techStack.map((tech) => (
        <TechStackItem
          key={tech.category}
          category={tech.category}
          items={tech.items}
        />
      ))}
    </ul>
  );
};

export default TechStackList;
