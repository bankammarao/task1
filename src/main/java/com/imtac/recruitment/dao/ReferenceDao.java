package com.imtac.recruitment.dao;

import com.imtac.recruitment.entity.Reference;

public interface ReferenceDao extends Dao<Reference, Long> {

	void deleteReferencesByEmploymentInfoId(Long employmentInfoId);

}
