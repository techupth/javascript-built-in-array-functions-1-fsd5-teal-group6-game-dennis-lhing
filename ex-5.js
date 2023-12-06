const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let sumScore = students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0);
  return sumScore / 4;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
