function solution(priorities, location) {
  const dq = priorities.map((p, i) => [p, i]);
  let cnt = 0;

  while (true) {
    const [priority, idx] = dq.shift();
    if (dq.some(([p]) => p > priority)) {
      dq.push([priority, idx]);
    } else {
      cnt++;
      if (idx === location) return cnt;
    }
  }
}