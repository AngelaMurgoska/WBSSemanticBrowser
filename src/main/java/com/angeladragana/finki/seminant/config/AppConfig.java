package com.angeladragana.finki.seminant.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@EntityScan
@ComponentScan
@Import(ThymeleafConfiguration.class)
public class AppConfig {
}
