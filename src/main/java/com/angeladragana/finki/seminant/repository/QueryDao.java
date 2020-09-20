package com.angeladragana.finki.seminant.repository;

import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository 
public interface QueryDao extends CrudRepository<Query, Long> {

    /**
     * Delete the query with the provided queryId.
     *
     * @param queryId the queryId by which the
     *                query is uniquely identified.
     * @return the queryId of the deleted query.
     */
    @Transactional
    Long deleteByQueryId(Long queryId);

    /**
     * Returns a list of all queries associated with the user provided
     * @param user the user that is uniquely identified.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<Query> findAllByCreatedBy(User user);

    /**
     * Returns a list of all queries depending if they are publicly visible or not.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<Query> findAllByPublicAccess(Boolean publicAccess);

    /**
     * Returns a query.
     *
     * @return {@link Query}.
     */
    Query getByQueryId(Long queryId);
}
