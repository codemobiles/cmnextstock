function* generate(i) {
  yield i;
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

const g = generate(0);
console.log(JSON.stringify(g.next()));
console.log(JSON.stringify(g.next()));
console.log(JSON.stringify(g.next()));
console.log(JSON.stringify(g.next()));
console.log(JSON.stringify(g.next()));
