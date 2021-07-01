package com.cts.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class Skill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int sid;
	@Column
	private String name;
	
	public Skill(int id, String name) {
		super();
		this.sid = id;
		this.name = name;
	}

	public Skill() {
		super();
	}

	@Override
	public String toString() {
		return "Skill [id=" + sid + ", name=" + name + "]";
	}
	
	
}
