import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import Layout from './components/Layout';
import * as routes from './const/routes';

import {Home} from './screens/Home';
import { Map } from './screens/Map';
import { A0 } from './screens/steps/A0';
import { A1 } from './screens/steps/A1';
import { A2 } from './screens/steps/A2';
import { A3 } from './screens/steps/A3';
import { A4 } from './screens/steps/A4';
import { B0 } from './screens/steps/B0';
import { B1 } from './screens/steps/B1';
import { B2 } from './screens/steps/B2';
import { V0 } from './screens/steps/V0';
import { G0 } from './screens/steps/G0';
import { G1 } from './screens/steps/G1';
import { G2 } from './screens/steps/G2';
import { Final } from './screens/steps/Final';


const routesArray = [
    { path: routes.HOME, Component: Home },
    { path: routes.MAP, Component: Map },
    { path: routes.A0, Component: A0 },
    { path: routes.A1, Component: A1 },
    { path: routes.A2, Component: A2 },
    { path: routes.A3, Component: A3 },
    { path: routes.A4, Component: A4 },
    { path: routes.B0, Component: B0 },
    { path: routes.B1, Component: B1 },
    { path: routes.B2, Component: B2 },
    { path: routes.V0, Component: V0 },
    { path: routes.G0, Component: G0 },
    { path: routes.G1, Component: G1 },
    { path: routes.G2, Component: G2 },
    { path: routes.FINAL, Component: Final },
]

function App() {

    // const initUI = () => {
    //     if (window.innerWidth < 768) {
    //       document.body.style.zoom = 0.2
    //     }
    
    //     if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    //       document.body.style.zoom = 0.37
    //     }
    
    //     if (window.innerWidth >= 1024 && window.innerWidth < 1250) {
    //       document.body.style.zoom = 0.47
    //     }
    
    //     if (window.innerWidth >= 1250 && window.innerWidth < 1420) {
    //       document.body.style.zoom = 0.58
    //     }
    
    //     if (window.innerWidth >= 1420 && window.innerWidth < 1620) {
    //       document.body.style.zoom = 0.65
    //     }
    
    //     if (window.innerWidth >= 1620 && window.innerWidth < 1780) {
    //       document.body.style.zoom = 0.75
    //     }
    
    //     if (window.innerWidth >= 1780 && window.innerWidth < 1950) {
    //       document.body.style.zoom = 0.82
    //     }
    
    //     if (window.innerWidth >= 1950 && window.innerWidth < 2160) {
    //       document.body.style.zoom = 0.9
    //     }
    
    //     if (window.innerWidth >= 2160) {
    //       document.body.style.zoom = 1
    //     }
    
    //     document.body.style.opacity = 1;
    //   }
    
    //   useEffect(() => {
    //     if (document.readyState !== 'loading') {
    //       setTimeout(initUI, 0)
    //     } else {
    //       document.addEventListener('DOMContentLoaded', () => {
    //         setTimeout(initUI, 0)
    //       })
    //     }
    
    //     window.addEventListener('resize', initUI);
    //   }, [])

    return (
        <Router>
            <Layout>
                {routesArray.map(({path, Component}) => 
                    <Route key={path} exact path={path}>
                        {({match}) =>
                            <CSSTransition timeout={1000} classNames="page" unmountOnExit in={match != null}>
                                <Component/>
                            </CSSTransition>
                        }
                    </Route>
                )}
            </Layout>
        </Router>
    );
}

export default App;
