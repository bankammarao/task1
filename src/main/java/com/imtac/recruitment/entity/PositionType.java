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
@Table(name = "position_type")
public class PositionType implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "positiontype_id")
	private Long id;

	@Column(name = "positiontype_name")
	private String positionTypeName;

	@Column(name = "positiontype_status")
	private String status;

	@Column(name = "positiontype_updatedBy")
	private Long lastUpdatedBy;

	@Column(name = "positiontype_updatedDate")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPositionTypeName() {
		return positionTypeName;
	}

	public void setPositionTypeName(String positionTypeName) {
		this.positionTypeName = positionTypeName;
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
