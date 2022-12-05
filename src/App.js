import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                        <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path="/dialogs" render={() => <Dialogs store={props.store} />}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                </div>
            </div>
        </BrowserRouter>);
};

export default App;