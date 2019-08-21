package com.imtac.recruitment.entity;

import javax.persistence.Lob;

import org.hibernate.annotations.Type;

public class EducationalQualificationsMapper {

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
	@Type(type = "org.hibernate.type.BlobType")
	private byte[] certificate;

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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
