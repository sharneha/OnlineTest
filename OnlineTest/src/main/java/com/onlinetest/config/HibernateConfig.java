package com.onlinetest.config;

import java.io.IOException;
import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@ComponentScan({"com.onlinetest"})
@PropertySource(value = {"classpath:application.properties"})
public class HibernateConfig {

        @Autowired
        private Environment env;

        /**
         * @return HibernateTemplate object.
         */
        /*@Bean
        public HibernateTemplate hibernateTemplate() {
            return new HibernateTemplate(sessionFactory());
        }*/

        /**
         * This method used to expose the entity package to spring bean factory.
         * 
         * @return SessionFactory object
         */
        @Bean
        public SessionFactory sessionFactory() {
            final LocalSessionFactoryBean lsfb = new LocalSessionFactoryBean();
            try {
                lsfb.setDataSource(getDataSource());
                lsfb.setPackagesToScan("com.onlinetest.modal");
                lsfb.setHibernateProperties(hibernateProperties());
                lsfb.afterPropertiesSet();
            } catch (IOException e) {
            }
            return lsfb.getObject();
        }

        /**
         * Fetch all necessary information regarding Database details form properties file.
         * 
         * @author asghark
         * @return data source object.
         */
        @Bean
        public DataSource getDataSource() {
            final BasicDataSource dataSource = new BasicDataSource();
            dataSource.setDriverClassName(env.getProperty("database.driver"));
            dataSource.setUrl(env.getProperty("database.url"));
            dataSource.setUsername(env.getProperty("database.root"));
            dataSource.setPassword(env.getProperty("database.password"));
            return dataSource;
        }

        /**
         * This method is used to fetch all information of database through properties file.
         * 
         * @author asghark
         * @return HibernateTransactionManager to database DML perform.
         */
        @Bean
        public HibernateTransactionManager hibTransMan() {
            return new HibernateTransactionManager(sessionFactory());
        }

        /**
         * Used to set all properties for database from properties file.
         * 
         * @author asghark
         * @return Properties with all information regarding database.
         */
        private Properties hibernateProperties() {
            final Properties properties = new Properties();
            properties.put("hibernate.dialect", env.getProperty("hibernate.dialect"));
            properties.put("hibernate.hbm2ddl.auto", env.getProperty("hibernate.hbm2ddl.auto"));
            properties.put("hibernate.show_sql", env.getProperty("hibernate.show_sql"));
            return properties;
        }

    }
