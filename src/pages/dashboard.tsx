
import Typography from '@material-ui/core/Typography';
import { makeStyles, Container,} from '@material-ui/core';
import { format } from 'date-fns';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import  { FirstTimerCard,AttendanceCard,ConsistentFirstTimersCard } from '../components/Cards/Card';




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
  }

})





export interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = () => {
  const classes = useStyles();


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
            <FirstTimerCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <AttendanceCard />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <ConsistentFirstTimersCard />
          </GridItem>
        </GridContainer>

      </div>

 



    </Container>
  );
}

export default Dashboard;