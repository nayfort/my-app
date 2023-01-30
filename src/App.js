import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
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
    catchAllUnhandledErrors = (promise, reason) => {
        alert('Some error occured')
        //console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandlerejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandlerejection', this.catchAllUnhandledErrors)
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
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={"/profile"} />}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>

                            <Route path="/users" render={() => <UsersContainer/>}/>

                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
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
        <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
    )
}

export default MainApp;