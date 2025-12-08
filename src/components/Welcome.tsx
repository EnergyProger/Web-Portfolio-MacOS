import { useRef } from "react";
import { useTextHover } from "@hooks/useTextHover";
import { renderText } from "@utils/renderText";

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useTextHover(titleRef, "title");
  useTextHover(subtitleRef, "subtitle");

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Eduard! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama")}
      </h1>
      <div className="small-screen">
        <p>
          This portfolio is built specifically for desktop and tablet screens
        </p>
      </div>
    </section>
  );
};

export default Welcome;
