package com.onlinetest.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.onlinetest.services.OnlineTestService;

@Controller
public class HomeController {
	
	@Autowired
	private OnlineTestService testService;
	
    @RequestMapping(value="/")
    public ModelAndView home(){
        ModelAndView view = new ModelAndView("home");
        return view;
    }
    
    @RequestMapping(value="/saveUser", method=RequestMethod.POST)
    public @ResponseBody String saveUser(@ModelAttribute(value="email_id") String email_id) {
    	int userId = testService.saveUser(email_id);
    	
    	JSONObject obj = new JSONObject();
    	try {
    		obj.put("id", userId);
        	if (userId > 0) {
        		obj.put("is_success", "success");
        	} else {
        		obj.put("is_success", "error");
        	}
    	} catch(Exception e) {
    		
    	}
    	
    	System.out.print(obj.toJSONString());
    	return obj.toJSONString();
    }
    
    @RequestMapping(value="/saveAnswer", method=RequestMethod.POST)
    public @ResponseBody String saveAnswer(@ModelAttribute(value="form_data") String form_data, @ModelAttribute(value="userId") int userId) {
    	testService.saveAnswer(form_data, userId);
    	
        
    	return "success";
    }
}
