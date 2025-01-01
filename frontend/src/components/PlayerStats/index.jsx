import { View } from 'react-native';
import * as S from "./styles";

export default function PlayerStats({ label, value, onChangeText, bgColor }) {
 return (
   <S.PlayStatsContainer>
    <S.PlayStatsTitle>{label}</S.PlayStatsTitle>

    <S.PlayStatsOverall 
        value={value}
        onChangeText={onChangeText}
        keyboardType='numeric'
        style={{ backgroundColor: bgColor }}
    />
   </S.PlayStatsContainer>
  );
}