package com.sc.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {
	
	@RequestMapping(value = { "/", "/((?!login$){path:[^\\.]*})" })
    public String index() {
        return "forward:/index.html";
    }

}
