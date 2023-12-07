const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let sum = students.reduce((a, c) => a + c.score, 0);
  return sum / 4;
}

const result = getAverageStudentScore(students);
console.log(result);
