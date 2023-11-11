const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// clock.innerText =
function sayHello() {
  console.log('hi');
}

// 계속 무언가를 실행시켜주고 싶을 때 사용
// setInterval(sayHello, 2000);

//
// setTimeout(sayHello, 5000);

const date = new Date();
console.log(date);
