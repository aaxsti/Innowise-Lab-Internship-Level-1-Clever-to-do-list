import React from 'react';
import './App.scss';
import useApi from './hooks/api';
import {Switch, Route} from "react-router-dom";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import AppContent from "./components/AppContent/AppContent";
import TodoList from "./pages/TodoList";

function App() {
    const {data: {lists}} = useApi();

    return (
        <div className="app">
            <AppDrawer lists={lists}/>

            <AppContent>
                <Switch>
                    <Route path={'/:listId'} component={TodoList}/>
                </Switch>
            </AppContent>

        </div>
    );
}

export default App;
