package com.example.oceanRescue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class oceanRescueController {

    @GetMapping("/")
    public String goToGame() {
        return "home";
    }
}
