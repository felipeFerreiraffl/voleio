import styled from "styled-components/native";
import { colors, fonts } from "../../styles/styles";

export const StatsContainer = styled.View`
  align-items: flex-start;
  gap: 7;
`;

export const StatsTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 7;
`;

export const StatsTitle = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  font-weight: bold;
  color: ${colors.whtMain};
`;

export const StatsOverallContainer = styled.View`
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`;

export const StatsOverallValue = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  font-weight: bold;
  color: ${colors.black};
`;

export const StatsBar = styled.View`
    width: 296;
    height: 5;
    background-color: ${colors.whtPg};
    border-radius: 100px;
`;
