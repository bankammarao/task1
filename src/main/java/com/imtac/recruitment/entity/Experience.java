package com.imtac.recruitment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "experience")
public class Experience implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "experience_id")
	private Long id;

	@Column(name = "name_of_employer")
	private String nameOfEmployer;

	@Column(name = "designation")
	private String designation;

	@Column(name = "employment_type")
	private String employmentType;

	@Column(name = "pay")
	private Double pay;

	@Column(name = "number_of_years")
	private Double numberOfYears;

	@Column(name = "employmentinfo_id")
	private Long employmentInfoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameOfEmployer() {
		return nameOfEmployer;
	}

	public void setNameOfEmployer(String nameOfEmployer) {
		this.nameOfEmployer = nameOfEmployer;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public Double getPay() {
		return pay;
	}

	public void setPay(Double pay) {
		this.pay = pay;
	}

	public Double getNumberOfYears() {
		return numberOfYears;
	}

	public void setNumberOfYears(Double numberOfYears) {
		this.numberOfYears = numberOfYears;
	}

	public Long getEmploymentInfoId() {
		return employmentInfoId;
	}

	public void setEmploymentInfoId(Long employmentInfoId) {
		this.employmentInfoId = employmentInfoId;
	}

}
