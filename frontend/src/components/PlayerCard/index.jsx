import images from "../../assets/images";
import * as S from "./styles";

export default function PlayerCard({
  image,
  name,
  classroom,
  overall,
  backgroundColor,
}) {
  const imageSource = image ? { uri: image } : images.default;

  return (
    <S.PlayerCardContainer>

      <S.PlayerCardMainContainer>
        <S.PlayerCardImage source={imageSource} />

        <S.PlayerCardTitleContainer>
          <S.PlayerCardName>{name}</S.PlayerCardName>
          <S.PlayerCardClass>{classroom}</S.PlayerCardClass>
        </S.PlayerCardTitleContainer>
      </S.PlayerCardMainContainer>

      <S.PlayerCardOverall style={{ backgroundColor: backgroundColor }}>
        <S.PlayerCardOverallValue>{overall}</S.PlayerCardOverallValue>
      </S.PlayerCardOverall>
    </S.PlayerCardContainer>
  );
}
