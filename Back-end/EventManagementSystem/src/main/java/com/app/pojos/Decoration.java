package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="decoration_details")
public class Decoration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="deco_id")
	private Integer decorationId;
	@Column(name="deco_desc",length = 500)
	private String decorationDescription;
	@Column(name="deco_price")
	private double decorationPrice;
	
	@ManyToOne
	@JoinColumn(name = "v_id")
	private Venue decoarationVenue;
	
	
	public Decoration() {
		System.out.println("in decoration deafault cnstr ");
	}


	public Decoration(String decorationDescription, double decorationPrice) {
		
		this.decorationDescription = decorationDescription;
		this.decorationPrice = decorationPrice;
	}


	public Integer getDecorationId() {
		return decorationId;
	}


	public void setDecorationId(Integer decorationId) {
		this.decorationId = decorationId;
	}


	public String getDecorationDescription() {
		return decorationDescription;
	}


	public void setDecorationDescription(String decorationDescription) {
		this.decorationDescription = decorationDescription;
	}


	public double getDecorationPrice() {
		return decorationPrice;
	}


	public void setDecorationPrice(double decorationPrice) {
		this.decorationPrice = decorationPrice;
	}

	@JsonBackReference
	public Venue getDecoarationVenue() {
		return decoarationVenue;
	}


	public void setDecoarationVenue(Venue decoarationVenue) {
		this.decoarationVenue = decoarationVenue;
	}
    

	@Override
	public String toString() {
		return "Decoration [decorationId=" + decorationId + ", decorationDescription=" + decorationDescription
				+ ", decorationPrice=" + decorationPrice + "]";
	}
	
	

}
