package com.onlinetest.services;

public interface OnlineTestService {
	
	public int saveUser(String email);
	
	public String saveAnswer(String formPostData, int userId);
}
