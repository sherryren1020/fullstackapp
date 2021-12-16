import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Footer from './components/Footer';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import Logout from './components/Logout';
import { BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  useParams} from 'react-router-dom';
import ProtectedRoute from "./components/protectedRoute"
import './css/app.css';

// import { Router } from 'express';

class App extends React.Component {
  render(){
    return (
    <React.Fragment>
      <Router>
      {/* <NavBar /> */}
      <Route path="*" component={ NavBar}/>
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
        <ProtectedRoute  exact path="/edit/:id"  component={EditForm} />
        <ProtectedRoute  exact path="/delete/:id" />
        <Route exact path="/register" component={ Register}/>
        <Route  exact path="/signin"  component={ SignIn} />
        {/* <Route  exact path="/logout"  component={ Logout} /> */}
        
        <Route  exact path="/" component={Main} />
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

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

export default App;
