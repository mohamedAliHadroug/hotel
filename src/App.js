import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topnav from './components/Topnav'
import Dashboard from './user/Dashboard'
import DashboardSeller from './user/DashnoardSeller'
import { ToastContainer} from 'react-toastify';
import PrivateRoute  from './components/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css';
import NewHotel from './hotels/NewHotel'

function App() {
  return (
    <Router >
     <Topnav />
     <ToastContainer position="top-center" />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/register' component={Register} />
         <PrivateRoute exact path='/dashboard' component={Dashboard} />
         <PrivateRoute exact path='/dashboard/seller' component={DashboardSeller} />
         <PrivateRoute exact path='/hotels/new' component={NewHotel} />
       </Switch>
    </Router>
  );
}

export default App;
