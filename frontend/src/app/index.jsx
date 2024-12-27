import { StyleSheet, View } from "react-native";
import { colors } from "../styles/styles";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
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

      <S.HomeFooterText>Feito por Felipe Ferreira Lima</S.HomeFooterText>

      <View style={styles.downView} />
    </S.HomeContainer>
  );
}

const styles = StyleSheet.create({
  upperView: {
    flex: 1,
    backgroundColor: colors.ylwMain,
    width: '100%',
    height: 35,
  },
  downView: {
    flex: 1,
    backgroundColor: colors.blueMain,
    width: '100%',
    height: 35,
  },
});
