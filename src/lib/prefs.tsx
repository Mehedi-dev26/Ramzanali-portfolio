import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type Lang = "en" | "bn";

type Prefs = {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  setLang: (l: Lang) => void;
};

const PrefsContext = createContext<Prefs>({
  theme: "dark",
  lang: "en",
  toggleTheme: () => {},
  setLang: () => {},
});

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const storedLang = window.localStorage.getItem("lang") as Lang | null;
    if (storedTheme) setTheme(storedTheme);
    if (storedLang) setLangState(storedLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  const setLang = useCallback((l: Lang) => setLangState(l), []);

  return (
    <PrefsContext.Provider value={{ theme, lang, toggleTheme, setLang }}>
      {children}
    </PrefsContext.Provider>
  );
}

export const usePrefs = () => useContext(PrefsContext);
