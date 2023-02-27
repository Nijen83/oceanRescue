package com.example.oceanRescue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
public class oceanRescueController {

    @Autowired
    ScoreRepo scoreRepo;

    @GetMapping("/")
    public String goToGame(Model model) {
        List<Score> scores = scoreRepo.findAllByOrderByScoreDesc();
        model.addAttribute("scores", scores);
        return "home";
    }
}
