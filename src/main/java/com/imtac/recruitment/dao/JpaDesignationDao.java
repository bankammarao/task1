package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.imtac.recruitment.entity.Designation;
import com.imtac.recruitment.entity.DesignationMapper;

public class JpaDesignationDao extends JpaDao<Designation, Long> implements DesignationDao{
	public JpaDesignationDao() {
		super(Designation.class);
	}
	
	@Override
	public List<DesignationMapper> getAllDesignations() {
		Query query = getEntityManager().createNativeQuery(
				"select d.designation_id,d.designation_name, d.designation_updatedBy,d.designation_updatedDate,d.designation_status,u.username from designation d,users u where d.designation_updatedBy=u.id order by d.designation_id desc");
		List<Object[]> designationList = query.getResultList();
		List<DesignationMapper> designationMapperList = new ArrayList<DesignationMapper>();

		for (Object[] object : designationList) {
			DesignationMapper designationMapper = new DesignationMapper();
			designationMapper.setId(Long.parseLong(object[0] + ""));
			designationMapper.setDesignationName((object[1] + ""));
			designationMapper.setLastUpdatedBy(Long.parseLong(object[2] + ""));
			designationMapper.setUpdatedDate((Date) object[3]);
			designationMapper.setStatus(object[4]+"");
			designationMapper.setEmail(object[5]+"");
			designationMapperList.add(designationMapper);
		}
		return designationMapperList;
	}
	

	@Transactional
	@Override
	public int deleteById(Designation designation) {
		Query query = getEntityManager().createNativeQuery("update designation set designation_status='"
				+ designation.getStatus() + "' where designation_id=" + designation.getId());
		return query.executeUpdate();
	}
}
