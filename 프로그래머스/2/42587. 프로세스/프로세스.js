function solution(priorities, location) {
  const pq = [...priorities].sort((a, b) => b - a);
  const dq = priorities.map((p, idx) => [p, idx]);

  let cnt = 0;

  while (dq.length > 0) {
    const [priority, idx] = dq.shift();

    if (priority < pq[0]) {
      dq.push([priority, idx]);
    } else {
      pq.shift();
      cnt++;
      if (idx === location) return cnt;
    }
  }
}
