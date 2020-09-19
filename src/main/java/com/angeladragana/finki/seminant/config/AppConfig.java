package com.angeladragana.finki.seminant.config;

import com.angeladragana.finki.seminant.WebComponents;
import com.angeladragana.finki.seminant.security.WebSecurity;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EntityScan(basePackageClasses = {WebComponents.class})
@ComponentScan(basePackageClasses = {WebComponents.class})
@Import({WebSecurity.class})
@EnableSwagger2
public class AppConfig {
}
