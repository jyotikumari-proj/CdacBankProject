package com.cdacproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdacproject.dao.XRepository;
import com.cdacproject.model.User;
import com.cdacproject.model.UserStatus;

@Service
public class ServiceLayer {
	
@Autowired
XRepository repository;

	public User register(User user) {
		if (repository.existsById(user.getId())) {
			user.setId(0);
			System.out.println("already user exist="+user.getUserId());

		} else
			repository.save(user);

		return user;
	}


	public UserStatus userLogin(String userId, String password) {
		// TODO Auto-generated method stub
		UserStatus userStatus=new UserStatus();
		List<User> list=repository.findAll();
		System.out.println("list size="+list.size());
        
		for(User u:list)
		{
			if(u.getUserId().equals(userId) && u.getPassword().equals(password))
			{
				System.out.println("inside if block in login page");
				userStatus.setStatus("Succesfully Login!!!");
				break;
			}
			else
			{
				userStatus.setStatus("User Doed Not exist");
				
			}
			
		}
		return userStatus;
		
		
	}
	
}
