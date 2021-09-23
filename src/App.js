import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Content_LoggedIn from './components/LoggedInUser/Content';
import Content_NotLoggedIn from './components/notLoggedInUser/Content';
import Signup from './components/notLoggedInUser/Signup';
import Signin from './components/notLoggedInUser/Signin';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

    }, [])

  return (
  

      <Router>
  
       <Switch>
         <Route path='/' exact> <Content_NotLoggedIn windowWidth={windowWidth}/> </Route>
         <Route path='/loggedin'> <Content_LoggedIn windowWidth={windowWidth}/> </Route>
         <Route path='/signin' component={Signin}/>
         <Route path='/signup' component={Signup}/>
       </Switch>
     </Router>

  );
}

export default App;
