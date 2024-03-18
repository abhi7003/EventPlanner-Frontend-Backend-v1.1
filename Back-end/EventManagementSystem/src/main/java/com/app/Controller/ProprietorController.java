package com.app.Controller;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.pojos.Address;
import com.app.pojos.Decoration;
import com.app.pojos.EventName;
import com.app.pojos.Meal;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.service.IAddressService;
import com.app.service.IProprietorService;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/proprietor")
public class ProprietorController {
	@Autowired
	private IProprietorService propservice;
	@Autowired
	private IAddressService addressService;
	
	public ProprietorController() {
		System.out.println(" in proprietor def contructor..."); 
	}
	
	@PostMapping("/myVenues")
	public ResponseEntity<?> getMyVenueList(@RequestBody User user){
		try {
			System.out.println(" in get my venue list method of prop controller with user : "+user);
			System.out.println(" in myvenue with venue: list : "+propservice.getVenuesByProprietor(user));
			return new ResponseEntity<>(propservice.getVenuesByProprietor(user), HttpStatus.OK);
			
		} catch (Exception e) {
			System.out.println(" in /myvenue prop controller catch block");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/myVenues/addVenue")
	public ResponseEntity<?> addVenue(@RequestBody Venue venue) {
		try {
			System.out.println(" in addVenue by post mapping method");
			System.out.println(" venue detail fetchedd : "+venue);
			System.out.println(" address recived : "+venue.getVenueAddress());
			System.out.println(" address recived : "+venue.getVenueProprietor());
			Address add=venue.getVenueAddress();
			add=addressService.addAddress(add);
			venue.setVenueAddress(add);
			System.out.println("All user details : "+venue);
			//return new ResponseEntity<>(addressService.addAddress(add), HttpStatus.OK);
			return new ResponseEntity<>(propservice.addVenue(venue),HttpStatus.OK);
			
		}catch (Exception e) {
			System.out.println(" in propri method catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@GetMapping("/mealList")
	public ResponseEntity<?> getMealList(){
		try {
			System.out.println(" in propri controller : getMealList method ");
			System.out.println("retrived list : "+propservice.getAllMeal());
			return new ResponseEntity<>(propservice.getAllMeal(), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(" in propri controller : getMealList method catch  block");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/decorationList")
	public ResponseEntity<?> getDecorationList(){
		try {
			System.out.println(" in propri controller : decorationList method ");
			System.out.println("retrived list : "+propservice.getAllDecorations());
			return new ResponseEntity<>(propservice.getAllDecorations(), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(" in propri controller : getMealList method catch  block");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/deleteMeal/{mealId}")
	public ResponseEntity<?> deleteMeal(@PathVariable int mealId){
		try {
			System.out.println(" in propri controller : deleteMeal method with mealid : "+mealId);
			propservice.deleteMealById(mealId);
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch (Exception e) {
			System.out.println(" in propri controller : deleteMeal method catch block");
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@DeleteMapping("/deleteDecoration/{decorationId}")
	public ResponseEntity<?> deleteDecoration(@PathVariable int decorationId){
		try {
			System.out.println(" in propri controller : deleteDecoration method with decorationId : "+decorationId);
			propservice.deleteDecorationById(decorationId);
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch (Exception e) {
			System.out.println(" in propri controller : decorationId method catch block");
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@DeleteMapping("/deleteVenue/{venueId}")
	public ResponseEntity<?> deleteVenue(@PathVariable int venueId){
		try {
			System.out.println(" in propri controller : deleteDecoration method with decorationId : "+venueId);
			propservice.deleteDecorationById(venueId);
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch (Exception e) {
			System.out.println(" in propri controller : decorationId method catch block");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@PostMapping("/myVenues/addVenue/addFeatures/addMeal/{venueId}")
	public ResponseEntity<?> addMeal(@RequestBody Meal meal,@PathVariable int venueId){
		try {
			System.out.println(" add meal method with vid: "+venueId+" and meal :"+meal);
			propservice.addMealByUpdatingVenue(venueId, meal);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
	@PostMapping("/myVenues/addVenue/addFeatures/addDecoration/{venueId}")
	public ResponseEntity<?> addDecoration(@RequestBody Decoration decoration,@PathVariable int venueId){
		try {
			System.out.println(" add decoration method with vid: "+venueId+" and meal :"+decoration);
			propservice.addDecorationByUpdatingVenue(venueId, decoration);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
	@PostMapping("/myVenues/addVenue/addFeatures/addEvents/{venueId}")
	public ResponseEntity<?> addEvents(@RequestBody String[] events,@PathVariable int venueId ){
		try {
			System.out.println(" add events method with event list "+Arrays.toString(events)+"Venue id : "+venueId);
			propservice.addEventsByUpdatingVenue(venueId, events);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
	@PostMapping("/myvenue/event")
	public ResponseEntity<?> findByEvent(@RequestBody String eventName){
		try {
			System.out.println(" received event name : "+eventName);
			System.out.println(propservice.findVenueByEventName(EventName.WEDDING));
			return new ResponseEntity<>(propservice.findVenueByEventName(EventName.WEDDING), HttpStatus.OK);
			
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>( HttpStatus.OK);
		}
		
	}
	
	@PostMapping("/bookedvenues")
	public ResponseEntity<?> findBookedVenue(@RequestBody User user)
	{
		try
		{
			System.out.println("in findbooked venue with user"+user);
			return new ResponseEntity<>(propservice.findBookedVenueByProprietorDetail(user),HttpStatus.OK);
		}
		catch(Exception e)
		{
			System.out.println("in catch block of booked venues");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	

}
