package com.imtac.recruitment.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@javax.persistence.Entity
@Table(name="generate_application")
public class GenerateApplicationNumber implements Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "year")
	private Integer year;

	@Column(name = "last_application_number")
	private Long applicationNo;

	@Column(name = "position_id")
	private Long positionId;

	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getApplicationNo() {
		return applicationNo;
	}

	public void setApplicationNo(Long applicationNo) {
		this.applicationNo = applicationNo;
	}

	public Long getPositionId() {
		return positionId;
	}

	public void setPositionId(Long positionId) {
		this.positionId = positionId;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

}
