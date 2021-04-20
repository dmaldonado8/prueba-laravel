let apiDomain = "";
if (process.env.NODE_ENV === "production") {
    apiDomain = "http://react-";
} else {
    apiDomain = "http://localhost:8000/";
}

class UrlService {
    static loginUrl() {
        return apiDomain + "api/auth/login";
    }
}

export default UrlService;
