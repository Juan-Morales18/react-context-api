import { useState } from "react";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const initialTheme = "light";
const initialLanguage = "es";

const translations = {
  en: {
    headerTitle: "My app without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Log in",
    buttonLogout: "Log out",
    mainWelcome: "Welcome",
    mainHello: "Hi, user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
  es: {
    headerTitle: "Mi aplicacion si Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar sesion",
    buttonLogout: "Cerrar sesion",
    mainWelcome: "Bienvenid@ invitado",
    mainHello: "Hola usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
};

function MyPage() {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        texts={texts}
      ></Header>
      <Main theme={theme} texts={texts}></Main>
      <Footer theme={theme} texts={texts}></Footer>
    </div>
  );
}

export { MyPage };
