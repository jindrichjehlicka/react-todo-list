import React from 'react';
import 'App.scss';
import TodoListComponent from "components/TodoList/TodoListComponent";
import { ModalProvider } from "context/modal-context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import ApiDemo from "components/ApiDemo/ApiDemo";


function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand mb-0 h1">TODO List Demo</Link>

                    <div className="navbar-collapse ">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/api-demo" className="nav-link">
                                    API Demo
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>

                <ModalProvider>
                    <Switch>
                        <Route exact path="/">
                            <TodoListComponent/>
                        </Route>
                        <Route path="/api-demo">
                            <ApiDemo/>
                        </Route>
                    </Switch>
                </ModalProvider>

            </div>
        </Router>
    );
}

export default App;
