import { createContext } from "react";

export interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  toggleDarkMode: () => {},
});
