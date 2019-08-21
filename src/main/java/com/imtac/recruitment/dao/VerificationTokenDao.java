package com.imtac.recruitment.dao;

import com.imtac.recruitment.entity.VerificationToken;

public interface VerificationTokenDao extends Dao<VerificationToken,Long>{
	
	VerificationToken findByToken(String token);
	
	VerificationToken findByUser(String token);

}
