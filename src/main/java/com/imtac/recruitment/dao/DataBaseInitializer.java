package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.imtac.recruitment.entity.Role;
import com.imtac.recruitment.entity.User;



/**
 * Initialize the database with some test entries.
 *
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public class DataBaseInitializer {

	private UserDao userDao;

	private PasswordEncoder passwordEncoder;

	protected DataBaseInitializer() {
		// Default constructor for reflection instantiation
	}

	public DataBaseInitializer(UserDao userDao, PasswordEncoder passwordEncoder) {
		this.userDao = userDao;
		this.passwordEncoder = passwordEncoder;

	}

	public void initDataBase() {
		
		User adminUser = new User("admin@gmail.com", this.passwordEncoder.encode("admin"));
		adminUser.addRole(Role.ADMIN);
		adminUser.setStatus("Active");
		List<User> list = new ArrayList<User>();
		 list=userDao.findAll();
		if(null==list ||list.isEmpty()) {
		this.userDao.save(adminUser);
		}

		long timestamp = System.currentTimeMillis() - (1000 * 60 * 60 * 24);
		
	}
}
