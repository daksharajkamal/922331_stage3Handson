package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.ormlearn.CountryRepository.CountryRepository;
import com.cognizant.ormlearn.model.Country;

@Service
public class CountryService {
	@Autowired
	private CountryRepository repo;
	@Transactional
	public List<Country> getAllCountries(){
		return repo.findAll();
	}
	
	public Optional<Country> findCountryByCode(String s) {
		return repo.findByCode(s);
	}
	
	public String addCountry(Country c) {
		repo.save(c);
		return "Country added!!!";
	}
	public String updateCountry(Country c){
		Optional<Country> op = repo.findByCode(c.getCode());
		if(op.isPresent()) {
			repo.saveAndFlush(c);
			return "Country Updated!!!!";
		}	
		else {
			return "Country Not Available";
		}
			
	}
	public String removeCountry(String cid){
		Optional<Country> op=repo.findByCode(cid);
		if(op.isPresent()) {
			repo.delete(op.get());
			return "Country Deleted!!!!";
		}	
		else {
			return "Country Not Available";
		}
			
	}
	public List<Country> searchCountryLike(String name){
		return repo.findCountryLike(name);
	}
}
