package com.drpicox.library.lends;


import com.drpicox.library.RestHelper;
import com.drpicox.library.materials.MaterialsHelper;
import com.drpicox.library.patrons.PatronsHelper;
import com.drpicox.library.materials.Material;
import com.drpicox.library.patrons.Patron;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
public class LendsTests {


    private MediaType contentType;

    private MockMvc mockMvc;

    @Autowired
    private RestHelper rest;

    @Autowired
    private LendsHelper lends;

    @Autowired
    private MaterialsHelper materials;

    @Autowired
    private PatronsHelper patrons;


    @Before
    public void setup() throws Exception {
        this.mockMvc = rest.createMockMvc();
        this.contentType = rest.getContentType();

        lends.cleanup();
    }


    @Test
    public void createLend() throws Exception {
        Patron bea = patrons.make("bea");
        Patron cally = patrons.make("cally");
        Material material = materials.make(cally, "material");
        String lendJson = json(new Lend(null, bea, material, 20180101L, 20180110L));

        this.mockMvc.perform(post("/lends")
                .contentType(contentType)
                .content(lendJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.lendingDate", is(20180101)))
                .andExpect(jsonPath("$.receivingDate", is(20180110)))
                .andExpect(jsonPath("$.id", isA(Number.class)))
                .andExpect(jsonPath("$.patronId", is(bea.getId().intValue())))
                .andExpect(jsonPath("$.materialId", is(material.getId().intValue())));
    }

    @Test
    public void getLend() throws Exception {
        Lend expectedLend = lends.stub();

        this.mockMvc.perform(get("/lends/" + expectedLend.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", is(object(expectedLend))));
    }

    @Test
    public void getLends() throws Exception {
        Lend lend1 = lends.stub();
        Lend lend2 = lends.stub();

        this.mockMvc.perform(get("/lends"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", containsInAnyOrder(object(lend1), object(lend2))));
    }

    @Test
    public void updateLend() throws Exception {
        Lend originalLend = lends.stub();

        Lend newLend = new Lend(originalLend.getId(), (Patron) null, null, 1234L, 5678L);

        this.mockMvc.perform(put("/lends/" + originalLend.getId())
            .contentType(contentType)
            .content(json(newLend)))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.receivingDate", is(5678)));
    }

    private String json(Object o) throws IOException {
        return rest.toJson(o);
    }

    private Object object(Object o) throws IOException {
        return rest.eraseType(o);
    }
}
