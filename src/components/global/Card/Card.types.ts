// Card component types and interfaces
import { type LucideIcon } from "lucide-react";

export interface CardProps {
  className?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  link: string;
  soon?: boolean;
  buttonText?: string;
}
