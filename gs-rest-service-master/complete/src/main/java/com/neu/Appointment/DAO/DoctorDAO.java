package com.neu.Appointment.DAO;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.neu.Appointment.POJO.Doctor;
import com.neu.Appointment.POJO.Patient;

public class DoctorDAO extends DAO {

	public void createDoctor(String name, String emailAddress) {

		try {
			Session session = getSession();
			session.beginTransaction();

			Doctor doc = new Doctor(name, emailAddress);

			session.save(doc);
			session.getTransaction().commit();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public Doctor getDoctor(String emailAddress) {

		Query query = null;
		Doctor doctor = null;

		try {
			Session session = getSession();
			session.beginTransaction();

			query = session.createQuery("from Doctor where doctorEmailAddress = :uid");
			query.setString("uid", emailAddress);
			doctor = (Doctor) query.uniqueResult();

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return doctor;
	}
	
	public ArrayList<Doctor> getDoctorList(){
		
		Query query = null;
		List<Doctor> doctorList = null;
		
		try{
			Session session = getSession();
			session.beginTransaction();
			
			query = session.createQuery("from Doctor");
			doctorList = (ArrayList)query.list();
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return (ArrayList<Doctor>) doctorList;
	}

}
