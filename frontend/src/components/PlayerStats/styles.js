import styled from "styled-components/native";
import { colors, fonts } from "../../styles/styles";

export const PlayStatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10;
`;

export const PlayStatsTitle = styled.Text`
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  font-weight: bold;
`;

export const PlayStatsOverall = styled.TextInput`
  padding: 6px 9px;
  font-family: "Gill Sans";
  font-size: ${fonts.font12};
  font-weight: bold;
  border-radius: 5px;
`;
