import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import AppDrawer from "./components/AppDrawer/AppDrawer";
import AppContent from "./components/AppContent/AppContent";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import {useDispatch, useSelector} from "react-redux";
import {UserSelector} from "./redux/auth/auth.selectors";
import AuthPage from "./pages/AuthPage/AuthPage";
import {getAuthUserData} from "./redux/auth/auth.thunks";
import styled from 'styled-components';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const App = () => {
    const user = useSelector(UserSelector);

    const dispatch = useDispatch();

    useEffect( () => {
        const getAuthData = async () => {
            await dispatch(getAuthUserData())
        }
        getAuthData().then();
    }, [dispatch, user]);

    if (!user) {
        return <Route component={AuthPage}/>
    } else {
        return (
            <AppWrapper>
                <AppDrawer/>
                <AppContent>
                    <Switch>
                        <Route exact path={'/'} component={TodoListPage}/>
                        <Route exact path={'/important'} component={TodoListPage}/>
                        <Route exact path={'/planned'} component={TodoListPage}/>
                        <Route path={'/:listId/:todoId?'} component={TodoListPage}/>
                    </Switch>
                </AppContent>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </AppWrapper>
        )
    }
}

export default App;