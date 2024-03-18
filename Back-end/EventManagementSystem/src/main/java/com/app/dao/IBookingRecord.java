package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.BookingRecord;
import com.app.pojos.Event;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;

public interface IBookingRecord  {
	
	//get all venues between sdate and edate and venue.package and venue.events
	List<Venue> getAvailableVenues(LocalDate sdate,LocalDate edate,VenuePackage venuePackage);
	

}
