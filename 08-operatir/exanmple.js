
// 1. 산솔 연산자

console.log(10 + 3); // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  //3.333333333
// 딱 떨어지지 않는 소숫점 계산을 시키면 믿을 수 없음
console.log(10 % 3);  //1
console.log(10 ** 3);  // 8

// 증강연산자 : 전위 증강 연산자, 주위 증강 연산자
var a = 5;
console.log(a++); // 화면 : 5, a의 값
console.log(a); // 화면 : 6
console.log(++a); //화면 : 7, a의 값 : 7



// 2. 할당 연산자

var total = 10;
total += 5;
//var temp += 5;  // undefind + 5
total -= 3;  //12
total *= 2;  //24
total /4;  //6
console.log(total);

var message = "안녕";
message += "하세요"  // +연산이 산술연산이 아닌, 연결연산 동작
console.log(message)  //안녕하세요


//5. 비교 연산자
// ==, ===있을떄 기본적으로 사용한다고 생각해야 함
console.log(5 == "5"); //true (느슨한 비교)
onsole.log(5 === "5"); //false   (엄격한 비교)
console.log(false == 0);  //true (-> 컴퓨터 내부적으로 false 0 으로 기록 중)
console.log(false == 1);  //true (-> 컴퓨터 내부적으로 true  1 으로 기록 중)
console.log(undefined == null);  //true

console.log(5 != "5"); // !true => false
console.log(5 !== "5"); // ! false  => true


// 4. 삼향 연산자 => 조건식? 조건이 참 일떄 : 조건이 거짓일 떄

var age = 25;
var hasTicker = true;
console.log(age < 19  I I hasTicker); // true => 논리참(OR) : 둘중
