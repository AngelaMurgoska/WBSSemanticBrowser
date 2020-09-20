package com.angeladragana.finki.seminant.repository;

import com.angeladragana.finki.seminant.models.Endpoint;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface EndpointDao extends CrudRepository<Endpoint, Long> {

    /**
     * Delete the endpoint with the provided endpointId.
     *
     * @param endpointId the endpointId by which the
     *                endpoint is uniquely identified.
     * @return the endpointId of the deleted endpoint.
     */
    @Transactional
    Long deleteByEndpointId(Long endpointId);

    /**
     * Returns a endpoint.
     *
     * @return {@link Endpoint}.
     */
    Endpoint getByEndpointId(Long endpointId);
}
