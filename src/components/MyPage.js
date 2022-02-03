import { useState } from "react";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const initialTheme = "light";

function MyPage() {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="my-page">
      <Header theme={theme} handleTheme={handleTheme}></Header>
      <Main theme={theme}></Main>
      <Footer theme={theme}></Footer>
    </div>
  );
}

export { MyPage };
