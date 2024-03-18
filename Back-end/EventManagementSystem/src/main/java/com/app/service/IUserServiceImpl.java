package com.app.service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IUserdao;
import com.app.dto.UserDTO;
import com.app.pojos.*;

@Service
@Transactional

public class IUserServiceImpl implements IUserService {
	
	@Autowired
	private IUserdao  userdao;
	
	
	public IUserServiceImpl() {
		System.out.println(" in user  service impl def..");
	}

	@Override
	public UserDTO registerUser(User user) throws GeneralSecurityException, IOException{
		user.setPassword(AESAlgorithm.en(user.getPassword()));
		UserDTO userDTO=new UserDTO();
		BeanUtils.copyProperties(userdao.save(user), userDTO,"password");
		return userDTO;
	}

	@Override
	public UserDTO validateUser(String email, String pass)throws GeneralSecurityException, IOException {
		UserDTO userDTO=new UserDTO();
		System.out.println(" Null user DTO : "+userDTO);
		try {
		BeanUtils.copyProperties(userdao.findByUserEmailAndPassword(email,AESAlgorithm.en(pass)),userDTO,"password");
		System.out.println("validated user dto from service layer : "+userDTO);
		return userDTO;
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<UserDTO> getALlUsers() {
		List<UserDTO> list=new ArrayList<UserDTO>();
		userdao.findAll().forEach(user->{
			UserDTO userDTO=new UserDTO();
			BeanUtils.copyProperties(user, userDTO,"password");
			System.out.println("db user : "+user);
			System.out.println("dto user : "+userDTO);
			list.add(userDTO);
		});
		System.out.println(" in getAllusers of service after list of DTO : "+list);
		return list;
	}

	@Override
	public String findByUserEmailAndSecurityQuestionAndSecurityAnswer(String userEmail, SecurityQuestion securityQuestion,
			String securityAnswer) throws GeneralSecurityException, IOException{
		User u= userdao.findByUserEmailAndSecurityQuestionAndSecurityAnswer(userEmail, securityQuestion, securityAnswer);
		if(u!=null)
		{
			String pwd=AESAlgorithm.dt(u.getPassword());
			System.out.println("decrypted password is"+pwd);
			return pwd;
		}
		else
		{
			return null;
		}
		
	
			
	}

	
		

}
