// Epley 공식 기반 1RM 계산 함수
export function calculate1RM(weight, reps) {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}
