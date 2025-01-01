import { Alert, StyleSheet, View } from "react-native";
import * as S from "./styles";
import { colors } from "../../styles/styles";
import PlayerStats from "../../components/PlayerStats";
import { calculateOverall } from "../../services/scripts/scripts";
import { useEffect, useState } from "react";
import { createOne, findOneById, updateOne } from "../../services/api/methods";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Player() {
  const [jogador, setJogador] = useState([]);
  const { id } = useLocalSearchParams();
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      setEditMode(true);

      const fetchPlayer = async () => {
        try {
          const response = await findOneById(id);

          setJogador(response);
        } catch (error) {
          console.error("Não conseguimos buscar o jogador", error.message);
        }

        fetchPlayer();
      };
    }
  }, [id]);

  const handleSavePlayer = async () => {
    try {
      if (editMode) {
        await updateOne(id, jogador);
        Alert.alert("Sucesso", "Jogador atualizado!");

        router.push(`/infos/${id}`);
      } else {
        await createOne(jogador);
        Alert.alert("Sucesso", "Jogador criado!");

        router.push("/");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar jogador");
      console.error("Deu tudo errado", error.message);
    }
  };

  // Muda a cor do card do overall
  const handleOverallColor = (overall) => {
    if (overall >= 90) {
      return colors.grnExc;
    } else if (overall < 90 && overall >= 80) {
      return colors.grnGood;
    } else if (overall < 80 && overall >= 65) {
      return colors.ylwAvg;
    } else if (overall < 65 && overall >= 50) {
      return colors.orgLow;
    } else {
      return colors.redVlow;
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
            source={require("../../assets/images/default-pic.png")}
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
              value={jogador.velocidade || "0"}
              onChangeText={(text) =>
                setJogador({ ...jogador, velocidade: text })
              }
              bgColor={handleOverallColor(overall)}
            />
            <PlayerStats
              label={"Defesa"}
              value={jogador.defesa || "0"}
              onChangeText={(text) => setJogador({ ...jogador, defesa: text })}
              bgColor={handleOverallColor(overall)}
            />
          </S.PlayerStatsContainer>

          <S.PlayerStatsContainer>
            <PlayerStats
              label={"Ataque"}
              value={jogador.ataque || "0"}
              onChangeText={(text) => setJogador({ ...jogador, ataque: text })}
              bgColor={handleOverallColor(overall)}
            />
            <PlayerStats
              label={"Saque"}
              value={jogador.saque || "0"}
              onChangeText={(text) => setJogador({ ...jogador, saque: text })}
              bgColor={handleOverallColor(overall)}
            />
          </S.PlayerStatsContainer>

          <S.PlayerStatsOverallContainer>
            <PlayerStats
              label={"Mentalidade"}
              value={jogador.mentalidade || "0"}
              onChangeText={(text) =>
                setJogador({ ...jogador, mentalidade: text })
              }
              bgColor={handleOverallColor(overall)}
            />

            <S.PlayerStatsOverallView>
              <S.PlayerStatsOverallTitle>Overall</S.PlayerStatsOverallTitle>

              <S.PlayerStatsOverallBox
                style={{ backgroundColor: handleOverallColor(overall) }}
              >
                <S.PlayerStatsOverallTitle>
                  {calculateOverall(overall)}
                </S.PlayerStatsOverallTitle>
              </S.PlayerStatsOverallBox>
            </S.PlayerStatsOverallView>
          </S.PlayerStatsOverallContainer>
        </S.PlayerStatsMainContainer>
      </S.PlayerInfosContainer>

      <S.PlayerButtonContainer>
        <S.PlayerButtonSave onPress={handleSavePlayer}>
          <S.PlayerButtonText>
            {editMode ? "Editar" : "Criar"}
          </S.PlayerButtonText>
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
    flex: 1,
    maxHeight: 35,
    minHeight: 35,
    top: 0,
    backgroundColor: colors.ylwMain,
    width: "100%",
  },
  downView: {
    flex: 1,
    maxHeight: 35,
    minHeight: 35,
    bottom: 0,
    backgroundColor: colors.blueMain,
    width: "100%",
  },
});
