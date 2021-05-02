
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
