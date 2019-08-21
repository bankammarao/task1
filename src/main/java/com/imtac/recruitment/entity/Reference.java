package com.imtac.recruitment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reference")
public class Reference implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "reference_id")
	private Long id;

	@Column(name = "reference_name")
	private String name;

	@Column(name = "position")
	private String position;

	@Column(name = "reference_address")
	private String address;

	@Column(name = "reference_email")
	private String email;

	@Column(name = "employmnetinfo_id")
	private Long employmnetInfoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getEmploymnetInfoId() {
		return employmnetInfoId;
	}

	public void setEmploymnetInfoId(Long employmnetInfoId) {
		this.employmnetInfoId = employmnetInfoId;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

}
