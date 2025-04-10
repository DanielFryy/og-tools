// SettingsSheet component types and interfaces

export interface SettingsSheetProps {
  className?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
