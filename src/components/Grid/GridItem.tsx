
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        padding: "0 15px !important"
    }
};

// export interface GridItemProps {
    
// }

const useStyles = makeStyles(styles);
// { [x: string]: any; children: any; }

// export default function GridItem<GridItemProps>(GridItemProps) {
//     const classes = useStyles();
//     const { children, ...rest } = props;
//     return (
//         <Grid item {...rest} className={classes.grid}>
//             {children}
//         </Grid>
//     );
// }

export interface GridItemProps {
    [x: string]: any;
     children: any;
}
 
const GridItem: React.FC<GridItemProps> = (props) => {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}
 
export default GridItem;
