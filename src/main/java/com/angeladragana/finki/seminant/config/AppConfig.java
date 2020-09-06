package com.angeladragana.finki.seminant.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EntityScan
@ComponentScan
@EnableSwagger2
public class AppConfig {
}
