package com.imtac.recruitment.dao;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.imtac.recruitment.entity.EmploymentInfo;
import com.imtac.recruitment.entity.Reference;

@Transactional
public class JpaEmploymentInfoDao extends JpaDao<EmploymentInfo, Long> implements EmploymentInfoDao {

	public JpaEmploymentInfoDao() {
		super(EmploymentInfo.class);
	}

	@Override
	public List<Reference> getReferencesByEmploymentInfoById(Long id) {
		Query query = getEntityManager().createNativeQuery("select * from reference where employmnetinfo_id=" + id,
				Reference.class);
		return query.getResultList();
	}

	@Override
	public List<EmploymentInfo> getEmploymentInfoByApplicationId(String applicationId) {

		String queryString = "select employmnetinfo_id, additional_info, application_number, basic_pay_acceptable,charge_sheet_details, is_charge_sheeted, city, "
				+ "is_convictedby_court,convicted_courtdetails, is_criminalcase_registered, date, dateof_next_increment,designationtype_id, is_dismissed, is_disqualified_exam, "
				+ "employmenttype_id,is_present_employment, name_of_employer, notice_period, pay,permissionfrom_presentemployer, photo_image from employment_info";
		if (null != applicationId) {
			queryString = queryString + "  where application_number='" + applicationId + "'";
		}
		Query query = getEntityManager().createNativeQuery(queryString);
		List<Object[]> resultList = query.getResultList();

		List<EmploymentInfo> employmentInfoList = new ArrayList<>();

		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		ObjectOutput objectOutput = null;
		try {
			objectOutput = new ObjectOutputStream(bos);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		for (Object[] object : resultList) {
			EmploymentInfo employmentInfo = new EmploymentInfo();
			employmentInfo.setId(Long.parseLong(object[0] + ""));
			employmentInfo.setAdditionalInfo(object[1] + "");
			employmentInfo.setApplicationNo(object[2] + "");
			employmentInfo.setBasicPayAcceptable((Double) object[3]);
			employmentInfo.setChargeSheetDetails(object[4] + "");
			employmentInfo.setChargeSheeted(Boolean.parseBoolean(object[5] + ""));
			employmentInfo.setCity(object[6] + "");
			employmentInfo.setConvictedByCourt(Boolean.parseBoolean(object[7] + ""));
			employmentInfo.setConvictedByCourtDetails(object[8] + "");
			employmentInfo.setCriminalCaseRegistered(Boolean.parseBoolean(object[9] + ""));
			employmentInfo.setDate((Date) object[10]);
			employmentInfo.setDateOfNextIncrement((Date) object[11]);
			employmentInfo.setDesignationTypeId(Long.parseLong(object[12] + ""));
			employmentInfo.setDismissed(Boolean.parseBoolean(object[13] + ""));
			employmentInfo.setDisqualifiedInExam(Boolean.parseBoolean(object[14] + ""));
			employmentInfo.setEmploymentTypeId(Long.parseLong(object[15] + ""));
			employmentInfo.setPresentEmployment(Boolean.parseBoolean(object[16] + ""));
			employmentInfo.setNameOfEmployer(object[17] + "");
			employmentInfo.setNoticePeriod(Integer.parseInt(object[18] + ""));
			employmentInfo.setPay(Double.parseDouble(object[19] + ""));
			employmentInfo.setPermissionFromPresentEmployer(Boolean.parseBoolean(object[20] + ""));
			try {
				objectOutput.writeObject(object[21]);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			employmentInfo.setPhotoImage(find(employmentInfo.getId()).getPhotoImage());
			employmentInfo.setPhotoImage(find(employmentInfo.getId()).getSignatureImage());
			employmentInfoList.add(employmentInfo);
		}
		return employmentInfoList;
	}

}
