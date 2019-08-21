package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.imtac.recruitment.entity.EmploymentType;
import com.imtac.recruitment.entity.EmploymentTypeMapper;

public class JpaEmploymentTypeDao extends JpaDao<EmploymentType, Long> implements EmploymentTypeDao {

	public JpaEmploymentTypeDao() {
		super(EmploymentType.class);
	}

	@Transactional
	@Override
	public int deleteById(EmploymentType employmentType) {
		Query query = getEntityManager().createNativeQuery("update employment_type set employment_status='"
				+ employmentType.getStatus() + "' where employment_id=" + employmentType.getId());
		return query.executeUpdate();
	}

	@Override
	public List<EmploymentTypeMapper> getAllEmploymentTypes() {
		Query query = getEntityManager().createNativeQuery(
				"select et.employment_id,et.employment_updatedBy,et.employment_name,et.employment_status,et.employment_updatedDate,u.username from employment_type et,users u where et.employment_updatedBy=u.id order by et.employment_id desc");

		List<Object[]> resultList = query.getResultList();
		List<EmploymentTypeMapper> employmentTypeMappers = new ArrayList<EmploymentTypeMapper>();

		for (Object[] object : resultList) {
			EmploymentTypeMapper employmentTypeMapper = new EmploymentTypeMapper();
			employmentTypeMapper.setId(Long.parseLong(object[0] + ""));
			employmentTypeMapper.setLastUpdatedBy(Long.parseLong(object[1] + ""));
			employmentTypeMapper.setEmploymentName(object[2] + "");
			employmentTypeMapper.setStatus(object[3] + "");
			employmentTypeMapper.setUpdatedDate((Date) object[4]);
			employmentTypeMapper.setEmail(object[5] + "");
			employmentTypeMappers.add(employmentTypeMapper);
		}
		return employmentTypeMappers;

	}

}
