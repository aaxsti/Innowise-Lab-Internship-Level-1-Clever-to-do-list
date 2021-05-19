import React from 'react';
import s from './AppDrawer.module.css';
import {CircularProgress, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from "react-router-dom";

const AppDrawer = ({lists}) => {

    if (!lists) return <CircularProgress/>

    return (
        <div className={s.sidebar}>
            <Typography variant="h6" className={s.sidebarHeader}>React Todo</Typography>
            <Divider/>

            <List>
                {[{title: 'Задачи', icon: <HomeIcon/>, to: '/'},
                    {title: 'Важные', icon: <StarIcon/>, to: '/important'},
                    {title: 'Запланированные', icon: <TodayRoundedIcon/>, to: '/planned'}]
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