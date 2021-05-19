import React, {useEffect, useState} from 'react';
import './App.scss';
import {get} from './api';
import DBContext from './context/db';
import {Switch, Route} from "react-router-dom";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import AppContent from "./components/AppContent/AppContent";
import TodoList from "./components/TodoList/TodoList";


function App() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        get('lists')().then(setLists)
    }, []);

    return (
        <DBContext.Provider value={{lists, get}}>
            <div className="app">
                <AppDrawer lists={lists}/>

                <AppContent>
                    <Switch>
                        <Route path={'/:listId'} component={TodoList}/>
                    </Switch>
                </AppContent>

            </div>
        </DBContext.Provider>
    );
}

export default App;
