import { StyleSheet, View } from 'react-native';
import * as S from "./styles";
import { colors } from '../../styles/styles';

export default function player() {
 return (
   <S.PlayerContainer>
    <View style={styles.upperView} />


    <View style={styles.downView} />
   </S.PlayerContainer>
  );
}

const styles = StyleSheet.create({
  upperView: {
    flex: 1,
    maxHeight: 35,
    minHeight: 35,
    top: 0,
    backgroundColor: colors.ylwMain,
    width: "100%",
  },
  downView: {
    flex: 1,
    maxHeight: 35,
    minHeight: 35,
    bottom: 0,
    backgroundColor: colors.blueMain,
    width: "100%",
  },
});