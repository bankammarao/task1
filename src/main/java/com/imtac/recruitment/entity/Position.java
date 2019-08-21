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
@Table(name = "position")
public class Position implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "position_id")
	private Long id;

	@Column(name = "position_name")
	private String positionName;

	@Column(name = "position_code")
	private String positionCode;

	@Column(name = "position_typeid")
	private Long positionTypeId;

	@Column(name = "position_advtno")
	private String advtNumber;

	@Column(name = "position_eligcriteria")
	private String eligibilityCriteria;

	@Column(name = "position_regStartDate")
	@Temporal(TemporalType.DATE)
	private Date regStartDate;

	@Column(name = "position_regEndDate")
	@Temporal(TemporalType.DATE)
	private Date regEndDate;

	@Column(name = "position_status")
	private String status;

	@Column(name = "position_updatedBy")
	private Long lastUpdatedBy;

	@Column(name = "position_updatedDate")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

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

}
