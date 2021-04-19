import { AppBar, Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useHistory, useLocation } from 'react-router';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';


const drawerWidth = 240
const useStyles = makeStyles((theme) => {

    console.log(theme.spacing(3));

    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding:theme.spacing(3),
            // paddingLeft:theme.spacing(25),
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width:`calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft:theme.spacing(2)
        }
    }

})
export interface SidebarProps {
    
}
 
const Sidebar: React.FC<SidebarProps> = () => {
    const classes = useStyles();
    const history = useHistory();
    
    const location = useLocation();
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/members'
        },
    ];
    return (
    <> 
    <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>
                {/* List */}

                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={`${location.pathname === item.path ? classes.active : null}`}

                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />

                        </ListItem>
                    ))}
                </List>
            </Drawer>
    </> 
    );
}
 
export default Sidebar;