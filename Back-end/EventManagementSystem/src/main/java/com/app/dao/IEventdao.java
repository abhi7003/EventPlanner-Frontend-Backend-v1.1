package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Event;
import com.app.pojos.EventName;
@Repository
public interface IEventdao extends JpaRepository<Event, Integer> {
	
	//find event by eventName
	Event findByEventName(EventName eventName);
	
}
