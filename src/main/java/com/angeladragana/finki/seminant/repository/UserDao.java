package com.angeladragana.finki.seminant.repository;

import com.angeladragana.finki.seminant.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Dao used for user data.
 */
@Repository
public interface UserDao extends CrudRepository<User, String> {

    /**
     * Find user by the username provided.
     * @param username the username
     *
     * @return {@link User}
     */
    User findByUsername(String username);

    /**
     * Find user by the email provided.
     * @param email the email.
     *
     * @return {@link User}
     */
    User findByEmail(String email);
}