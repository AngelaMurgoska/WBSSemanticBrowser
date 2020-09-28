
const UserInfoService = {

    getLoggedInUserUsername:() => {
        const username = sessionStorage.getItem("username");
        return username;
    },

    getLoggedInUserAuthorizationToken:() => {
        const token = sessionStorage.getItem("token");
        const authToken = "Bearer " + token;
        return authToken;
    },

    setLoggedInUserCredentials:(username, token) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", token);
    },

    checkIfUserLoggedIn:() => {
        return sessionStorage.getItem("username")
    }

}

export default UserInfoService;