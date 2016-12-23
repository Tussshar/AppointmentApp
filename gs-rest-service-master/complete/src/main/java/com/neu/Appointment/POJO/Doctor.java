package com.neu.Appointment.POJO;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name = "DOCTOR")
public class Doctor implements Serializable{
	
	@NotNull
	private String name;
	
	@Id
	private String doctorEmailAddress;
	
	@OneToMany(mappedBy = "doctor")
	private Set<Appointment> appointmentRecords = new HashSet<Appointment>();
	
	public Doctor(){
		
	}
	
	public Doctor(String name, String emailAddress){
		this.name = name;
		this.doctorEmailAddress = emailAddress;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailAddress() {
		return doctorEmailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.doctorEmailAddress = emailAddress;
	}
}
