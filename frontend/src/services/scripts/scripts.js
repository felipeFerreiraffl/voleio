// Cálculo do overall do jogador
export const calculateOverall = (spd, atk, def, srv, men) => {
  const overall = (spd + atk + def + srv + men) / 5;

  return overall.toFixed(0);
};
