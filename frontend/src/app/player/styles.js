import styled from "styled-components/native";
import { colors, fonts } from "../../styles/styles";

export const PlayerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whtPg};
`;

export const PlayerInfosContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${colors.blueMain};
  width: 84%;
  padding-top: 25;
  padding-bottom: 11;
  margin-top: 18;
  margin-bottom: 28;
  border-radius: 10px;
`;

export const PlayerInfosImageContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 16;
`;

export const PlayerInfosImage = styled.Image`
  width: 91;
  height: 91;
`;

export const PlayerInfosInputContainer = styled.View`
  align-items: flex-start;
  gap: 6;
`;

export const PlayerInfosImageInput = styled.TextInput`
  background-color: ${colors.whtMain};
  width: 162;
  border-radius: 5px;
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  padding-left: 15;
  height: 40;
`;

export const PlayerInfosMainContainer = styled.View`
  align-items: flex-start;
  gap: 8;
  margin-top: 20;
`;

export const PlayerInfosLabel = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font14};
  font-weight: bold;
  color: ${colors.whtMain};
`;

export const PlayerInfosInput = styled.TextInput`
  background-color: ${colors.whtMain};
  width: 270;
  border-radius: 5px;
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  padding-left: 15;
`;

export const PlayerStatsMainContainer = styled.View`
  align-items: center;
  margin-top: 35;
  gap: 19;
`;

export const PlayerStatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 40;
`;

export const PlayerStatsOverallContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 40;
`;

export const PlayerStatsOverallView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10;
`;

export const PlayerStatsOverallTitle = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font14};
  font-weight: bold;
  color: ${colors.whtMain};
`;

export const PlayerStatsOverallValue = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font14};
  font-weight: bold;
  color: ${colors.black};
`;

export const PlayerStatsOverallBox = styled.View`
  padding: 10px 13px;
  border-radius: 5px;
`;

export const PlayerButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 38;
  margin-top: 28;
  margin-bottom: 17;
`;

export const PlayerButtonSave = styled.TouchableOpacity`
  background-color: ${colors.grnExc};
  border-radius: 10px;
  padding: 10px 35px;
`;

export const PlayerButtonCancel = styled.TouchableOpacity`
  background-color: ${colors.redVlow};
  border-radius: 10px;
  padding: 10px 35px;
`;

export const PlayerButtonText = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font15};
  font-weight: bold;
  color: ${colors.whtMain};
`;
