package com.app.Controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import javax.validation.Valid;
//import javax.xml.ws.soap.Addressing;

import org.hibernate.validator.internal.engine.groups.Sequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IAddressdao;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.User;
import com.app.service.IAddressService;
import com.app.service.IUserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	
	@Autowired
	private IUserService userService;
	@Autowired
	private IAddressService addressService;

	
	public UserController() {
		System.out.println(" in user controller def contructor..");
	}
	
	@PostMapping("/register") 
	public ResponseEntity<?> registerUser(@RequestBody @Valid User user) throws GeneralSecurityException, IOException
	{
		try {
			System.out.println(" in register user by post mapping method");
			System.out.println(" user detail fetchedd : "+user);
			System.out.println(" address recived : "+user.getUserAddress());
			Address add=user.getUserAddress();
			add=addressService.addAddress(add);
			user.setUserAddress(add);
			System.out.println("All user details : "+user);
			//return new ResponseEntity<>(addressService.addAddress(add), HttpStatus.OK);
//			userService.registerUser(user);
//			if(result.hasErrors()) {
//				System.out.println(" pl validation successfull..");
//			}
			return new ResponseEntity<>(userService.registerUser(user),HttpStatus.OK);
		}catch (Exception e) {
			System.out.println(" in user controller-register method catch block ");
			e.printStackTrace();
			//result.toString();
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> validateUser(@RequestBody UserDTO userDTO){
		try {
			System.out.println(" in validate user with body : "+userDTO);
			System.out.println("in validate user with email : "+userDTO.getUserEmail()+" pass : "+userDTO.getPassword());
			return new ResponseEntity<>(new ResponseDTO<>(userService.validateUser(userDTO.getUserEmail(), userDTO.getPassword())),HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(" in user controller validate user catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
	@PostMapping("/forgotPassword")
	public ResponseEntity<?> forgotPassword(@RequestBody User user){
		try {
			System.out.println(" in user controller : forgot password method with user : "+user);
			System.out.println(" question recevied : "+user.getSecurityQuestion());
			System.out.println(" answer recevied : "+user.getSecurityAnswer());
			System.out.println(" email recevied : "+user.getUserEmail());
			String validatedPass=userService.findByUserEmailAndSecurityQuestionAndSecurityAnswer(user.getUserEmail(), user.getSecurityQuestion(), user.getSecurityAnswer());
			System.out.println("returning validated password"+validatedPass);
			if(validatedPass!=null) {
				System.out.println("in validated password not null returning password");
			return new ResponseEntity<>(validatedPass, HttpStatus.OK);
			}
			else
			{
				System.out.println("in validated password null and returning 9999");
				return new ResponseEntity<>(null,HttpStatus.OK);
			}
		} catch (Exception e) {
			System.out.println(" in user controller : forgot pass method catch block");
			e.printStackTrace();
			return new ResponseEntity<>(9999,HttpStatus.NOT_FOUND);
		}
	}

}
