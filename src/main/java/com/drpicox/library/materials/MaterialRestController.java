package com.drpicox.library.materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/materials")
public class MaterialRestController {

    @Autowired
    private MaterialRepository materialRepository;

    @Autowired
    public MaterialRestController() {
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Material createMaterial(@RequestBody Material material) {
        materialRepository.save(material);
        return material;
    }

    @GetMapping()
    public Collection<Material> getMaterials() {
        return materialRepository.findAll();
    }
}
