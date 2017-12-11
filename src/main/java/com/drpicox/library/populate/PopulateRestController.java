package com.drpicox.library.populate;

import com.drpicox.library.lends.Lend;
import com.drpicox.library.lends.LendRestController;
import com.drpicox.library.materials.Material;
import com.drpicox.library.patrons.Patron;
import com.drpicox.library.materials.MaterialRestController;
import com.drpicox.library.patrons.PatronRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/populate")
public class PopulateRestController {

    @Autowired private PatronRestController patrons;
    @Autowired private MaterialRestController materials;
    @Autowired private LendRestController lends;

    @GetMapping
    public PopulateResult populate() {
        if (materials.getMaterials().size() == 0) {
            Patron alice = patrons.createPatron(new Patron(null, "Alice"));
            Patron bea = patrons.createPatron(new Patron(null, "Bea"));
            Patron cally = patrons.createPatron(new Patron(null, "Cally"));

            Material material1 = materials.createMaterial(new Material(null, alice, "Paranoia", "978-0-87431-025-2"));
            Material material2 = materials.createMaterial(new Material(null, bea, "Acute Paranoia", "978-0-87431-034-4"));
            Material material3 = materials.createMaterial(new Material(null, alice, "Clones in Space", "978-0-87431-042-9"));
            Material material4 = materials.createMaterial(new Material(null, alice, "Double Paranoia", "978-1-869893-03-3"));

            Lend lend1 = lends.createLend(new Lend(null, cally, material1, 1514764800000L, 1515542400000L));
            Lend lend2 = lends.createLend(new Lend(null, cally, material2, 1514764800000L, 1515542400000L));
            Lend lend3 = lends.createLend(new Lend(null, cally, material3, 1514764800000L, 1515542400000L));
            Lend lend4 = lends.createLend(new Lend(null, cally, material4, 1514764800000L, 0L));
            Lend lend5 = lends.createLend(new Lend(null, bea, material3, 1515542400000L, 0L));
        }

        return new PopulateResult(
                lends.getLends(),
                materials.getMaterials(),
                patrons.getPatrons()
        );
    }
}
