package com.app.dto;

import java.time.LocalDate;
import com.app.pojos.Address;
import com.app.pojos.Gender;
import com.app.pojos.Role;

public class UserDTO {
	private int userId;
	private String firstName;
	private String lastName;
	private String userEmail;
	private Gender userGender;
	private LocalDate userDOB;
	private String contactNo;
	private Role userRole;
	private String password;
	private Address userAddress;
	
	public UserDTO() {
		System.out.println(" in UserDTO def contructor..");
	}

	public UserDTO(int userId, String firstName, String lastName, String userEmail, Gender userGender,
			LocalDate userDOB, String contactNo, Role userRole,String password,Address userAddress) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userEmail = userEmail;
		this.userGender = userGender;
		this.userDOB = userDOB;
		this.contactNo = contactNo;
		this.userRole = userRole;
		this.password=password;
		this.userAddress=userAddress;
	}

	public Address getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(Address userAddress) {
		this.userAddress = userAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public Gender getUserGender() {
		return userGender;
	}

	public void setUserGender(Gender userGender) {
		this.userGender = userGender;
	}

	public LocalDate getUserDOB() {
		return userDOB;
	}

	public void setUserDOB(LocalDate userDOB) {
		this.userDOB = userDOB;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public Role getUserRole() {
		return userRole;
	}

	public void setUserRole(Role userRole) {
		this.userRole = userRole;
	}

	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", userEmail="
				+ userEmail + ", userGender=" + userGender + ", userDOB=" + userDOB + ", contactNo=" + contactNo
				+ ", userRole=" + userRole + "]";
	}
	
	

}
