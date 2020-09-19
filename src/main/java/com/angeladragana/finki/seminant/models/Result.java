package com.angeladragana.finki.seminant.models;

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
    private Long resultId;

    @JoinColumn(nullable = false)
    @ManyToOne
    private Query query;

    @Column
    private String subject;

    @Column
    private String predicate;

    @Column
    private String object;

}
