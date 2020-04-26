package com.angeladragana.finki.seminant.models;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="endpoint")
public class Endpoint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long endpointId;

    @Column(unique = true)
    private String name;

    @Column
    private String url;
}
