package com.drpicox.library.patrons;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.LinkedHashMap;
import java.util.Map;

@Entity
public class Patron {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @JsonCreator
    public Patron(
        @JsonProperty("id") Long id,
        @JsonProperty("name") String name) {

        this.id = id;
        this.name = name;
    }

    public static Patron withId(Long id) {
        if (id == null) return null;

        return new Patron(id, null);
    }

    @JsonValue
    public Map getJsonObject() {
        Map result = new LinkedHashMap();
        result.put("id", id);
        result.put("name", name);
        return result;
    }

    public Long getId() {
        return id;
    }


    Patron() {}

}
