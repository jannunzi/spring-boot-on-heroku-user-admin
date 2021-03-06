package webdev.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import webdev.model.*;
import webdev.repository.UserRepository;

import java.util.*;

@RestController
public class UserService {
	@Autowired
	UserRepository repository;
	
	@GetMapping("/api/user")
	public Iterable<User> findAllUsers() {
		return repository.findAll();
	}

	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int id) {
		Optional<User> user = repository.findById(id);
		if(user.isPresent()) {
			return user.get();
		}
		return null;
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int userId) {
		repository.deleteById(userId);
	}

	@PutMapping("/api/user/{userId}")
	public void updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> optional = repository.findById(userId);
		if(optional.isPresent()) {
			User user = optional.get();
			user.setUsername(newUser.getUsername());
			repository.save(user);
		}
	}
}
