package com.neu.Appointment.DAO;

import java.util.ArrayList;

import org.hibernate.Query;
import org.hibernate.Session;

import com.neu.Appointment.POJO.Patient;
import com.neu.Appointment.POJO.TimeSlot;

public class TimeSlotDAO extends DAO {

	public void createTimeSlot(String time) {

		try {
			Session session = getSession();
			session.beginTransaction();

			TimeSlot timeSlot = new TimeSlot(time);

			session.save(timeSlot);
			session.getTransaction().commit();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public TimeSlot getTimeSlot(int timeSlotId) {

		Query query = null;
		TimeSlot timeSlot = null;

		try {
			Session session = getSession();
			session.beginTransaction();

			query = session.createQuery("from TimeSlot where timeSlotId = :uid");
			query.setInteger("uid", timeSlotId);
			
			timeSlot = (TimeSlot) query.uniqueResult();

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return timeSlot;
	}
	
	public ArrayList<TimeSlot> getTimeSlotListForDoctor(String doctor, String date){
		
		Query query = null;
		ArrayList<TimeSlot> timeSlotList = null;

		try {
			Session session = getSession();
			session.beginTransaction();

			query = session.createQuery("from TimeSlot");
			//query.setInteger("uid", timeSlotId);
			
			timeSlotList = (ArrayList<TimeSlot>) query.list();

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return timeSlotList;
	}

}
