import React from 'react';
import {render} from 'react-dom';
import NotFound from './NotFound';
import App from './App';
import Nav from './Nav';
import Details from './Details';
import RSVP from './RSVP';
import Register from './Register';
import Photos from './Photos'
import Guests from './Guests';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';

const Root = (props) => {
    return(
        <Router>
            <div>
            <Nav/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/details" component={Details}/>
                    <Route exact path="/photos" component={Photos}/>
                    <Route exact path="/registry" component={Register}/>
                    <Route exact path="/rsvp" component={RSVP}/>
                    <Route exact path="/guests" component={Guests}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();