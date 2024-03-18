package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IDecorationdao;
import com.app.dao.IMealdao;
import com.app.dao.IUserdao;
import com.app.dao.IVenuedao;
import com.app.dto.UserDTO;
import com.app.dto.VenueDTO;
import com.app.pojos.Decoration;
import com.app.pojos.Meal;
import com.app.pojos.Role;
import com.app.pojos.Venue;

@Service
@Transactional
public class IAdminServiceImpl implements IAdminService {
	@Autowired
	private IUserdao userdao;
	@Autowired
	private IVenuedao venuedao;
	@Autowired
	private IMealdao mealdao;
	@Autowired
	private IDecorationdao decorationdao;
	
	public IAdminServiceImpl() {
		System.out.println(" in admin service impl def contructor");
	}
	
	

	@Override
	public List<UserDTO> getAllAdmins() {
		List<UserDTO> list=new ArrayList<UserDTO>();
		userdao.findAll().stream().filter(user->user.getUserRole().equals(Role.ADMIN)).forEach(user->{
			UserDTO userDTO=new UserDTO();
			BeanUtils.copyProperties(user, userDTO,"password");
			System.out.println("db user : "+user);
			System.out.println("dto user : "+userDTO);
			list.add(userDTO);
		});
		System.out.println(" in getAllAdmins of service after list of DTO : "+list);
		return list;
	}



	@Override
	public List<UserDTO> getAllUsers() {
		List<UserDTO> list=new ArrayList<UserDTO>();
		userdao.findAll().stream().forEach(user->{
			UserDTO userDTO=new UserDTO();
			if(user.getUserRole()!=Role.ADMIN) {
				BeanUtils.copyProperties(user, userDTO,"password");
				System.out.println("db user : "+user);
				System.out.println("dto user : "+userDTO);
				list.add(userDTO);
			}
			
		});
		System.out.println(" in getAllusers of service after list of DTO : "+list);
		return list;
	}

	@Override
	public List<VenueDTO> getAllVenues() {
		List<VenueDTO> list=new ArrayList<>();
		venuedao.findAll().forEach(venue->{
			VenueDTO venueDTO=new VenueDTO();
			BeanUtils.copyProperties(venue, venueDTO,"password");
			UserDTO userDTO=new UserDTO();
			BeanUtils.copyProperties(venue.getVenueProprietor(), userDTO,"password");
			venueDTO.setVenueProprietor(userDTO);
			//System.out.println("db user : "+venue);
			//System.out.println("dto user : "+venueDTO);
			System.out.println("venue addresss: "+venue.getVenueAddress());
			System.out.println("venueDTO address: "+venueDTO.getVenueAddress());
			list.add(venueDTO);
		});
		System.out.println(" in getAllusers of service after list of DTO : "+list);
		return list;
	}
	
	@Override
	public void deleteUserById(int userId) {
		userdao.deleteById(userId);
	}
	
	

	
	
	
}
