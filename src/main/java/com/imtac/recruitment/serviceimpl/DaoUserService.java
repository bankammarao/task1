package com.imtac.recruitment.serviceimpl;

import java.io.InputStream;
import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.dao.AccessTokenDao;
import com.imtac.recruitment.dao.UserDao;
import com.imtac.recruitment.dto.UserRegistrationDTO;
import com.imtac.recruitment.dto.UserStatusChangeDTO;
import com.imtac.recruitment.entity.AccessToken;
import com.imtac.recruitment.entity.Role;
import com.imtac.recruitment.entity.User;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.UserService;
import com.imtac.recruitment.service.VerificationTokenService;
import com.imtac.recruitment.utility.EmailValidator;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public class DaoUserService implements UserService {
	private UserDao userDao;
	private AccessTokenDao accessTokenDao;

	@Autowired
	private VerificationTokenService verifyTokenService;

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private MessageSource messages;
	
	@Autowired
	private PasswordEncoder encoder;

	private static final String INACTIVESTATUS = "Inactive";
	private static final String ACTIVESTATUS = "Active";

	protected DaoUserService() {
		/* Reflection instantiation */
	}

	public DaoUserService(UserDao userDao, AccessTokenDao accessTokenDao) {
		this.userDao = userDao;
		this.accessTokenDao = accessTokenDao;
	}

	@Override
	@Transactional
	public User findUserByAccessToken(String accessTokenString) {
		AccessToken accessToken = this.accessTokenDao.findByToken(accessTokenString);

		if (null == accessToken) {
			return null;
		}

		if (accessToken.isExpired()) {
			this.accessTokenDao.delete(accessToken);
			return null;
		}

		return accessToken.getUser();
	}

	@Override
	@Transactional
	public AccessToken createAccessToken(User user) {
		AccessToken accessToken = new AccessToken(user, UUID.randomUUID().toString());
		return this.accessTokenDao.save(accessToken);
	}

	@Override
	public Response createUser(UserRegistrationDTO dto, HttpServletRequest request) {
		Response response = new Response();
		User user = new User();
		User saveUser = null;
		//user.setPassword(Base64.getEncoder().encodeToString(dto.getPassword().getBytes()));
		
		user.setUsername(dto.getUsername());
		user.setPassword(encoder.encode(dto.getPassword()));
		user.setRecovery(Base64.getEncoder().encodeToString(dto.getPassword().getBytes()));
		user.setCreatedDate(new java.sql.Date(System.currentTimeMillis()));
		try {
			if (dto.getRole().equalsIgnoreCase("user")) {
				user.setAadharNumber(dto.getAadharNumber());
				user.setDob(dto.getDob());
				user.setMobileNumber(dto.getMobileNumber());
				user.setCandidateName(dto.getCandidateName());
				Set<Role> role = new HashSet<>();
				role.add(Role.USER);
				user.setStatus(INACTIVESTATUS);
				user.setRoles(role);
				saveUser = userDao.save(user);
				verifyUser(saveUser.getUsername(), request);
				response.setStatusCode(HttpStatus.OK.value());
				response.setResponseMessage("Registration Successful. Activation Link Sent to Your Mail.");
			}
			if (dto.getRole().equalsIgnoreCase("admin")) {
				Set<Role> role = new HashSet<>();
				role.add(Role.ADMIN);
				user.setStatus(ACTIVESTATUS);
				user.setRoles(role);
				userDao.save(user);
				sendCredentials(dto);
				response.setStatusCode(HttpStatus.OK.value());
				response.setResponseMessage("Registration Successful. Credentials sent to Mail.");
			}
			if (dto.getRole().equalsIgnoreCase("SuperAdmin")) {
				Set<Role> role = new HashSet<>();
				role.add(Role.SUPERADMIN);
				user.setStatus(ACTIVESTATUS);
				user.setRoles(role);
			}
		} catch (DataIntegrityViolationException e) {
			response.setStatusCode(HttpStatus.IM_USED.value());
			response.setResponseMessage("User Registration Failed. Please Enter the Unique Email, Aadhar Number and Mobile Number.");
			e.printStackTrace();
		}catch (Exception e) {
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			response.setResponseMessage("User Registration failed due to internal server error.");
			e.printStackTrace();
		}

		return response;
	}



	@Override
	public Response findByPrimaryKey(Long id) {
		Response response = new Response();
		User user = userDao.find(id);
		if (null == user) {
			response.setResponseMessage("User Not Found with given ID : " + id);
			response.setStatusCode(HttpStatus.NOT_FOUND.value());
		} else {
			response.setResponseMessage("User Found");
			response.setResponseData(user);
			response.setStatusCode(HttpStatus.OK.value());
		}

		return response;
	}

	@Override
	public User updateUser(User user) {
		return userDao.save(user);
	}

	@Override
	public User saveProfile(User user) {

		return userDao.save(user);
	}

	@Override
	public User loadUserByUsername(String username) {
		Response response = userDao.loadUserByUsername(username);
		if (response.getStatusCode().equals(HttpStatus.NOT_FOUND.value())) {
			return null;
		} else {
			return (User) response.getResponseData();
		}
	}


	@Override
	public User changePwd(User user) {
		return userDao.save(user);
	}

	@Override
	public User saveNewPassword(Long id, String newPassword) {
		User userObj = userDao.find(id);
		if (null != userObj) {
			userObj.setPassword(newPassword);
			userObj = userDao.save(userObj);
			return userObj;
		}
		return userObj;
	}

	@Override
	public AccessToken findAccessTokenByUserId(Long id, String token) {
		return userDao.findAccessTokenByUserId(id, token);
	}

	@Override
	public AccessToken updateAccessToken(AccessToken token) {
		return accessTokenDao.save(token);
	}


	@Override
	public Response findAllAdmins() {
		return userDao.findAllAdmins();
	}

	// Verification Token Sending to Mail
	public Response verifyUser(String userEmail, HttpServletRequest request) {
		Response response = new Response();
		final User user = loadUserByUsername(userEmail);
		String token = null;
		if (null != user) {
			token = UUID.randomUUID().toString();
			verifyTokenService.createVerificationTokenForUser(user, token);

			javaMailSender
					.send(constructResendVerificationTokenEmail(getAppUrl(request), request.getLocale(), token, user));
			response.setResponseMessage(messages.getMessage("message.regSucc", null, request.getLocale()));
		}
		return response;
	}

	private void sendCredentials(UserRegistrationDTO dto) {
		User user = loadUserByUsername(dto.getUsername());
		String body = "Dear Admin, User below credentials to login as Admin.\n\n "+"Username : "+user.getUsername()+"\n"+"Password : "+dto.getPassword();
		javaMailSender.send(EmailValidator.constructEmail("Login Credentials of Gurugram Account", body, user));
	}

	private SimpleMailMessage constructResendVerificationTokenEmail(String contextPath, Locale locale, String token,
			User user) {
		String url = contextPath + "/rest/user/verifyAccount?token=" + token;
		String regMsg = messages.getMessage("message.regMsg", null, locale);
		String msgLink = messages.getMessage("message.verifyLink", null, locale);
		return EmailValidator.constructEmail("Verification from Guru Gram Recruitement",
				"Hi User" + "\n\n" + regMsg + "\r\n" + msgLink + "\r\n" + url, user);
	}

	/*
	 * private SimpleMailMessage constructResetTokenEmail(String contextPath, Locale
	 * locale, String token, User user) { String url = contextPath +
	 * "/rest/user/setNewPassword?id=" + user.getId() + "&token=" + token; String
	 * message = messages.getMessage("message.resetPassword", null, locale); return
	 * EmailValidator.constructEmail("Reset Password", message + " \r\n" + url,
	 * user); }
	 */

	private String getAppUrl(HttpServletRequest request) {
		return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
	}

	@Override
	public Response changeActiveStatus(UserStatusChangeDTO dto) {
		User user = userDao.find(dto.getId());
		Response response = new Response();
		if (null == user) {
			response.setResponseMessage("User Not Found with id = " + dto.getId());
			response.setStatusCode(HttpStatus.NOT_FOUND.value());
		} else {
			if (dto.getStatus().equalsIgnoreCase(ACTIVESTATUS) || dto.getStatus().equalsIgnoreCase(INACTIVESTATUS)) {
				if (dto.getStatus().equalsIgnoreCase(ACTIVESTATUS)) {
					user.setStatus(ACTIVESTATUS);
				}
				if (dto.getStatus().equalsIgnoreCase(INACTIVESTATUS)) {
					user.setStatus(INACTIVESTATUS);
				}
				
				user.setModifiedBy(dto.getUpdatedBy());
				user.setModifiedDate(new java.sql.Date(System.currentTimeMillis()));
				User updatedUserData = userDao.save(user);
				response.setResponseMessage("Status Updated");
				response.setStatusCode(HttpStatus.OK.value());
				response.setResponseData(updatedUserData);

			} else {
				response.setResponseMessage("The value " + dto.getStatus() + " of the field 'status' is not a valid.");
				response.setStatusCode(HttpStatus.BAD_REQUEST.value());
			}
		}
		return response;
	}

	@Override
	public Response forgotPassword(String email) {
		Response response = new Response();
		final User user = loadUserByUsername(email);
		if(null == user) {
			response.setResponseMessage("The User found with the email : "+email);
			response.setStatusCode(HttpStatus.NOT_FOUND.value());
		}else {
			byte[] bytepwd = Base64.getDecoder().decode(user.getRecovery());
			String password = new String(bytepwd);
			String body = "Dear User, \n"
					+ "Your Password for Guru Gram Account is : "+password;
			javaMailSender.send(EmailValidator.constructEmail("Password for Gurugram Account", body, user));
			response.setStatusCode(HttpStatus.OK.value());
			response.setResponseMessage("Password Sent to Your Email.");
		}
		return response;
	}

	@Override
	public Response findAllUsers(Integer pageNumber, Integer pageSize) {
		return userDao.findAllUserByPages(pageNumber, pageSize);
	}

}
