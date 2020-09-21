package com.angeladragana.finki.seminant.constants;

import com.angeladragana.finki.seminant.controller.*;

/**
 *  Constants used when documenting Api with Swagger
 */
public final class ApiSwaggerConstants {
    /**
     * Prevent instantiation
     */
    private ApiSwaggerConstants() {

    }

    /**
     * The title for the Swagger api
     */
    public static final String SWAGGER_API_TITLE = "Seminant Application Rest Api";

    /**
     * The description for the Swagger api
     */
    public static final String SWAGGER_API_DESCRIPTION = "Documentation and clear overview of the Seminant App Rest Api";

    /**
     * The description for {@link AccessController}
     */
    public static final String ACCESS_API_VALUE = "Seminant Rest Api for Access controller";

    /**
     * The description for registerUser in {@link AccessController}
     */
    public static final String REGISTER_USER_OPERATION_VALUE = "Register user.";

    /**
     * The note for registerUser in {@link AccessController}
     */
    public static final String REGISTER_USER_OPERATION_NOTE =
            "Register user according to the provided user model.";

    /**
     * The description for loginUser in {@link AccessController}
     */
    public static final String LOGIN_USER_OPERATION_VALUE = "Login user.";

    /**
     * The note for loginUser in {@link AccessController}
     */
    public static final String LOGIN_USER_OPERATION_NOTE =
            "Login user according to the provided user model.";

    /**
     * The description for passwordReset in {@link AccessController}
     */
    public static final String PASSWORD_RESET_OPERATION_VALUE = "Reset user password request.";

    /**
     * The note for passwordReset in {@link AccessController}
     */
    public static final String PASSWORD_RESET_OPERATION_NOTE =
            "Creates token and sends an email for resetting the user password.";

    /**
     * The description for passwordResetSave in {@link AccessController}
     */
    public static final String PASSWORD_RESET_SAVE_OPERATION_VALUE = "Save the new user password.";

    /**
     * The note for passwordResetSave in {@link AccessController}
     */
    public static final String PASSWORD_RESET_SAVE_OPERATION_NOTE =
            "Saves the new password for the provided user.";

    /**
     * The description for {@link QueryController}
     */
    public static final String QUERY_API_VALUE = "Seminant Rest Api for Query controller";


    /**
     * The description for addQuery in {@link QueryController}
     */
    public static final String ADD_QUERY_OPERATION_VALUE = "Adds a query.";

    /**
     * The note for addQuery in {@link QueryController}
     */
    public static final String ADD_QUERY_OPERATION_NOTE = "Adds a query associated with corresponding user and endpoint.";

    /**
     * The description for deleteQuery in {@link QueryController}
     */
    public static final String DELETE_QUERY_OPERATION_VALUE = "Deletes a query.";

    /**
     * The note for deleteQuery in {@link QueryController}
     */
    public static final String DELETE_QUERY_OPERATION_NOTE = "Deletes a query associated with corresponding issue and user.";

    /**
     * The description for getAllQueriesByUser in {@link QueryController}
     */
    public static final String ALL_QUERIES_BY_USER_OPERATION_VALUE = "Gets all queries for the provided user.";

    /**
     * The note for getAllQueriesUser in {@link QueryController}
     */
    public static final String ALL_QUERIES_BY_USER_OPERATION_NOTE = "Gets all queries for the provided user.";

    /**
     * The description for getAllQueries in {@link QueryController}
     */
    public static final String ALL_QUERIES_OPERATION_VALUE = "Gets all queries.";

    /**
     * The note for getAllQueries in {@link QueryController}
     */
    public static final String ALL_QUERIES_OPERATION_NOTE = "Gets all queries.";

    /**
     * The description for executeQuery in {@link QueryController}
     */
    public static final String EXECUTE_QUERY_OPERATION_VALUE = "Execute the specified query.";

    /**
     * The note for executeQuery in {@link QueryController}
     */
    public static final String EXECUTE_QUERY_OPERATION_NOTE = "Execute the specified query to obtain results.";

    /**
     * The value for getDetailsForQuery in {@link QueryController}
     */
    public static final String GET_QUERY_DETAILS_OPERATION_VALUE = "Get details for query.";

    /**
     * The note for getDetailsForQuery in {@link QueryController}
     */
    public static final String GET_QUERY_DETAILS_OPERATION_NOTE = "Get details for query.";

    /**
     * The description for {@link EndpointController}
     */
    public static final String ENDPOINT_API_VALUE = "Seminant Rest Api for Endpoint controller";

    /**
     * The description for addEndpoint in {@link EndpointController}
     */
    public static final String ADD_ENDPOINT_OPERATION_VALUE = "Adds a endpoint.";

    /**
     * The note for addEndpoint in {@link EndpointController}
     */
    public static final String ADD_ENDPOINT_OPERATION_NOTE = "Adds a endpoint.";

    /**
     * The note for deleteEndpoint in {@link EndpointController}
     */
    public static final String DELETE_ENDPOINT_OPERATION_NOTE = "Deletes an endpoint.";

    /**
     * The description for deleteEndpoint in {@link EndpointController}
     */
    public static final String DELETE_ENDPOINT_OPERATION_VALUE = "Deletes an endpoint.";

    /**
     * The description for getAllEndpoints in {@link EndpointController}
     */
    public static final String ALL_ENDPOINTS_OPERATION_VALUE = "Gets all endpoints.";

    /**
     * The note for getAllEndpoints in {@link EndpointController}
     */
    public static final String ALL_ENDPOINTS_OPERATION_NOTE = "Gets all endpoints.";

    /**
     * The value for getDetailsForEndpoint in {@link EndpointController}
     */
    public static final String GET_ENDPOINT_DETAILS_OPERATION_VALUE = "Get details for endpoint.";

    /**
     * The note for getDetailsForEndpoint in {@link EndpointController}
     */
    public static final String GET_ENDPOINT_DETAILS_OPERATION_NOTE = "Get details for endpoint.";

    /**
     * The description for {@link PublicController}
     */
    public static final String PUBLIC_API_VALUE = "Seminant REST Api for the Public controller";

}
