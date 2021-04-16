
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
      margin: "0 -15px !important",
      width: "unset"
    }
  };
  
  const useStyles = makeStyles(styles);
  
  export default function GridContainer(props: { [x: string]: any; children: any; }) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
      <Grid container {...rest} className={classes.grid}>
        {children}
      </Grid>
    );
  }