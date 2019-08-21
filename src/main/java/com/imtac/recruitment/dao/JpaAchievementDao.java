package com.imtac.recruitment.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.entity.Achievement;

public class JpaAchievementDao extends JpaDao<Achievement, Long> implements AchievementDao {

	public JpaAchievementDao() {
		super(Achievement.class);
	}

	@Override
	public List<Achievement> getAchievementsByEmploymentInfoId(Long id) {
		Query query = getEntityManager().createNativeQuery("select * from achievement where employmentinfo_id=" + id,
				Achievement.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public void deleteAchievementsByEmploymentInfoId(Long employmentInfoId) {
		getEntityManager().createNativeQuery("delete  from achievement where employmentinfo_id=" + employmentInfoId)
				.executeUpdate();
	}

}
