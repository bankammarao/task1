package com.imtac.recruitment.entity;

import java.util.Date;
import java.util.List;

public class EmploymentInfoMapper {

	private Long id;

	private boolean presentEmployment;

	private String nameOfEmployer;

	private Long designationTypeId;

	private Long employmentTypeId;

	private Double pay;

	private Date dateOfNextIncrement;

	private boolean permissionFromPresentEmployer;

	private Double basicPayAcceptable;

	private int noticePeriod;

	private boolean disqualifiedInExam;

	private boolean dismissed;

	private boolean criminalCaseRegistered;

	private boolean chargeSheeted;

	private String chargeSheetDetails;

	private boolean convictedByCourt;

	private String convictedByCourtDetails;

	private List<Reference> references;

	private QualificationsArrayMapper qualificationsArrayMapper;

	private List<ExperienceMapper> experiencedetails;

	private List<Achievement> achievements;

	private List<Certificate> certificates;

	private String applicationNo;

	private String additionalInfo;

	private byte[] photoImage;

	private byte[] signatureImage;

	private String prizesAndMedals;

	private Long userId;

	private String city;

	private Date date;

	public boolean isPresentEmployment() {
		return presentEmployment;
	}

	public void setPresentEmployment(boolean presentEmployment) {
		this.presentEmployment = presentEmployment;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameOfEmployer() {
		return nameOfEmployer;
	}

	public void setNameOfEmployer(String nameOfEmployer) {
		this.nameOfEmployer = nameOfEmployer;
	}

	public Long getDesignationTypeId() {
		return designationTypeId;
	}

	public void setDesignationTypeId(Long designationTypeId) {
		this.designationTypeId = designationTypeId;
	}

	public Long getEmploymentTypeId() {
		return employmentTypeId;
	}

	public void setEmploymentTypeId(Long employmentTypeId) {
		this.employmentTypeId = employmentTypeId;
	}

	public Double getPay() {
		return pay;
	}

	public void setPay(Double pay) {
		this.pay = pay;
	}

	public Date getDateOfNextIncrement() {
		return dateOfNextIncrement;
	}

	public void setDateOfNextIncrement(Date dateOfNextIncrement) {
		this.dateOfNextIncrement = dateOfNextIncrement;
	}

	public boolean isPermissionFromPresentEmployer() {
		return permissionFromPresentEmployer;
	}

	public void setPermissionFromPresentEmployer(boolean permissionFromPresentEmployer) {
		this.permissionFromPresentEmployer = permissionFromPresentEmployer;
	}

	public int getNoticePeriod() {
		return noticePeriod;
	}

	public void setNoticePeriod(int noticePeriod) {
		this.noticePeriod = noticePeriod;
	}

	public String getConvictedByCourtDetails() {
		return convictedByCourtDetails;
	}

	public void setConvictedByCourtDetails(String convictedByCourtDetails) {
		this.convictedByCourtDetails = convictedByCourtDetails;
	}

	public Double getBasicPayAcceptable() {
		return basicPayAcceptable;
	}

	public void setBasicPayAcceptable(Double basicPayAcceptable) {
		this.basicPayAcceptable = basicPayAcceptable;
	}

	public List<Reference> getReferences() {
		return references;
	}

	public void setReferences(List<Reference> references) {
		this.references = references;
	}

	public QualificationsArrayMapper getQualificationsArrayMapper() {
		return qualificationsArrayMapper;
	}

	public void setQualificationsArrayMapper(QualificationsArrayMapper qualificationsArrayMapper) {
		this.qualificationsArrayMapper = qualificationsArrayMapper;
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

	public boolean isDisqualifiedInExam() {
		return disqualifiedInExam;
	}

	public void setDisqualifiedInExam(boolean disqualifiedInExam) {
		this.disqualifiedInExam = disqualifiedInExam;
	}

	public boolean isDismissed() {
		return dismissed;
	}

	public void setDismissed(boolean dismissed) {
		this.dismissed = dismissed;
	}

	public boolean isCriminalCaseRegistered() {
		return criminalCaseRegistered;
	}

	public void setCriminalCaseRegistered(boolean criminalCaseRegistered) {
		this.criminalCaseRegistered = criminalCaseRegistered;
	}

	public boolean isConvictedByCourt() {
		return convictedByCourt;
	}

	public void setConvictedByCourt(boolean convictedByCourt) {
		this.convictedByCourt = convictedByCourt;
	}

	public boolean isChargeSheeted() {
		return chargeSheeted;
	}

	public void setChargeSheeted(boolean chargeSheeted) {
		this.chargeSheeted = chargeSheeted;
	}

	public String getChargeSheetDetails() {
		return chargeSheetDetails;
	}

	public void setChargeSheetDetails(String chargeSheetDetails) {
		this.chargeSheetDetails = chargeSheetDetails;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public byte[] getPhotoImage() {
		return photoImage;
	}

	public void setPhotoImage(byte[] photoImage) {
		this.photoImage = photoImage;
	}

	public byte[] getSignatureImage() {
		return signatureImage;
	}

	public void setSignatureImage(byte[] signatureImage) {
		this.signatureImage = signatureImage;
	}

	public String getPrizesAndMedals() {
		return prizesAndMedals;
	}

	public void setPrizesAndMedals(String prizesAndMedals) {
		this.prizesAndMedals = prizesAndMedals;
	}

	public List<ExperienceMapper> getExperiencedetails() {
		return experiencedetails;
	}

	public void setExperiencedetails(List<ExperienceMapper> experiencedetails) {
		this.experiencedetails = experiencedetails;
	}

	public List<Achievement> getAchievements() {
		return achievements;
	}

	public void setAchievements(List<Achievement> achievements) {
		this.achievements = achievements;
	}

	public List<Certificate> getCertificates() {
		return certificates;
	}

	public void setCertificates(List<Certificate> certificates) {
		this.certificates = certificates;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
