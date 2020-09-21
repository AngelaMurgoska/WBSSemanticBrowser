package com.angeladragana.finki.seminant.controller;

import com.angeladragana.finki.seminant.constants.ApiSwaggerConstants;
import com.angeladragana.finki.seminant.models.Endpoint;
import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.service.EndpointService;
import com.angeladragana.finki.seminant.service.QueryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
