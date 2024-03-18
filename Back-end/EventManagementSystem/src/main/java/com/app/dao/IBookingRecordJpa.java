package com.app.dao;

import com.app.pojos.*;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.BookingRecord;
@Repository
public interface IBookingRecordJpa extends JpaRepository<BookingRecord, Integer>{
	
	List<BookingRecord> findByBookedBy(User bookedBy);
	
	List<BookingRecord> findByBookedVenue_VenueProprietor(User venueProprietor);
}
