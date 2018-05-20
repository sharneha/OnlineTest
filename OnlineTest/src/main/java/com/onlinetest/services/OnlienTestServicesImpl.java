package com.onlinetest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinetest.dao.OnlineTestDao;

@Service
public class OnlienTestServicesImpl implements OnlineTestService {
	
	@Autowired
    private OnlineTestDao dao;
	
	public int saveUser(String email) {
		int userId = dao.saveUser(email);
		return userId;
	}

	public String saveAnswer(String formPostData, int userId) {
		dao.saveAnswer(formPostData, userId);
		return null;
	}

}
