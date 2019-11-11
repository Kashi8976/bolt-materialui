import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    textFieldLarge: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 600,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


export default function ResignForm() {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <FormGroup>
                <div>
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Employee ID"
                        defaultValue="2323423"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Name"
                        defaultValue="User name"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Project"
                        defaultValue="Project Name"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Joining Date"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        type = "date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </div>
            </FormGroup>
            <FormGroup>
                <div>
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Manager ID"
                        defaultValue="2323423"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Manager Name"
                        defaultValue="Manager name"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />

                </div>

                <div>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="baseline"
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="Reason"
                            defaultValue="Hello World11"
                            className={classes.textFieldLarge}
                            margin="normal"
                            variant="outlined"
                            multiline
                            InputProps={"height: 100px"}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="System Date"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}

                        />
                        <TextField
                            id="outlined-password-input"
                            className={classes.textField}
                            type="date"
                            label= "Expected Realease Date"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </div>
                <diV>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="baseline"
                    >

                        <Button variant="contained" className={classes.button}>
                            Cancel
                        </Button>

                        <Button variant="contained" color="primary" className={classes.button}>
                            Submit
                        </Button>

                        <Button variant="contained" color="secondary" disabled  className={classes.button}>
                            Withdraw
                        </Button>
                    </Grid>
                </diV>
            </FormGroup>
            <FormGroup>

            </FormGroup>
        </form>
    );
}
