package com.drpicox.library.materials;


import com.drpicox.library.patrons.PatronsHelper;
import com.drpicox.library.RestHelper;
import com.drpicox.library.patrons.Patron;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
public class MaterialsTests {


    private MediaType contentType;

    private MockMvc mockMvc;

    @Autowired
    private RestHelper rest;

    @Autowired
    private MaterialsHelper materials;

    @Autowired
    private PatronsHelper patrons;


    @Before
    public void setup() throws Exception {
        this.mockMvc = rest.createMockMvc();
        this.contentType = rest.getContentType();

        cleanup();
    }

    @After
    public void cleanup() throws Exception {
        materials.cleanup();
        patrons.cleanup();
    }


    @Test
    public void createMaterial() throws Exception {
        Patron bea = patrons.make("bea");
        String postJson = json(new Material(null, bea,
                "great book", "978-0-87431-025-2"));

        this.mockMvc.perform(post("/materials")
                .contentType(contentType)
                .content(postJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.title", is("great book")))
                .andExpect(jsonPath("$.isbn", is("978-0-87431-025-2")))
                .andExpect(jsonPath("$.id", isA(Number.class)))
                .andExpect(jsonPath("$.patronId", is(bea.getId().intValue())));
    }

    @Test
    public void getMaterials() throws Exception {
        Material material1 = materials.make("t1", "b1");
        Material material2 = materials.make("t2", "b2");

        this.mockMvc.perform(get("/materials"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", containsInAnyOrder(object(material1), object(material2))));
    }

    private String json(Object o) throws IOException {
        return rest.toJson(o);
    }

    private Object object(Object o) throws IOException {
        return rest.eraseType(o);
    }
}
