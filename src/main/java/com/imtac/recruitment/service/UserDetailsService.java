package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.User;


public interface UserDetailsService {
	public User saveUser(User user);
	
	public User findUserById(Long id);
	
	public List<User> getAllUsers();
	
	public void deleteUserById(Long id);

}
