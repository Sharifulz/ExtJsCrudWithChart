package com.exam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.DetailsRepo;
import com.exam.model.Details;

@Service
public class DetailsService {
	@Autowired
	DetailsRepo repo;
	
	public List<Details> getAllDetails(){
		return repo.findAll();
	}
	
	public void doSave(Details details) {
		repo.save(details);
	}
	public void doUpdate(Details details) {
		repo.saveAndFlush(details);
	}
	public void doDelete(Details details) {
		repo.delete(details);
	}
}
