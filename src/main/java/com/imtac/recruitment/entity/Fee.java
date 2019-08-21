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
@Table(name = "fee")
public class Fee implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue 
	@Column(name = "fee_id")
	private Long id;

	@Column(name = "position_type_id")
	private Long  positionTypeId;

	@Column(name = "category_id")
	private Long categoryId;

	@Column(name = "gender")
	private String gender;
	
	@Column(name = "fee")
	private Long feeAmount;
	
	@Column(name = "fee_status")
	private String feeStatus;

	@Column(name = "feeDetails_updatedBy")
	private Long lastUpdatedBy;

	@Column(name = "feeDetails_updatedDate")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	

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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
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

	public Long getFeeAmount() {
		return feeAmount;
	}

	public void setFeeAmount(Long feeAmount) {
		this.feeAmount = feeAmount;
	}
	
	

}
