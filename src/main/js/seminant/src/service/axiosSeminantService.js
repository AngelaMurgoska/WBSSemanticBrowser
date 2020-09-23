import axios from 'axios';

const SeminantService = {

    loginUser:(email,password,username) => {
        const url = 'http://localhost:8080/api/access/login';
        return axios.post(url, { email: email, password: password, username: username }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
    },

    registerUser:(email,password,username) => {
        const url = 'http://localhost:8080/api/access/register';
        return axios.post(url, { email: email, password: password, username: username }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
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
        })
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
        })
    },

    fetchAllEndpoints:() => {
        const url='http://localhost:8080/public/allEndpoints';
        return axios.get(url)
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
        })
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
        })
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
        })
    },

    fetchAllQueries:(token) => {
        const authorization = "Bearer " + token;
        const url='http://localhost:8080/api/query/all';
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
    },

    fetchAllPublicQueries:() => {
        const url='http://localhost:8080/public/allQueries';
        return axios.get(url)
    },

    fetchAllQueriesByUser:(token) => {
        const url='http://localhost:8080/api/query/allByUser';
        const authorization = "Bearer " + token;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
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
        })
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
        })
    },

    fetchPublicQueryDetails:(queryId) => {
        const url = "http://localhost:8080/public/details";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
            },
            params: {
                queryId: queryId
            }
        })
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
        })
    },

    executePublicQuery:(queryId) => {
        const url = "http://localhost:8080/public/execute";
        return axios.post(url, null,{
            headers: {
                'accept': 'application/json',
            },
            params: {
                queryId: queryId
            }
        })
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
        })
    },

    fetchResultPredicates:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/allResultPredicates/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
    },

    fetchAllQueryResults:(queryId, token) => {
        const authorization = "Bearer " + token;
        const url = "http://localhost:8080/api/query/allResults/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
    }

}

export default SeminantService;