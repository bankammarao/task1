package com.imtac.recruitment.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "demographic_info")
public class DemographicInfo implements com.imtac.recruitment.entity.Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "demographicinfo_id")
	private Long id;

	@Column(name = "category_id")
	private Long categoryId;

	@Column(name = "full_name")
	private String fullName;

	@Column(name = "father_name")
	private String fatherName;

	@Column(name = "mother_name")
	private String motherName;

	@Column(name = "domicile")
	private String domicile;

	@Column(name = "other_domicile_details")
	private String otherDomicileDetails;

	@Column(name = "mobile_number")
	private String mobileNumber;

	@Column(name = "email_id")
	private String emailId;

	@Column(name = "dob")
	@Temporal(TemporalType.DATE)
	private Date dob;

	@Column(name = "gender")
	private String gender;

	@Column(name = "current_age")
	private int currentAge;

	@Column(name = "aadhar_number")
	private String aadharNumber;

	@Column(name = "birth_place")
	private String placeOfBirth;

	@Lob
	@Column(name = "aadhar_image")
	private byte[] aadharImage;

	@Column(name = "nationality")
	private String nationality;

	@Column(name = "marital_status")
	private String maritalStatus;

	@Column(name = "more_living_spouses")
	private String moreLivingSpouses;

	@Column(name = "is_exserviceman")
	private boolean exServiceMan;

	@Lob
	@Column(name = "exService_image")
	private byte[] exServiceImage;

	@Column(name = "demographicinfo_updatedDate")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

	@Column(name = "application_number")
	private String applicationNo;

	@Column(name = "user_id")
	private Long userId;

	@Column(name = "possition_id")
	private Long possitionId;

	@Column(name = "category_asper_haryana")
	private Long categoryAsperHaryana;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getMotherName() {
		return motherName;
	}

	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}

	public String getDomicile() {
		return domicile;
	}

	public void setDomicile(String domicile) {
		this.domicile = domicile;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getCurrentAge() {
		return currentAge;
	}

	public void setCurrentAge(int currentAge) {
		this.currentAge = currentAge;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getPlaceOfBirth() {
		return placeOfBirth;
	}

	public void setPlaceOfBirth(String placeOfBirth) {
		this.placeOfBirth = placeOfBirth;
	}

	public byte[] getAadharImage() {
		return aadharImage;
	}

	public void setAadharImage(byte[] aadharImage) {
		this.aadharImage = aadharImage;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public boolean isExServiceMan() {
		return exServiceMan;
	}

	public void setExServiceMan(boolean exServiceMan) {
		this.exServiceMan = exServiceMan;
	}

	public byte[] getExServiceImage() {
		return exServiceImage;
	}

	public void setExServiceImage(byte[] exServiceImage) {
		this.exServiceImage = exServiceImage;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getApplicationNo() {
		return applicationNo;
	}

	public void setApplicationNo(String applicationNo) {
		this.applicationNo = applicationNo;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getPossitionId() {
		return possitionId;
	}

	public void setPossitionId(Long possitionId) {
		this.possitionId = possitionId;
	}

	public String getOtherDomicileDetails() {
		return otherDomicileDetails;
	}

	public void setOtherDomicileDetails(String otherDomicileDetails) {
		this.otherDomicileDetails = otherDomicileDetails;
	}

	public String getMoreLivingSpouses() {
		return moreLivingSpouses;
	}

	public void setMoreLivingSpouses(String moreLivingSpouses) {
		this.moreLivingSpouses = moreLivingSpouses;
	}

	public Long getCategoryAsperHaryana() {
		return categoryAsperHaryana;
	}

	public void setCategoryAsperHaryana(Long categoryAsperHaryana) {
		this.categoryAsperHaryana = categoryAsperHaryana;
	}

}
