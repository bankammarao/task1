package com.ojas.gst.entity;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
//import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author DhanaLakshmi
 */
@javax.persistence.Entity
@Table(name = "users")
public class User implements Entity{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private Set<Role> roles = new HashSet<Role>();
	
	@Column
	private String username;

	@Column(length = 80)
	private String password;

	@Column
	private String clientName;

	@Column(length = 80)
	private String type;

	@Column
	private String address;

	@Column
	private String state;

	@Column
	private String city;

	@Column
	private Long pinCode;

	@Column
	private String panNumber;
	
	@Column
	private String relationShip;
	
	@Column
	private String servicesRequired;

	@Column
	private String eamilAddress;
	
	@Column
	private Long mobileNumber;
	
	@Column
	private String status;

	@Override
	public Long getId() {
		return id;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Long getPinCode() {
		return pinCode;
	}

	public void setPinCode(Long pinCode) {
		this.pinCode = pinCode;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public String getRelationShip() {
		return relationShip;
	}

	public void setRelationShip(String relationShip) {
		this.relationShip = relationShip;
	}

	public String getServicesRequired() {
		return servicesRequired;
	}

	public void setServicesRequired(String servicesRequired) {
		this.servicesRequired = servicesRequired;
	}

	public String getEamilAddress() {
		return eamilAddress;
	}

	public void setEamilAddress(String eamilAddress) {
		this.eamilAddress = eamilAddress;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
