package com.angeladragana.finki.seminant.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Set;
import java.util.TreeSet;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="endpoint")
public class Endpoint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long endpointId;

    @Column(unique = true)
    private String name;

    @Column
    private String url;

    @JsonIgnore
    @OneToMany(mappedBy = "endpoint", cascade = CascadeType.REMOVE)
    private Set<Query> queries = new TreeSet<>();
}
