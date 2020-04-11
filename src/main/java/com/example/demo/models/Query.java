package com.example.demo.models;

import java.time.LocalDateTime;

public class Query {

    private String name;
    private boolean publicAccess;
    private LocalDateTime lastRun;
    private String text;
    private int numResults;

    public Query(){}

    public Query(boolean publicAccess, LocalDateTime lastRun, String text, int numResults) {
        this.publicAccess = publicAccess;
        this.lastRun = lastRun;
        this.text = text;
        this.numResults = numResults;
    }

    public boolean isPublicAccess() {
        return publicAccess;
    }

    public void setPublicAccess(boolean publicAccess) {
        this.publicAccess = publicAccess;
    }

    public LocalDateTime getLastRun() {
        return lastRun;
    }

    public void setLastRun(LocalDateTime lastRun) {
        this.lastRun = lastRun;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getNumResults() {
        return numResults;
    }

    public void setNumResults(int numResults) {
        this.numResults = numResults;
    }
}
