function solution(clothes) {
    var answer = 1;
    
    const map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1];
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    for (const cnt of map.values()) {
        answer *= (cnt + 1);
    }
    
    return answer - 1;
}