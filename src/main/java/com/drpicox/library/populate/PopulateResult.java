package com.drpicox.library.populate;

import com.drpicox.library.lends.Lend;
import com.drpicox.library.materials.Material;
import com.drpicox.library.patrons.Patron;

import java.util.Collection;

public class PopulateResult {

    public Collection<Lend> lends;
    public Collection<Material> materials;
    public Collection<Patron> patrons;

    public PopulateResult(Collection<Lend> lends, Collection<Material> materials, Collection<Patron> patrons) {
        this.lends = lends;
        this.materials = materials;
        this.patrons = patrons;
    }

    public Collection<Lend> getLends() {
        return lends;
    }

    public Collection<Material> getMaterials() {
        return materials;
    }

    public Collection<Patron> getPatrons() {
        return patrons;
    }

}
