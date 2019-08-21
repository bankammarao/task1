package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.Fee;
import com.imtac.recruitment.entity.FeeMapper;
import com.imtac.recruitment.entity.PositionMapper;


public interface FeeService {
	
	Fee createFeeDetails(Fee feeDeatils);
	
	Fee updateFeeDetails(Fee feeDetails);
	
	int deleteFeeDetailsById(Fee feeDetails);
	
	Fee getFeeDetailsById(Long feeDeatilsId);
	
	public List<FeeMapper> getAllFeeDetails();

}
