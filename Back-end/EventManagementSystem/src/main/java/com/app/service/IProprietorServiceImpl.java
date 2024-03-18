package com.app.service;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IBookingRecordJpa;
import com.app.dao.IDecorationdao;
import com.app.dao.IEventdao;
import com.app.dao.IMealdao;
import com.app.dao.IUserdao;
import com.app.dao.IVenuedao;
import com.app.pojos.BookingRecord;
import com.app.pojos.Decoration;
import com.app.pojos.Event;
import com.app.pojos.EventName;
import com.app.pojos.Meal;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;
@Service
@Transactional
public class IProprietorServiceImpl implements IProprietorService {
	
	@Autowired
	private IVenuedao venueDao;
	@Autowired
	private IMealdao mealdao;
	@Autowired
	private IDecorationdao decorationdao;
	@Autowired
	private IEventdao eventdao;
	@Autowired
	private IBookingRecordJpa bookrecorddao;
	
	
	
	public IProprietorServiceImpl() {
		System.out.println(" in proprietor def constructor...");
	}

	@Override
	public List<Venue> getVenuesByProprietor(User user) {
		return venueDao.getVenueByVenueProprietor(user);
	}

	@Override
	public Venue addVenue(Venue venue){
		//set venue package as per condition and then call save method
		if(venue.getVenuePricePerDay()>150000) {
			venue.setVenuePackage(VenuePackage.PLATINUM);
		}
		else if(venue.getVenuePricePerDay()>100000) {
			venue.setVenuePackage(VenuePackage.DIAMOND);
		}
		else if(venue.getVenuePricePerDay()>75000) {
			venue.setVenuePackage(VenuePackage.GOLDEN);
		}
		else {
			venue.setVenuePackage(VenuePackage.SILVER);
		}
			
		return venueDao.save(venue);
	}
	
	@Override
	public void deleteVenueById(int venueId) {
		venueDao.deleteById(venueId);
	}

	

	@Override
	public List<Meal> getAllMeal() {
		return mealdao.findAll();
	}

	@Override
	public List<Decoration> getAllDecorations() {
		return decorationdao.findAll();
	}

	@Override
	public void deleteMealById(int mealId) {
		mealdao.deleteById(mealId);
		
	}
	
	@Override
	public void deleteDecorationById(int decorationId) {
		decorationdao.deleteById(decorationId);
		
	}

	@Override
	public void addMealByUpdatingVenue(int venueId, Meal meal) {
		System.out.println(" in add meal by updating venue service metod");
		//add meal first to table 
		Venue v=venueDao.findByVenueId(venueId);
		v.getMeals().add(meal);
		meal.setMealVenue(v);
		System.out.println(" meal arraylist of venue : "+v.getMeals());
	}

	@Override
	public void addDecorationByUpdatingVenue(int venueId, Decoration decoration) {
		System.out.println(" in add decorationn by updating venue service metod");
		//get the decoration
		Venue v=venueDao.findByVenueId(venueId);
		v.getDecorations().add(decoration);
		decoration.setDecoarationVenue(v);
	}

	@Override
	public List<Venue> findVenueByEventName(EventName eventName) {
		return venueDao.findByEvents_EventName(eventName);
		
	}

	@Override
	public void addEventsByUpdatingVenue(int venueId, String[] events) {
		List<Event> list=new ArrayList<>();
		Venue v=venueDao.findByVenueId(venueId);
		/*Arrays.stream(events).forEach(e->{
			System.out.println(" array elemnt : "+EventName.valueOf(e));
			//System.out.println("Event object recieved in streaming : "+ eventdao.findByEventName(EventName.valueOf(e)));
			//v.getEvents().add(eventdao.findByEventName(EventName.valueOf(e)));
		});*/
		for(int i=0;i<events.length;i++) {
			String str=events[i];
			System.out.println(" str = "+str);
			System.out.println(" converting string to enum : "+EventName.valueOf(str));
			Event event = eventdao.findByEventName(EventName.valueOf(str));
			System.out.println("event"+event);
			v.getEvents().add(event);
		}
		
	}

	@Override
	public List<BookingRecord> findBookedVenueByProprietorDetail(User venueProprietor) {
		
		return bookrecorddao.findByBookedVenue_VenueProprietor(venueProprietor);
	}
	
	

}
