package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Decoration;
@Repository
public interface IDecorationdao extends JpaRepository<Decoration,Integer>{

}
