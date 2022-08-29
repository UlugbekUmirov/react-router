import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import useParam from "./components/useParam";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog/:id" component={useParam} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
