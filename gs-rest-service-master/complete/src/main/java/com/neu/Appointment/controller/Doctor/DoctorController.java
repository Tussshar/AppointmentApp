package com.neu.Appointment.controller.Doctor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neu.Appointment.Greeting;
import com.neu.Appointment.DAO.AppointmentDAO;
import com.neu.Appointment.DAO.DoctorDAO;
import com.neu.Appointment.DAO.PatientDAO;
import com.neu.Appointment.DAO.TimeSlotDAO;
import com.neu.Appointment.POJO.Appointment;
import com.neu.Appointment.POJO.Doctor;

@RestController
public class DoctorController {
	
	DoctorDAO doctorDao = new DoctorDAO();
	
	@RequestMapping("/getDoctorList")
    public List<Doctor> getDoctorList() {
        
		ArrayList<Doctor> doctorList = doctorDao.getDoctorList();
		
		return doctorList;
    }
	
}
