package com.example.oceanRescue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class oceanRescueController {

    @Autowired
    ScoreRepo scoreRepo;

    @GetMapping("/")
    public String goToGame() {
        return "home";
    }

    public String showHighScore(Model model) {
       model.addAttribute("scores", scoreRepo.findAll());
       return "scores";
    }


}
