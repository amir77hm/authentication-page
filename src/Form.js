import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import { Checkbox } from '@material-ui/core';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            width: 400,
            marginLeft: 'auto',
            marignRigth: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px
        ${theme.spacing.unit * 3}px
        ${theme.spacing.unit * 3}px
        `
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit * 3
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
})

function Form(props) {
    const { classes } = props
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>Sign In</Typography>
                <Select>
                    <MenuItem>English</MenuItem>
                    <MenuItem>French</MenuItem>
                    <MenuItem>Spanish</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input id='email' name='email' autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <Input id='password' name='password' autoFocus />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color='primary' />}
                        label='Remember Me'
                    />
                    <Button variant='contained'
                        type='submit'
                        fullWidth
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </Paper>
        </main>
    )
}
export default withStyles(styles)(Form)