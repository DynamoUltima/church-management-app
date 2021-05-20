import { Button, makeStyles } from '@material-ui/core';
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from './tableIcons';
import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {

    return {
        button: {
            margin: theme.spacing(1),
        },
        push: {
            flexGrow: 1
        },
        align: {
            display: "flex"
        }
    }
})

export interface MemberDataTableProps {
    routes?: any
}

const MemberDataTable: React.FC<MemberDataTableProps> = () => {

    const classes = useStyles();



    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                title="Members"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                    {
                        title: 'Birth Place',
                        field: 'birthCity',
                        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                options={{
                    exportButton: true,
                    search: true
                }}
                components={{
                    Toolbar: props => (
                        <div style={{ backgroundColor: '#e8eaf5' }}>
                            <MTableToolbar {...props} />
                            <div style={{ padding: '5px 10px' }}>

                                <div className={classes.align}>
                                    <div className={classes.push}></div>
                                    <Link to="/members/edit-member">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<Add />}
                                        // onClick={() => { history.push('/members/edit-member') }}
                                        >
                                            ADD MEMBER
                               </Button>
                                    </Link>



                                </div>



                            </div>
                        </div>
                    )
                }}
            />
        </div>
    );
}

export interface AttendanceTableProps {

}

const AttendanceTable: React.FC<AttendanceTableProps> = () => {
    const classes = useStyles();
    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                title="Attendance"
                columns={[
                    { title: 'Name of Service', field: 'name' },
                    { title: 'Service Type', field: 'surname' },
                    { title: 'Date', field: 'date', type: 'numeric' },
                    { title: 'Present', field: 'attendance',  },
                    { title: 'Absent', field: 'attendance', }
                ]}
                data={[
                    { name: 'Sunday Service', surname: 'Sunday', date: 1987, attendance: 63 }, 
                    { name: 'Wednesday Service', surname: 'Mid-week', date: 2017, attendance: 34 }, 
                ]}
                options={{
                    exportButton: true,
                    search: true
                }}
                components={{
                    Toolbar: props => (
                        <div style={{ backgroundColor: '#e8eaf5' }}>
                            <MTableToolbar {...props} />
                            <div style={{ padding: '5px 10px' }}>

                                <div className={classes.align}>
                                    <div className={classes.push}></div>
                                    {/* <Link to="/members/edit-member">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<Add />}
                                    // onClick={() => { history.push('/members/edit-member') }}
                                >
                                    ADD MEMBER
                               </Button>
                               </Link> */}

                                </div>
                            </div>
                        </div>
                    )
                }}
            />

        </div>
    );
}





export { MemberDataTable, AttendanceTable };