import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import images from "../../assets/images";
import PlayerStats from "../../components/PlayerStats";
import { createOne } from "../../services/api/methods";
import {
  calculateOverall,
  handleOverallColor,
} from "../../services/scripts/scripts";
import { colors } from "../../styles/styles";
import * as S from "./styles";

export default function Player() {
  const [jogador, setJogador] = useState([]);
  const router = useRouter();

  const handleCreatePlayer = async () => {
    try {
      await createOne(jogador);
      Alert.alert("Criado", "Jogador criado!");

      router.back();
    } catch (error) {
      console.error("Erro ao criar jogador", error.message);
    }
  };

  const overall = calculateOverall(
    jogador.velocidade,
    jogador.ataque,
    jogador.defesa,
    jogador.saque,
    jogador.mentalidade
  );

  return (
    <S.PlayerContainer>
      <View style={styles.upperView} />

      <S.PlayerInfosContainer>
        <S.PlayerInfosImageContainer>
          <S.PlayerInfosImage
            source={jogador.imagem ? { uri: jogador.imagem } : images.default}
          />

          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Imagem</S.PlayerInfosLabel>

            <S.PlayerInfosImageInput
              value={jogador.imagem}
              onChangeText={(text) => setJogador({ ...jogador, imagem: text })}
            />
          </S.PlayerInfosInputContainer>
        </S.PlayerInfosImageContainer>

        <S.PlayerInfosMainContainer>
          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Nome (comumente chamado)</S.PlayerInfosLabel>
            <S.PlayerInfosInput
              value={jogador.nome}
              onChangeText={(text) => setJogador({ ...jogador, nome: text })}
            />
          </S.PlayerInfosInputContainer>

          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Nome completo</S.PlayerInfosLabel>
            <S.PlayerInfosInput
              value={jogador.nomeCompleto}
              onChangeText={(text) =>
                setJogador({ ...jogador, nomeCompleto: text })
              }
            />
          </S.PlayerInfosInputContainer>

          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Turma</S.PlayerInfosLabel>
            <S.PlayerInfosInput
              value={jogador.turma}
              onChangeText={(text) => setJogador({ ...jogador, turma: text })}
            />
          </S.PlayerInfosInputContainer>
        </S.PlayerInfosMainContainer>

        <S.PlayerStatsMainContainer>
          <S.PlayerStatsContainer>
            <PlayerStats
              label={"Velocidade"}
              value={jogador.velocidade}
              onChangeText={(text) =>
                setJogador({ ...jogador, velocidade: Number(text) || 0 })
              }
              bgColor={handleOverallColor(jogador.velocidade)}
            />
            <PlayerStats
              label={"Defesa"}
              value={jogador.defesa}
              onChangeText={(text) =>
                setJogador({ ...jogador, defesa: Number(text) || 0 })
              }
              bgColor={handleOverallColor(jogador.defesa)}
            />
          </S.PlayerStatsContainer>

          <S.PlayerStatsContainer>
            <PlayerStats
              label={"Ataque"}
              value={jogador.ataque}
              onChangeText={(text) =>
                setJogador({ ...jogador, ataque: Number(text) || 0 })
              }
              bgColor={handleOverallColor(jogador.ataque)}
            />
            <PlayerStats
              label={"Saque"}
              value={jogador.saque}
              onChangeText={(text) =>
                setJogador({ ...jogador, saque: Number(text) || 0 })
              }
              bgColor={handleOverallColor(jogador.saque)}
            />
          </S.PlayerStatsContainer>

          <S.PlayerStatsOverallContainer>
            <PlayerStats
              label={"Mentalidade"}
              value={jogador.mentalidade}
              onChangeText={(text) =>
                setJogador({ ...jogador, mentalidade: Number(text) || 0 })
              }
              bgColor={handleOverallColor(jogador.mentalidade)}
            />

            <S.PlayerStatsOverallView>
              <S.PlayerStatsOverallTitle>Overall</S.PlayerStatsOverallTitle>

              <S.PlayerStatsOverallBox
                style={{ backgroundColor: handleOverallColor(overall) }}
              >
                <S.PlayerStatsOverallTitle>
                  {isNaN(overall) ? 0 : overall}
                </S.PlayerStatsOverallTitle>
              </S.PlayerStatsOverallBox>
            </S.PlayerStatsOverallView>
          </S.PlayerStatsOverallContainer>
        </S.PlayerStatsMainContainer>
      </S.PlayerInfosContainer>

      <S.PlayerButtonContainer>
        <S.PlayerButtonSave onPress={handleCreatePlayer}>
          <S.PlayerButtonText>Criar</S.PlayerButtonText>
        </S.PlayerButtonSave>

        <S.PlayerButtonCancel onPress={() => router.back()}>
          <S.PlayerButtonText>Cancelar</S.PlayerButtonText>
        </S.PlayerButtonCancel>
      </S.PlayerButtonContainer>

      <View style={styles.downView} />
    </S.PlayerContainer>
  );
}

const styles = StyleSheet.create({
  upperView: {
    flex: 2,
    maxHeight: 35,
    minHeight: 35,
    top: 0,
    backgroundColor: colors.ylwMain,
    width: "100%",
  },
  downView: {
    flex: 2,
    maxHeight: 35,
    minHeight: 35,
    bottom: 0,
    backgroundColor: colors.blueMain,
    width: "100%",
  },
});
