package com.imtac.recruitment.entity;

import java.util.Date;

public class PositionMapper {

	private Long id;

	private String positionName;

	private String positionCode;

	private Long positionTypeId;

	private String advtNumber;

	private String eligibilityCriteria;

	private Date regStartDate;

	private Date regEndDate;

	private String status;

	private Long lastUpdatedBy;

	private Date updatedDate;

	private String email;

	private String positionTypeName;

	private String applicationNumber;

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public String getPositionName() {
		return positionName;
	}

	public void setPositionName(String positionName) {
		this.positionName = positionName;
	}

	public String getPositionCode() {
		return positionCode;
	}

	public void setPositionCode(String positionCode) {
		this.positionCode = positionCode;
	}

	public Long getPositionTypeId() {
		return positionTypeId;
	}

	public void setPositionTypeId(Long positionTypeId) {
		this.positionTypeId = positionTypeId;
	}

	public String getAdvtNumber() {
		return advtNumber;
	}

	public void setAdvtNumber(String advtNumber) {
		this.advtNumber = advtNumber;
	}

	public String getEligibilityCriteria() {
		return eligibilityCriteria;
	}

	public void setEligibilityCriteria(String eligibilityCriteria) {
		this.eligibilityCriteria = eligibilityCriteria;
	}

	public Date getRegStartDate() {
		return regStartDate;
	}

	public void setRegStartDate(Date regStartDate) {
		this.regStartDate = regStartDate;
	}

	public Date getRegEndDate() {
		return regEndDate;
	}

	public void setRegEndDate(Date regEndDate) {
		this.regEndDate = regEndDate;
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

	public String getPositionTypeName() {
		return positionTypeName;
	}

	public void setPositionTypeName(String positionTypeName) {
		this.positionTypeName = positionTypeName;
	}

	public String getApplicationNumber() {
		return applicationNumber;
	}

	public void setApplicationNumber(String applicationNumber) {
		this.applicationNumber = applicationNumber;
	}

}
