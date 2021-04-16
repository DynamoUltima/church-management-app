import { Container, makeStyles, Typography } from "@material-ui/core";

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
            <Typography
            className={classes.field}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom

      >
        Create a New Note
      </Typography>
        </Container>
     );
}
 
export default Members;