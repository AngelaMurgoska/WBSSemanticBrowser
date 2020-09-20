package com.angeladragana.finki.seminant.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="query")
public class Query {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long queryId;

    @JoinColumn(nullable = false)
    @ManyToOne
    private Endpoint endpoint;

    @JoinColumn(nullable = false)
    @ManyToOne
    private User createdBy;

    @JsonIgnore
    @OneToMany(mappedBy = "query")
    private Set<Result> results;

    @Column(unique = true)
    private String name;

    @Column
    private String text;

    @Column
    private boolean publicAccess;

    @Column
    private Date lastRun;
}
