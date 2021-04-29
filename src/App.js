// Dependancy Import
import React from "react";
import { AnimatePresence } from "framer-motion";

// Component Import
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";

function App() {
    return (
        <div>
            <div className="content">
                <AnimatePresence exitBeforeEnter>
                    <Home />
                    <Work />
                    <About />
                </AnimatePresence>
            </div>
        </div>
    );
}

// TODO: add a component (PageNotFound) for 404 pages in hash routes
// TODO: Load assets before starting the website
// TODO: Clear out white spots for both icons
// TODO: Add background for icon image

export default App;
