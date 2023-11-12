import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function Darkmode() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Darkmode" id={theme}>
        <Layout />
        <LoginForm />
        <RegistrationForm />
        <Home />
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}

export default Darkmode;
