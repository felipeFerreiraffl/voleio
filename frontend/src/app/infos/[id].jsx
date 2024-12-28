import { StyleSheet, View } from "react-native";
import * as S from "./styles";
import { colors } from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Infos() {
  const router = useRouter();

  return (
    <S.InfoContainer>
      <View style={styles.upperView} />

      <S.InfoBackButton onPress={() => router.push("/")}>
        <MaterialIcons name="arrow-back" size={19} color={colors.whtMain} />
        <S.InfoBackText>Voltar para Home</S.InfoBackText>
      </S.InfoBackButton>

      <S.InfoCardContainer>
        <S.InfoCardImage
          source={require("../../assets/images/default-pic.png")}
        />

        <S.InfoCardInfosContainer>
          <S.InfoCardTextContainer>
            <S.InfoCardName>Algum nome</S.InfoCardName>
            <S.InfoCardOther>Fulano do sei lá o que</S.InfoCardOther>
            <S.InfoCardOther>Turma</S.InfoCardOther>
          </S.InfoCardTextContainer>

          <S.InfoCardOverallContainer>
            <S.InfoCardOverallTitle>Overall</S.InfoCardOverallTitle>

            <S.InfoCardOverall>
              <S.InfoCardOverallTitle>90</S.InfoCardOverallTitle>
            </S.InfoCardOverall>
          </S.InfoCardOverallContainer>
        </S.InfoCardInfosContainer>
      </S.InfoCardContainer>

      <View style={styles.downView} />
    </S.InfoContainer>
  );
}

const styles = StyleSheet.create({
  upperView: {
    top: 0,
    backgroundColor: colors.ylwMain,
    width: "100%",
    height: 35,
  },
  downView: {
    bottom: 0,
    backgroundColor: colors.blueMain,
    width: "100%",
    height: 35,
  },
});
