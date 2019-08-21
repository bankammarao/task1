package com.imtac.recruitment.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.imtac.recruitment.dto.UserRegistrationDTO;
import com.imtac.recruitment.dto.UserStatusChangeDTO;
import com.imtac.recruitment.entity.AccessToken;
import com.imtac.recruitment.entity.User;
import com.imtac.recruitment.response.Response;


/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public interface UserService extends UserDetailsService {
	User findUserByAccessToken(String accessToken);

	AccessToken createAccessToken(User user);
	
	User loadUserByUsername(String username);
	
	Response createUser(UserRegistrationDTO dto, HttpServletRequest request);

	Response findByPrimaryKey(Long id);

	User updateUser(User user);
	
	User saveProfile(User user);

	User changePwd(User user);

	User saveNewPassword(Long id, String newPassword);
	
	AccessToken findAccessTokenByUserId(Long id,String token);
	
	AccessToken updateAccessToken(AccessToken token);

	Response findAllAdmins();

	Response changeActiveStatus(UserStatusChangeDTO dto);

	Response forgotPassword(String email);

	Response findAllUsers(Integer pageNumber, Integer pageSize);
	
}

