import {  TextField } from "@material-ui/core";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import { useHistory, useLocation } from 'react-router';



export interface EditMemberProps {

}

const EditMember: React.FC<EditMemberProps> = () => {

    
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <TextField id="filled-basic" label="firstname" variant="filled" /> 
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField id="filled-basic" label="lastname" variant="filled" /> 
                </GridItem>
            </GridContainer>

        </div>
        );
}

export default EditMember;