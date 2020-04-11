package com.example.demo.models;

public class QueryExecution {

    //many to one dvete mapiranja

    private Query query;
    private Endpoint endpoint;

    public QueryExecution(){}

    public QueryExecution(Query query, Endpoint endpoint) {
        this.query = query;
        this.endpoint = endpoint;
    }

    public Query getQuery() {
        return query;
    }

    public void setQuery(Query query) {
        this.query = query;
    }

    public Endpoint getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
    }
}
