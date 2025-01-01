import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import PlayerCard from "../components/PlayerCard";
import { findAll } from "../services/api/methods";
import { calculateOverall } from "../services/scripts/scripts";
import { colors } from "../styles/styles";
import * as S from "./styles";
import { Link, useRouter } from "expo-router";
import images from "../assets/images";

export default function Home() {
  const [jogadores, setJogadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        const response = await findAll();

        setJogadores(response);
      } catch (error) {
        console.error("Não foi possível encontrar jogadores", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJogadores();
  }, []);

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

  return (
    <S.HomeContainer>
      <View style={styles.upperView} />

      <S.HomeHeader>
        <S.HomeHeaderTitle>Volêio do </S.HomeHeaderTitle>
        <S.HomeHeaderImage
          source={require("../assets/images/senai-logo.png")}
        />
      </S.HomeHeader>

      <S.HomePlayerContainer>
        <S.HomePlayerTitle>Jogadores</S.HomePlayerTitle>
        <MaterialIcons name="person" size={24} color={colors.black} />
      </S.HomePlayerContainer>

      <S.HomeCreateButton onPress={() => router.push("/player")}>
        <S.HomeCreateText>Criar</S.HomeCreateText>
        <MaterialIcons name="add-circle" size={17} color={colors.whtMain} />
      </S.HomeCreateButton>

      {loading ? (
        <S.HomeContainer>
          <ActivityIndicator size={"small"} color={colors.blueMain} />
        </S.HomeContainer>
      ) : (
        <S.HomePlayers
          data={jogadores}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const overall = calculateOverall(
              item.velocidade,
              item.ataque,
              item.defesa,
              item.saque,
              item.mentalidade
            );

            return (
              <Link href={`/infos/${item.id}`}>
                <PlayerCard
                  name={item.nome}
                  classroom={item.turma}
                  image={item.imagem}
                  overall={overall}
                  backgroundColor={handleOverallColor(overall)}
                />
              </Link>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      )}

      <S.HomeFooterText>Feito por Felipe Ferreira Lima</S.HomeFooterText>

      <View style={styles.downView} />
    </S.HomeContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
  upperView: {
    flex: 1,
    top: 0,
    backgroundColor: colors.ylwMain,
    width: "100%",
    maxHeight: 35,
    minHeight: 35,
  },
  downView: {
    flex: 1,
    bottom: 0,
    backgroundColor: colors.blueMain,
    width: "100%",
    maxHeight: 35,
    minHeight: 35,
  },
});
