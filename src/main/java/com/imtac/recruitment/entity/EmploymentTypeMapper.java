package com.imtac.recruitment.entity;

import java.util.Date;

public class EmploymentTypeMapper {

	private Long id;

	private String employmentName;

	private String status;

	private Long lastUpdatedBy;

	private Date updatedDate;

	private String email;

	public String getEmploymentName() {
		return employmentName;
	}

	public void setEmploymentName(String employmentName) {
		this.employmentName = employmentName;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getLastUpdatedBy() {
		return lastUpdatedBy;
	}

	public void setLastUpdatedBy(Long lastUpdatedBy) {
		this.lastUpdatedBy = lastUpdatedBy;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
