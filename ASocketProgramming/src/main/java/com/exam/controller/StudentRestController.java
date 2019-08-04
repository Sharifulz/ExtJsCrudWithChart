package com.exam.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.Student;
import com.exam.service.StudentService;

@RestController
@EnableScheduling
@Configuration
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:62218")
public class StudentRestController extends Thread  {
	
	@Autowired
	StudentService service;
	@Autowired
	SimpMessagingTemplate template;
	 
	@GetMapping("/student")
	@CrossOrigin(origins = "http://localhost:62218")
	public List<Student> allStudentApi(){
		return service.allStudent();
	}

	@PostMapping("/save")
	@CrossOrigin(origins = "http://localhost:62218")
	public void saveStudent(@RequestBody Student stu) {
		service.doSave(stu);
	}
	@PutMapping("/update")
	@CrossOrigin(origins = "http://localhost:62218")
	public void updateStudent(@RequestBody Student stu) {
		service.doUpdate(stu);
	}
	@DeleteMapping("/delete")
	@CrossOrigin(origins = "http://localhost:62218")
	public void deleteStudent(@RequestBody Student stu) {
		service.doDelete(stu);
	}
	 @RequestMapping("/process") 
	 public void Process() {
		 int x=0;
		 while(true) {
			 System.out.println(x++);
		}
	 }
	 
	 
	 
	 @RequestMapping("/progress") 
	 public String  Progress() throws InterruptedException {
		 TimeUnit.MINUTES.sleep(1);
		 return "End";
		
	 }
	 
	 // @Scheduled(fixedDelay = 3000) 
	  public void sendAdhocMessages() { 
		  List<Student> studentList = new ArrayList<Student>(); 
		  studentList = service.allStudent();
	  template.convertAndSend("/topic/user", studentList);
	  	}
	 

	 
	@RequestMapping("/allStu")
	public List<Student> allStudent(){
		return service.allStudent();
	}
	
}
