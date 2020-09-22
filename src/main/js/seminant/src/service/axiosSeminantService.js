import axios from 'axios';

const SeminantService = {

    loginUser:(email,password,username) => {
        const url = 'http://localhost:8080/api/access/login';
        return axios.post(url, { email: email, password: password, username: username }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => console.log("Successful Login")).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    registerUser:(email,password,username) => {
        const url = 'http://localhost:8080/api/access/register';
        return axios.post(url, { email: email, password: password, username: username }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => console.log("Successful Register")).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    requestPasswordReset:(email) => {
        const url = 'http://localhost:8080/api/access/passwordReset';
        return axios.post(url, null, {
            headers: {
                'accept': 'application/json'
            },
            params: {
                email: email
            }
        }).then((response) => console.log("Successful Password Reset Request")).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    saveNewUserPassword:(email, password, username, token) => {
        const url = 'http://localhost:8080/api/access/passwordResetSaver';
        return axios.post(url, { email: email, password: password, username: username }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            params: {
                token: token
            }
        }).then((response) => console.log("Successful Register")).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchAllEndpoints:() => {
        const url='http://localhost:8080/public/allEndpoints';
        return axios.get(url).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    addEndpoint:(name,endpointUrl, token) => {
        //const token = sessionStorage.getItem("token");
        //TODO delete authorization like from every method
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/endpoint/new";
        return axios.post(url, { name: name, url: endpointUrl }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': authorization
            }
        }).then((response) => console.log("Successful Addition")).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    deleteEndpoint:(endpointId, token) => {
        //const token = sessionStorage.getItem("token");
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/endpoint/delete";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            },
            params: {
                endpointId: endpointId
            }
        }).then((response) => console.log("Successful Deletion")).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchEndpointDetails:(endpointId, token) => {
        //const token = sessionStorage.getItem("token");
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/endpoint/details";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            },
            params: {
                endpointId: endpointId
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchAllQueries:(token) => {
        const authorization = "Bearer " + token;
        const url='http://localhost:8080/api/query/all';
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        })
    },

    fetchAllPublicQueries:() => {
        const url='http://localhost:8080/public/allQueries';
        return axios.get(url).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchAllQueriesByUser:(token) => {
        const url='http://localhost:8080/api/query/allByUser';
        const authorization = "Bearer " + token;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    addQuery:(token, username, endpointId, name, publicAccess, text) => {
        //const token = sessionStorage.getItem("token");
        const authorization = "Bearer " + token;
        const url='http://localhost:8080/api/query/new';
        return axios.post(url,
        {
            createdBy:{
                username: username
            },
            endpoint: {
                endpointId: endpointId
            },
            name: name,
            publicAccess: publicAccess,
            text: text
        }
        ,{
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    deleteQuery:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/delete";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            },
            params: {
                queryId: queryId
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchQueryDetails:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/details";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            },
            params: {
                queryId: queryId
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    executeQuery:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/execute";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            },
            params: {
                queryId: queryId
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchResultPredicates:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/allResultPredicates/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    },

    fetchAllQueryResults:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/allResults/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        }).then((response) => console.log(response.data)).catch((error) => {
            if (error.response) {
                console.log(error.response.data)
            }
        });
    }


}

export default SeminantService;