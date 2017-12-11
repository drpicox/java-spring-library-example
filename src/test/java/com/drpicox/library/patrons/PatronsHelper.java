package com.drpicox.library.patrons;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static org.junit.Assert.assertNotNull;

@Component
public class PatronsHelper {

    @Autowired
    private PatronRepository patronRepository;

    public void cleanup() throws Exception {
        patronRepository.deleteAllInBatch();
    }

    public Patron make(String name) {
        Patron patron = new Patron(null, name);
        patronRepository.save(patron);
        return patron;
    }
}
