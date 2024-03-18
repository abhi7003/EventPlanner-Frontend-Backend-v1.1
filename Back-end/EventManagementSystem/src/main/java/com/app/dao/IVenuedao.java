package com.app.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.app.pojos.EventName;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;

@Repository
public interface IVenuedao extends JpaRepository<Venue, Integer> {
	
	List<Venue> getVenueByVenueProprietor(User user);
	
	//find venue by package,events
	List<Venue> findByVenuePackageAndEvents_EventName(VenuePackage venuePackage,EventName eventName);
	
	//find venue by venue id
	Venue findByVenueId(int venueId);
	
	//find by event name
	List<Venue> findByEvents_EventName(EventName eventName);

}
