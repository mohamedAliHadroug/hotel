import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topnav from './components/Topnav'



function App() {
  return (
    <Router >
     <Topnav />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/register' component={Register} />
       </Switch>
    </Router>
  );
}

export default App;
