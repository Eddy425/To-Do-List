const todoList = [];
displayTasks();

function displayTasks(){
  let taskHTML = '';
  todoList.forEach(function(task, index)
  {const {name, date} = task;
    taskHTML += 
      `<div class="taskString js-taskName-${index}">${name}</div>
      <div class="taskString js-taskDate-${index}">${date}</div>
      <button onclick="markAsDone(${index})" class="js-done-btn-${index} done-btn">Done</button>
      <button onclick="todoList.splice(${index},1); displayTasks();" class="js-delete-btn delete-btn">Delete</button>
      `;}
  );
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

function markAsDone(index){
  const doneBtn = document.querySelector(`.js-done-btn-${index}`);
  const taskName = document.querySelector(`.js-taskName-${index}`);
  const taskDate = document.querySelector(`.js-taskDate-${index}`);

  if (doneBtn.innerHTML === 'Done') {
    doneBtn.innerHTML = 'Did it';
    doneBtn.classList.add('did-it');
    taskName.classList.add('strikeThrough');
    taskDate.classList.add('strikeThrough');
  } else {
    doneBtn.innerHTML = 'Done';
    doneBtn.classList.remove('did-it');
    taskName.classList.remove('strikeThrough');
    taskDate.classList.remove('strikeThrough');
  }
}