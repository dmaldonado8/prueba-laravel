import {
    Button,
    Card,
    CardContent,
    Divider,
    TextField,
    Typography,
    Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import InputContainer from "../../../components/InputContainer";
import AuthService from "../../../services/AuthService";
import { useHistory } from "react-router-dom";

function LoginForm() {
    const [sending, setSending] = useState(false);
    const [rut, setRut] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    const login = async () => {
        setShowError(false);
        setSending(true);
        const postData = {
            rut,
            password,
        };

        const response = await AuthService.doUserLogin(postData);
        if (!response) {
            setShowError(true);
            setSending(false);
        } else {
            AuthService.handleLoginSuccess(response);
            history.push("/main");
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Bienvenid@</Typography>
            </CardContent>
            <Divider></Divider>
            <CardContent>
                <InputContainer>
                    <TextField
                        fullWidth
                        size="small"
                        label="Rut"
                        variant="outlined"
                        onChange={(event) => setRut(event.target.value)}
                    ></TextField>
                </InputContainer>
                <InputContainer>
                    <TextField
                        fullWidth
                        size="small"
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    ></TextField>
                </InputContainer>
                {showError ? (
                    <Typography align="center" color="error">
                        Rut o contraseña incorrecta
                    </Typography>
                ) : null}
                <Grid container alignItems="center" justify="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={sending}
                        onClick={login}
                    >
                        Ingresar
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default LoginForm;
