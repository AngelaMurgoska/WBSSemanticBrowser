package com.angeladragana.finki.seminant.repository;

import com.angeladragana.finki.seminant.models.Endpoint;
import com.angeladragana.finki.seminant.models.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EndpointDao extends CrudRepository<Endpoint, Long> {

    /** Returns a list of all endpoints.
    *
    * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<Endpoint> getAll();
}
