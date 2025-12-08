/**
 * Renders text as individual span elements for character-level animation.
 * @param text - The text to render
 * @param className - CSS classes to apply to each span
 * @param baseWeight - Initial font weight (default: 400)
 */
export const renderText = (
  text: string,
  className: string,
  baseWeight: number = 400
) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};
