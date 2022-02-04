import "./App.css";
import CrudApi from "./components/CrudApi";
import { MyPage } from "./components/MyPage";
import { MyPageContext } from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <hr></hr>
      <CrudProvider>
        <CrudApi></CrudApi>
      </CrudProvider>
      <hr></hr>
      <MyPageContext></MyPageContext>
      <hr></hr>
      <MyPage></MyPage>
      <hr></hr>
    </div>
  );
}

export default App;
