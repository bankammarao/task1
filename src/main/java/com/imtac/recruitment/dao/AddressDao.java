package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Address;

public interface AddressDao extends Dao<Address,Long> {

	List<Address> getAddressesByDemographicInfoId(Long id);

}
