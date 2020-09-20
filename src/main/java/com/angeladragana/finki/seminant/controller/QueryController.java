package com.angeladragana.finki.seminant.controller;

import com.angeladragana.finki.seminant.constants.ApiSwaggerConstants;
import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.models.Result;
import com.angeladragana.finki.seminant.service.AccessService;
import com.angeladragana.finki.seminant.service.QueryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 *  Controller for the query model API requests.
 */
@Api(value = ApiSwaggerConstants.QUERY_API_VALUE)
@RestController
@RequestMapping(value = "/api/query", produces = MediaType.ALL_VALUE)
@CrossOrigin
@RequiredArgsConstructor
public class QueryController {
    private final QueryService queryService;
    private final AccessService accessService;

    /**
     * Adds new query from a user according to the Query model provided.
     * @param newQuery the new Query model.
     * @param httpServletRequest used for user access check.
     *
     * @return {@link Query} the newly created Query.
     */
    @ApiOperation(value = ApiSwaggerConstants.ADD_QUERY_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ADD_QUERY_OPERATION_NOTE,
            response= Query.class)
    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = "application/json")
    public Query addQuery(@RequestBody Query newQuery) {
        // !!! You should escape json special chars in the req, ex. in the text field
        // and also prefixes in the text should be included
        return queryService.addQuery(newQuery, newQuery.getCreatedBy().getUsername());
    }

    /**
     * Deletes a query associated with the provided query id.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the deleted query.
     */
    @ApiOperation(value = ApiSwaggerConstants.DELETE_QUERY_OPERATION_VALUE,
            notes= ApiSwaggerConstants.DELETE_QUERY_OPERATION_NOTE,
            response = Long.class)
    @PostMapping(value = "/delete",  produces = "application/json")
    public Long deleteQuery(@RequestParam Long queryId) {
        return this.queryService.deleteQuery(queryId);
    }

    /**
     * Returns a list of all queries associated with the issue that
     * corresponds to the provided issueId.
     * @param httpServletRequest used for user access check.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_BY_USER_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_BY_USER_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allByUser", produces = "application/json")
    public Iterable<Query> getAllQueriesByUser(HttpServletRequest httpServletRequest) {
        String jwtToken = httpServletRequest.getHeader("Authorization");
        jwtToken = jwtToken.substring(7);
        String username = this.accessService.getUsernameFromJwtToken(jwtToken);
        return queryService.getAllQueriesByUser(username);
    }

    /**
     * Returns a list of all queries.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/all", produces = "application/json")
    public Iterable<Query> getAllQueries() {
        return queryService.getAll();
    }

    /**
     * Returns a list of all publicly accessible queries.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allPublic", produces = "application/json")
    public Iterable<Query> getAllPublicQueries() {
        return queryService.getAllPubliclyAccessible();
    }

    /**
     * Executes a query associated with the provided query id.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the executed query.
     */
    @ApiOperation(value = ApiSwaggerConstants.EXECUTE_QUERY_OPERATION_VALUE,
            notes= ApiSwaggerConstants.EXECUTE_QUERY_OPERATION_NOTE,
            response= Long.class)
    @PostMapping(value = "/execute",  produces = "application/json")
    public Long executeQuery(@RequestParam Long queryId) {
        return this.queryService.executeQuery(queryId);
    }


    /**
     * Returns a list of all results from the last query execution.
     * @param queryId used for uniquely identifying the query.
     *
     * @return {@link Iterable<Result>} the list of all query results.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_QUERIES_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_QUERIES_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/allResults/{queryId}", produces = "application/json")
    public Iterable<Result> getAllResults(@PathVariable Long queryId) {
       return queryService.getAllResultsForQuery(queryId);
    }

    /**
     * Returns a list of all possible predicates from the last query execution.
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

    /**
     * Returns a query associated with the provided queryId.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the returned query.
     */
    @ApiOperation(value = ApiSwaggerConstants.GET_QUERY_DETAILS_OPERATION_VALUE,
            notes= ApiSwaggerConstants.GET_QUERY_DETAILS_OPERATION_NOTE,
            response= Query.class)
    @PostMapping(value = "/details",  produces = "application/json")
    public Query getDetailsForQuery(@RequestParam Long queryId) {
        return this.queryService.getById(queryId);
    }

}
