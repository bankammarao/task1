package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;

import org.springframework.util.StringUtils;

import com.imtac.recruitment.entity.Address;
import com.imtac.recruitment.entity.DemographicInfo;
import com.imtac.recruitment.entity.DemographicInfoMapper;

public class JpaDemographicInfoDao extends JpaDao<DemographicInfo, Long> implements DemographicInfoDao {

	public JpaDemographicInfoDao() {
		super(DemographicInfo.class);
	}

	/*
	 * @Override public int deleteById(DemographicInfo demographicInfo) { Query
	 * query = getEntityManager().
	 * createNativeQuery("update demographic_info set status='" +
	 * demographicInfo.getStatus() + "' where id=" + demographicInfo.getId());
	 * return query.executeUpdate(); }
	 */
	@Override
	public List<Address> getAddressesByDemographicInfoById(Long id) {
		Query query = getEntityManager().createNativeQuery("select * from address where demographicinfo_id=" + id,
				Address.class);
		return query.getResultList();
	}

	@Override
	public List<DemographicInfoMapper> getDemographicInfoByUserId(Long id) {
		Query query = getEntityManager()
				.createNativeQuery("SELECT demographicinfo_id,  aadhar_number, dob, email_id, mobile_number, "
						+ "  application_number,user_id,position_code, position_name, "
						+ " position_regenddate FROM demographic_info info,position pos where info.possition_id=pos.position_id and user_id="
						+ id);

		List<Object[]> resultList = query.getResultList();
		List<DemographicInfoMapper> feeMappers = new ArrayList<DemographicInfoMapper>();

		for (Object[] object : resultList) {
			DemographicInfoMapper mapper = new DemographicInfoMapper();
			mapper.setId(Long.parseLong(object[0] + ""));
			mapper.setAadharNumber(object[1] + "");
			mapper.setDob((Date) object[2]);
			mapper.setEmailId(object[3] + "");
			mapper.setMobileNumber(object[4] + "");
			mapper.setApplicationNo(object[5] + "");
			mapper.setUserId(Long.parseLong(object[6] + ""));
			mapper.setPossitionCode(object[7] + "");
			mapper.setPossitionAppliedFor(object[8] + "");
			mapper.setRegEndDate((Date) object[9]);
			feeMappers.add(mapper);
		}
		return feeMappers;

	}

	@Override
	public List<DemographicInfoMapper> getDemographicInfoByApplicationId(String applicationId, String date,
			Long positionId) {

		String queryString = "SELECT demographicinfo_id,  aadhar_number, dob, email_id, mobile_number, "
				+ " application_number,user_id,position_code, position_name, "
				+ " position_regenddate,category_name,marital_status,more_living_spouses,category_asper_haryana,"
				+ " current_age,domicile, is_exserviceman, father_name, full_name, gender, mother_name,"
				+ " nationality, other_domicile_details, birth_place,demographicinfo_updateddate,info.category_id,info.possition_id "
				+ " FROM demographic_info info,position pos,category cat where info.possition_id=pos.position_id and info.category_id=cat.category_id ";
		if (null != applicationId) {
			queryString = queryString + " and application_number='" + applicationId + "'";
		}
		if (!StringUtils.isEmpty(date)) {
			queryString = queryString + " and demographicinfo_updateddate='" + date + "'";
		}
		if (null != positionId) {
			queryString = queryString + " and possition_id=" + positionId;
		}

		Query query = getEntityManager().createNativeQuery(queryString);

		List<Object[]> resultList = query.getResultList();

		List<DemographicInfoMapper> demographicInfoMappers = new ArrayList<DemographicInfoMapper>();

		/*
		 * aadhar_image category_asper_haryana, current_age, domicile,
		 * exservice_image, is_exserviceman, father_name, full_name, gender,
		 * mother_name, nationality, other_domicile_details, birth_place,
		 * demographicinfo_updateddate, user_id
		 */
		for (Object[] object : resultList) {
			DemographicInfoMapper mapper = new DemographicInfoMapper();
			mapper.setId(Long.parseLong(object[0] + ""));
			mapper.setAadharNumber(object[1] + "");
			mapper.setDob((Date) object[2]);
			mapper.setEmailId(object[3] + "");
			mapper.setMobileNumber(object[4] + "");
			mapper.setApplicationNo(object[5] + "");
			mapper.setUserId(Long.parseLong(object[6] + ""));
			mapper.setPossitionCode(object[7] + "");
			mapper.setPossitionAppliedFor(object[8] + "");
			mapper.setRegEndDate((Date) object[9]);
			mapper.setCategoryName(object[10] + "");
			mapper.setMaritalStatus(object[11] + "");
			mapper.setMoreLivingSpouses(object[12] + "");
			mapper.setCategoryAsperHaryana(Long.parseLong(object[13] + ""));
			mapper.setCurrentAge(Integer.parseInt(object[14] + ""));
			mapper.setDomicile(object[15] + "");
			mapper.setExServiceMan(Boolean.parseBoolean(object[16] + ""));
			mapper.setFatherName(object[17] + "");
			mapper.setFullName(object[18] + "");
			mapper.setGender(object[19] + "");
			mapper.setMotherName(object[20] + "");
			mapper.setNationality(object[21] + "");
			mapper.setOtherDomicileDetails(object[22] + "");
			mapper.setPlaceOfBirth(object[23] + "");
			mapper.setUpdatedDate((Date) object[24]);
			mapper.setCategoryId(Long.parseLong(object[25] + ""));
			mapper.setPossitionId(Long.parseLong(object[26] + ""));

			demographicInfoMappers.add(mapper);
		}
		return demographicInfoMappers;
	}

}
