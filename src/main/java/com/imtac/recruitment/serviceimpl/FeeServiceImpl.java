package com.imtac.recruitment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.FeeDao;
import com.imtac.recruitment.entity.Fee;
import com.imtac.recruitment.entity.FeeMapper;
import com.imtac.recruitment.service.FeeService;

public class FeeServiceImpl implements FeeService{

	@Autowired
	private FeeDao feeDao;
	
	@Override
	public Fee createFeeDetails(Fee feeDeatils) {
		return feeDao.save(feeDeatils);
	}
	
	@Override
	public Fee updateFeeDetails(Fee feeDetails) {
		/* return feeDao.updateFeeDetailsById(feeDetails); */
		return feeDao.save(feeDetails);
	}

	@Override
	public int deleteFeeDetailsById(Fee feeDetails) {
		return feeDao.deleteFeeDetailsById(feeDetails);
	}

	@Override
	public Fee getFeeDetailsById(Long feeDeatilsId) {		
		return feeDao.find(feeDeatilsId);
	}

	@Override
	public List<FeeMapper> getAllFeeDetails() {		
		return feeDao.getAllFeeDetails();
	}
	
	
}
