package com.app.service;

import java.util.List;

import com.app.pojos.*;
import com.app.pojos.Event;
import com.app.pojos.Meal;
import com.app.pojos.User;
import com.app.pojos.Venue;

public interface IProprietorService {
	//method to get venue details by proprietor
	List<Venue> getVenuesByProprietor(User user);
	
	//method to save venue details in db
	Venue addVenue(Venue venue);
	
	//delete venue by id
	void deleteVenueById(int venueId);
		
	//get all meal list
		List<Meal> getAllMeal();
		
	//get all decorations list
	List<Decoration> getAllDecorations();
		
	//delete meal by id
	void deleteMealById(int mealId);
		
	//delete decoration by id
	void deleteDecorationById(int decorationId);
	
	//add meal i.e update venue 
	void addMealByUpdatingVenue(int venueId,Meal meal);
	
	//add decoration i.e update venue 
	void addDecorationByUpdatingVenue(int venueId,Decoration decoration);
	
	//get event object by eventName from ievent dao repository
	List<Venue> findVenueByEventName(EventName eventName);
	
	//add evenets to venue by updating venue 
	
	void addEventsByUpdatingVenue(int venueId,String[] events);
	
	//find booked venue of proprietor by proprietor user input
	
		List<BookingRecord> findBookedVenueByProprietorDetail(User venueProprietor);

}
