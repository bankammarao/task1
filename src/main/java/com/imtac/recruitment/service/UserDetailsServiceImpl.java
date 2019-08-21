package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.dao.UserDetailsDao;
import com.imtac.recruitment.entity.User;

public class UserDetailsServiceImpl implements UserDetailsService {
	private UserDetailsDao dao;

	public UserDetailsServiceImpl() {

	}

	public UserDetailsServiceImpl(UserDetailsDao dao) {
		this.dao = dao;
	}

	@Override
	public User findUserById(Long id) {
		return dao.find(id);
	}

	@Override
	public List<User> getAllUsers() {

		return dao.findAll();
	}

	@Override
	public void deleteUserById(Long id) {

		dao.delete(id);

	}

	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		return dao.save(user);
	}

}
