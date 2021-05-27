import React, {useState} from 'react';
import {actions} from "../../store";
import {Button, Container, Grid, Input, makeStyles, TextField, Typography} from "@material-ui/core";
import s from './LoginPage.module.css';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    },
}));

const LoginPage = ({history}) => {
    const classes = useStyles();
    const [formInfo, setFormInfo] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
        const {email, password} = formInfo
        actions.loginUser(email, password);
    }

    return (
        <Container className={classes.container} maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    size="small"
                                    variant="outlined"
                                    onChange={
                                        e => setFormInfo({...formInfo, email: e.currentTarget.value})
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Пароль"
                                    name="password"
                                    size="small"
                                    type="password"
                                    variant="outlined"
                                    onChange={
                                        e => setFormInfo({...formInfo, password: e.currentTarget.value})
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" fullWidth type="submit" variant="contained">
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>



        // <div className={s.loginFormWrapper}>
        //     <Typography variant="h6" className={s.loginFormTitle}>Войти в аккаунт</Typography>
        //     <form onSubmit={handleSubmit} className={s.loginForm}>
        //         <TextField
        //
        //             className={s.loginFormElement}
        //             type={"email"}
        //             name={"email"}
        //             placeholder={"Email"}
        //             autoComplete={"off"}
        //             required
        //             onChange={
        //                 e => setFormInfo({...formInfo, email: e.currentTarget.value})
        //             }
        //         />
        //         <TextField
        //
        //             className={s.loginFormElement}
        //             type={"password"}
        //             name={"password"}
        //             placeholder={"Пароль"}
        //             autoComplete={"off"}
        //             required
        //             onChange={
        //                 e => setFormInfo({...formInfo, password: e.currentTarget.value})
        //             }/>
        //         <Button variant="contained" color="primary" type="submit">Войти</Button>
        //     </form>
        // </div>
    );
}

export default LoginPage;