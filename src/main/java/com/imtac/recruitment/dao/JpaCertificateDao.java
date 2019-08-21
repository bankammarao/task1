package com.imtac.recruitment.dao;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.entity.Certificate;

public class JpaCertificateDao extends JpaDao<Certificate, Long> implements CertificateDao {

	public JpaCertificateDao() {
		super(Certificate.class);
	}

	@Override
	public List<Certificate> getCertificatesByEmploymentInfoId(Long id) {
		Query query = getEntityManager().createNativeQuery(
				"select certificate_id, certificate_name, certificate_image from certificate where employmentinfo_id="
						+ id);
		List<Object[]> objects = query.getResultList();
		List<Certificate> certificates = new ArrayList<>();

		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		ObjectOutput objectOutput = null;
		try {
			objectOutput = new ObjectOutputStream(bos);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		for (Object[] object : objects) {
			Certificate certificate = new Certificate();
			certificate.setId(Long.parseLong(object[0] + ""));
			certificate.setCertificateName(object[1] + "");
			/*
			 * try { objectOutput.writeObject(object[2]); } catch (IOException
			 * e) { e.printStackTrace(); }
			 * certificate.setCertificateImage(bos.toByteArray());
			 */
			certificates.add(certificate);
		}

		return certificates;
	}

	@Override
	@Transactional
	public void deleteCertificatesByEmploymentInfoId(Long employmentInfoId) {
		getEntityManager().createNativeQuery("delete from certificate where employmentinfo_id=" + employmentInfoId)
				.executeUpdate();
	}

}
