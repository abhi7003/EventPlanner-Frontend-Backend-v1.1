package com.app.pojos;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="event_details")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="event_id")
	private Integer eventId;
	@Enumerated(EnumType.STRING)
	@Column(name="event_name")
	private EventName eventName;
	
	
	public Event() {
		System.out.println("in event defaut cnstr");
	}

	public Event(EventName eventName) {
		super();
		this.eventName = eventName;
	}

	public Integer getEventId() {
		return eventId;
	}

	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}

	public EventName getEventName() {
		return eventName;
	}

	public void setEventName(EventName eventName) {
		this.eventName = eventName;
	}
   
	@Override
	public String toString() {
		return "Event [eventId=" + eventId + ", eventName=" + eventName + "]";
	}
	
	

}
