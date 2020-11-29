// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log('Q1 ', result); // 'apple, banana, orange'
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log('Q2 ', result); // ["🍎", " 🥝", " 🍌", " 🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log('Q3 ', result); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log('Q4 ', result); // [3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(student => student.score === 90);
  console.log('Q5 ', result);
  /*
  {
    age: 30,
    enrolled: true,
    name: "C",
    score: 90
  }
  */
}

// Q6. make an array of enrolled students
{
  const result = students.filter(student => student.enrolled);
  console.log('Q6 ', result);
  /* 
  [{
    age: 29,
    enrolled: true,
    name: "A",
    score: 45
  }, {
    age: 30,
    enrolled: true,
    name: "C",
    score: 90
  }, {
    age: 18,
    enrolled: true,
    name: "E",
    score: 88
  }]
   */
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map(student => student.score);
  console.log('Q7 ', result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  // SOME() : 하나라도 일치하는 조건이 있다면 true
  // EVERY() : 모든 조건이 만족해야 true
  const result = students.some(student => student.score < 50);
  console.log('Q8 ', result); // true
}

// Q9. compute students' average score
{
  const totalScore = students.reduce((prev, current) => prev + current.score, 0);
  const result = totalScore / students.length;
  console.log('Q9 ', result); // 73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  console.log('Q10 ', result); // "45,80,90,66,88"
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log('Bonus ', result); // "45,66,80,88,90"
}

/* 배열 함수가 선언된 라이브러리를 확인하여 인자와 반환값, 설명을 확인하는 습관이 중요! */
/* 출처 : DreamCoding by Ellie */