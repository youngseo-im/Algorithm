function solution(answers) {
  var answer = [];
  const looser1 = [1, 2, 3, 4, 5];
  const looser2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const looser3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score1 = answers.filter(
    (cur, i) => cur === looser1[i % looser1.length]
  ).length;
  let score2 = answers.filter(
    (cur, i) => cur === looser2[i % looser2.length]
  ).length;
  let score3 = answers.filter(
    (cur, i) => cur === looser3[i % looser3.length]
  ).length;

  const max = Math.max(score1, score2, score3);
  if (score1 === max) answer.push(1);
  if (score2 === max) answer.push(2);
  if (score3 === max) answer.push(3);

  return answer;
}
