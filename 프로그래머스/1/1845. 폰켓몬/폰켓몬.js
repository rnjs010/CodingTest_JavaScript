function solution(nums) {
    var answer = nums.length / 2;
    
    const unique = new Set(nums);
    answer = Math.min(answer, unique.size);
    
    return answer;
}