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
@Table(name = "category")
public class Category implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "category_id")
	private Long id;

	@Column(name = "category_name")
	private String categoryName;

	@Column(name = "category_updatedBy")
	private Long lastUpdatedBy;

	@Column(name = "category_status")
	private String status;

	@Column(name = "category_updatedDate")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
