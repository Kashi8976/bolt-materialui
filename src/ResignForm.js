import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import {getCurrentUser, submitResignation, getSubmittedResign, updateStatus} from "./utils/APIUtils";

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


export default function ResignForm(user) {
    const classes = useStyles();
    console.log('user from resign ' + user.id);
    const [resignedUser, setResignedUser] = React.useState({});
    const currentDay = new Date().toISOString().substring(0, 10);
    const [resignComment, setResignComment] = React.useState("");
    const [resignDate, setResignDate] = React.useState("");
    const [submittedResign, setSubmittedResign] = React.useState({});

    const submitResign = () => {
        const resignRequest = {
            user_id: resignedUser.id,
            reason: resignComment,
            application_date: new Date(),
            release_date: resignDate,
            status: "SUBMIT"
        }
        submitResignation(resignRequest).then(response => {
            if (response) {
                setSubmittedResign(response);
            } else {
                window.location = '/';
            }

        }).catch(error => {

        });
        console.log(resignRequest);
    };

    const withdrawResignation = () => {
        const resignRequest = {
            user_id: resignedUser.id,
            reason: resignComment,
            application_date: new Date(),
            release_date: resignDate,
            status: "WITHDRAW"
        }
        updateStatus(resignedUser.id).then(response => {
            if (response) {
                window.location = '/dashboard';
            } else {
                window.location = '/';
            }

        }).catch(error => {

        });
        console.log(resignRequest);
    }

    useEffect(() => {

        getCurrentUser().then(response => {
            if (response) {
                setResignedUser(response);
                getSubmittedResign(response.id).then(response => {
                    if (response && response.status === "SUBMIT") {
                        setSubmittedResign(response);
                        setResignComment(response.reason);
                        setResignDate(response.release_date.substring(0, 10));
                    }
                });
            } else {
                window.location = '/';
            }

        }).catch(error => {

        });
    }, []);
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
                        value={resignedUser.id}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Name"
                        defaultValue="User name"
                        className={classes.textField}
                        margin="normal"
                        value={resignedUser.name}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Project"
                        defaultValue="Project Name"
                        className={classes.textField}
                        margin="normal"
                        value={resignedUser.project}
                    />
                    <TextField
                        id="date"
                        label="Joining Date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
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
                        value={resignedUser.manager && resignedUser.manager.id}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Manager Name"
                        defaultValue="Manager name"
                        className={classes.textField}
                        margin="normal"
                        value={resignedUser.manager && resignedUser.manager.name}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        defaultValue="9002367843"
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
                            className={classes.textFieldLarge}
                            margin="normal"
                            variant="outlined"
                            multiline
                            InputProps={"height: 100px"}
                            value={resignComment}
                            onChange={e=> setResignComment(e.target.value)}
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
                            value={currentDay}

                        />
                        <TextField
                            id="outlined-password-input"
                            className={classes.textField}
                            type="date"
                            label="Expected Realease Date"
                            margin="normal"
                            variant="outlined"
                            value={resignDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e=> setResignDate(e.target.value)}
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

                        <Button variant="contained"  disabled = {(submittedResign.reason && submittedResign.reason.length > 0)} className={classes.button}>
                            Cancel
                        </Button>

                        <Button variant="contained" color="primary"  disabled = {(submittedResign.reason && submittedResign.reason.length > 0)} className={classes.button} onClick={submitResign}>
                            Submit
                        </Button>

                        <Button variant="contained" color="secondary" disabled = {!(submittedResign.reason && submittedResign.reason.length > 0)} className={classes.button} onClick={withdrawResignation}>
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
