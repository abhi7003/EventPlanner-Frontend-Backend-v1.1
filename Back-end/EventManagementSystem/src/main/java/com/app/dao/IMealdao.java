package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Meal;
@Repository
public interface IMealdao extends JpaRepository<Meal,Integer>{
	
	//find meal by venue id
	

}
