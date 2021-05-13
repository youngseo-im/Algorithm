function solution(seoul) {
  let answer = "";
  const isCurrentString = (element) => element === "Kim";
  answer = `김서방은 ${seoul.findIndex(isCurrentString)}에 있다`;
  return answer;
}
