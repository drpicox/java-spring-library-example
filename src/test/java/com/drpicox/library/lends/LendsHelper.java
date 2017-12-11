package com.drpicox.library.lends;

import com.drpicox.library.patrons.Patron;
import com.drpicox.library.materials.Material;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LendsHelper {

    @Autowired
    private LendRepository lendRepository;

    public void cleanup() throws Exception {
        lendRepository.deleteAllInBatch();
    }

    public Lend stub() {
        return stub(null, null, 20180101L);
    }

    public Lend stub(Material material, Long body) {
        return stub(null, material, body);
    }

    public Lend stub(Patron patron, Long body) {
        return stub(patron, null, body);
    }

    public Lend stub(Patron patron, Material material, Long body) {
        Lend lend = new Lend(null, patron, material, 20180101L, 20180110L);
        lendRepository.save(lend);
        return lend;
    }
}
