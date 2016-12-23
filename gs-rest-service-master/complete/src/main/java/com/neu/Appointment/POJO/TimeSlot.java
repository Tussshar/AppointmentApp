package com.neu.Appointment.POJO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "TIME_SLOT")
public class TimeSlot {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int timeSlotId;
	
	@NotNull
	@Column(name = "time")
	private String time;
	
	public TimeSlot(){
		
	}
	
	public TimeSlot(String time){
		this.time = time;
	}

	public int getTimeSlotId() {
		return timeSlotId;
	}

	public void setTimeSlotId(int timeSlotId) {
		this.timeSlotId = timeSlotId;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
}
