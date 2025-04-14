import { ThemeProvider as NextThemesProvider } from "next-themes";

import { ThemeProviderProps as Props } from "./ThemeProvider.types";

const ThemeProvider = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme" {...rest}>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
