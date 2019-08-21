package com.imtac.recruitment.entity;

public class ExperienceMapper {

	private Long id;

	private String nameOfEmployer;

	private String designation;

	private String employmentType;

	private Double pay;

	private Double numberOfYears;

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

}
