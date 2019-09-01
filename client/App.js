import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
      </div>
      <div>
        <Route exact path="/" component={Fib}></Route>
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
};

export default App;
