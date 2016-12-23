package com.neu.Appointment.DAO;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.neu.Appointment.POJO.Doctor;
import com.neu.Appointment.POJO.Patient;


public class PatientDAO extends DAO {

	public void createPatient(String name, String emailAddress) {

		try {
			Session session = getSession();
			session.beginTransaction();

			Patient patient = new Patient(name, emailAddress);

			session.save(patient);
			session.getTransaction().commit();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
	
	public Patient getPatient(String emailAddress){
		
		Query query = null;
		Patient patient = null;
		
		try{
			Session session = getSession();
			session.beginTransaction();
			
			query = session.createQuery("from Patient where patientEmailAddress = :uid");
			query.setString("uid", emailAddress);
			patient = (Patient) query.uniqueResult();
			
		}catch(Exception ex){
			ex.printStackTrace();
		}
		return patient;
	}
	
public ArrayList<Patient> getPatientList(){
		
		Query query = null;
		List<Patient> patientList = null;
		
		try{
			Session session = getSession();
			session.beginTransaction();
			
			query = session.createQuery("from Patient");
			patientList = (ArrayList)query.list();
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return (ArrayList<Patient>) patientList;
	}

}
