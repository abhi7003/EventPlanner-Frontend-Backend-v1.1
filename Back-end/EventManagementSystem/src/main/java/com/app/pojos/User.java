package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.*;
import javax.persistence.Transient;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name="user_details")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer userId;
	@Column(name="fname",length = 15)
	@NotBlank(message = "Should be mandatory")
	private String firstName;
	@Column(name="lname",length = 15)
	@NotNull
	private String lastName;
	@Column(name="user_email",length = 30,unique = true,nullable = false)
	private String userEmail;
	@Column(name="user_password")
	
	private String password;
	@Transient
	private String confirmPassword;
	@Enumerated(EnumType.STRING)
	@Column(name="user_gender")
	private Gender userGender;
	@Column(name="user_dob")
	@DateTimeFormat(pattern = "yyyy/mm/dd")
	private LocalDate userDOB;
	@Column(name="contact_no",length = 10)
	private String contactNo;
	@Enumerated(EnumType.STRING)
	@Column(name="sec_que")
	private SecurityQuestion securityQuestion;
	@Column(name="sec_ans",length = 15)
	private String securityAnswer;
	@Enumerated(EnumType.STRING)
	@Column(name="user_role")
	private Role userRole;
	
	@OneToOne
	private Address userAddress;
	
	/*@OneToMany(mappedBy = "venueProprietor",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Venue> venues=new ArrayList<>();*/

	
	public User()
	{
		System.out.println("in user default cnstr");
	}
	public User(String firstName, String lastName, String userEmail, String password, String confirmPassword,
			Gender userGender, LocalDate userDOB, String contactNo, SecurityQuestion securityQuestion,
			String securityAnswer, Role userRole) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userEmail = userEmail;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.userGender = userGender;
		this.userDOB = userDOB;
		this.contactNo = contactNo;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
		this.userRole = userRole;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
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
	public SecurityQuestion getSecurityQuestion() {
		return securityQuestion;
	}
	public void setSecurityQuestion(SecurityQuestion securityQuestion) {
		this.securityQuestion = securityQuestion;
	}
	public String getSecurityAnswer() {
		return securityAnswer;
	}
	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}
	public Role getUserRole() {
		return userRole;
	}
	public void setUserRole(Role userRole) {
		this.userRole = userRole;
	}
	public Address getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(Address userAddress) {
		this.userAddress = userAddress;
	}
	
	/*public List<Venue> getVenues() {
		return venues;
	}
	public void setVenues(List<Venue> venues) {
		this.venues = venues;
	}*/
	
	
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", userEmail="
				+ userEmail + ", userGender=" + userGender + ", userDOB=" + userDOB + ", contactNo=" + contactNo
				+ ", userRole=" + userRole + "]";
	}

	
	
	
	
	
	

}
