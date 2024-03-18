package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="booking_record")
public class BookingRecord {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="booking_id")
	private Integer bookingId;
	@Column(name="s_date")
	@DateTimeFormat(pattern = "yyyy/mm/dd")
	private LocalDate startDate;
	@Column(name="e_date")
	@DateTimeFormat(pattern = "yyyy/mm/dd")
	private LocalDate endDate;
	
	@OneToOne
	@JoinColumn(name="cust_id")
	private User bookedBy;
	
	@OneToOne
	@JoinColumn(name="venue_id")
	private Venue bookedVenue;
	
	@OneToOne
	@JoinColumn(name="meal_id")
	private Meal choosenMeal;
	
	@OneToOne
	@JoinColumn(name="deco_id")
	private Decoration choosenDecoration;
	
	public BookingRecord() {
		System.out.println("in booking record default cnstr");
	}

	public BookingRecord(LocalDate startDate, LocalDate endDate) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public User getBookedBy() {
		return bookedBy;
	}

	public void setBookedBy(User bookedBy) {
		this.bookedBy = bookedBy;
	}

	public Venue getBookedVenue() {
		return bookedVenue;
	}

	public void setBookedVenue(Venue bookedVenue) {
		this.bookedVenue = bookedVenue;
	}

	public Meal getChoosenMeal() {
		return choosenMeal;
	}

	public void setChoosenMeal(Meal choosenMeal) {
		this.choosenMeal = choosenMeal;
	}

	public Decoration getChoosenDecoration() {
		return choosenDecoration;
	}

	public void setChoosenDecoration(Decoration choosenDecoration) {
		this.choosenDecoration = choosenDecoration;
	}
	
	

	@Override
	public String toString() {
		return "BookingRecord [bookingId=" + bookingId + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}
	
	
	

}
