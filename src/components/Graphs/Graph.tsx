import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { blue, green, yellow } from '@material-ui/core/colors';
import ChartistGraph from 'react-chartist';
import { grayColor, whiteColor } from '../color';
import {
    // dailySalesChart,
    emailsSubscriptionChart,
    // completedTasksChart
} from "../Graphs/Chart"

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
            // padding:"20px"

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


export interface AttendanceGraphProps {

}

const AttendanceGraph: React.FC<AttendanceGraphProps> = () => {

    const classes = useStyles();

    return (
        <>
            <Card className={classes.consistentCard}>
                {/* <CardHeader></CardHeader> */}
                <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options} 
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                />

            </Card>
        </>
    );
}

export {
    AttendanceGraph
};