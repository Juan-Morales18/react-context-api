import { createContext, useState } from "react";

//Creacion del context
const ThemeContext = createContext();

const initialTheme = "light";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  //Valores a conservar globalmente
  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider };

export default ThemeContext;
