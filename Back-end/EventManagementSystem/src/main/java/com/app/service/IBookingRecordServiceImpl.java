package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IBookingRecordJpa;
import com.app.pojos.BookingRecord;
@Service
@Transactional
public class IBookingRecordServiceImpl implements IBookingRecordService {
	
	@Autowired
	private IBookingRecordJpa bookingRecordDao;
	
	public IBookingRecordServiceImpl() {
		System.out.println(" in bookng record def contructor...");
	}

	@Override
	public BookingRecord saveBookingRecord(BookingRecord b) {
		return bookingRecordDao.save(b);
	}

}
