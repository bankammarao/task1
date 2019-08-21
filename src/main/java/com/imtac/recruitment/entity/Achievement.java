package com.imtac.recruitment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Administrator
 *
 */

@Entity
@Table(name = "achievement")
public class Achievement  implements com.imtac.recruitment.entity.Entity{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "achievement_id")
	private Long id;

	@Column(name = "achievement_details")
	private String achievementDetails;

	@Column(name = "employmentinfo_id")
	private Long employmentInfoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAchievementDetails() {
		return achievementDetails;
	}

	public void setAchievementDetails(String achievementDetails) {
		this.achievementDetails = achievementDetails;
	}

	public Long getEmploymentInfoId() {
		return employmentInfoId;
	}

	public void setEmploymentInfoId(Long employmentInfoId) {
		this.employmentInfoId = employmentInfoId;
	}

}
