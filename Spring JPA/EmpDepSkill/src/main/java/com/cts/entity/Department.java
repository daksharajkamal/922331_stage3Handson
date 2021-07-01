package com.cts.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Department {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int did;
	@Column
	private String name;
	
	@OneToMany(mappedBy = "department", fetch = FetchType.EAGER)
	private List<Employee> employeeList;
	
	public Department(int id, String name) {
		super();
		this.did = id;
		this.name = name;
	}

	public Department() {
		super();
	}

	@Override
	public String toString() {
		return "Department [id=" + did + ", name=" + name + "]";
	}
	
	
}
