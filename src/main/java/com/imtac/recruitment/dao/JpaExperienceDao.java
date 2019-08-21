package com.imtac.recruitment.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.entity.Experience;

public class JpaExperienceDao extends JpaDao<Experience, Long> implements ExperienceDao {

	public JpaExperienceDao() {
		super(Experience.class);
	}

	@Override
	public List<Experience> getExperienceDetailsByEmploymentInfoId(Long id) {
		Query query = getEntityManager().createNativeQuery("select * from experience where employmentinfo_id=" + id,
				Experience.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public void deleteExperienceDetailsByEmploymentInfoId(Long employmentInfoId) {
		getEntityManager().createNativeQuery("delete from experience where employmentinfo_id=" + employmentInfoId)
				.executeUpdate();
	}

}
