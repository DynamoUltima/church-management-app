
import Typography from '@material-ui/core/Typography';
import { makeStyles, Container, Avatar, Icon, IconButton, Menu, MenuItem, } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { format } from 'date-fns';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Assignment } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import { yellow } from '@material-ui/core/colors';




const useStyles = makeStyles((theme)=>{

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
    header: {
      
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
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    card:{
      background:yellow[700]
    }
  }
  
})

const options = [
  'None',
  'Atria',
  'Callisto',

];

const ITEM_HEIGHT = 48;

export interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
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
    <Container>

      <div className={classes.row} >
        <Typography

          variant="h4"
          color="initial"
          component="h2"
          gutterBottom
          className={classes.service}

        >
          Sunday Service
      </Typography>

        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom

        >
          {format(new Date(), 'eeee do MMMM Y')}
        </Typography>

      </div>
      <div>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} > 
              <CardHeader
              // className={classes.header}
                avatar={
                  <Avatar className={classes.large}><Assignment /></Avatar>
                }

                action={ 
                  <div>
                    <IconButton
                      aria-label="more" 
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon  />
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

                title="First Timers"
              />
              <CardContent>
                <Typography variant='body2' color={'textSecondary'}>
                  300 first tmers
                    </Typography>
              </CardContent>

            </Card>
          </GridItem>
        </GridContainer>

      </div>





    </Container>
  );
}

export default Dashboard;