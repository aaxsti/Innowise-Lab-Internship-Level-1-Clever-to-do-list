import React, {useEffect} from 'react';
import {Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {requestLists} from "../../redux/todo/todo.thunks";
import {useDispatch, useSelector} from "react-redux";
import {UserSelector} from "../../redux/auth/auth.selectors";
import {ListSelector} from "../../redux/todo/todo.selectors";
import {signOut} from "../../redux/auth/auth.thunks";
import styled from "styled-components";

const AppDrawerWrapper = styled.div`
  width: 300px;
  border-right: 1px rgba(0, 0, 0, 0.12) solid;
`

const SidebarInfo = styled.div`
  background-color: #e4eaf1;
  padding-left: 20px;
`

const SidebarInfoTitle = styled(Typography)`
  padding-top: 15px;
  padding-bottom: 5px;
`

const SidebarInfoUserEmail = styled(Typography)`
  padding-bottom: 16px;
`

const AppDrawer = ({history}) => {
    const lists = useSelector(ListSelector);
    const user = useSelector(UserSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestLists());
    }, [dispatch]);

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <AppDrawerWrapper>
            <SidebarInfo>
                <SidebarInfoTitle variant="h5">
                    React Todo
                    <IconButton onClick={handleSignOut}>
                        <Icon><ExitToAppIcon/></Icon>
                    </IconButton>
                </SidebarInfoTitle>
                <SidebarInfoUserEmail variant="subtitle1">
                    <span>{user ? user.email : ''}</span>
                </SidebarInfoUserEmail>
            </SidebarInfo>

            <Divider/>

            <List>
                {[{title: 'Задачи', icon: <HomeIcon/>, to: '/'},
                    {title: 'Важные', icon: <StarIcon/>, to: '/important'},
                    {title: 'Запланированные ', icon: <TodayRoundedIcon/>, to: '/planned'}]
                    .map(item =>
                        <ListItem button key={item.title} component={NavLink} to={item.to}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                    )
                }
            </List>

            <Divider/>

            <List>
                {lists
                    .map(item =>
                        <ListItem button key={item.title} component={NavLink} to={item.id}>
                            <ListItemIcon><FormatListBulletedIcon/></ListItemIcon>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                    )
                }
            </List>
        </AppDrawerWrapper>
    );
}

export default AppDrawer;
