package com.app.service;

import java.util.List;

import com.app.dto.UserDTO;
import com.app.dto.VenueDTO;
import com.app.pojos.Decoration;
import com.app.pojos.Meal;
import com.app.pojos.Venue;

public interface IAdminService {
	//get All admins
	List<UserDTO> getAllAdmins();
	
	//get All users from db
	List<UserDTO> getAllUsers();
	
	//get all venues from databse
	List<VenueDTO> getAllVenues();
	
	
	
	
	//delete user by id
	void deleteUserById(int userId);
	
	
}
