import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import asyncComponent from './components/AsyncComponent'

const AsyncOverview = asyncComponent(() => import('./modules/Home'));
const AsyncProfile = asyncComponent(() => import('./modules/Profile'));

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App');
    }

    render() {
        return (
            <div className="App">
                <Link to="/overview">Overview</Link> <Link to="/profile">Profile</Link>
                <Switch>
                    <Route path="/overview" exact component={AsyncOverview}/>
                    <Route path="/profile" exact component={AsyncProfile}/>
                    <Route render={() => <p>Index</p>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
