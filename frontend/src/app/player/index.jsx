import { StyleSheet, View } from "react-native";
import * as S from "./styles";
import { colors } from "../../styles/styles";
import PlayerStats from "../../components/PlayerStats";
import { calculateOverall } from "../../services/scripts/scripts";
import { useState } from "react";

export default function Player() {
  const [jogador, setJogador] = useState([]);

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

  const overall =
    calculateOverall(
      jogador.velocidade,
      jogador.ataque,
      jogador.defesa,
      jogador.saque,
      jogador.mentalidade
    ) || 0;

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

            <S.PlayerInfosImageInput />
          </S.PlayerInfosInputContainer>
        </S.PlayerInfosImageContainer>

        <S.PlayerInfosMainContainer>
          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Nome (comumente chamado)</S.PlayerInfosLabel>
            <S.PlayerInfosInput />
          </S.PlayerInfosInputContainer>

          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Nome completo</S.PlayerInfosLabel>
            <S.PlayerInfosInput />
          </S.PlayerInfosInputContainer>

          <S.PlayerInfosInputContainer>
            <S.PlayerInfosLabel>Turma</S.PlayerInfosLabel>
            <S.PlayerInfosInput />
          </S.PlayerInfosInputContainer>
        </S.PlayerInfosMainContainer>

        <S.PlayerStatsMainContainer>
          <S.PlayerStatsContainer>
            <PlayerStats
              label={"Velocidade"}
              value={jogador.velocidade || "0"}
              bgColor={handleOverallColor(overall)}
            />
            <PlayerStats
              label={"Defesa"}
              value={jogador.defesa || "0"}
              bgColor={handleOverallColor(overall)}
            />
          </S.PlayerStatsContainer>

          <S.PlayerStatsContainer>
            <PlayerStats
              label={"Ataque"}
              value={jogador.ataque || "0"}
              bgColor={handleOverallColor(overall)}
            />
            <PlayerStats
              label={"Saque"}
              value={jogador.saque || "0"}
              bgColor={handleOverallColor(overall)}
            />
          </S.PlayerStatsContainer>

          <S.PlayerStatsOverallContainer>
            <PlayerStats
              label={"Mentalidade"}
              value={jogador.mentalidade || "0"}
              bgColor={handleOverallColor(overall)}
            />

            <S.PlayerStatsOverallView>
              <S.PlayerStatsOverallTitle>Overall</S.PlayerStatsOverallTitle>

              <S.PlayerStatsOverallBox>
                <S.PlayerStatsOverallTitle>
                  {calculateOverall(overall)}
                </S.PlayerStatsOverallTitle>
              </S.PlayerStatsOverallBox>
            </S.PlayerStatsOverallView>
          </S.PlayerStatsOverallContainer>
        </S.PlayerStatsMainContainer>
      </S.PlayerInfosContainer>

      <S.PlayerButtonContainer>
        <S.PlayerButtonSave>
          <S.PlayerButtonText>Salvar</S.PlayerButtonText>
        </S.PlayerButtonSave>

        <S.PlayerButtonCancel>
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
