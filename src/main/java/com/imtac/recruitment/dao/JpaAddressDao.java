package com.imtac.recruitment.dao;

import java.util.List;

import javax.persistence.Query;

import com.imtac.recruitment.entity.Address;

public class JpaAddressDao extends JpaDao<Address, Long> implements AddressDao {

	public JpaAddressDao() {
		super(Address.class);
	}

	@Override
	public List<Address> getAddressesByDemographicInfoId(Long demographicInfoId) {

		Query query = getEntityManager().createNativeQuery(
				"select * from address where demographicinfo_id=" + demographicInfoId, Address.class);
		return query.getResultList();
	}

}
