package webdev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import webdev.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
