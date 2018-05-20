package com.onlinetest.dao;


public interface OnlineTestDao {
	public int saveUser(String email);
	
	public String saveAnswer(String formPostData, int userId);
}
