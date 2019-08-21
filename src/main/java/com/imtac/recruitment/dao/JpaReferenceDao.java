package com.imtac.recruitment.dao;

import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.entity.Reference;

public class JpaReferenceDao extends JpaDao<Reference, Long> implements ReferenceDao {

	public JpaReferenceDao() {
		super(Reference.class);
	}

	@Override
	@Transactional
	public void deleteReferencesByEmploymentInfoId(Long employmentInfoId) {
		getEntityManager().createNativeQuery("delete from reference where employmnetinfo_id=" + employmentInfoId)
				.executeUpdate();
	}

}
