function solution(nums) {
    var answer = nums.length / 2;
    
    let map = new Map();
    for (const i of nums) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    
    answer = Math.min(answer, map.size);
    
    return answer;
}