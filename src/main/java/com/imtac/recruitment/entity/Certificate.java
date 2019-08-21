package com.imtac.recruitment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "certificate")
public class Certificate implements com.imtac.recruitment.entity.Entity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "certificate_id")
	private Long id;

	@Column(name = "certificate_name")
	private String certificateName;

	@Lob
	@Column(name = "certificate_image")
	private byte[] certificateImage;

	@Column(name = "employmentinfo_id")
	private Long employmentInfoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCertificateName() {
		return certificateName;
	}

	public void setCertificateName(String certificateName) {
		this.certificateName = certificateName;
	}

	public byte[] getCertificateImage() {
		return certificateImage;
	}

	public void setCertificateImage(byte[] certificateImage) {
		this.certificateImage = certificateImage;
	}

	public Long getEmploymentInfoId() {
		return employmentInfoId;
	}

	public void setEmploymentInfoId(Long employmentInfoId) {
		this.employmentInfoId = employmentInfoId;
	}

}
