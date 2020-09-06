package com.angeladragana.finki.seminant.models;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@RequiredArgsConstructor
@Table(name="user")
public class User {
    @Id
    @Column
    private String username;

    @Column
    private String password;

    @Column(unique = true)
    private String email;

    @Column
    private Date dateCreated;

    @Column
    private String resetToken;
}