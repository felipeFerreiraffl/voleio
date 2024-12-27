import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { colors } from "../styles/styles";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import PlayerCard from "../components/PlayerCard";
import { useEffect, useState } from "react";
import { findAll } from "../services/api/methods";

export default function App() {
  const [jogadores, setJogadores] = useState([]);
  const [loading, setLoading] = useState(true);

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

      <S.HomeCreateButton>
        <S.HomeCreateText>Criar</S.HomeCreateText>
        <MaterialIcons name="add-circle" size={17} color={colors.whtMain} />
      </S.HomeCreateButton>

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={"small"} color={colors.blueMain} />
        </View>
      ) : (
        <S.HomePlayers
          data={jogadores}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.nome}
              classroom={item.turma}
              image={"default"}
              overall={90}
              backgroundColor={colors.grnExc}
            />
          )}
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
    // flex: 1,
    top: 0,
    backgroundColor: colors.ylwMain,
    width: "100%",
    height: 35,
  },
  downView: {
    // flex: 1,
    bottom: 0,
    backgroundColor: colors.blueMain,
    width: "100%",
    height: 35,
  },
});
