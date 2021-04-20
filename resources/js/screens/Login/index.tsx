import React from "react";
import { Grid } from "@material-ui/core";
import LoginForm from "./components/LoginForm";

const styles = {
    root: {
        minHeight: "100vh",
    },
};

function LoginScreen() {
    return (
        <Grid
            style={styles.root}
            container
            justify="center"
            alignItems="center"
        >
            <Grid item lg={4}>
                <LoginForm></LoginForm>
            </Grid>
        </Grid>
    );
}

export default LoginScreen;
