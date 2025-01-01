import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import images from "../../assets/images";
import PlayerStats from "../../components/PlayerStats";
import { findOneById, updateOne } from "../../services/api/methods";
import {
  calculateOverall,
  handleOverallColor,
} from "../../services/scripts/scripts";
import { colors } from "../../styles/styles";
import * as S from "./styles";

export default function Player() {
  const [jogador, setJogador] = useState([]);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await findOneById(id);

        setJogador(response);
      } catch (error) {
        console.error("Erro ao buscar jogador", error.message);
      }
    };

    fetchPlayer();
  }, []);

  const handleEditPlayer = async () => {
    try {
      await updateOne(id, jogador);
      Alert.alert("Atualizado", "Jogador atualizado!");

      router.back();
    } catch (error) {
      console.error("Erro ao atualizar jogador", error.message);
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
    <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="never">
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
                onChangeText={(text) =>
                  setJogador({ ...jogador, imagem: text })
                }
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
                value={String(jogador.velocidade)} // Transforma o número em String para o Input
                onChangeText={
                  (text) =>
                    setJogador({ ...jogador, velocidade: Number(text) || 0 }) // Transforma em Number
                }
                bgColor={handleOverallColor(jogador.velocidade)}
              />
              <PlayerStats
                label={"Defesa"}
                value={String(jogador.defesa)}
                onChangeText={(text) =>
                  setJogador({ ...jogador, defesa: Number(text) || 0 })
                }
                bgColor={handleOverallColor(jogador.defesa)}
              />
            </S.PlayerStatsContainer>

            <S.PlayerStatsContainer>
              <PlayerStats
                label={"Ataque"}
                value={String(jogador.ataque)}
                onChangeText={(text) =>
                  setJogador({ ...jogador, ataque: Number(text) || 0 })
                }
                bgColor={handleOverallColor(jogador.ataque)}
              />
              <PlayerStats
                label={"Saque"}
                value={String(jogador.saque)}
                onChangeText={(text) =>
                  setJogador({ ...jogador, saque: Number(text) || 0 })
                }
                bgColor={handleOverallColor(jogador.saque)}
              />
            </S.PlayerStatsContainer>

            <S.PlayerStatsOverallContainer>
              <PlayerStats
                label={"Mentalidade"}
                value={String(jogador.mentalidade)}
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
                  <S.PlayerStatsOverallValue>
                    {overall}
                  </S.PlayerStatsOverallValue>
                </S.PlayerStatsOverallBox>
              </S.PlayerStatsOverallView>
            </S.PlayerStatsOverallContainer>
          </S.PlayerStatsMainContainer>
        </S.PlayerInfosContainer>

        <S.PlayerButtonContainer>
          <S.PlayerButtonSave onPress={handleEditPlayer}>
            <S.PlayerButtonText>Editar</S.PlayerButtonText>
          </S.PlayerButtonSave>

          <S.PlayerButtonCancel onPress={() => router.back()}>
            <S.PlayerButtonText>Cancelar</S.PlayerButtonText>
          </S.PlayerButtonCancel>
        </S.PlayerButtonContainer>

        <View style={styles.downView} />
      </S.PlayerContainer>
    </ScrollView>
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
