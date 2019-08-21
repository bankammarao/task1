package com.imtac.recruitment.dao;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.imtac.recruitment.entity.EducationalQualifications;
import com.imtac.recruitment.response.Response;

@Repository
public class JpaEducationalQualificationsDao extends JpaDao<EducationalQualifications, Long>
		implements EducationalQualificationsInfoDao {

	public JpaEducationalQualificationsDao() {
		super(EducationalQualifications.class);
	}

	@Override
	public ArrayList<EducationalQualifications> getEducationalQualificationInfo(Long userId) {
		Response response = new Response();
		Query query = this.getEntityManager().createNativeQuery(
				"SELECT id,board,classofdivision,distinction,maxmarks,obtinedmarks,percentage,qualification,subjects,yearpassing FROM educational_qualifications WHERE user_id = "
						+ userId);
		List<Object[]> results = query.getResultList();
		ArrayList<EducationalQualifications> eduDetailssList = new ArrayList<>();

		try {
			if (results.isEmpty()) {
				response.setResponseMessage("No eduDetailss Found");
				response.setStatusCode(HttpStatus.NO_CONTENT.value());
			} else {
				for (Object[] a : results) {
					EducationalQualifications eq = new EducationalQualifications();
					eq.setId(Long.valueOf(a[0] + ""));
					eq.setBoard((String) a[1]);
					eq.setClassOfDivision((String) a[2]);
					eq.setDistinction((String) a[3]);
					eq.setMaxMarks((Integer) a[4]);
					eq.setObtinedMarks((Integer) a[5]);
					eq.setPercentage((String) a[6]);
					eq.setQualification((String) a[7]);
					eq.setSubjects((String) a[8]);
					eq.setYearPassing((Integer) a[9]);

					eduDetailssList.add(eq);
				}

				response.setResponseMessage("Educational Details List Retrieved");
				response.setStatusCode(HttpStatus.OK.value());
				response.setResponseDataList(eduDetailssList);
			}

		} catch (Exception e) {
			response.setResponseMessage("Error Occured while Retrieving Educational Qualifications Details List");
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			e.printStackTrace();
		}
		return eduDetailssList;
	}

	@Override
	public List<EducationalQualifications> getEducationalQualificationsByEmploymentInfoId(Long employmentInfoId) {

		Query query = this.getEntityManager().createNativeQuery(
				"SELECT id,board,classofdivision,distinction,maxmarks,obtinedmarks,percentage,qualification,subjects,yearpassing,certificate FROM educational_qualifications WHERE employmentInfoId = "
						+ employmentInfoId);

		List<Object[]> results = query.getResultList();
		List<EducationalQualifications> eduDetailssList = new ArrayList<>();

		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		ObjectOutput objectOutput = null;
		try {
			objectOutput = new ObjectOutputStream(bos);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		for (Object[] a : results) {
			EducationalQualifications eq = new EducationalQualifications();
			eq.setId(Long.valueOf(a[0] + ""));
			eq.setBoard((String) a[1]);
			eq.setClassOfDivision((String) a[2]);
			eq.setDistinction((String) a[3]);
			eq.setMaxMarks((Integer) a[4]);
			eq.setObtinedMarks((Integer) a[5]);
			eq.setPercentage((String) a[6]);
			eq.setQualification((String) a[7]);
			eq.setSubjects((String) a[8]);
			eq.setYearPassing((Integer) a[9]);
			/*
			 * try { objectOutput.writeObject(a[10]); } catch (IOException e) {
			 * // TODO Auto-generated catch block e.printStackTrace(); }
			 * eq.setCertificate(bos.toByteArray());
			 */
			eduDetailssList.add(eq);
		}
		return eduDetailssList;

	}

	@Override
	@Transactional
	public void deleteQualificationsByEmploymentInfoId(Long employmentInfoId) {
		getEntityManager()
				.createNativeQuery("delete from educational_qualifications where employmentInfoId=" + employmentInfoId)
				.executeUpdate();
	}
}
