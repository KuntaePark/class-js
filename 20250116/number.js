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

const btn = document.getElementById("btn");

btn.innerText = "새로운 버튼";

let fs = 10;
newName = () => {
  const name = "더 새로운 버튼";
  btn.innerText = name;
  btn.style.color = "tomato";
  fs += 10;
  btn.style.fontSize = fs + "px";
  btn.style.backgroundColor = "aliceblue";
  btn.style.borderRadius = "10px";
  btn.style.fontWeight = "bold";
};

// newName();
btn.onclick = newName;
