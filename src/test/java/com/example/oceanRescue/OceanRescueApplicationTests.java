package com.example.oceanRescue;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest
class OceanRescueApplicationTests {

	@Autowired
	MockMvc mvc;

	@Autowired
	ScoreRepo scoreRepo;
	@Test
	void contextLoads() {
	}

	@Test
	void testString() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/"));
	}

	@Test
	void findAll() {
		List<Score> scores = scoreRepo.findAll();
		Assert.assertEquals(0, scores.size());
	}


}
