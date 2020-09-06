package com.angeladragana.finki.seminant.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="result")
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long resultId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(nullable = false)
    private Query query;

    @Column
    private String subject;

    @Column
    private String predicate;

    @Column
    private String object;

}
