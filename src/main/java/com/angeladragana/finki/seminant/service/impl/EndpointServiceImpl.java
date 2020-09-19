package com.angeladragana.finki.seminant.service.impl;

import com.angeladragana.finki.seminant.models.Endpoint;
import com.angeladragana.finki.seminant.repository.EndpointDao;
import com.angeladragana.finki.seminant.service.EndpointService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


/**
 * The implementation of @{@link EndpointService}
 */
@Service
@RequiredArgsConstructor
public class EndpointServiceImpl implements EndpointService {

    public final EndpointDao endpointDao;

    @Override
    public Endpoint addEndpoint(Endpoint endpoint) {
        return endpointDao.save(endpoint);
    }


    @Override
    public Long deleteEndpoint(Long endpointId) {
        return endpointDao.deleteByEndpointId(endpointId);
    }

    @Override
    public Iterable<Endpoint> getAll() {
        return endpointDao.findAll();
    }

    @Override
    public Endpoint getById(Long endpointId){
        return endpointDao.getByEndpointId(endpointId);
    }
}
