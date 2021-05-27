import React, {useContext} from 'react';
import s from './AppDrawer.module.css';
import {Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from "react-router-dom";
import DataContext from '../../context/data'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const AppDrawer = ({lists}) => {
    const {state} = useContext(DataContext);
    console.log(state)
    return (
        <div className={s.sidebar}>
            <div className={s.sidebarInfo}>
                <Typography variant="h6" className={s.sidebarHeader}>
                    React Todo
                </Typography>
                <Typography variant="subtitle2" className={s.sidebarEmail}>
                    <span>{state.user ? state.user.email : ''}</span>
                    <IconButton onClick={() => {}}>
                        <Icon><ExitToAppIcon/></Icon>
                    </IconButton>
                </Typography>
            </div>

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
        </div>
    );
}

export default AppDrawer;