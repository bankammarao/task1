package com.imtac.recruitment.service;

import java.util.List;
import java.util.Map;

import com.imtac.recruitment.entity.Address;
import com.imtac.recruitment.entity.DemographicInfo;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.entity.DemographicInfoMapper;

public interface DemographicInfoService {

	DemographicInfo saveDemographicInfo(DemographicInfo demographicInfo);

	DemographicInfo getDemographicInfoById(Long id);

	// void deleteDemographicInfoById(DemographicInfo demographicInfo);

	DemographicInfo updateDemographicInfo(DemographicInfo demographicInfo);

	void saveAddresses(List<Address> addresses, Long demographicId);

	List<Address> getAddressesByDemographicInfoById(Long id);

	public List<DemographicInfoMapper> getDemographicInfoByUserId(Long id);

	List<DemographicInfoMapper> getDemographicInfoByApplicationId(String applicationId);

	Response generateAndAndDownPdfFile(String applicationId);

	Map<String, Object> getApplicationInfoByApplicationId(String applicationId);

	List<DemographicInfoMapper> getDemographicInfoByApplicationId(String applicationId, String date, Long positionId);

}
