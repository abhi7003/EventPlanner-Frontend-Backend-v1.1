package com.app.dao;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;

@Repository
public class IBookingRecordImpl implements IBookingRecord {
	
	@Autowired
	private EntityManager manager;
	
	public IBookingRecordImpl() {
		System.out.println(" in booking record dao impl def contru");
	}

	@Override
	public List<Venue> getAvailableVenues(LocalDate sdate, LocalDate edate, VenuePackage venuePackage) {
		String jpql="select distinct b.bookedVenue from BookingRecord b where (b.startDate between :sdate and :edate) or (b.endDate between :sdate and :edate) and b.bookedVenue.venuePackage=:package";
		try {
			return manager.createQuery(jpql, Venue.class).setParameter("sdate", sdate).setParameter("edate", edate).setParameter("package", venuePackage).getResultList();
		} catch (Exception e) {
			System.out.println(" in booking record impl dao");
			e.printStackTrace();
			return null;
		}
	}

}
