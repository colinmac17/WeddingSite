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
import Comments from './Comments';
import { BackToTop } from './Styles';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';
var scrollToElement = require('scroll-to-element');

const handleClick = (id) => {
    scrollToElement(id, {
        offset: 0,
        duration: 500
    });
}

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
                    <Route exact path="/comments" component={Comments}/>
                    <Route exact path="/guests" component={Guests}/>
    <Route component={NotFound}/>
                </Switch>
                {/*<div className="center-align" onClick={handleClick('.nav')}>
                    <BackToTop>Back To top</BackToTop>
                </div>*/}
            </div>
        </Router>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();