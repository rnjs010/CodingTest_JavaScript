function solution(clothes) {
    var answer = 1;
    
    const map = {};
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1];
        map[type] = (map[type] || 0) + 1;
    }
    
    for (const type in map) {
        answer *= (map[type] + 1);
    }
    
    return answer - 1;
}