package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Root;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.entity.AccessToken;
import com.imtac.recruitment.entity.Role;
import com.imtac.recruitment.entity.User;
import com.imtac.recruitment.response.Response;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
public class JpaUserDao extends JpaDao<User, Long> implements UserDao {
	public JpaUserDao() {
		super(User.class);
	}

	@Override
	@Transactional(readOnly = true)
	public Response loadUserByUsername(String username) // throws
														// UsernameNotFoundException
	{
		Response response = new Response();
		User user = this.findByName(username);
		try {
			if (null == user) {
				response.setStatusCode(HttpStatus.NOT_FOUND.value());
			}
			response.setStatusCode(HttpStatus.OK.value());
			response.setResponseData(user);
		} catch (UsernameNotFoundException une) {
			System.out.println(une.toString());
			response.setStatusCode(HttpStatus.NOT_FOUND.value());
		}

		return response;
	}

	@Override
	@Transactional(readOnly = true)
	public User findByName(String name) {
		final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
		final CriteriaQuery<User> criteriaQuery = builder.createQuery(this.entityClass);

		Root<User> root = criteriaQuery.from(this.entityClass);
		Path<String> namePath = root.get("username");
		criteriaQuery.where(builder.equal(namePath, name));

		TypedQuery<User> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
		List<User> users = typedQuery.getResultList();

		if (users.isEmpty()) {
			return null;
		}

		return users.iterator().next();
	}

	@Override
	public AccessToken findAccessTokenByUserId(Long id, String token) {
		final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
		final CriteriaQuery<AccessToken> criteriaQuery = builder.createQuery(AccessToken.class);
		Root<AccessToken> root = criteriaQuery.from(AccessToken.class);
		Path<String> namePath = root.get("user");
		Path<String> tokenPath = root.get("token");
		criteriaQuery.where(builder.equal(namePath, id));
		criteriaQuery.where(builder.equal(tokenPath, token));

		TypedQuery<AccessToken> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
		AccessToken accessToken = typedQuery.getSingleResult();
		return accessToken;

	}

	@SuppressWarnings("unchecked")
	@Override
	public Response findAllAdmins() {
		Response response = new Response();
		try {
			Query query = this.getEntityManager().createNativeQuery(
					"SELECT u.id,u.username,u.password,u.aadharnumber,u.dob,u.mobilenumber,u.status,u.candidateName FROM users u LEFT JOIN user_roles r ON u.id = r.user_id where r.roles = 2");
			List<Object[]> admins = query.getResultList();
			ArrayList<User> adminsList = new ArrayList<>();
			if (admins.isEmpty()) {
				response.setResponseMessage("No Admins Found");
				response.setStatusCode(HttpStatus.NO_CONTENT.value());
			} else {
				for (Object[] a : admins) {
					User admin = new User();
					admin.setId(Long.parseLong(a[0] + ""));
					admin.setUsername((String) a[1]);
					admin.setPassword((String) a[2]);
					admin.setAadharNumber((String) a[3]);
					admin.setDob((Date) a[4]);
					admin.setMobileNumber((String) a[5]);
					admin.setStatus((String) a[6]);
					admin.setCandidateName((String) a[7]);
					Set<Role> roles = new HashSet<>();
					roles.add(Role.ADMIN);
					admin.setRoles(roles);
					adminsList.add(admin);
				}

				response.setResponseMessage("Admins List Retrieved");
				response.setStatusCode(HttpStatus.OK.value());
				response.setResponseDataList(adminsList);
			}

		} catch (Exception e) {
			response.setResponseMessage("Error Occured while Retrieving Admins List");
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			e.printStackTrace();
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Response findAllUserByPages(Integer pageNumber, Integer pageSize) {
		Response response = new Response();
		try {
			Query query = this.getEntityManager().createNativeQuery(
					"SELECT u.id, u.aadharnumber, u.dob, u.mobilenumber, u.username, u.password, u.status,u.candidateName FROM users u LEFT JOIN user_roles r ON u.id = r.user_id WHERE r.roles = 0 ORDER BY id DESC OFFSET "
							+ pageNumber * pageSize + " FETCH NEXT " + pageSize + " ROWS ONLY ");
			List<Object[]> users = query.getResultList();
			ArrayList<User> usersList = new ArrayList<>();
			if (users.isEmpty()) {
				response.setResponseMessage("No Users Found");
				response.setStatusCode(HttpStatus.NO_CONTENT.value());
			} else {
				for (Object[] a : users) {
					User user = new User();
					user.setId(Long.parseLong(a[0] + ""));
					user.setAadharNumber((String) a[1]);
					user.setDob((Date) a[2]);
					user.setMobileNumber((String) a[3]);
					user.setUsername((String) a[4]);
					user.setPassword((String) a[5]);
					user.setStatus((String) a[6]);
					user.setCandidateName((String) a[7]);

					Set<Role> roles = new HashSet<>();
					roles.add(Role.USER);
					user.setRoles(roles);
					usersList.add(user);
				}

				response.setResponseMessage("Users List Retrieved");
				response.setStatusCode(HttpStatus.OK.value());
				response.setResponseDataList(usersList);
			}

		} catch (Exception e) {
			response.setResponseMessage("Error Occured while Retrieving Users List");
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			e.printStackTrace();
		}
		return response;
	}

}
