// Dependancy Import
import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// Component Import
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';

function App() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </AnimatePresence>
        </>
    );
}


// TODO: add a component (PageNotFound) for 404 pages in hash routes
// TODO: Load assets before starting the website

export default App;