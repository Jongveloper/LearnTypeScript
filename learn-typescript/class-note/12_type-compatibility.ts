interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;
// developer = person;
// person = developer;

// 함수
let add = function (a: number) {
  //...
};

let sum = function (a: number, b: number) {
  //...
};
// add = sum; // 오류
sum = add; // 오류가 나지 않음

// 제네릭
interface Empty<T> {
  //...
}
let empty1: Empty<string>;
let empty2: Empty<number>;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
