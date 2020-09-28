import axios from 'axios';

const SeminantService = {

    loginUser:(username, password) => {
        const url = 'http://localhost:8080/api/access/login';
        return axios.post(url, {password: password, username: username}, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
    },

    registerUser:(email, username, password) => {
        const url = 'http://localhost:8080/api/access/register';
        return axios.post(url, { email: email, username: username, password: password}, {
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

    saveNewUserPassword:(username, password, token) => {
        const url = 'http://localhost:8080/api/access/passwordResetSave';
        return axios.post(url, {username: username, password: password}, {
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

    addEndpoint:(name,endpointUrl, authorization) => {
        const url = "http://localhost:8080/api/endpoint/new";
        return axios.post(url, { name: name, url: endpointUrl }, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
    },

    deleteEndpoint:(endpointId, authorization) => {
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

    fetchEndpointDetails:(endpointId, authorization) => {
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

    fetchAllQueries:(authorization) => {
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

    fetchAllQueriesByUser:(authorization) => {
        const url='http://localhost:8080/api/query/allByUser';
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
    },

    addQuery:(authorization, username, endpointId, name, publicAccess, text) => {
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

    deleteQuery:(queryId, authorization) => {
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

    fetchQueryDetails:(queryId, authorization) => {
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

    executeQuery:(queryId, authorization) => {
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

    fetchPublicQueryResultPredicates:(queryId) => {
        const url = "http://localhost:8080/public/allResultPredicates/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
            }
        })
    },

    fetchQueryResultPredicates:(queryId, authorization) => {
        const url = "http://localhost:8080/api/query/allResultPredicates/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
                'Authorization': authorization
            }
        })
    },

    fetchAllPublicQueryResults:(queryId) => {
        const url = "http://localhost:8080/public/allResults/" + queryId;
        return axios.get(url, {
            headers: {
                'accept': 'application/json',
            }
        })
    },

    fetchQueryResults:(queryId, authorization) => {
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