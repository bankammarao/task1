package com.imtac.recruitment.dao;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.util.CollectionUtils;

import com.imtac.recruitment.entity.GenerateApplicationNumber;
import com.imtac.recruitment.entity.PositionMapper;

public class JpaGenerateApplicationNumberDao extends JpaDao<GenerateApplicationNumber, Long>
		implements GenerateApplicationNumberDao {

	public JpaGenerateApplicationNumberDao() {
		super(GenerateApplicationNumber.class);
	}

	/*
	 * @Override public List<GenerateApplicationNumber>
	 * getLastGeneratedAppNumber(Long posissionId, String year) {
	 * 
	 * Query query = getEntityManager().createNativeQuery(
	 * "select id.last_application_number, year,position_id from  generate_application_number where position_id"
	 * + " =" + posissionId + " and year ='" + year + "'");
	 * 
	 * List<Object[]> resultList = query.getResultList();
	 * GenerateApplicationNumber generateApplicationNumber = new
	 * GenerateApplicationNumber(); List<GenerateApplicationNumber> list = new
	 * ArrayList<GenerateApplicationNumber>(); for (Object[] object :
	 * resultList) { generateApplicationNumber.setId(Long.parseLong(object[0] +
	 * "")); generateApplicationNumber.setApplicationNo(Long.parseLong(object[1]
	 * + "")); generateApplicationNumber.setYear(year);
	 * list.add(generateApplicationNumber); } return list;
	 * 
	 * }
	 */

	@Transactional
	@Override
	public String getLastGeneratedAppNumber(PositionMapper positionMapper, int year) {
		Query query = getEntityManager()
				.createNativeQuery("select * from generate_application where position_id="
						+ positionMapper.getId() + " and year =" + year, GenerateApplicationNumber.class);

		List<GenerateApplicationNumber> applicationNumbers = query.getResultList();
		NumberFormat nf = new DecimalFormat("0000");
		String applicationNumber=""; 
		
		if (CollectionUtils.isEmpty(applicationNumbers)) {
			Query insertQuery = getEntityManager().createNativeQuery(
					"insert into generate_application(position_id,year,last_application_number) values("+ positionMapper.getId()+","+year+",1)");
			insertQuery.executeUpdate();
			applicationNumber=positionMapper.getPositionCode()+"-"+year+"-"+nf.format(1);
			
		} else {
			
			Long incApplicationNum=applicationNumbers.get(0).getApplicationNo() + 1 ;
			
			Query updateQuery = getEntityManager()
					.createNativeQuery("update generate_application set last_application_number="
							+ incApplicationNum+ "  where position_id="
							+ positionMapper.getId() + " and year =" + year);
			updateQuery.executeUpdate();
			applicationNumber=positionMapper.getPositionCode()+"-"+year+"-"+nf.format(incApplicationNum);
		}

		return applicationNumber;
	}
}
