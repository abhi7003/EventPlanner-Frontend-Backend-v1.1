package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.Address;
import com.app.pojos.Decoration;
import com.app.pojos.Event;
import com.app.pojos.Meal;
import com.app.pojos.User;
import com.app.pojos.VenuePackage;

public class VenueDTO {
	private Integer venueId;
	private String venueName;
	private String venueDescription;
	private int venueCapacity;
	private VenuePackage venuePackage;
	private double venuePricePerDay;
	private UserDTO venueProprietor;
	private List<Event> events=new ArrayList<>();
	private List<Meal> meals= new ArrayList<>();
	private List<Decoration> decorations=new ArrayList<>();
	private Address venueAddress;
	
	public VenueDTO() {
		System.out.println(" in venueDTO def constructor...");
	}

	public VenueDTO(Integer venueId, String venueName, String venueDescription, int venueCapacity,
			VenuePackage venuePackage, double venuePricePerDay, UserDTO venueProprietor, List<Event> events,
			List<Meal> meals, List<Decoration> decorations, Address venueAddress) {
		super();
		this.venueId = venueId;
		this.venueName = venueName;
		this.venueDescription = venueDescription;
		this.venueCapacity = venueCapacity;
		this.venuePackage = venuePackage;
		this.venuePricePerDay = venuePricePerDay;
		this.venueProprietor = venueProprietor;
		this.events = events;
		this.meals = meals;
		this.decorations = decorations;
		this.venueAddress= venueAddress;
	}
	
	
	public Address getVenueAddress() {
		return venueAddress;
	}

	public void setVenueAddress(Address venueAddress) {
		this.venueAddress = venueAddress;
	}

	public Integer getVenueId() {
		return venueId;
	}

	public void setVenueId(Integer venueId) {
		this.venueId = venueId;
	}

	public String getVenueName() {
		return venueName;
	}

	public void setVenueName(String venueName) {
		this.venueName = venueName;
	}

	public String getVenueDescription() {
		return venueDescription;
	}

	public void setVenueDescription(String venueDescription) {
		this.venueDescription = venueDescription;
	}

	public int getVenueCapacity() {
		return venueCapacity;
	}

	public void setVenueCapacity(int venueCapacity) {
		this.venueCapacity = venueCapacity;
	}

	public VenuePackage getVenuePackage() {
		return venuePackage;
	}

	public void setVenuePackage(VenuePackage venuePackage) {
		this.venuePackage = venuePackage;
	}

	public double getVenuePricePerDay() {
		return venuePricePerDay;
	}

	public void setVenuePricePerDay(double venuePricePerDay) {
		this.venuePricePerDay = venuePricePerDay;
	}

	public UserDTO getVenueProprietor() {
		return venueProprietor;
	}

	public void setVenueProprietor(UserDTO venueProprietor) {
		this.venueProprietor = venueProprietor;
	}

	public List<Event> getEvents() {
		return events;
	}

	public void setEvents(List<Event> events) {
		this.events = events;
	}

	public List<Meal> getMeals() {
		return meals;
	}

	public void setMeals(List<Meal> meals) {
		this.meals = meals;
	}

	public List<Decoration> getDecorations() {
		return decorations;
	}

	public void setDecorations(List<Decoration> decorations) {
		this.decorations = decorations;
	}

	@Override
	public String toString() {
		return "VenueDTO [venueId=" + venueId + ", venueName=" + venueName + ", venueDescription=" + venueDescription
				+ ", venueCapacity=" + venueCapacity + ", venuePackage=" + venuePackage + ", venuePricePerDay="
				+ venuePricePerDay + ", venueProprietor=" + venueProprietor + ", events=" + events + ", meals=" + meals
				+ ", decorations=" + decorations + "]";
	}
	
	

}
