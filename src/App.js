import './App.css';
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin_dashboard from './admin/admin_nav_side';
import User_dashboard from './user/user_dashboard'


function App() {
  return (
    <Router>
      <div className="container">



        <Switch>
          <Route path="/admin">
            <Admin_dashboard />
          </Route>
          <Route path="/users">
            <User_dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
