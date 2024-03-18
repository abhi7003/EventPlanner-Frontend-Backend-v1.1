package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="address_details")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="add_id")
	private Integer addressId;
	@Column(name="house_no")
	private Integer houseNo;
	@Column(name="street_name",length = 200)
	private String streetName;
	@Column(length = 30)
	private String landmark;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String district;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String country;
	@Column(length = 6)
	private String zipcode;
	
	/*@OneToOne
	@JoinColumn(name = "venue_id")
	private Venue addressVenue;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private User addressUser;*/

	public Address() {
		System.out.println("In address default cnstr");
	}

	public Address(int houseNo, String streetName, String landmark, String city, String district,
			String state, String country, String zipcode) {
		
		this.houseNo= houseNo;
		this.streetName = streetName;
		this.landmark = landmark;
		this.city = city;
		this.district = district;
		this.state = state;
		this.country = country;
		this.zipcode = zipcode;
		
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}


	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	/*public User getAddressUser() {
		return addressUser;
	}

	public void setAddressUser(User addressUser) {
		this.addressUser = addressUser;
	}*/
	
	

	public int getHouseNo() {
		return houseNo;
	}

	public void setHouseNo(int houseNo) {
		this.houseNo = houseNo;
	}

	/*public Venue getAddressVenue() {
		return addressVenue;
	}

	public void setAddressVenue(Venue addressVenue) {
		this.addressVenue = addressVenue;
	}*/

	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", houseNo=" + houseNo + ", streetName=" + streetName + ", landmark="
				+ landmark + ", city=" + city + ", district=" + district + ", state=" + state + ", country=" + country
				+ ", zipcode=" + zipcode + "]";
	}
    
	
	
	
	
	
	
	

}
