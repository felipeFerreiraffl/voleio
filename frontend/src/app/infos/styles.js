import styled from "styled-components/native";
import { colors, fonts } from "../../styles/styles";

export const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whtPg};
`;

export const InfoBackButton = styled.TouchableOpacity`
  background-color: ${colors.blueMain};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 7px 5px;
  gap: 5;
  margin-top: 18;
`;

export const InfoBackText = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  font-weight: bold;
  color: ${colors.whtMain};
`;

export const InfoCardContainer = styled.View`
  background-color: ${colors.whtMain};
  margin-top: 32;
  flex-direction: row;
  padding: 10px 11px;
  border-radius: 10px;
`;

export const InfoCardImage = styled.Image`
  background-color: ${colors.ylwMain};
  border: solid 12px ${colors.blueMain};
  border-radius: 5px;
`;

export const InfoCardInfosContainer = styled.View``;

export const InfoCardTextContainer = styled.View``;

export const InfoCardName = styled.Text``;

export const InfoCardOther = styled.Text``;

export const InfoCardOverallContainer = styled.View``;

export const InfoCardOverall = styled.View``;

export const InfoCardOverallTitle = styled.Text``;

export const InfoCardButtonContainer = styled.View``;
