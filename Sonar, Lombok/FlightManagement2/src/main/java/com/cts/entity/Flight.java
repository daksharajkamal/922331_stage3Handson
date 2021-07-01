package com.cts.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
public class Flight {
	@Id
	private String fid;
	private String flightType;
	
	@OneToMany
	@JoinTable(name = "FlightPassenger", joinColumns = {@JoinColumn(name = "fid", referencedColumnName = "fid") },
	inverseJoinColumns = {@JoinColumn(name = "pid", referencedColumnName = "pid") })
	private List<Passenger> passengers;
	
	public Flight(String fid, String flightType) {
		super();
		this.fid = fid;
		this.flightType = flightType;
		this.passengers = new ArrayList<>();
	}

	public Flight() {

	}
}
