console.log('Hello!');

const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Ferdig';
  doneBtn.classList.add('done-btn');

  doneBtn.addEventListener('click', function () {
    li.classList.toggle('done');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Slett';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = '';
}
