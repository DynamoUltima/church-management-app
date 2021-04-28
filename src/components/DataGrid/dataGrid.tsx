import { Button, makeStyles } from '@material-ui/core';
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from './tableIcons';
import { successColor } from '../color';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {

    return {
        button: {
            margin: theme.spacing(1),
        },
        push:{
            flexGrow:1
        }
    }
})

export interface MemberDataTableProps {

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

                                <div className={classes.push}></div>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<Add />}
                                >
                                    ADD MEMBER
                               </Button>

                            </div>
                        </div> 
                    )
                }}
            />
        </div>
    );
}

export default MemberDataTable;