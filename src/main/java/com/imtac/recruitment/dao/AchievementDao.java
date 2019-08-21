package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Achievement;

public interface AchievementDao extends Dao<Achievement, Long> {

	List<Achievement> getAchievementsByEmploymentInfoId(Long id);

	void deleteAchievementsByEmploymentInfoId(Long employmentInfoId);

}
