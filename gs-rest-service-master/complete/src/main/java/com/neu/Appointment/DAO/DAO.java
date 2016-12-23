package com.neu.Appointment.DAO;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;



public class DAO {


	public Session getSession() {
		return HibernateUtil.getSessionFactory().openSession();
	}

	protected DAO() {
	}

	protected void begin() {
		getSession().beginTransaction();
	}

	protected void commit() {
		getSession().getTransaction().commit();
	}

	protected void rollback() {
		try {
			getSession().getTransaction().rollback();
		} catch (HibernateException e) {

		}
		try {
			getSession().close();
		} catch (HibernateException e) {
		}
	}

	public void close() {
		getSession().close();
	}
	
	public Object executeQueryForUniqueResult(Query query){
		
		Session session = getSession();
		session.beginTransaction();
		
		Object data = query.uniqueResult();
		
		close();
		
		return data;
	}
}
