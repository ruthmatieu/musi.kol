import { useState, useEffect } from "react";

const useSpotify = () => {
    const CLIENT_ID = "cc6dfc4a6dca41bd988a242e839a7bce"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("");

    useEffect(() => {
        const hash: string = window.location.hash;
        let token: any = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);

    }, []);

    return [token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE];
};

export default useSpotify;