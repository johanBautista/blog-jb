import { Switch } from "./components/Switch";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <div className="theme-container">
        <Switch />
      </div>
      <Home />
      <Skills />
    </div>
  );
}

export default App;
