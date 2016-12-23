package com.neu.Appointment.POJO;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name = "PATIENT")
public class Patient {
	
	@NotNull
	private String name;
	
	@Id
	private String patientEmailAddress;
	
	@OneToMany(mappedBy = "patient")
	private Set<Appointment> appointmentRecords = new HashSet<Appointment>();
	
	public Patient(){
		
	}
	
	public Patient(String name, String emailAddress){
		this.name = name;
		this.patientEmailAddress = emailAddress;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailAddress() {
		return patientEmailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.patientEmailAddress = emailAddress;
	}
}
