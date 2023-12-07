const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];
//console.log(todos[0].topic);
function getTodoTopics(todos) {
  let sum = (todos) => todos.topic;
  return todos.map(sum);
}

const result = getTodoTopics(todos);
console.log(result);
/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
