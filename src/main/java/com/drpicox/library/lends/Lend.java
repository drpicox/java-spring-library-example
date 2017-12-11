package com.drpicox.library.lends;

import com.drpicox.library.materials.Material;
import com.drpicox.library.patrons.Patron;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.LinkedHashMap;
import java.util.Map;

@Entity
public class Lend {

    @Id
    @GeneratedValue
    private Long id;

    private Long lendingDate;
    private Long receivingDate;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Patron patron;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Material material;

    public Lend(Long id, Patron patron, Material material, Long lendingDate, Long receivingDate) {
        this.id = id;
        this.patron = patron;
        this.material = material;
        this.lendingDate = lendingDate;
        this.receivingDate = receivingDate;
    }

    @JsonCreator
    public Lend(
            @JsonProperty("id") Long id,
            @JsonProperty("patronId") Long patronId,
            @JsonProperty("materialId") Long materialId,
            @JsonProperty("lendingDate") Long lendingDate,
            @JsonProperty("receivingDate") Long receivingDate) {
        this(id, Patron.withId(patronId), Material.withId(materialId), lendingDate, receivingDate);
    }

    @JsonValue
    public Map getJsonObject() {
        Map result = new LinkedHashMap();
        result.put("id", id);
        result.put("patronId", patron != null ? patron.getId() : null);
        result.put("materialId", material != null ? material.getId() : null);
        result.put("lendingDate", lendingDate);
        result.put("receivingDate", receivingDate);
        return result;
    }

    public Long getId() {
        return id;
    }


    Lend() {}

}
