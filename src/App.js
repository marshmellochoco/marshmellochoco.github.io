// Dependancy Import
import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

// Component Import
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';
import PageNotFound from './Pages/404/PageNotFound';

function App() {
    const location = useLocation();

    return (
        <div>
            <div className='content'>
                <Navbar/>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="*" component={PageNotFound}/>
                    </Switch>
                </AnimatePresence>
            </div>
            <Work/>
        </div>
    );
}

// TODO: add a component (PageNotFound) for 404 pages in hash routes
// TODO: Load assets before starting the website
// TODO: Clear out white spots for both icons
// TODO: Add background for icon image

export default App;