package com.app.dao;

import com.app.pojos.User;

public interface IUserdaoNoCrud {
	User validateUser(String email,String pass);

}
