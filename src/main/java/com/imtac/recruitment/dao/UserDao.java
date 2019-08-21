package com.imtac.recruitment.dao;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.imtac.recruitment.entity.AccessToken;
import com.imtac.recruitment.entity.User;
import com.imtac.recruitment.response.Response;


public interface UserDao extends Dao<User, Long> {
	
	Response loadUserByUsername(String username) throws UsernameNotFoundException;
	User findByName(String name);
	AccessToken findAccessTokenByUserId(Long id,String token);
	Response findAllAdmins();
	Response findAllUserByPages(Integer pageNumber, Integer pageSize);
	
}
