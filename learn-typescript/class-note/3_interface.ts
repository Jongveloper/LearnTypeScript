interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name: '세호',
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 1029,
};

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sumFn: SumFunction;
sumFn = function (c: number, d: number): number {
  return c + d;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; //오류
// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const captain: Developer = {
  language: 'ts',
  age: 300,
  name: '캡틴',
};
