package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IBookingRecord;
import com.app.dao.IBookingRecordJpa;
import com.app.pojos.BookingRecord;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;

@Service
@Transactional
public class ICustomerServiceImpl implements ICustomerService {
	@Autowired
	private IBookingRecord bookingdao;
	@Autowired
	private IBookingRecordJpa jpabookingdao;
	
	public ICustomerServiceImpl() {
		System.out.println("constomer service def contru...");
	}

	@Override
	public List<Venue> getAvailableVenues(LocalDate sdate, LocalDate edate, VenuePackage venuePackage) {

		return bookingdao.getAvailableVenues(sdate, edate, venuePackage);
	}

	@Override
	public List<BookingRecord> getAllRecords(User user) {
		return jpabookingdao.findByBookedBy(user);
	}
	
	

}
