package com.onlinetest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @RequestMapping(value="/")
    public ModelAndView home(){
        ModelAndView view = new ModelAndView("home");
        return view;
    }
    @RequestMapping(value="/test")
    public ModelAndView home1(){
        ModelAndView view = new ModelAndView("test");
        return view;
    }
}
