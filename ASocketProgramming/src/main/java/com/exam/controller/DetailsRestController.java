package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.Details;
import com.exam.service.DetailsService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:1841")
public class DetailsRestController {

	@Autowired
	DetailsService service;
	
	@GetMapping("/details")
	@CrossOrigin(origins = "http://localhost:1841")
	public List<Details> allDetails(){
		return service.getAllDetails();
	}
	
	@PostMapping("/saveDetails")
	@CrossOrigin(origins = "http://localhost:1841")
	public void doSave(@RequestBody Details details) {
		service.doSave(details);
	}
	@PutMapping("/updateDetails")
	@CrossOrigin(origins = "http://localhost:1841")
	public void doUpdate(@RequestBody Details details) {
		service.doUpdate(details);
	}
	@DeleteMapping("deleteDetails")
	@CrossOrigin(origins = "http://localhost:1841")
	public void doDelete(@RequestBody Details details) {
		service.doDelete(details);
	}
	
}
