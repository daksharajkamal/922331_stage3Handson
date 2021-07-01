package com.cts.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int eid;
	@Column
	private String name;
	@Column
	private double salary;
	@Column
	private Boolean permanent;
	@Column
	private Date dateOfBirth;
	
	@ManyToOne
	@JoinColumn(name = "em_dp_id")
	private Department department;
	
	@ManyToMany
	@JoinTable(name = "employee_skill",
			joinColumns = @JoinColumn(name = "es_em_id"),
			inverseJoinColumns = @JoinColumn(name = "es_sk_id"))
	private List<Skill> skillList;

	public Employee(int id, String name, double salary, Boolean permanent, Date dateOfBirth) {
		super();
		this.eid = id;
		this.name = name;
		this.salary = salary;
		this.permanent = permanent;
		this.dateOfBirth = dateOfBirth;
	}



	public Employee() {
		super();
	}
	
	@Override
	public String toString() {
		return "Employee [id=" + eid + ", name=" + name + ", salary=" + salary + ", permanent=" + permanent
				+ ", dateOfBirth=" + dateOfBirth ;
	}


	
}
