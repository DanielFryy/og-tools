import { twMerge } from "tailwind-merge";

import { SettingsSheetProps as Props } from "./SettingsSheet.types";
import PlayerClassSelect from "@/components/PlayerClassSelect/PlayerClassSelect";
import { SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "@/components/ui/sheet";

const SettingsSheet = (props: Props) => {
  const { className, open, onOpenChange } = props;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className={twMerge("SettingsSheet w-full sm:max-w-md", className)}>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>Configure your global preferences here.</SheetDescription>
        </SheetHeader>
        <div className="flex gap-4 p-4 flex-col items-center flex-1">
          <PlayerClassSelect />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsSheet;
