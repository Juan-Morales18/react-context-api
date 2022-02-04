import { createContext, useState } from "react";

//Creacion del contexto
const LanguageContext = createContext();

const initialLanguage = "es";

const translations = {
  en: {
    headerTitle: "My app with Context API",
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
    headerTitle: "Mi aplicacion con Context API",
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

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

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

  const data = {
    language,
    texts,
    handleLanguage,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}

export { LanguageProvider };
export default LanguageContext;
