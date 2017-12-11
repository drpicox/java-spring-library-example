package com.drpicox.library.materials;

import com.drpicox.library.patrons.Patron;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.LinkedHashMap;
import java.util.Map;

@Entity
public class Material {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String isbn;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Patron patron;

    public Material(Long id, Patron patron, String title, String isbn) {
        this.id = id;
        this.patron = patron;
        this.title = title;
        this.isbn = isbn;
    }

    public static Material withId(Long postId) {
        if (postId == null) return null;

        return new Material(postId, (Patron) null, null, null);
    }

    @JsonCreator
    public Material(
            @JsonProperty("id") Long id,
            @JsonProperty("patronId") Long patronId,
            @JsonProperty("title") String title,
            @JsonProperty("isbn") String isbn) {
        this(id, Patron.withId(patronId), title, isbn);
    }

    @JsonValue
    public Map getJsonObject() {
        Map result = new LinkedHashMap();
        result.put("id", id);
        result.put("title", title);
        result.put("isbn", isbn);
        result.put("patronId", patron != null ? patron.getId() : null);
        return result;
    }

    public Long getId() {
        return id;
    }


    Material() {}
}
