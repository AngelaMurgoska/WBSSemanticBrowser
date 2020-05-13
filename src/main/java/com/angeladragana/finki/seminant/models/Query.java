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
    private long queryId;

    @Column(unique = true)
    private String name;

    @Column
    private String text;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "endpointId", nullable = false)
    @JsonIgnore
    private Endpoint endpoint;

    @Column
    private boolean publicAccess;

    @Column
    private Date lastRun;
}
