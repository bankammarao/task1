package com.imtac.recruitment.entity;

import java.util.Date;

public class FeeMapper {

	private Long id;


	private String gender;

	private Long feeAmount;

	private String feeStatus;

	private Long lastUpdatedBy;

	private Date updatedDate;

	private Long positionTypeId;

	private Long categoryId;
	
	

	public String getPositionType() {
		return positionType;
	}

	private String positionType;

	private String catogry;

	public Long getPositionTypeId() {
		return positionTypeId;
	}

	public void setPositionTypeId(Long positionTypeId) {
		this.positionTypeId = positionTypeId;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCatogry() {
		return catogry;
	}

	public void setCatogry(String catogry) {
		this.catogry = catogry;
	}

	public void setPositionType(String positionType) {
		this.positionType = positionType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFeeStatus() {
		return feeStatus;
	}

	public void setFeeStatus(String feeStatus) {
		this.feeStatus = feeStatus;
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

	public Long getFeeAmount() {
		return feeAmount;
	}

	public void setFeeAmount(Long feeAmount) {
		this.feeAmount = feeAmount;
	}

}
