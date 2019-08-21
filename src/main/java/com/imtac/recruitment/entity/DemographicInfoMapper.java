package com.imtac.recruitment.entity;

import java.util.Date;
import java.util.List;

public class DemographicInfoMapper {

	private Long id;

	private String applicationNo;

	private Long userId;

	private Long possitionId;

	private Long categoryId;

	private String fullName;

	private String fatherName;

	private String motherName;

	private String domicile;

	private String otherDomicileDetails;

	private List<Address> addresses;

	private String mobileNumber;

	private String emailId;

	private Date dob;

	private String gender;

	private int currentAge;

	private String aadharNumber;

	private String placeOfBirth;

	private String nationality;

	private String maritalStatus;

	private String moreLivingSpouses;

	private boolean exServiceMan;

	private Date updatedDate;

	private byte[] aadharImage;

	private byte[] exServiceImage;

	private String possitionAppliedFor;

	private String possitionCode;

	private Date regEndDate;

	private String categoryName;

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

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
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

	public String getMoreLivingSpouses() {
		return moreLivingSpouses;
	}

	public void setMoreLivingSpouses(String moreLivingSpouses) {
		this.moreLivingSpouses = moreLivingSpouses;
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

	public boolean isExServiceMan() {
		return exServiceMan;
	}

	public void setExServiceMan(boolean exServiceMan) {
		this.exServiceMan = exServiceMan;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public byte[] getAadharImage() {
		return aadharImage;
	}

	public void setAadharImage(byte[] aadharImage) {
		this.aadharImage = aadharImage;
	}

	public byte[] getExServiceImage() {
		return exServiceImage;
	}

	public void setExServiceImage(byte[] exServiceImage) {
		this.exServiceImage = exServiceImage;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getApplicationNo() {
		return applicationNo;
	}

	public void setApplicationNo(String applicationNo) {
		this.applicationNo = applicationNo;
	}

	public Long getPossitionId() {
		return possitionId;
	}

	public void setPossitionId(Long possitionId) {
		this.possitionId = possitionId;
	}

	public String getPossitionAppliedFor() {
		return possitionAppliedFor;
	}

	public void setPossitionAppliedFor(String possitionAppliedFor) {
		this.possitionAppliedFor = possitionAppliedFor;
	}

	public String getPossitionCode() {
		return possitionCode;
	}

	public void setPossitionCode(String possitionCode) {
		this.possitionCode = possitionCode;
	}

	public Date getRegEndDate() {
		return regEndDate;
	}

	public void setRegEndDate(Date regEndDate) {
		this.regEndDate = regEndDate;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getOtherDomicileDetails() {
		return otherDomicileDetails;
	}

	public void setOtherDomicileDetails(String otherDomicileDetails) {
		this.otherDomicileDetails = otherDomicileDetails;
	}

	public Long getCategoryAsperHaryana() {
		return categoryAsperHaryana;
	}

	public void setCategoryAsperHaryana(Long categoryAsperHaryana) {
		this.categoryAsperHaryana = categoryAsperHaryana;
	}

}
