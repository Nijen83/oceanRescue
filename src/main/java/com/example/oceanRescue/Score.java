package com.example.oceanRescue;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;

@Entity(name = "highscore")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    int score;
    String userName;

    public Score() {
    }

    public Score(int score, String userName) {
        this.score = score;
        this.userName = userName;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
