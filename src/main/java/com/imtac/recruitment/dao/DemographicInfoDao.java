package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Address;
import com.imtac.recruitment.entity.DemographicInfo;
import com.imtac.recruitment.entity.DemographicInfoMapper;

public interface DemographicInfoDao extends Dao<DemographicInfo, Long> {
	
	//int deleteById(DemographicInfo demographicInfo);

	 List<Address> getAddressesByDemographicInfoById(Long id);

	List<DemographicInfoMapper> getDemographicInfoByUserId(Long id);

	List<DemographicInfoMapper> getDemographicInfoByApplicationId(String applicationId,String date,Long positionId);

}
