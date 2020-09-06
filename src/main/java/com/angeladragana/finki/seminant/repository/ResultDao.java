package com.angeladragana.finki.seminant.repository;

import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.models.Result;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultDao extends CrudRepository<Result, Long> {

    /**
     * Deletes all the current results related to the provided query.
     *
     * @param query the query by which the results that need to be deleted are identified.
     */
    void deleteAllByQuery(Query query);

    /**
     * Returns all the current results related to the provided query.
     *
     * @param query the query by which the results that need to be selected.
     */
    Iterable<Result> findAllByQuery(Query query);
}
