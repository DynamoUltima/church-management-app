import { FormControl, FormControlLabel, FormLabel, InputLabel, makeStyles, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@material-ui/core";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

import { PersonAdd } from "@material-ui/icons";
import {  useState } from "react";

const useStyles = makeStyles((theme) => {

    return {
        root: {
            '& .MuiFormControl-root': {
                width: '80%',
                margin: theme.spacing(1)
            }
        },
        control: {
            paddingInline: theme.spacing(2)
        },
        align: {
            marginBottom: 20,
            display: "flex"
        },
        pageContent: {
            padding: theme.spacing(5),
            margin: theme.spacing(3)
        }
    }
})




export interface EditMemberProps {

}

const EditMember: React.FC<EditMemberProps> = () => {

    const classes = useStyles();

    const initialValues = {
        id: 0,
        fullName: "",
        email: "",
        mobile: '',
        city: '',
        gender: 'male',
        departmentId: ""
    }

    const [values, setValues] = useState(initialValues);


    const handleInputs = (e: any) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });

    }

    const departments: {
        id: number;
        title: string;
    }[] = [
            { id: 1, title: 'usher' },
            { id: 2, title: 'choir' },
            { id: 3, title: 'cell leader' },
        ]


    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.align}>
                        <PersonAdd fontSize="large" className={classes.control} />
                        <Typography
                            variant='h5'
                            component="h2"
                        >Add Members</Typography>
                    </div>
                </GridItem>
            </GridContainer>

            <Paper className={classes.pageContent}>
                <GridContainer>
                    <GridItem xs={6}>
                        <form className={classes.root} autoComplete="off">
                            <TextField
                                variant="outlined"
                                label="Full Name"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputs}
                            />
                            <TextField
                                variant="outlined"
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputs}
                            />
                        </form>
                    </GridItem>
                    <GridItem xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                                name="gender"
                                value={values.gender}
                                onChange={handleInputs}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="male" />
                                <FormControlLabel value="female" control={<Radio />} label="female" />
                            </RadioGroup>
                            <FormControl>
                                <FormLabel>Department</FormLabel>
                                <Select
                                    variant="outlined"
                                    name="departmentId"
                                    value={values.departmentId}
                                    onChange={handleInputs}
                                >
                                    <MenuItem value="">None</MenuItem>
                                    {departments.map(
                                        item=> (<MenuItem key={item.id} value={item.id}>{item.title} </MenuItem>)
                                    )}
                                </Select>
                            </FormControl>
                        </FormControl>

                    </GridItem>
                </GridContainer>
            </Paper>

        </div>
    );
} 

export default EditMember;