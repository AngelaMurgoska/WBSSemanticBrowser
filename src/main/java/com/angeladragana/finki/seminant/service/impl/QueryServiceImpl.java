package com.angeladragana.finki.seminant.service.impl;

import com.angeladragana.finki.seminant.models.Query;
import com.angeladragana.finki.seminant.models.Result;
import com.angeladragana.finki.seminant.models.User;
import com.angeladragana.finki.seminant.repository.QueryDao;
import com.angeladragana.finki.seminant.repository.ResultDao;
import com.angeladragana.finki.seminant.repository.UserDao;
import com.angeladragana.finki.seminant.service.QueryService;
import lombok.RequiredArgsConstructor;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.StmtIterator;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * The implementation of @{@link QueryService}
 */
@Service
@RequiredArgsConstructor
public class QueryServiceImpl implements QueryService {

    private final UserDao userDao;
    private final QueryDao queryDao;
    private final ResultDao resultDao;

    @Override
    public Query addQuery(Query query, String username) {
        User user = userDao.findByUsername(username);
        query.setCreatedBy(user);
        return queryDao.save(query);
    }

    @Override
    public Long deleteQuery(Long queryId) {
        return queryDao.deleteByQueryId(queryId);
    }

    @Override
    public Iterable<Query> getAllQueriesByUser(String username) {
        User user = userDao.findByUsername(username);
        return queryDao.findAllByCreatedBy(user);
    }

    @Override
    public Iterable<Query> getAllPubliclyAccessible() {
        return queryDao.findAllByPublicAccess(true);
    }

    @Override
    public Iterable<Query> getAll() {
        return queryDao.findAll();
    }

    @Override
    public Long executeQuery(Long queryId){
        Query query = queryDao.findById(queryId).get();
        query.setLastRun(new Date());
        resultDao.deleteAllByQuery(query);
        updateResultsFor(query);
        return queryDao.save(query).getQueryId();
    }

    private void updateResultsFor(Query query){
        ParameterizedSparqlString qs = new ParameterizedSparqlString(query.getText());
        QueryExecution exec = QueryExecutionFactory.sparqlService(query.getEndpoint().getUrl(), qs.asQuery());

        ResultSet resultSet = exec.execSelect();

        while(resultSet.hasNext()) {
            QuerySolution solution = resultSet.next();

            while(solution.varNames().hasNext()) {
                Result result = new Result();
                result.setQuery(query);
                result.setPredicate(solution.varNames().next());
                result.setObject(solution.getLiteral(solution.varNames().next()).toString());
                resultDao.save(result);
            }
        }

        //
//        while (stmtIterator.hasNext()) {
//            Result result = new Result();
//            result.setObject(stmtIterator.nextStatement().getObject().toString());
//            result.setSubject(stmtIterator.nextStatement().getSubject().toString());
//            result.setPredicate(stmtIterator.nextStatement().getPredicate().toString());
//            resultDao.save(result);
//            query.getResults().add(result);
//        }
    }

    @Override
    public Iterable<String> getAllPredicatesForQuery(Long queryId){
        Iterable<Result> results = this.getAllResultsForQuery(queryId);
        Set<String> predicates = new TreeSet<>();

        Iterator<Result> resultIterator = results.iterator();
        while (resultIterator.hasNext()) {
            predicates.add(resultIterator.next().getPredicate());
        }
        return predicates;
    }

    @Override
    public Iterable<Result> getAllResultsForQuery(Long queryId) {
        //ToDo: change this
        Query query = queryDao.findById(queryId).get();
        return resultDao.findAllByQuery(query);
    }

    @Override
    public Query getById(Long queryId){
        return queryDao.getByQueryId(queryId);
    }
}
