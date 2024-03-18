package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.ResponseDTO;
import com.app.service.IAdminService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private IAdminService adminService;
	
	public AdminController() {
		System.out.println(" in admin controllet def contructor");
	}
	
	@GetMapping("/adminList")
	public ResponseEntity<?> getAdminList(){
		System.out.println(" in admin controller : adminList method");
		try {
			return new ResponseEntity<>(new ResponseDTO<>(adminService.getAllAdmins()), HttpStatus.OK);	
		} catch (Exception e) {
			System.out.println(" in admin controller : getAllusers method catch block");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/userList")
	public ResponseEntity<?> getAllUsers(){
		System.out.println(" in admin controller : getAllUsers methos");
		try {
			return new ResponseEntity<>(new ResponseDTO<>(adminService.getAllUsers()), HttpStatus.OK);	
		} catch (Exception e) {
			System.out.println(" in admin controller : getAllusers method catch block");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	

	
	@DeleteMapping("/deleteUser/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable int userId){
		try {
			System.out.println(" in admin controller : deleteUser method with venueid : "+userId);
			adminService.deleteUserById(userId);
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch (Exception e) {
			System.out.println(" in admin controller : deleteUser method catch block");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	
	
	

}
