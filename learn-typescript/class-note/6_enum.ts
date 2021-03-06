// 기본값은 0
// 하나씩 추가할 때마다 1씩 증가
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

const myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion(Answer.Yes);
