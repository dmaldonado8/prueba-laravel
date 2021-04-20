import CookieService from "./services/CookieService";

class Auth {
    authenticated;

    constructor() {
        const token = CookieService.get("access_token");
        token ? (this.authenticated = true) : (this.authenticated = false);
    }

    login() {
        this.authenticated = true;
    }

    logout() {
        CookieService.remove("access_token");
        this.authenticated = false;
    }

    isAuthenticated() {
        console.log("tok");

        return this.authenticated;
    }

    getAccessToken() {
        CookieService.get("access_token");
    }
}

export default new Auth();
