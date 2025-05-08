import { twMerge } from "tailwind-merge";

import { BlueBoxProps as Props } from "./BlueBox.types";

const BlueBox = (props: Props) => {
  const { className, children } = props;

  return (
    <div
      className={twMerge(
        "BlueBox relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-b from-blue-900 to-slate-900 p-4",
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground dark:text-primary">
        {children}
      </div>
    </div>
  );
};

export default BlueBox;
