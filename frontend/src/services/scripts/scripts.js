import { colors } from "../../styles/styles";

// Cálculo do overall do jogador
export const calculateOverall = (spd, atk, def, srv, men) => {
  const overall = (spd + atk + def + srv + men) / 5;

  return overall.toFixed(0);
};

// Define a cor do card baseado no valor
export const handleOverallColor = (overall) => {
  if (overall >= 90) {
    return colors.grnExc;
  } else if (overall < 90 && overall >= 80) {
    return colors.grnGood;
  } else if (overall < 80 && overall >= 65) {
    return colors.ylwAvg;
  } else if (overall < 65 && overall >= 50) {
    return colors.orgLow;
  } else {
    return colors.redVlow;
  }
};
