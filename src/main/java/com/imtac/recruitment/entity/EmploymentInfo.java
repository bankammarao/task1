package com.imtac.recruitment.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@javax.persistence.Entity
@Table(name = "employment_info")
public class EmploymentInfo implements Entity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "employmnetinfo_id")
	private Long id;

	@Column(name = "is_present_employment")
	private boolean isPresentEmployment;

	@Column(name = "name_of_employer")
	private String nameOfEmployer;

	@Column(name = "designationtype_id")
	private Long designationTypeId;

	@Column(name = "employmenttype_id")
	private Long employmentTypeId;

	@Column(name = "pay")
	private Double pay;

	@Column(name = "dateof_next_increment")
	@Temporal(TemporalType.DATE)
	private Date dateOfNextIncrement;

	@Column(name = "permissionfrom_presentemployer")
	private boolean permissionFromPresentEmployer;

	@Column(name = "basic_pay_acceptable")
	private Double basicPayAcceptable;

	@Column(name = "notice_period")
	private int noticePeriod;

	@Column(name = "is_disqualified_exam")
	private boolean disqualifiedInExam;

	@Column(name = "is_dismissed")
	private boolean dismissed;

	@Column(name = "is_criminalcase_registered")
	private boolean criminalCaseRegistered;

	@Column(name = "is_charge_sheeted")
	private boolean chargeSheeted;

	@Column(name = "charge_sheet_details")
	private String chargeSheetDetails;

	@Column(name = "is_convictedby_court")
	private boolean convictedByCourt;

	@Column(name = "convicted_courtdetails")
	private String convictedByCourtDetails;

	@Column(name = "updated_date")
	@Temporal(TemporalType.DATE)
	private Date updatedDate;

	@Column(name = "application_number")
	private String applicationNo;

	@Column(name = "additional_info")
	private String additionalInfo;

	@Lob
	@Column(name = "photo_image")
	private byte[] photoImage;

	@Lob
	@Column(name = "signature_image")
	private byte[] signatureImage;

	@Column(name = "user_id")
	private Long userId;

	@Column(name = "city")
	private String city;

	@Column(name = "date")
	@Temporal(TemporalType.DATE)
	private Date date;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isPresentEmployment() {
		return isPresentEmployment;
	}

	public void setPresentEmployment(boolean isPresentEmployment) {
		this.isPresentEmployment = isPresentEmployment;
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

	public Double getBasicPayAcceptable() {
		return basicPayAcceptable;
	}

	public void setBasicPayAcceptable(Double basicPayAcceptable) {
		this.basicPayAcceptable = basicPayAcceptable;
	}

	public int getNoticePeriod() {
		return noticePeriod;
	}

	public void setNoticePeriod(int noticePeriod) {
		this.noticePeriod = noticePeriod;
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

	public String getConvictedByCourtDetails() {
		return convictedByCourtDetails;
	}

	public void setConvictedByCourtDetails(String convictedByCourtDetails) {
		this.convictedByCourtDetails = convictedByCourtDetails;
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
