import { useState, useEffect, useContext, createContext } from "react";

export const themeContext = createContext();
const getItem = window.localStorage.getItem("theme") ?? null;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => (getItem ? getItem : "dark"));

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => useContext(themeContext);
