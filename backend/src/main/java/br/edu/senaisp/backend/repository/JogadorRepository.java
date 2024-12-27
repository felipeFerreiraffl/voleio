package br.edu.senaisp.backend.repository;

import br.edu.senaisp.backend.model.Jogador;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JogadorRepository extends MongoRepository<Jogador, String> {
}
