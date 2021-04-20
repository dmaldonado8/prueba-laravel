import axios from "axios";
import UrlService from "../screens/Login/components/UrlService";
import CookieService from "./CookieService";
import Auth from "../auth";

interface Credentials {
    rut: string;
    password: string;
}

const expiresAt = 60 * 24;

class AuthService {
    async doUserLogin(credentials: Credentials) {
        try {
            const response = await axios.post(
                UrlService.loginUrl(),
                credentials
            );
            return response.data;
        } catch (error) {
            console.error("Error", error.response);
            return false;
        }
    }

    handleLoginSuccess(response: any) {
        let date = new Date();
        date.setTime(date.getTime() + 60 * 1000);
        const options = { path: "/", expires: date };
        CookieService.set("access_token", response.access_token, options);
        Auth.login();
        return true;
    }
}

export default new AuthService();
