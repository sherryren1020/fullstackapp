import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Footer from './components/Footer';
import CreateForm from './components/CreateForm';
import { BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  useLocation} from 'react-router-dom';
import ProtectedRoute from "./components/protectedRoute"




import './css/app.css';
// import { Router } from 'express';

class App extends React.Component {
  render(){
    return (
    <React.Fragment>
      <Router>
      <NavBar />
      <div id="main-content">
      <ul>
          
          <li>
            <Link to="/signin">signin</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
         
        </ul>
        <Switch>
        <ProtectedRoute exact path="/create" component={CreateForm}/>
        <Route exact path="/register" component={ Register}/>
        <Route  exact path="/signin"  component={ SignIn} />
        <Route  exact path="/" component={ Main} />
        <Route path="*" component={ NoMatch } />

  
        </Switch>
      </div>
      <Footer />
        </Router>
      
    </React.Fragment>
  );
  }
  
}

function NoMatch(props){
  return (
    <div>
      <h3>
        No match {props.location.pathname}
      </h3>
     
    </div>
  );
}
export default App;
