package com.cts.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Passenger {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int pid;
	private String name;
	private boolean vip;

	public Passenger(String name, boolean vip) {
		super();
		this.name = name;
		this.vip = vip;
	}

	public Passenger() {

	}

}
