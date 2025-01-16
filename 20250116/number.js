const n1 = 24;
const n2 = 23452;

//변수/함수와 관련된 함수명
//숫자 시작x, 특수기호 x 언더바 제외, 띄어쓰기 x

//function
function f(a, b) {
  console.log(a * b);
}
//변수식 선언
const fn2 = () => {
  console.log(3 + 4);
};
fn2();

//그냥도 됨
fn3 = () => {
  console.log(3 * 4);
};
fn3();
//변수에 함수 저장 가능
const v = f;
v(3, 4);
document.write("<button id='btn'>버튼</button>");
