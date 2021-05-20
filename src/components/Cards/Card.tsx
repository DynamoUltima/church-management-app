import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Assignment, People, Person } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, Avatar, IconButton, Menu, MenuItem, Divider, List, ListItem, ListItemText, } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { blue, green, yellow } from '@material-ui/core/colors';
import { useState } from 'react';
import { grayColor, whiteColor } from '../color';


const useStyles = makeStyles((theme) => {

    return {
        btn: {
            fontSize: 60,
            backgroundColor: 'violet'
        },
        shape: {
            borderRadius: 8,
        },
        service: {
            flexGrow: 1
        },
        card: {
            background: yellow[700],
            marginBottom: "20px",
        },
        attendanceCard: {
            background: blue[700],
            marginBottom: "20px",

        },
        consistentCard: {
            background: green[700],
            marginBottom: "20px",

        },
        row: {
            display: 'flex'
        },
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        },
        large: {
            backgroundColor: yellow[700],
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        attendanceLarge: {
            backgroundColor: blue[700],
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        consistentLarge: {
            backgroundColor: green[700],
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        cardTitle: {
            color: whiteColor,
            marginTop: "0px",
            minHeight: "auto",
            fontWeight: 400,
            fontFamily: "Nunito",
            fontSize: "24px",
            marginBottom: "3px",
            textDecoration: "none",
            "& small": {
                color: grayColor[1],
                fontWeight: 400,
                lineHeight: "1"
            }
        },
        cardCategory: {
            color: whiteColor,
            margin: "0",
            fontSize: "18px",
            marginTop: "0",
            paddingTop: "10px",
            marginBottom: "0"
        },
    }

})




const options = [
    'None',
    'Atria',
    'Callisto',

];

const ITEM_HEIGHT = 48;

export interface FirstTimerCardProps {

}

const FirstTimerCard: React.FC<FirstTimerCardProps> = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Card className={classes.card} >
                <CardHeader
                    // className={classes.cardTitle}
                    avatar={
                        <Avatar className={classes.large}><Person fontSize="large" /></Avatar>
                    }

                    action={
                        <div>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon color='secondary' />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    }

                    title={
                        <Typography className={classes.cardTitle}>
                            First Timers
                    </Typography>
                    }
                />
                <CardContent>
                    <Typography className={classes.cardCategory}
                        // variant='h6' 
                        color={'secondary'}>
                        300 first timers
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}

// export default FirstTimerCard ;

export interface AttendanceCardProps {

}

const AttendanceCard: React.FC<AttendanceCardProps> = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (<div>
        <Card className={classes.attendanceCard} >
            <CardHeader
                // className={classes.header}
                avatar={
                    <Avatar className={classes.attendanceLarge}><Assignment fontSize="large" /></Avatar>
                }

                action={
                    <div>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon color='disabled' />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                }

                title={
                    <Typography className={classes.cardTitle}>
                        Attendance
                </Typography>
                }
            />
            <CardContent>
                <Typography
                    variant='body2'
                    color={'textSecondary'}
                    className={classes.cardCategory}
                >
                    300 first tmers
                </Typography>
            </CardContent>

        </Card>
    </div>);
}

export interface ConsistentFirstTimersCardProps {

}

const ConsistentFirstTimersCard: React.FC<ConsistentFirstTimersCardProps> = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (<div>
        <Card className={classes.consistentCard} >
            <CardHeader
                // className={classes.header}
                avatar={
                    <Avatar className={classes.consistentLarge}><People fontSize="large" /></Avatar>
                }

                action={
                    <div>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon color='secondary' />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                }

                title={
                    <Typography className={classes.cardTitle}>
                        Active Members
                </Typography>
                }
            />
            <CardContent>
                <Typography
                    variant='body2'
                    color={'textSecondary'}
                    className={classes.cardCategory}
                >
                    300 first tmers
                </Typography>
            </CardContent>

        </Card>
    </div>);
}

export interface NotificationCardProps {

}

const NotificationCard: React.FC<NotificationCardProps> = () => {
    return (
        <>
        <Card>
            <CardHeader 
            title="Notifications"

            subheader="General"
            
            />
            <Divider  />
            <CardContent> 
                <List>
                    <ListItem>
                        <ListItemText primary="Good News" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="First Timers data sent" />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary="leaders meeting will be starting soon hhhhhhhhhhhhhhhhhhhhhhhhhhhhh" />
                    </ListItem>
                </List>

            </CardContent>      
        </Card>

        </>
    );
}







export {
    FirstTimerCard,
    AttendanceCard,
    ConsistentFirstTimersCard,
    NotificationCard
}