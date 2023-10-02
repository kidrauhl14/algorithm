function solution(order) {
    let string = order.toString();
    let count = 0;
    
    for(const char of string){
        if((char === "3") || (char === "6") || (char === "9")){
            count++;
        }
    }
    return count;
}
        // 에러!
        // if(char === ("3" || "6" || "9")){
        //     count++;
        // }

        // char === ("3" || "6" || "9")에서 "3" || "6" || "9" 부분이 
        // 항상 "3"로 평가되기 때문에 조건문이 항상 참이 됩니다. 
        // 이는 || (논리 OR) 연산자가 첫 번째 참인 피연산자를 반환하기 때문 <=그래서 이렇게 하면 안됨!!!
        // 따라서, "3" || "6" || "9"는 항상 "3"로 간주되므로, char === "3"과 동일한 효과가 발생하게 됩니다.