package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Certificate;

public interface CertificateDao extends Dao<Certificate, Long> {

	List<Certificate> getCertificatesByEmploymentInfoId(Long id);

	void deleteCertificatesByEmploymentInfoId(Long employmentInfoId);

}
