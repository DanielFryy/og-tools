// ThemeProvider component types and interfaces
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes";

export interface ThemeProviderProps extends NextThemeProviderProps {
  className?: string;
}
