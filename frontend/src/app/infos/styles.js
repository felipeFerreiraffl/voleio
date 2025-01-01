import styled from "styled-components/native";
import { colors, fonts } from "../../styles/styles";

export const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whtPg};
`;

export const InfoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 53;
  left: 18;
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
  align-items: center;
  margin-top: 82;
  flex-direction: row;
  width: 83%;
  padding: 10px 11px;
  border-radius: 10px;
`;

export const InfoCardImage = styled.Image`
  background-color: ${colors.ylwMain};
  border: solid 12px ${colors.blueMain};
  border-radius: 5px;
  width: 100;
  height: 100;
`;

export const InfoCardInfosContainer = styled.View`
  align-items: flex-start;
  gap: 18;
  margin-left: 15;
`;

export const InfoCardTextContainer = styled.View`
  align-items: flex-start;
  max-width: 157;
`;

export const InfoCardName = styled.Text`
  font-size: ${fonts.font14};
  font-weight: bold;
  margin-bottom: 5;
`;

export const InfoCardOther = styled.Text`
  font-size: ${fonts.font12};
`;

export const InfoCardOverallContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15;
`;

export const InfoCardOverall = styled.View`
  background-color: green;
  padding: 8px;
  border-radius: 5px;
`;

export const InfoCardOverallTitle = styled.Text`
  font-size: ${fonts.font14};
  font-weight: bold;
`;

export const InfoCardButtonContainer = styled.View`
  flex-direction: row;
  gap: 7;
  position: absolute;
  bottom: 10;
  right: 9;
`;

export const InfoUrlInputContainer = styled.View`
  align-items: center;
  gap: 10;
  margin-top: 29;
`;

export const InfoUrlInputTitle = styled.Text`
  font-size: ${fonts.font14};
  font-weight: bold;
`;

export const InfoUrlInput = styled.TextInput`
  background-color: ${colors.whtMain};
  padding-left: 20;
  width: 330;
  height: 46;
  border-radius: 5px;
  font-size: ${fonts.font11};
`;

export const InfoStatsContainer = styled.View`
  align-items: center;
  margin-top: 23;
  gap: 17;
`;

export const InfoStatsTitle = styled.Text`
  font-size: ${fonts.font14};
  font-weight: bold;
`;

export const InfoStatsMainContainer = styled.View`
  background-color: ${colors.blueMain};
  padding: 18px;
  border-radius: 10px;
  gap: 15;
  margin-bottom: 51;
`;
