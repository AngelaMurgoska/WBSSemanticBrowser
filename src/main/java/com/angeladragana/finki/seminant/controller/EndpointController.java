package com.angeladragana.finki.seminant.controller;

import com.angeladragana.finki.seminant.constants.ApiSwaggerConstants;
import com.angeladragana.finki.seminant.models.Endpoint;
import com.angeladragana.finki.seminant.service.EndpointService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


/**
 *  Controller for the endpoint model API requests.
 */
@Api(value = ApiSwaggerConstants.ENDPOINT_API_VALUE)
@RestController
@RequestMapping(value = "/api/endpoint", produces = MediaType.ALL_VALUE)
@CrossOrigin
@RequiredArgsConstructor
public class EndpointController {

    private final EndpointService endpointService;

    /**
     * Adds new endpoint from a user according to the Endpoint model provided.
     * @param newEndpoint the new Endpoint model.
     *
     * @return {@link Endpoint} the newly created Endpoint.
     */
    @ApiOperation(value = ApiSwaggerConstants.ADD_ENDPOINT_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ADD_ENDPOINT_OPERATION_NOTE,
            response= Endpoint.class)
    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = "application/json")
    public Endpoint addEndpoint(@RequestBody Endpoint newEndpoint) {
        return endpointService.addEndpoint(newEndpoint);
    }

    /**
     * Deletes a endpoint associated with the provided endpoint id.
     * @param endpointId the endpointId that uniquely identifies the endpoint.
     *
     * @return the endpointId of the deleted endpoint.
     */
    @ApiOperation(value = ApiSwaggerConstants.DELETE_ENDPOINT_OPERATION_VALUE,
            notes= ApiSwaggerConstants.DELETE_ENDPOINT_OPERATION_NOTE,
            response= Long.class)
    @PostMapping(value = "/delete",  produces = "application/json")
    public Long deleteEndpoint(@RequestParam Long endpointId) {
        return endpointService.deleteEndpoint(endpointId);
    }

    /**
     * Returns a list of all endpoints associated with the issue that
     * corresponds to the provided issueId.
     *
     * @return {@link Iterable<Endpoint>} the list of all endpoints.
     */
    @ApiOperation(value = ApiSwaggerConstants.ALL_ENDPOINTS_OPERATION_VALUE,
            notes= ApiSwaggerConstants.ALL_ENDPOINTS_OPERATION_NOTE,
            response= Iterable.class)
    @GetMapping(value = "/all", produces = "application/json")
    public Iterable<Endpoint> getAllEndpoints() {
        return endpointService.getAll();
    }

    /**
     * Returns a endpoint associated with the provided endpoint id.
     * @param endpointId the endpointId that uniquely identifies the endpoint.
     *
     * @return the endpointId of the returned endpoint.
     */
    @ApiOperation(value = ApiSwaggerConstants.GET_ENDPOINT_DETAILS_OPERATION_VALUE,
            notes= ApiSwaggerConstants.GET_ENDPOINT_DETAILS_OPERATION_NOTE,
            response= Endpoint.class)
    @PostMapping(value = "/details",  produces = "application/json")
    public Endpoint getDetailsForEndpoint(@RequestParam Long endpointId) {
        return endpointService.getById(endpointId);
    }

}
