package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="meal_details")
public class Meal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="meal_id")
	private Integer mealId;
	@Column(name="meal_name",length = 30)
	private String mealName;
	@Column(name="meal_desc",length = 500)
	private String mealDescription;
	@Column(name="meal_price")
	private double mealPricePerPerson;
	
	@ManyToOne
	@JoinColumn(name = "v_id")
	private Venue mealVenue;
	
	public Meal() {
		System.out.println("in meal default cnstr");
	}

	public Meal(String mealName, String mealDescription, double mealPricePerPerson) {
		super();
		this.mealName = mealName;
		this.mealDescription = mealDescription;
		this.mealPricePerPerson = mealPricePerPerson;
	}

	public Integer getMealId() {
		return mealId;
	}

	public void setMealId(Integer mealId) {
		this.mealId = mealId;
	}

	public String getMealName() {
		return mealName;
	}

	public void setMealName(String mealName) {
		this.mealName = mealName;
	}

	public String getMealDescription() {
		return mealDescription;
	}

	public void setMealDescription(String mealDescription) {
		this.mealDescription = mealDescription;
	}

	public double getMealPricePerPerson() {
		return mealPricePerPerson;
	}

	public void setMealPricePerPerson(double mealPricePerPerson) {
		this.mealPricePerPerson = mealPricePerPerson;
	}
	
	@JsonBackReference
	public Venue getMealVenue() {
		return mealVenue;
	}

	public void setMealVenue(Venue mealVenue) {
		this.mealVenue = mealVenue;
	}
	

	@Override
	public String toString() {
		return "Meal [mealId=" + mealId + ", mealName=" + mealName + ", mealDescription=" + mealDescription
				+ ", mealPricePerPerson=" + mealPricePerPerson + "]";
	}
	
	
	

}
