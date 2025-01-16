document.write("<h1>안녕</h1>");

//변수 선언법
var a = "car"; // 변수, 재선언 가능
var a = "let"; // 가능
a = 3; //가능

//hoisting : 재선언하는 것

let b = "apple"; // 재선언 불가
b = "car"; //가능
//let b = "car"; 불가능
b = 3; //되는데? 타입이 고정되어 있지 않다

const apple = "apple"; //상수
// const apple = "banana"; //불가능
// apple = "smth"; //에러
console.log(a);
console.log(b);
//js는 위에서 아래로 기동
