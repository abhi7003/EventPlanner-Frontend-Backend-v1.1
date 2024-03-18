package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.SecurityQuestion;
import com.app.pojos.User;
@Repository
	public interface IUserdao extends JpaRepository<User, Integer> {
		
		//jpa repository method for validation through email and password
		User findByUserEmailAndPassword(String userEmail,String password);
		
		//find user by email & securityQuestion and Security answer
		User findByUserEmailAndSecurityQuestionAndSecurityAnswer(String userEmail,SecurityQuestion securityQuestion,String securityAnswer);
		
		//find user by userId
		User findByUserId(int userId);
	
	}
