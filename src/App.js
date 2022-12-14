import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>

                    <Route path="/users" render={() => <UsersContainer /> }/>

                        <Route path="/dialogs" render={() => <DialogsContainer />}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>);
};

export default App;