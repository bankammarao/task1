package com.imtac.recruitment.service;

import com.imtac.recruitment.entity.User;

public interface VerificationTokenService {

	void createVerificationTokenForUser(User user,String token);
	
	String validateVerificationToken(String token);
	
	User findUserByVerificationToken(String token);

	void deleteVerificationTokenForUser(String token);
	
}
