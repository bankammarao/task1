package com.imtac.recruitment.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="educational_qualifications")
public class EducationalQualifications implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String qualification;
	private String subjects;
	private String board;
	private Integer yearPassing;
	private String classOfDivision;
	private Integer maxMarks;
	private Integer obtinedMarks;
	private String percentage;
	private String distinction;
	@Lob
	private byte[] certificate;
	private Date createdDate;
	private Date modifiedDate;
	private Long createdBy;
	private Long modifiedBy;
	private Long employmentInfoId;

	private Long userId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getSubjects() {
		return subjects;
	}

	public void setSubjects(String subjects) {
		this.subjects = subjects;
	}

	public String getBoard() {
		return board;
	}

	public void setBoard(String board) {
		this.board = board;
	}

	public Integer getYearPassing() {
		return yearPassing;
	}

	public void setYearPassing(Integer yearPassing) {
		this.yearPassing = yearPassing;
	}

	public String getClassOfDivision() {
		return classOfDivision;
	}

	public void setClassOfDivision(String classOfDivision) {
		this.classOfDivision = classOfDivision;
	}

	public Integer getMaxMarks() {
		return maxMarks;
	}

	public void setMaxMarks(Integer maxMarks) {
		this.maxMarks = maxMarks;
	}

	public Integer getObtinedMarks() {
		return obtinedMarks;
	}

	public void setObtinedMarks(Integer obtinedMarks) {
		this.obtinedMarks = obtinedMarks;
	}

	public String getPercentage() {
		return percentage;
	}

	public void setPercentage(String percentage) {
		this.percentage = percentage;
	}

	public String getDistinction() {
		return distinction;
	}

	public void setDistinction(String distinction) {
		this.distinction = distinction;
	}

	public byte[] getCertificate() {
		return certificate;
	}

	public void setCertificate(byte[] certificate) {
		this.certificate = certificate;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	public Long getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(Long modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public Long getEmploymentInfoId() {
		return employmentInfoId;
	}

	public void setEmploymentInfoId(Long employmentInfoId) {
		this.employmentInfoId = employmentInfoId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

}
