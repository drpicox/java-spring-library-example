package com.drpicox.library.populate;


import com.drpicox.library.RestHelper;
import com.drpicox.library.lends.LendsHelper;
import com.drpicox.library.materials.MaterialsHelper;
import com.drpicox.library.patrons.PatronsHelper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Map;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
public class PopulateTests {


    private MediaType contentType;

    private MockMvc mockMvc;

    @Autowired
    private RestHelper rest;

    @Autowired
    private LendsHelper comments;

    @Autowired
    private MaterialsHelper posts;

    @Autowired
    private PatronsHelper users;


    @Before
    public void setup() throws Exception {
        this.mockMvc = rest.createMockMvc();
        this.contentType = rest.getContentType();

        comments.cleanup();
        posts.cleanup();
        users.cleanup();
    }

    @Test
    public void populateShouldAddElements() throws Exception {
        this.mockMvc.perform(get("/populate"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.lends.length()", is(greaterThan(0))))
                .andExpect(jsonPath("$.materials.length()", is(greaterThan(0))))
                .andExpect(jsonPath("$.patrons.length()", is(greaterThan(0))));
    }

    @Test
    public void populateShouldNoAddElementsIfThereWasSomePost() throws Exception {
        posts.make("some post");

        this.mockMvc.perform(get("/populate"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.lends.length()", is(0)))
                .andExpect(jsonPath("$.materials.length()", is(1)))
                .andExpect(jsonPath("$.patrons.length()", is(0)));
    }


    @Test
    public void populateShouldReturnTheSameThatOtherGetters() throws Exception {
        String jsonResult = this.mockMvc.perform(get("/populate"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();

        Map result = rest.fromJson(jsonResult);

        // Note that verifies the correct output against well tested services
        this.mockMvc.perform(get("/lends"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(result.get("lends"))));

        this.mockMvc.perform(get("/materials"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(result.get("materials"))));

        this.mockMvc.perform(get("/patrons"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(result.get("patrons"))));
    }

}
