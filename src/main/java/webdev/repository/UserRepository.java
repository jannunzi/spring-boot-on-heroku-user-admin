package webdev.repository;

import org.springframework.data.repository.CrudRepository;

import webdev.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
