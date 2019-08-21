package com.imtac.recruitment.rest.resources;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.imtac.recruitment.dto.UserRegistrationDTO;
import com.imtac.recruitment.entity.AccessToken;
import com.imtac.recruitment.entity.User;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.UserService;
import com.imtac.recruitment.service.VerificationTokenService;
import com.imtac.recruitment.transfer.UserTransfer;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */

@Component
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Path("/user")
public class UserResource {
	@Autowired
	private UserService userService;

	@Autowired
	@Qualifier("authenticationManager")
	private AuthenticationManager authManager;

	@Autowired
	private VerificationTokenService verifyTokenService;

	private static final String INACTICESTATUS = "Inactive";

	/**
	 * Retrieves the currently logged in user.
	 *
	 * @return A transfer containing the username and the roles.
	 */

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public UserTransfer getUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Object principal = authentication.getPrincipal();
		if (!(principal instanceof UserDetails)) {
			throw new WebApplicationException(javax.ws.rs.core.Response.Status.UNAUTHORIZED);
		}
		UserDetails userDetails = (UserDetails) principal;
		return new UserTransfer(userDetails.getUsername(), this.createRoleMap(userDetails));
	}

	/**
	 * Authenticates a user and creates an access token.
	 *
	 * @param username
	 *            The name of the user.
	 * @param password
	 *            The password of the user.
	 * @return The generated access token.
	 */
	@Path("authenticate")
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response authenticate(@FormParam("email") String email, @FormParam("password") String password) {
		Response response = new Response();
		AccessToken token = null;

		if (StringUtils.isEmpty(email) || StringUtils.isEmpty(password)) {
			response.setStatusCode(HttpStatus.BAD_REQUEST.value());
			response.setResponseMessage("Email/Password Should not be Empty.");
			return response;
		}

		try {
			User user = userService.loadUserByUsername(email);
			if (null == user) {
				response.setResponseMessage("User Not Found with : " + email);
				response.setStatusCode(HttpStatus.NOT_FOUND.value());
				return response;
			}
			
			if(user.getStatus().equals(INACTICESTATUS)) {
				response.setResponseMessage("This is Inactive Account. Activate Account By Clicking Verification Link sent to registered Email");
				response.setStatusCode(HttpStatus.FORBIDDEN.value());
				return response;
			}
			
			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
					email, password);
			Authentication authentication = this.authManager.authenticate(authenticationToken);
			SecurityContextHolder.getContext().setAuthentication(authentication);

			Object principal = authentication.getPrincipal();

			if (!(principal instanceof User)) {
				throw new WebApplicationException(javax.ws.rs.core.Response.Status.UNAUTHORIZED);
			}

			token = this.userService.createAccessToken((User) principal);
			response.setResponseMessage("Login Successful");
			response.setStatusCode(HttpStatus.OK.value());
			response.setResponseData(token);

		} catch (BadCredentialsException we) {
			response.setStatusCode(HttpStatus.UNAUTHORIZED.value());
			response.setResponseMessage("Invalid Email/Password Entered");
		} catch (Exception e) {
			response.setResponseMessage("Unable to Login");
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			e.printStackTrace();
		}

		return response;

	}

	private Map<String, Boolean> createRoleMap(UserDetails userDetails) {
		Map<String, Boolean> roles = new HashMap<>();
		for (GrantedAuthority authority : userDetails.getAuthorities()) {
			roles.put(authority.getAuthority(), Boolean.TRUE);
		}
		return roles;
	}

	@Path("/createUser")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response userRegistration(UserRegistrationDTO dto, @Context HttpServletRequest request) {
		/*Response response = new Response();
		if(!dto.getPassword().equals(dto.getConfirmPassword())) {
			response.setResponseMessage("Password And Conform Password Does not Match.");
			return response;
		}else {
			response = 
		}
		return response;*/
		return userService.createUser(dto,request);
	}

	@Path("/getUser/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUser(@PathParam("id") Long id) {
		return userService.findByPrimaryKey(id);	
	}
	


	@Path("/logout/{id}/{token}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response logout(@PathParam("id") Long userId, @PathParam("token") String accessToken) {
		Response response = new Response();
		AccessToken token = userService.findAccessTokenByUserId(userId, accessToken);
		if (null != token) {
			Date date = Calendar.getInstance().getTime();
			token.setExpiry(date);
			userService.updateAccessToken(token);
		}
		response.setResponseMessage("Logout Successful");
		response.setStatusCode(HttpStatus.OK.value());
		return response;
	}
	
	
	@GET
	@Path("/verifyAccount")
	public void showLoginPage(@QueryParam("token") String token, @Context HttpServletRequest request,
			@Context HttpServletResponse servletResponse) throws IOException {

		String result = verifyTokenService.validateVerificationToken(token);
		if (null != result && !result.isEmpty() && result.equals("enabled")) {
			User user = verifyTokenService.findUserByVerificationToken(token);
			if (user != null) {
				user.setStatus("Active");
				userService.updateUser(user);
			}
			verifyTokenService.deleteVerificationTokenForUser(token);
			servletResponse.sendRedirect(getAppUrl(request)+"/rest/user/accountActivationStatus");
		}
	}
	
	@GET
	@Path("/accountActivationStatus")
	public javax.ws.rs.core.Response accountActivationStatus() {
		
		String msg = "Your Account is Activated. Go to Login Page to sign in. ";
		return javax.ws.rs.core.Response.status(200).entity(msg).type(MediaType.TEXT_HTML_TYPE).build();
		
	}
	
	private String getAppUrl(HttpServletRequest request) {
		return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
	}
	
	@Path("/forgotPassword/{email}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response forgotPassword(@PathParam("email") String email) {
		return userService.forgotPassword(email);
	}
	

}
