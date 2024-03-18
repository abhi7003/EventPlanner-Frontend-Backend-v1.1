package com.app.Controller;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IVenuedao;
import com.app.dto.VenueDTO;
import com.app.dto.VenueRequestDTO;
import com.app.pojos.BookingRecord;
import com.app.pojos.EventName;
import com.app.pojos.User;
import com.app.pojos.Venue;
import com.app.pojos.VenuePackage;
import com.app.service.IBookingRecordService;
import com.app.service.ICustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private ICustomerService custService;
	@Autowired
	private IVenuedao venueDao;
	@Autowired
	private IBookingRecordService bookingRecordService;
	
	public CustomerController() {
		System.out.println(" in cutomer controller def contructor...");
	}
	
	@PostMapping("/venueList")
	public ResponseEntity<?> findAvailableVenues(@RequestBody VenueRequestDTO venuerequestDTO ){
		try {
			//System.out.println(" in  cpntroller method with data: "+venuerequestDTO);
			List<Venue> bookedVenues=custService.getAvailableVenues(LocalDate.parse(venuerequestDTO.getSdate()), LocalDate.parse(venuerequestDTO.getEdate()), VenuePackage.valueOf(venuerequestDTO.getVenuePackage()));
			System.out.println(" Booked venue  : "+bookedVenues);
			System.out.println("Event name : "+venuerequestDTO.getEventName());
			List<Venue> allVenues=venueDao.findByVenuePackageAndEvents_EventName(VenuePackage.valueOf(venuerequestDTO.getVenuePackage()),EventName.valueOf(venuerequestDTO.getEventName()));
			System.out.println(" All venues with package and event name : "+allVenues);
			List<Venue> allVenuesByEvent=venueDao.findByEvents_EventName(EventName.valueOf(venuerequestDTO.getEventName()));
			System.out.println(" All venue by event list :"+allVenuesByEvent);
			System.out.println("removed or not : "+allVenues.removeAll(bookedVenues));
			System.out.println("after filtering available venues: "+allVenues);
			return new ResponseEntity<>(allVenues, HttpStatus.OK);
		
		} catch (Exception e) {
			System.out.println(" in controller catch ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PostMapping("/bookVenue")
	public ResponseEntity<?> saveBookingRecord(@RequestBody BookingRecord bookingRecord){
		try {
			System.out.println(" in controlller save booking record with : "+bookingRecord);
			return new ResponseEntity<>(bookingRecordService.saveBookingRecord(bookingRecord)
					, HttpStatus.OK);	
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@PostMapping("/bookinghistory")
	public ResponseEntity<?> fetchBookingRecord(@RequestBody User user){
		try {
			System.out.println(" in booking record data with user : "+user);
			return new ResponseEntity<>(custService.getAllRecords(user),HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
