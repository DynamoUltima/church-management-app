import { Container } from "@material-ui/core";
import {AttendanceTable} from "../components/DataGrid/dataGrid"


export interface AttendanceProps {
    
}
 
const Attendance: React.FC<AttendanceProps> = () => {
    return ( 
    <Container>
       <AttendanceTable /> 
    </Container>
     );
}
 
export default Attendance;