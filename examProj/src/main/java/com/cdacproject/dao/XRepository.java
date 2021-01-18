package com.cdacproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdacproject.model.User;

@Repository
public interface XRepository extends JpaRepository<User, Integer>{
	

}
