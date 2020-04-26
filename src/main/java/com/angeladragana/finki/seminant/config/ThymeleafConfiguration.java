package com.angeladragana.finki.seminant.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

@Configuration
public class ThymeleafConfiguration {

    @Bean
    @Description("Thymeleaf template resolver serving HTML 5 emails")
    public ClassLoaderTemplateResolver webPageTemplateResolver() {
        ClassLoaderTemplateResolver webPageTemplateResolver = new ClassLoaderTemplateResolver();
        webPageTemplateResolver .setPrefix("templates/");
        webPageTemplateResolver .setSuffix(".html");
        webPageTemplateResolver .setTemplateMode("HTML5");
        webPageTemplateResolver .setOrder(1);
        return webPageTemplateResolver ;
    }
}