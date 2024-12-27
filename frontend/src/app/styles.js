import styled from "styled-components/native";
import { colors, fonts } from "../styles/styles"

export const HomeContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.whtPg};
`;

export const HomeHeader = styled.View`
    text-align: center;
    align-items: center;
    margin-top: 8;
    gap: 8;
`;

export const HomeHeaderTitle = styled.Text`
    font-size: ${fonts.font20};
    font-weight: bold;
`;

export const HomeHeaderImage = styled.Image`
    width: 66;
    height: 17;
`;

export const HomePlayerContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 35;
    gap: 9;
`;

export const HomePlayerTitle = styled.Text`
    font-size: ${fonts.font24};
    font-weight: bold;
`;

export const HomeCreateButton = styled.TouchableOpacity`
    background-color: ${colors.blueMain};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 8;
    padding-top: 7;
    padding-bottom: 7;
    padding-left: 21;
    padding-right: 21;
    border-radius: 5px;
    gap: 8;
`;

export const HomeCreateText = styled.Text`
    font-size: ${fonts.font14};
    font-weight: bold;
    color: ${colors.whtMain};
`;

export const HomePlayers = styled.FlatList`
    margin-top: 26;
    max-height: 400;
`;

export const HomeFooterText = styled.Text`
    font-size: ${fonts.font11};
    margin-top: 120;
    margin-bottom: 11;
`;