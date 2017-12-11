package com.drpicox.library.patrons;


import com.drpicox.library.RestHelper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.io.IOException;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
public class PatronsTests {

    private MediaType contentType;

    private MockMvc mockMvc;

    @Autowired
    private RestHelper rest;

    @Autowired
    private PatronsHelper patrons;

    @Before
    public void setup() throws Exception {
        mockMvc = rest.createMockMvc();
        contentType = rest.getContentType();

        cleanup();
    }

    @After
    public void cleanup() throws Exception {
        patrons.cleanup();
    }

    @Test
    public void createPatron() throws Exception {
        String userJson = json(new Patron(null, "bea"));

        this.mockMvc.perform(post("/patrons")
                .contentType(contentType)
                .content(userJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name", is("bea")))
                .andExpect(jsonPath("$.id", isA(Number.class)));
    }

    @Test
    public void getPatrons() throws Exception {
        Patron patron1 = patrons.make("p1");
        Patron patron2 = patrons.make("p2");

        this.mockMvc.perform(get("/patrons"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", containsInAnyOrder(object(patron1), object(patron2))));
    }


    private String json(Object o) throws IOException {
        return rest.toJson(o);
    }

    private Object object(Object o) throws IOException {
        return rest.eraseType(o);
    }
}
