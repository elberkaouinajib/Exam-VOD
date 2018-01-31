import React from 'react';
import {Route,Router,Redirect} from 'react-router';

import App from './App';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Stream from './components/Stream/Stream';

let Routes;
//Route when connected
if(sessionStorage.getItem('token')!=null){
     Routes = (props) => ( 
        <Router {...props}>
             <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Login" component={Home}/>
                <Route path="/Stream" component={Stream}/>
        </Router>
    );
}
//Route when disconected
else{
     Routes = (props) => ( 
        <Router {...props}>
             <Route exact path="/*" component={Login}/>
        </Router>
    );
}


export default Routes;
