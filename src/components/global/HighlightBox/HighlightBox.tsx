import { twMerge } from "tailwind-merge";

import { HighlightBoxProps as Props } from "./HighlightBox.types";

const HighlightBox = (props: Props) => {
  const { className, title, description, icon: Icon } = props;

  return (
    <div className={twMerge("HighlightBox flex flex-col items-center gap-2 rounded-lg p-4", className)}>
      <div className="rounded-full bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

export default HighlightBox;
