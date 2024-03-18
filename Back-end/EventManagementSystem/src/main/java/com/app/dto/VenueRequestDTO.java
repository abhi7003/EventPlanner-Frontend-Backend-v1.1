package com.app.dto;


public class VenueRequestDTO {
	private String sdate;
	private String edate;
	private String venuePackage;
	private String eventName;
	
	public VenueRequestDTO() {
		System.out.println(" in venue requet DTO");
	}

	public VenueRequestDTO(String sdate, String edate, String venuePackage,String eventName) {
		super();
		this.sdate = sdate;
		this.edate = edate;
		this.venuePackage = venuePackage;
		this.eventName=eventName;
	}
	
	
	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getSdate() {
		return sdate;
	}

	public void setSdate(String sdate) {
		this.sdate = sdate;
	}

	public String getEdate() {
		return edate;
	}

	public void setEdate(String edate) {
		this.edate = edate;
	}

	public String getVenuePackage() {
		return venuePackage;
	}

	public void setVenuePackage(String venuePackage) {
		this.venuePackage = venuePackage;
	}

	@Override
	public String toString() {
		return "VenueRequestDTO [sdate=" + sdate + ", edate=" + edate + ", venuePackage=" + venuePackage
				+ ", eventName=" + eventName + "]";
	}

	

	
}
