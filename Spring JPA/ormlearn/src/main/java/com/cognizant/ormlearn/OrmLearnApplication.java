package com.cognizant.ormlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

import java.util.List;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;

@SpringBootApplication
public class OrmLearnApplication {
	private static CountryService countryService;
	private static void testGetAllCountries() {
		LOGGER.info("Start");
		List<Country> countries =countryService.getAllCountries();
		LOGGER.debug("countries={}", countries);
		LOGGER.info("End");
		}
	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
		countryService = context.getBean(CountryService.class);
		testGetAllCountries();
		
		String s = countryService.addCountry(new Country("ZW","Zimbabwe"));
		System.out.println(s);
		String s1 = countryService.addCountry(new Country("YE","Yemen"));
		String s2 = countryService.addCountry(new Country("ZM","Zambia"));
		String s3 = countryService.addCountry(new Country("IN","India"));
		
		System.out.println(countryService.findCountryByCode("IN"));
		
		System.out.println(countryService.removeCountry("ZM"));

		System.out.println(countryService.searchCountryLike("in"));

		LOGGER.info("End");

	}

}
