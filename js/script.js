console.log("test");

const now = new Date();


console.log(now);

//년도값 반환
console.log(now.getFullYear());

//월 반환(순서값, 1월=0)
// console.log(now.getMonth()); 월이 아니라 순서값이 나옴 9월 -> 8

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(month[now.getMonth()]); //설정하면 그 순서값으로 나옴

//일 반환
console.log(now.getDate());

//요일(순서값, 일=0)
console.log(now.getDay());

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[now.getDay()]);

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getSeconds());