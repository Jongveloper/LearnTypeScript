// // 유니온 타입
// function logMessage(value: string | number) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

let outdoor: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입을 사용했을 때 공통된 속성만 접근할 수 있음
// function askSomeone(someone: Developer | Person) {
//   someone.name;
// }

// 인터섹션 타입
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
