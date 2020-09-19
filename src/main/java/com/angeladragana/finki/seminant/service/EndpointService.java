package com.angeladragana.finki.seminant.service;

import com.angeladragana.finki.seminant.models.Endpoint;
import org.springframework.stereotype.Service;

/**
 * Service used to provide the endpoint functionality.
 */
@Service
public interface EndpointService {

    /**
     * Adds new endpoint for the user according to the Endpoint model provided.
     * @param endpoint the new Endpoint model.
     * is uniquely identified.
     *
     * @return {@link Endpoint} the newly created Endpoint.
     */
    Endpoint addEndpoint(Endpoint endpoint);

    /**
     * Deletes a endpoint associated with the provided endpoint id.
     * @param endpointId the ednpointId that uniquely identifies the endpoint.
     *
     * @return the endpointId of the deleted endpoint.
     */
    Long deleteEndpoint(Long endpointId);

    /**
     * Returns a list of all endpoints.
     *
     * @return {@link Iterable< Endpoint >} the list of all endpoints.
     */
    Iterable<Endpoint> getAll();

    /**
     * Returns endpoint details.
     *
     * @return {@link Endpoint}
     */
    Endpoint getById(Long endpointId);
}
