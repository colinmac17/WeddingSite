import React from 'react';
import {render} from 'react-dom';
import NotFound from './NotFound';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Match} from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';

const Root = (props) => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();