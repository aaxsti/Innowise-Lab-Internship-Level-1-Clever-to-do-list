import React, {useState} from 'react';
import {Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth/auth.thunks";
import {UserSelector} from "../../redux/auth/auth.selectors";
import styled from "styled-components";

const AuthFormWrapper = styled(Container)`
  margin: 300px;
`

const FormTitleWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 10px;
`


const AuthPage = ({history}) => {
    const user = useSelector(UserSelector)

    const dispatch = useDispatch()
    const [formInfo, setFormInfo] = useState({});

    // todo make a registration
    // useEffect(() => {
    //     if (!user) {
    //
    //     }
    // }, []);


    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = formInfo
        await dispatch(login(email, password))
    }

    return (
        <AuthFormWrapper maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <FormTitleWrapper>
                        <Typography variant={'h2'}>
                            React Todo
                        </Typography>
                    </FormTitleWrapper>

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
                        <Button variant="contained" color="primary" fullWidth type='submit'>
                            Войти
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" fullWidth>
                            Создать аккаунт
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </AuthFormWrapper>
    );
}

export default AuthPage;