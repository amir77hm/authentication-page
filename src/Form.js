import React, { useContext } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Checkbox } from '@material-ui/core';
import { LanguageContext } from "./context/LanguageContext";

const words = {
    english: {
        signIn: 'Sign In',
        email: 'Email Address',
        password: "Password",
        remember: 'Remember Me'
    },
    persian: {
        signIn: 'ورود',
        email: 'ایمیل',
        password: "پسورد",
        remember: 'مرا به یاد آور'
    },
}

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px
        ${theme.spacing(3)}px
        ${theme.spacing(3)}px
        `
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    submit: {
        marginTop: theme.spacing(3)
    },
})

function Form(props) {
    const { language } = useContext(LanguageContext)
    const { signIn, email, password, remember } = words[language]
    const { classes } = props
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>{signIn}</Typography>
                <form className={classes.form}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>{email}</InputLabel>
                        <Input id='email' name='email' autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>{password}</InputLabel>
                        <Input id='password' name='password' />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color='primary' />}
                        label={remember}
                    />
                    <Button variant='contained'
                        type='submit'
                        fullWidth
                        className={classes.submit}
                    >
                        {signIn}
                    </Button>
                </form>
            </Paper>
        </main>
    )
}
export default withStyles(styles)(Form)