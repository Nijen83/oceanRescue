package com.example.oceanRescue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;
@Controller
public class oceanRescueController {

    @Autowired
    ScoreRepo scoreRepo;

    @GetMapping("/")
    public String goToGame(Model model) {
        List<Score> scores = scoreRepo.findTop10ByOrderByScoreDesc();
        model.addAttribute("scores", scores);
        return "home";
    }

    @PostMapping("/save")
    public String saveScore(@ModelAttribute Score score) {
        scoreRepo.save(score);
        return "redirect:/";
    }
}
