const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];
function getCompletedTodo(todos) {
  // Start coding here
  //function pickcompleted(choose) {
  //  if (choose.completed === true) return choose;
  // }
  return todos.filter((choose) => {
    if (choose.completed === true) return choose;
  });
}

getCompletedTodo(todos);
console.log(getCompletedTodo(todos));
/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
