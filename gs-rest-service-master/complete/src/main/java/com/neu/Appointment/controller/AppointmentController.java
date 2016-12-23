package com.neu.Appointment.controller;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neu.Appointment.Greeting;
import com.neu.Appointment.DAO.AppointmentDAO;
import com.neu.Appointment.DAO.TimeSlotDAO;
import com.neu.Appointment.POJO.Appointment;
import com.neu.Appointment.POJO.TimeSlot;

@RestController
public class AppointmentController {

	AppointmentDAO appDAO = new AppointmentDAO();
	TimeSlotDAO timeSlotDAO = new TimeSlotDAO();
	
	@RequestMapping("/makeAppointment")
    public boolean makeAppointment(@RequestParam(value="doctor") String doctor,
    		@RequestParam(value="patient") String patient, @RequestParam(value="date") String date,
    		@RequestParam(value="time") String time, @RequestParam(value="subject") String subject,
    		@RequestParam(value="notes") String notes) {
        
		boolean flag = true;
		
		flag = appDAO.createAppointment(doctor, patient, date, time, notes, subject);
		
		return flag;
    }
	
	@RequestMapping("/getTimeSlotList")
	public ArrayList<TimeSlot> getTimeSlotList(@RequestParam(value="doctor") String doctor,
			@RequestParam(value="date") String date){
		
		ArrayList<TimeSlot> timeSlotList = timeSlotDAO.getTimeSlotListForDoctor(doctor, date);
		
		return timeSlotList;
	}
	
	@RequestMapping("/getDoctorsAppointmentDetail")
	public ArrayList<Appointment> getDoctorsAppointmentDetail(@RequestParam(value="doctor") String doctor){
		
		ArrayList<Appointment> appointmentList = appDAO.getDoctorsAppointmentDetail(doctor);
		
		return appointmentList;
	}
	
	@RequestMapping("/deleteAppointment")
	public void deleteAppointmentDetails(@RequestParam(value="appointmentId") String appointmentId){
	
		appDAO.deleteAppointment(Integer.parseInt(appointmentId));
		
	}
	
}
