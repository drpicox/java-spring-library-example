package com.drpicox.library.materials;

import com.drpicox.library.patrons.Patron;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MaterialsHelper {

    @Autowired
    private MaterialRepository materialRepository;

    public void cleanup() throws Exception {
        materialRepository.deleteAllInBatch();
    }

    public Material make(String title) {
        return make(null, title, title + " isbn");
    }

    public Material make(String title, String isbn) {
        return make(null, title, isbn);
    }

    public Material make(Patron patron, String title) {
        return make(patron, title, title + " isbn");
    }

    public Material make(Patron patron, String title, String isbn) {
        Material material = new Material(null, patron, title, isbn);
        materialRepository.save(material);
        return material;
    }
}
