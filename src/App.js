import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <NavBar/>
                        <div className='app-wrapper-content'>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>

                            <Route path="/users" render={() => <UsersContainer/>}/>

                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </div>
                    </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let MainApp = (props) => {
    return (
        <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
    )
}

export default MainApp;