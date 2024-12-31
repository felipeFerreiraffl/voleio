import { StyleSheet, View } from "react-native";
import * as S from "./styles";

export default function StatLevel({ stat, overall, background, value }) {
  // Porcentagem do estatística na barra
  const percentage = (value / 99) * 100;

  return (
    <S.StatsContainer>
      <S.StatsTitleContainer>
        <S.StatsTitle>{stat}</S.StatsTitle>

        <S.StatsOverallContainer style={{ backgroundColor: background }}>
          <S.StatsOverallValue>{overall}</S.StatsOverallValue>
        </S.StatsOverallContainer>
      </S.StatsTitleContainer>

      <S.StatsBar>
        <View
          style={[
            styles.bar,
            { width: `${percentage}%`, backgroundColor: background },
          ]}
        />
      </S.StatsBar>
    </S.StatsContainer>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: "100%",
    borderRadius: 5,
  },
});
