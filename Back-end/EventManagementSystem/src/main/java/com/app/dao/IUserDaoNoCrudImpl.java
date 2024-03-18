package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

@Repository
public class IUserDaoNoCrudImpl implements IUserdaoNoCrud {
	
	@Autowired
	private EntityManager userEntityManager;
	
	public IUserDaoNoCrudImpl() {
		System.out.println(" in iuser dao no crud impl def contructor...");
	}

	@Override
	public User validateUser(String email, String pass) {
		System.out.println("in dao validation method with email : "+email+" pass :"+pass);
		String jpql="select u from User u  where u.userEmail=:email and u.password=:password";
		return userEntityManager.createQuery(jpql, User.class).setParameter("email", email).setParameter("password", pass).getSingleResult();
	}

}
