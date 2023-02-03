import "./App.css";
// import Header from './components/header/Header';
import Main from "./components/main/Main";
import { ContextProvaider } from "./store/Context";
import Themes from "./components/theme/Themes";

function App() {

  return (
    <div className="App">
      <Themes />
      <ContextProvaider>
        <div>
          <Main />
        </div>
      </ContextProvaider>
    </div>
  );
}

export default App;
