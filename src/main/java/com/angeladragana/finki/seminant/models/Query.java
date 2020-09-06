package com.angeladragana.finki.seminant.models;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="query")
public class Query {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long queryId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(nullable = false)
    private Endpoint endpoint;

    @JoinColumn(nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private User createdBy;

    @Column(unique = true)
    private String name;

    @Column
    private String text;

    @Column
    private boolean publicAccess;

    @Column
    private Date lastRun;
}
