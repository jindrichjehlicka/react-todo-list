import React from 'react';
import 'App.scss';
import TodoListComponent from "components/TodoList/TodoListComponent";
import { ModalProvider } from "context/modal-context";


function App() {
    return (
        <main>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">TODO List Demo</span>
            </nav>
            <div className="container">

                <ModalProvider>
                    <TodoListComponent/>
                </ModalProvider>

            </div>
        </main>
    );
}


export default App;
