package com.drpicox.library.patrons;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/patrons")
public class PatronRestController {

    @Autowired
    private PatronRepository patronRepository;

    @Autowired
    public PatronRestController() {
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Patron createPatron(@RequestBody Patron patron) {
        patronRepository.save(patron);
        return patron;
    }

    @GetMapping()
    public Collection<Patron> getPatrons() {
        return patronRepository.findAll();
    }


}
