package com.imtac.recruitment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="address")
public class Address implements com.imtac.recruitment.entity.Entity{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "address_id")
	private Long id;

	@Column(name = "street_address")
	private String streetAddress;

	@Column(name = "addess_line2")
	private String addressLine2;

	@Column(name = "city")
	private String city;

	@Column(name = "state")
	private String state;

	@Column(name = "zipcode")
	private String zipCode;

	@Column(name = "address_type")
	private String addressType;

	@Column(name = "demographicinfo_id")
	private Long demographIcinfoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getAddressType() {
		return addressType;
	}

	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}

	public Long getDemographIcinfoId() {
		return demographIcinfoId;
	}

	public void setDemographIcinfoId(Long demographIcinfoId) {
		this.demographIcinfoId = demographIcinfoId;
	}

}
