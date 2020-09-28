package com.angeladragana.finki.seminant.controller;

import com.angeladragana.finki.seminant.constants.ApiSwaggerConstants;
import com.angeladragana.finki.seminant.models.Endpoint;
import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.models.Result;
import com.angeladragana.finki.seminant.service.EndpointService;
import com.angeladragana.finki.seminant.service.QueryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;

/**
 *  Controller for the publicly accessable API requests.
 */
@Api(value = ApiSwaggerConstants.PUBLIC_API_VALUE)
@RestController
@RequestMapping(value = "/public", produces = MediaType.ALL_VALUE)
@CrossOrigin
@RequiredArgsConstructor
public class PublicController {
    public final EndpointService endpointService;
    public final QueryService queryService;

    /**
     * Returns a list of all endpoints.
     * @return {@link Iterable<Endpoint>} the list of all endpoints.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_ENDPOINTS_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_ENDPOINTS_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allEndpoints", produces = "application/json")
    public Iterable<Endpoint> getAllEndpoints() {
        return endpointService.getAll();
    }

    /**
     * Returns a list of all publicly accessible queries.
     *
     * @return {@link Iterable< Query >} the list of all queries.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allQueries", produces = "application/json")
    public Iterable<Query> getAllPublicQueries() {
        return queryService.getAllPubliclyAccessible();
    }


    /**
     * Returns query details of a specific publicly accessible query.
     *
     * @return {@link Query} details about the query.
     */
    @ApiOperation(value = ApiSwaggerConstants.GET_QUERY_DETAILS_OPERATION_VALUE,
            notes= ApiSwaggerConstants.GET_QUERY_DETAILS_OPERATION_NOTE,
            response= Query.class)
    @PostMapping(value = "/details", produces = "application/json")
    public Query getDetailsForPublicQuery(@RequestParam Long queryId) throws ServletException {
        return queryService.getDetailsForPublicQuery(queryId);
    }


    /**
     * Executes a public query associated with the provided query id.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the executed query.
     */
    @ApiOperation(value = ApiSwaggerConstants.EXECUTE_QUERY_OPERATION_VALUE,
            notes= ApiSwaggerConstants.EXECUTE_QUERY_OPERATION_NOTE,
            response= Long.class)
    @PostMapping(value = "/execute",  produces = "application/json")
    public Long executePublicQuery(@RequestParam Long queryId) throws ServletException {
        return queryService.executePublicQuery(queryId);
    }

    //TODO check apiswagger constants
    /**
     * Returns a list of all results from the last query execution of a public query.
     * @param queryId used for uniquely identifying the query.
     *
     * @return {@link Iterable< Result >} the list of all query results.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allResults/{queryId}", produces = "application/json")
    public Iterable<Result> getAllResults(@PathVariable Long queryId) throws ServletException {
        return queryService.getAllResultsForPublicQuery(queryId);
    }


    /**
     * Returns a list of all possible predicates from the last public query execution.
     * @param queryId used for uniquely identifying the query.
     *
     * @return {@link Iterable<Result>} the list of all query results.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allResultPredicates/{queryId}", produces = "application/json")
    public Iterable<String> getAllResultPredicates(@PathVariable Long queryId) {
        return queryService.getAllPredicatesForQuery(queryId);
    }

}
