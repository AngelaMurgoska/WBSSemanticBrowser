
const userInfoService = {

    getLoggedInUserUsername:() => {
        const username = sessionStorage.getItem("username");
        return username;
    },

    getLoggedInUserAuthorizationToken:() => {
        const token = sessionStorage.getItem("token");
        const authToken = "Bearer " + token;
        return authToken;
    }

}

export default userInfoService;