package com.angeladragana.finki.seminant.service;

import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.models.Result;
import org.springframework.stereotype.Service;

/**
 * Service used to provide the query functionality.
 */
@Service
public interface QueryService {

    /**
     * Adds new query for the user according to the Query model provided.
     * @param query the new Query model.
     * @param jwtToken the jwtToken by which the user
     * is uniquely identified.
     *
     * @return {@link Query} the newly created Query.
     */
    Query addQuery(Query query, String jwtToken);

    /**
     * Deletes a query associated with the provided query id.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the deleted query.
     */
    Long deleteQuery(Long queryId);

    /**
     * Returns a list of all queries associated with the user provided
     * @param username the username of the user that is uniquely identified.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<Query> getAllQueriesByUser(String username);

    /**
     * Returns a list of all queries that are publicly accessible.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<Query> getAllPubliclyAccessible();

    /**
     * Returns a list of all queries.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<Query> getAll();

    /**
     * Executes a query associated with the provided query id.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the executed query.
     */
    Long executeQuery(Long queryId);


    /**
     * Returns a list of all predicates that are returned from the query execution.
     *
     * @return {@link Iterable<Query>} the list of all queries.
     */
    Iterable<String> getAllPredicatesForQuery(Long query);

    /**
     * Returns all the current results related to the provided query.
     *
     * @param queryId the id of the query by which the results that need to be selected.
     */
    Iterable<Result> getAllResultsForQuery(Long queryId);

    /**
     * Returns a query.
     *
     * @param queryId the queryId by which the returned query is uniquely identified.
     */
    Query getById(Long queryId);

    /**
     * Returns a public query.
     *
     * @param queryId the queryId by which the returned query is uniquely identified.
     */
    Query getDetailsForPublicQuery(Long queryId);

    /**
     * Executes a public query associated with the provided query id.
     * @param queryId the queryId that uniquely identifies the query.
     *
     * @return the queryId of the executed query.
     */
    Long executePublicQuery(Long queryId);
}
