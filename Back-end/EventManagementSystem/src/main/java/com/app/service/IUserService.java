package com.app.service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

import com.app.dto.UserDTO;
import com.app.pojos.SecurityQuestion;
import com.app.pojos.User;

public interface IUserService {
	UserDTO registerUser(User user) throws GeneralSecurityException, IOException;
	UserDTO validateUser(String email,String pass) throws GeneralSecurityException, IOException;
	List<UserDTO> getALlUsers();
	//find user by email,securityQuestion and securityAnswer
	String findByUserEmailAndSecurityQuestionAndSecurityAnswer(String userEmail,SecurityQuestion securityQuestion,String securityAnswer)throws GeneralSecurityException, IOException;;
}
