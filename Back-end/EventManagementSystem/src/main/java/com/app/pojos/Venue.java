package com.app.pojos;

import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="venue_details")
public class Venue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="venue_id")
	private Integer venueId;
	@Column(name="v_name",length = 50)
	private String venueName;
	@Column(name="venue_desc",length = 500)
	private String venueDescription;
	@Column(name="v_capacity")
	private int venueCapacity;
	@Enumerated(EnumType.STRING)
	@Column(name="venue_pkg")
	private VenuePackage venuePackage;
	
	@OneToOne
	private Address venueAddress;
	
	@Column(name="v_price")
	private double venuePricePerDay;
	
	@ManyToOne
	@JoinColumn(name = "prop_id")
	private User venueProprietor;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinTable(name="venue_event",joinColumns = @JoinColumn(name="venue_id"),inverseJoinColumns 
	= @JoinColumn(name="event_id"))
	private List<Event> events=new ArrayList<>();
	
	@OneToMany(mappedBy = "mealVenue" ,cascade = CascadeType.ALL,orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<Meal> meals= new ArrayList<>();
	
	@OneToMany(mappedBy = "decoarationVenue",cascade = CascadeType.ALL,orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<Decoration> decorations=new ArrayList<>();
	
	
	 public Venue() {
		System.out.println("in venue default cnstr");
	}


	public Venue(String venueName, String venueDescription, int venueCapacity, VenuePackage venuePackage,
			double venuePricePerDay) {
		super();
		this.venueName = venueName;
		this.venueDescription = venueDescription;
		this.venueCapacity = venueCapacity;
		this.venuePackage = venuePackage;
		this.venuePricePerDay = venuePricePerDay;
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


	public User getVenueProprietor() {
		return venueProprietor;
	}


	public void setVenueProprietor(User venueProprietor) {
		this.venueProprietor = venueProprietor;
	}


	public List<Event> getEvents() {
		return events;
	}


	public void setEvents(List<Event> events) {
		this.events = events;
	}
	
	@JsonManagedReference
	public List<Meal> getMeals() {
		return meals;
	}


	public void setMeals(List<Meal> meals) {
		this.meals = meals;
	}
    
	
	@JsonManagedReference
	public List<Decoration> getDecorations() {
		return decorations;
	}


	public void setDecorations(List<Decoration> decorations) {
		this.decorations = decorations;
	}
    
	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((venueId == null) ? 0 : venueId.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Venue other = (Venue) obj;
		if (venueId == null) {
			if (other.venueId != null)
				return false;
		} else if (!venueId.equals(other.venueId))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Venue [venueId=" + venueId + ", venueName=" + venueName + ", venueDescription=" + venueDescription
				+ ", venueCapacity=" + venueCapacity + ", venuePackage=" + venuePackage + ", venuePricePerDay="
				+ venuePricePerDay + "]";
	}
	
	
	

}
