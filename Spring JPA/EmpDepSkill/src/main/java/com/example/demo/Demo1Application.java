package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cts.entity.Employee;
import com.cts.services.EmployeeService;
import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;

@SpringBootApplication
public class Demo1Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Demo1Application.class, args);
		Logger logger = LoggerFactory.getLogger(Demo1Application.class);
		logger.info("Start");
		
		EmployeeService es=(EmployeeService)ctx.getBean("EmpService");
		Employee employee = es.getEmployeeById(1);
		
		logger.debug("Skills:{}", employee.getSkillList());
		logger.info("End");
		
	}
	
		
}
