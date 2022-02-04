import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";
import { FooterContext } from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

function MyPageContext() {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <HeaderContext></HeaderContext>
            <MainContext></MainContext>
            <FooterContext></FooterContext>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export { MyPageContext };
