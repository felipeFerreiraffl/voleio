package br.edu.senaisp.backend.service;

import br.edu.senaisp.backend.model.Jogador;
import br.edu.senaisp.backend.repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JogadorService {

    @Autowired
    private JogadorRepository repo;

    public List<Jogador> getAll() {
        return repo.findAll();
    }

    public Jogador getOne(String id) {
        Optional<Jogador> jog = repo.findById(id);

        if (jog.isPresent()) {
            return jog.get();
        } else {
            throw new RuntimeException("Não encontramos o fera :(");
        }
    }

    public Jogador criar(Jogador jog) {
        return repo.save(jog);
    }

    public Jogador update(String id, Jogador jog) {
        Jogador existingJog = getOne(id);

        existingJog.setNome(jog.getNome());
        existingJog.setNomeCompleto(jog.getNomeCompleto());
        existingJog.setTurma(jog.getTurma());
        existingJog.setImagem(jog.getImagem());
        existingJog.setVelocidade(jog.getVelocidade());
        existingJog.setAtaque(jog.getAtaque());
        existingJog.setDefesa(jog.getDefesa());
        existingJog.setSaque(jog.getSaque());
        existingJog.setMentalidade(jog.getMentalidade());

        return repo.save(existingJog);
    }

    public void deleteOne(String id) {
        Jogador jog = getOne(id);
        repo.delete(jog);
    }
}
