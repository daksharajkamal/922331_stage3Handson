package com.cts.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.cts.Repository.IEmployeeRepository;
import com.cts.entity.Employee;

public class EmployeeService{

	@Autowired
	private IEmployeeRepository repo;
	
	public Employee getEmployeeById(int eid) {
		return repo.getById(eid);
	}
	
	public List<Employee> getAllEmployees(){
		return repo.findAll();
	}
	
	public String addEmployee(Employee e) {
		repo.saveAndFlush(e);
		return "Employee added";
	}
	
	public String updateEmployee(Employee employee){
		Optional<Employee> op=repo.findById(employee.getEid());
		if(op.isPresent()) {
			repo.saveAndFlush(employee);
			return "Employee Updated!!!!";
		}	
		else {
			return "Employee Not Available!!!!";
		}
	}
	

	public void removeEmployee(int eid){
		Optional<Employee> op=repo.findById(eid);
		if(op.isPresent()) {
			repo.delete(op.get());
		}	
	}

	public List<Employee> getPermanent(){
		return repo.getAllPermanentEmployees();
	}
	
	public double getAvgSalary() {
		return repo.getAverageSalary();
	}
	
	public double getAvgSalary(int id) {
		return repo.getAverageSalary(id);
	}
	
	public List<Employee> getEmployeesNative(){
		return repo.getAllEmployeesNative();
	}
}
