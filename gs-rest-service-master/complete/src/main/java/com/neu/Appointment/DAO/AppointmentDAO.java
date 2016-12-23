package com.neu.Appointment.DAO;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.neu.Appointment.POJO.Appointment;
import com.neu.Appointment.POJO.Doctor;
import com.neu.Appointment.POJO.Patient;

public class AppointmentDAO extends DAO{

public boolean createAppointment(String doctor, String patient, String date, String time, String notes, String subject){
		
	DoctorDAO ddao = new DoctorDAO();
	PatientDAO pdao = new PatientDAO();
	TimeSlotDAO tdao = new TimeSlotDAO();
	
		try{
			Session session = getSession();
			session.beginTransaction();
			
			Appointment app = new Appointment();
			app.setDoctor(ddao.getDoctor(doctor));
			app.setPatient(pdao.getPatient(patient));
			app.setTime(tdao.getTimeSlot(Integer.parseInt(time)));
			
			app.setDate(date);
			app.setSubject(subject);
			app.setNotes(notes);
			
			session.save(app);
			session.getTransaction().commit();
		}catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
		
		return true;
	}

	public ArrayList<Appointment> getDoctorsAppointmentDetail(String doctor){
		
		Query query = null;
		List<Appointment> appointmentList = null;
		
		try{
			Session session = getSession();
			session.beginTransaction();
			
			query = session.createQuery("from Appointment where doctorEmailAddress = :uid");
			query.setString("uid", doctor);
			
			appointmentList = (ArrayList)query.list();
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return (ArrayList<Appointment>) appointmentList;

	}
	
	public void deleteAppointment(int appointmentId){
		
		Query query = null;
		
		try{
			Session session = getSession();
			session.beginTransaction();
			
			query = session.createQuery("delete Appointment where appointmentId =:appId");
			query.setInteger("appId", appointmentId);
			
			int result = query.executeUpdate();
			
			session.getTransaction().commit();
		}catch(Exception ex){
			ex.printStackTrace();
		}
	}
	
}
