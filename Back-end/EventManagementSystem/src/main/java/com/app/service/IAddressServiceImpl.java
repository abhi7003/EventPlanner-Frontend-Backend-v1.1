package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAddressdao;
import com.app.pojos.Address;
@Service
@Transactional
public class IAddressServiceImpl implements IAddressService {
	
	@Autowired
	private IAddressdao addressDao;

	@Override
	public Address addAddress(Address address) {
		return addressDao.save(address);
	}

}
