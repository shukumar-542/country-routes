
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'><Home/></Route>
          <Route exact path='/'><Home/></Route>
          <Route path='/name/:countryName'><CountryDetails/></Route>
          <Route path='*'><NotFound/></Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
