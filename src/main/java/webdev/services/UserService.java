package webdev.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public List<User> findAllUsers() {
		return repository.findAll();
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
}
