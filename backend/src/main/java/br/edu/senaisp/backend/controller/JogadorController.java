package br.edu.senaisp.backend.controller;

import br.edu.senaisp.backend.model.Jogador;
import br.edu.senaisp.backend.service.JogadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/voleio")
public class JogadorController {

    @Autowired
    private JogadorService serv;

    @GetMapping
    public List<Jogador> getAll() {
        return serv.getAll();
    }

    @GetMapping("/{id}")
    public Jogador getOne(@PathVariable String id) {
        return serv.getOne(id);
    }

    @PostMapping
    public Jogador criar(@RequestBody Jogador jog) {
        return serv.criar(jog);
    }

    @PutMapping("/{id}")
    public Jogador update(@PathVariable String id, @RequestBody Jogador jog) {
        return serv.update(id, jog);
    }

    @DeleteMapping("/{id}")
    public void deleteOne(@PathVariable String id) {
        serv.deleteOne(id);
    }
}
