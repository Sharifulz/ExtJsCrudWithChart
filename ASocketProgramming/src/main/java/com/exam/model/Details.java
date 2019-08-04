package com.exam.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="socket_details")
public class Details {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String name;
	int age;
	int salary;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public Details(int id, String name, int age, int salary) {
		
		this.id = id;
		this.name = name;
		this.age = age;
		this.salary = salary;
	}
	public Details() {
		
	}
	
	
}
