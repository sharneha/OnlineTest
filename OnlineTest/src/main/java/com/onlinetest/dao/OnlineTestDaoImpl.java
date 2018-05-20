package com.onlinetest.dao;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.onlinetest.modal.User;

@Repository
@Transactional
public class OnlineTestDaoImpl implements OnlineTestDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public int saveUser(String email) {
		int userId = 0;
		User u = new User();
		u.setEmail_id(email);
		
		Session session = sessionFactory.getCurrentSession();
		try {
			int id = (Integer) session.save(u);
			User userDetail = session.get(User.class, id);
			System.out.println(userDetail.getId());
			userId = userDetail.getId();
		} catch(Exception e) {
			System.out.println(e);
		}
		
		return userId;
	}

	public String saveAnswer(String formPostData, int userId) {
		System.out.println("Postdata " + formPostData);
		JSONParser parser = new JSONParser();

		try {
			//json.n
			Object obj = parser.parse(formPostData);
//			JSONArray postData = (JSONArray)obj;
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
