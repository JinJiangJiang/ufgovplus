package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.WebApplicationInitializer;


/**
 * Created by biu on 2018/2/26.
 */
//StringBoot1.2+中使用@SpringBootApplication代替以下三个注解
//@Configuration
//@ComponentScan
//@EnableAutoConfiguration

//@EnableTransactionManagement注解表示开启事务，相当于XML中<tx:annotation-driven/>

@SpringBootApplication
@EnableTransactionManagement
public class Application extends SpringBootServletInitializer implements WebApplicationInitializer {


    //@Autowired
    //private DataSource dataSource;

    // 自定义事务管理器
    //@Bean
    //public PlatformTransactionManager txManager(DataSource dataSource){
        //return new DataSourceTransactionManager(dataSource);
    //}

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    // 重写SpringBootServletInitializer的configure方法，实现MVC
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(Application.class);
    }

    //@Bean
    //public SqlSessionFactory sqlSessionFactory() throws Exception {
        //SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        //sessionFactory.setDataSource(dataSource);
        //return sessionFactory.getObject();
    //}

//    @Override
//    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
//        configurer.favorPathExtension(false);
//    }

}
