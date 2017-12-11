package com.drpicox.library.lends;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/lends")
public class LendRestController {

    @Autowired
    private LendRepository lendRepository;

    @Autowired
    public LendRestController() {
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Lend createLend(@RequestBody Lend lend) {
        lendRepository.save(lend);
        return lend;
    }

    @GetMapping()
    public Collection<Lend> getLends() {
        return lendRepository.findAll();
    }

    @GetMapping("/{lendId}")
    public Lend getLend(@PathVariable Long lendId) {
        Lend lend = lendRepository.findOne(lendId);
        return lend;
    }

    @PutMapping("/{lendId}")
    public Lend updateLend(@RequestBody Lend lend) {
        lendRepository.save(lend);
        return lend;
    }
}
