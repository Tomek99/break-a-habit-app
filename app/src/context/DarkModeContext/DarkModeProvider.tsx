import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

interface Props {
  children: React.ReactNode;
}

export const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("darkMode", JSON.stringify(next));
      return next;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
