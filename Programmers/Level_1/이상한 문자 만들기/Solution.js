function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      let str = "";
      for (let i = 0; i < v.length; i++) {
        i % 2 === 0 ? (str += v[i].toUpperCase()) : (str += v[i].toLowerCase());
      }
      return str;
    })
    .join(" ");
}
