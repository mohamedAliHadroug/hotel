import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topnav from './components/Topnav'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router >
     <Topnav />
     <ToastContainer position="top-center" />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/register' component={Register} />
       </Switch>
    </Router>
  );
}

export default App;
