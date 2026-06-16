const todoList = [];
displayTasks();

function displayTasks(){
  let taskHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const task = todoList[i];
    const name = task.name;
    const date = task.date;
    
    taskHTML += 
      `
      <div class="taskString">${name}</div>
      <div class="taskString">${date}</div>
      <button onclick="markAsDone(${i})" class="js-done-btn done-btn">Done</button>
      <button onclick="todoList.splice(${i},1);
      displayTasks();" class="js-delete-btn delete-btn">Delete</button>
      `;

  }
  document.querySelector('.js-taskList').innerHTML = taskHTML;
}

function addTask(){
  const taskInput = document.querySelector('.js-taskInput');
  const dateInput = document.querySelector('.js-dateInput');

  const task = {
    name: taskInput.value,
    date: dateInput.value
  };

  todoList.push(task);
  taskInput.value = '';
  console.log(todoList);
  displayTasks();
}

function markAsDone(){
  const doneBtn = document.querySelector('.js-done-btn');
  if (doneBtn.innerHTML === 'Done') {
    doneBtn.innerHTML = 'Did it';
    document.querySelector('.js-done-btn').classList.add('did-it');
    document.querySelector('.taskString').classList.add('strikeThrough');
  } else if (doneBtn.innerHTML === 'Did it') {
    doneBtn.innerHTML = 'Done';
    document.querySelector('.js-done-btn').classList.remove('did-it');
    document.querySelector('.taskString').classList.remove('strikeThrough');
  }
}