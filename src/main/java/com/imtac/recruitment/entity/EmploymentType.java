package com.imtac.recruitment.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "employment_type")
public class EmploymentType implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "employment_id")
	private Long id;

	@Column(name = "employment_name")
	private String employmentName;

	@Column(name = "employment_status")
	private String status;

	@Column(name = "employment_updatedBy")
	private Long lastUpdatedBy;

	@Column(name = "employment_updatedDate")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmploymentName() {
		return employmentName;
	}

	public void setEmploymentName(String employmentName) {
		this.employmentName = employmentName;
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

}
