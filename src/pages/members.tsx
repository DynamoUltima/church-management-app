import { Container, makeStyles, Typography } from "@material-ui/core";
import MemberDataTable from "../components/DataGrid/dataGrid";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet'
  },
  shape: {
    borderRadius: 8,
  },

  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export interface MembersProps {

}


const Members: React.FC<MembersProps> = () => {
  const classes = useStyles();
  return (
    <Container>
      <MemberDataTable />
    </Container>
  );
}

export default Members;