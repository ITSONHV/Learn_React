import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from '../Components/Contact/Contact';
import DetailsContent from '../Components/Content/DetailsContent';
import Home from '../Components/Home/Home';
import News from '../Components/News/News';
class MainRouter extends Component {
    render() {
        return (
            // <Router>
            //     <div>
            //         <Switch>
            //             <Route exact path="/">
            //                 <Home />
            //             </Route>
            //             <Route path="/tintuc">
            //                 <News />
            //             </Route>
            //         </Switch>
            //     </div>
            // </Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/tintuc" component={News}/>
                <Route exact path="/tin-chi-tiet/:slug.:id.html" component={DetailsContent}/>
                <Route exact path="/tinchitiet" component={DetailsContent}/>
                <Route exact path="/lienhe" component={Contact}/>
            </div>
        );
    }
}

export default MainRouter;