package com.cognizant.ormlearn.CountryRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String>{
	public Optional<Country> findByCode(String s);
	@Query("select c from Country O where O.name like :%n%")
	public List<Country> findCountryLike(@Param("n") String name);
}
