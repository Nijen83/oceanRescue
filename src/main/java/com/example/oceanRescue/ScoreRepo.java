package com.example.oceanRescue;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ScoreRepo extends JpaRepository<Score, Long> {

    List<Score> findTop10ByOrderByScoreDesc();

}
