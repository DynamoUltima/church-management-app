import { AppBar, Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useHistory, useLocation } from 'react-router';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import EditMember from '../pages/editMember';

export interface LayoutProps {
    children: any
}
const drawerWidth = 240
const useStyles = makeStyles((theme) => {



    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),

        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#00227b',
            padding: theme.spacing(1),
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4',
            borderRadius: "10px",
            boxShadow: "4"

        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        tiles: {
            padding: theme.spacing(2)
        }

    }

})





const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();

    const [pageTitle, setPageTitle] = useState<string | null>('');





    const location = useLocation();
    console.log(location.pathname);
    const menuItems = [
        {
            text: 'Dashboard',
            icon: <SubjectOutlined />,
            path: '/'
        },
        {
            text: 'Members',
            icon: <AddCircleOutlined />,
            path: '/members',
            routes: [
                {
                  path: "/members/edit-member",
                  component: EditMember
                },
                
              ]
        },
    ];



    useEffect(() => {
        menuItems.forEach(menu => {
            // location.pathname === menu.path ? setPageTitle(menu.text):setPageTitle('h');
            if (location.pathname === menu.path) {
                console.log(menu.text)
                setPageTitle(menu.text)
            }

        })
    })





    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar className={classes.appbar}
                elevation={1}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        {pageTitle}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar className={classes.avatar} />
                </Toolbar>
            </AppBar>

            {/* sidebar */}

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor="left"
                elevation={3}
                classes={{ paper: classes.drawerPaper }}

            >
                <div>
                    <Typography variant='h5' color="primary" className={classes.title}>
                        Church App
                    </Typography>
                </div>
                {/* List */}

                <List>

                    {menuItems.map(function (item) {

                        return (
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => {
                                    history.push(item.path);
                                }}
                                className={`${location.pathname === item.path  ? classes.active : null}`}

                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} color="#ffffff" />

                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    );
}

export default Layout;