package com.app.service;

import java.time.LocalDate;
import com.app.pojos.*;
import java.util.List;

import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;

public interface ICustomerService {
	//method to filter and get venues
	List<Venue> getAvailableVenues(LocalDate sdate,LocalDate edate,VenuePackage venuePackage);
	
	//get all booking record 
	List<BookingRecord> getAllRecords(User user);

}
