// JS 문자열 선언
// const str = 'hello';

// TS 문자열 선언
const str: string = 'hello';
// TS 숫자
const num: number = 10;
// TS 배열
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
const items: number[] = [1, 2, 3];

// TS 튜플 (배열의 각각 인덱스마다 타입을 정함)
const address: [string, number] = ['gangnam', 10];

// TS 객체
const obj: object = {};

// const person: object = {
//   name: 'capt',
//   age: 100,
// };

const person: { name: string; age: number } = {
  name: 'capt',
  age: 10,
};

// TS 진위값
const show: boolean = true;
