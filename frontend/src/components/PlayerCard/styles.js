import styled from "styled-components/native";
import { colors, fonts } from "../../styles/styles";

export const PlayerCardContainer = styled.View`
  width: 330;
  height: 110;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  border: solid 2px ${colors.blueMain};
  border-radius: 10px;
  background-color: ${colors.ylwMain};
  padding: 10px;
`;

export const PlayerCardImage = styled.Image`
  width: 76;
  height: 68;
`;

export const PlayerCardMainContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 25;
`;

export const PlayerCardTitleContainer = styled.View`
  align-items: flex-start;
  max-width: 145;
`;

export const PlayerCardName = styled.Text`
  font-size: ${fonts.font14};
  font-weight: bold;
`;

export const PlayerCardClass = styled.Text`
  font-size: ${fonts.font12};
`;

export const PlayerCardOverall = styled.View`
  position: absolute;
  right: 14;
  width: 45;
  height: 45;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const PlayerCardOverallValue = styled.Text`
  font-size: ${fonts.font16};
  font-weight: bold;
`;
