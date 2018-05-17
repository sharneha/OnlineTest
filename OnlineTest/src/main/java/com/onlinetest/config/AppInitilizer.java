package com.onlinetest.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class AppInitilizer extends 
    AbstractAnnotationConfigDispatcherServletInitializer {

@Override
protected Class<?>[] getRootConfigClasses() {
  return new Class[] { HibernateConfig.class };
}

@Override
protected Class<?>[] getServletConfigClasses() {
  return new Class[] { WebMvcConfig.class };
}

@Override
protected String[] getServletMappings() {
  return new String[] { "/" };
}
}

