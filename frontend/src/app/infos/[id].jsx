import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import StatLevel from "../../components/StatLevel";
import { findOneById } from "../../services/api/methods";
import { calculateOverall } from "../../services/scripts/scripts";
import { colors } from "../../styles/styles";
import * as S from "./styles";
import images from "../../assets/images";

export default function Infos() {
  const [jogador, setJogador] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await findOneById(id);

        setJogador(response);
      } catch (error) {
        console.error("Erro ao buscar jogador: ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

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
    <ScrollView>
      <S.InfoContainer>
        <View style={styles.upperView} />

        <S.InfoBackButton onPress={() => router.push("/")}>
          <MaterialIcons name="arrow-back" size={19} color={colors.whtMain} />
          <S.InfoBackText>Voltar para Home</S.InfoBackText>
        </S.InfoBackButton>

        {loading ? (
          <S.InfoContainer>
            <ActivityIndicator size={"large"} color={colors.blueMain} />
          </S.InfoContainer>
        ) : (
          <>
            <S.InfoCardContainer>
              <S.InfoCardImage
                source={jogador.imagem ? { uri: jogador.imagem } : images.default}
              />

              <S.InfoCardInfosContainer>
                <S.InfoCardTextContainer>
                  <S.InfoCardName>{jogador.nome}</S.InfoCardName>
                  <S.InfoCardOther>{jogador.nomeCompleto}</S.InfoCardOther>
                  <S.InfoCardOther>{jogador.turma}</S.InfoCardOther>
                </S.InfoCardTextContainer>

                <S.InfoCardOverallContainer>
                  <S.InfoCardOverallTitle>Overall</S.InfoCardOverallTitle>

                  <S.InfoCardOverall
                    style={{ backgroundColor: handleOverallColor(overall) }}
                  >
                    <S.InfoCardOverallTitle>{overall}</S.InfoCardOverallTitle>
                  </S.InfoCardOverall>
                </S.InfoCardOverallContainer>
              </S.InfoCardInfosContainer>

              <S.InfoCardButtonContainer>
                <TouchableOpacity onPress={() => router.push(`/player/${id}`)}>
                  <MaterialIcons
                    name="edit"
                    size={21}
                    color={colors.blueMain}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons
                    name="delete"
                    size={21}
                    color={colors.redVlow}
                  />
                </TouchableOpacity>
              </S.InfoCardButtonContainer>
            </S.InfoCardContainer>

            <S.InfoUrlInputContainer>
              <S.InfoUrlInputTitle>Imagem</S.InfoUrlInputTitle>

              <S.InfoUrlInput value={jogador.imagem || "Sem imagem"} />
            </S.InfoUrlInputContainer>

            <S.InfoStatsContainer>
              <S.InfoStatsTitle>Estatísticas</S.InfoStatsTitle>

              <S.InfoStatsMainContainer>
                <StatLevel
                  stat={"Velocidade"}
                  overall={jogador.velocidade}
                  value={jogador.velocidade}
                  background={handleOverallColor(jogador.velocidade)}
                />

                <StatLevel
                  stat={"Ataque"}
                  overall={jogador.ataque}
                  value={jogador.ataque}
                  background={handleOverallColor(jogador.ataque)}
                />

                <StatLevel
                  stat={"Defesa"}
                  overall={jogador.defesa}
                  value={jogador.defesa}
                  background={handleOverallColor(jogador.defesa)}
                />

                <StatLevel
                  stat={"Saque"}
                  overall={jogador.saque}
                  value={jogador.saque}
                  background={handleOverallColor(jogador.saque)}
                />

                <StatLevel
                  stat={"Mentalidade"}
                  overall={jogador.mentalidade}
                  value={jogador.mentalidade}
                  background={handleOverallColor(jogador.mentalidade)}
                />
              </S.InfoStatsMainContainer>
            </S.InfoStatsContainer>
          </>
        )}

        <View style={styles.downView} />
      </S.InfoContainer>
    </ScrollView>
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
