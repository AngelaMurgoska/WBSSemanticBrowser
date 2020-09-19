package com.angeladragana.finki.seminant;

import com.angeladragana.finki.seminant.security.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.servlet.FilterRegistration;

@SpringBootApplication
@EnableJpaRepositories("com.angeladragana.finki.seminant.repository")
public class WbsSemanticBrowserApplication {

    public static void main(String[] args) {
        SpringApplication.run(WbsSemanticBrowserApplication.class, args);
    }

    @Bean
    public FilterRegistrationBean jwtFilter() {
        final FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
        filterRegistrationBean.setFilter(new JwtFilter());
        filterRegistrationBean.addUrlPatterns("/api/query/*");
        filterRegistrationBean.addUrlPatterns("/api/endpoint/*");
        return filterRegistrationBean;
    }
}
