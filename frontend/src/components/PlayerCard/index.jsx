import { StyleSheet, View } from "react-native";
import * as S from "./styles";
import { colors } from "../../styles/styles";
import images from "../../assets/images";

export default function PlayerCard({
  image,
  name,
  classroom,
  overall,
  backgroundColor,
}) {
  return (
    <S.PlayerCardContainer>
      <S.PlayerCardImage source={images[image]} />

      <S.PlayerCardTitleContainer>
        <S.PlayerCardName>{name}</S.PlayerCardName>
        <S.PlayerCardClass>{classroom}</S.PlayerCardClass>
      </S.PlayerCardTitleContainer>

      <S.PlayerCardOverall style={{ backgroundColor: backgroundColor }}>
        <S.PlayerCardOverallValue>{overall}</S.PlayerCardOverallValue>
      </S.PlayerCardOverall>
    </S.PlayerCardContainer>
  );
}
