package com.neu.Appointment.controller.Patient;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neu.Appointment.DAO.PatientDAO;
import com.neu.Appointment.POJO.Doctor;
import com.neu.Appointment.POJO.Patient;

@RestController
public class PatientController {

	PatientDAO patientDAO = new PatientDAO();
	
	@RequestMapping("/getPatientList")
    public List<Patient> getPatientList() {
        
		ArrayList<Patient> patientList = patientDAO.getPatientList();
		
		return patientList;
    }
	
}
