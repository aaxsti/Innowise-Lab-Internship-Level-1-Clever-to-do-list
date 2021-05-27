import React, {useEffect, useMemo, useReducer} from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import AppContent from "./components/AppContent/AppContent";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import DataContext from './context/data'
import {reducer, initialState, actions} from './store';
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValue = useMemo(() => {
        return {state, dispatch};
    }, [state, dispatch]);

    useEffect(async () => {
        await actions.getLists(dispatch);
        actions.setAuth(dispatch);
    }, []);

    if (!state.user) {
        return (
            <Route component={LoginPage}/>
        )
    } else {
        return (
            <DataContext.Provider value={contextValue}>
                <div className="app">
                    <AppDrawer
                        lists={state.lists}
                    />

                    <AppContent>
                        <Switch>
                            <Route exact path={'/'} component={TodoListPage}/>
                            <Route exact path={'/login'} component={LoginPage}/>
                            <Route exact path={'/important'} component={TodoListPage}/>
                            <Route exact path={'/planned'} component={TodoListPage}/>
                            <Route path={'/:listId/:todoId?'} component={TodoListPage}/>
                        </Switch>
                    </AppContent>
                </div>
            </DataContext.Provider>
        );
    }
}

export default App;
